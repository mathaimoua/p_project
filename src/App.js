import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, runCustomQuery } from './features/sqlSlice'
import ProductTable from './components/ProductTable'
import DataControls from './components/DataControls'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'

// The default SQL query that runs on page load — selects everything from the products table
const DEFAULT_SQL = 'SELECT * FROM products'

function App() {
  // dispatch lets us trigger Redux actions (like fetching data)
  const dispatch = useDispatch()

  // Pull the current data, loading status, and any error out of the Redux store
  const { results: items, status, error } = useSelector((state) => state.sql)

  // The SQL text currently in the editor box
  const [sql, setSql] = useState(DEFAULT_SQL)
  
  // Tracks the current state of the view controls (visible columns, sort, search)
  // Updated whenever the user changes anything in DataControls
  const [viewConfig, setViewConfig] = useState({ visibleColumns: [], sortBy: '', sortDir: 'asc', search: '' })
  const [sqlHistory, setsqlHistory] = useState(["SELECT * FROM products", "SELECT * FROM customers", "SELECT * FROM orders"])
  // On first load, automatically run the default query to populate the table
  useEffect(() => {
  dispatch(fetchProducts())
  }, [dispatch])

  // Called when the user clicks Run or presses Cmd/Ctrl+Enter
  // If the SQL matches the default query, use the simpler fetchProducts action
  // Otherwise send it to Supabase as a custom SQL query via the run_sql function
  function handleRun() {
    const trimmed = sql.trim()
    if (!trimmed) return
    if (trimmed === DEFAULT_SQL) {
      dispatch(fetchProducts()).then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          if (!sqlHistory.includes(trimmed)) {
            setsqlHistory([...sqlHistory, trimmed])
          }
        }
      })
    } else {
      dispatch(runCustomQuery(trimmed)).then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          if (!sqlHistory.includes(trimmed)) {
            setsqlHistory([...sqlHistory, trimmed])
          }
        }
      })
    }
  }

  // Allows the user to submit the query with Cmd+Enter (Mac) or Ctrl+Enter (Windows)
  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleRun()
  }

  function sqlChange(newSQL){
    setSql(newSQL)
  }

  // Generates a timestamp string used in export filenames, e.g. "2026-04-06T14-30-00"
  // Colons and dots are replaced with dashes so the filename is valid on all operating systems
  function getTimestamp() {
    return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  }

  // Part of the export process — prepares the data to be exported
  // Respects both the active search/sort (via transformedData) and which columns are visible
  // Returns an array of plain objects with only the visible columns included
  function getExportRows() {
    const { visibleColumns } = viewConfig
    const allColumns = transformedData.length > 0 ? Object.keys(transformedData[0]) : []

    // If the user has unchecked some columns, only include the ones still checked
    const cols = visibleColumns && visibleColumns.length > 0
      ? allColumns.filter((c) => visibleColumns.includes(c))
      : allColumns

    // Rebuild each row using only the selected columns
    return transformedData.map((row) =>
      Object.fromEntries(cols.map((c) => [c, row[c]]))
    )
  }

  // Exports the current view as a CSV file and triggers a download in the browser
  // Uses papaparse to convert the array of objects into a CSV string
  // Filename includes a timestamp so exports don't overwrite each other
  function exportCSV() {
    const csv = Papa.unparse(getExportRows())
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `products_${getTimestamp()}.csv`
    a.click()
    URL.revokeObjectURL(url) // Clean up the temporary URL after the download starts
  }

  // Exports the current view as an Excel (.xlsx) file and triggers a download
  // Uses the xlsx library to build a workbook with a single sheet called "Data"
  function exportXLSX() {
    const ws = XLSX.utils.json_to_sheet(getExportRows())
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Data')
    XLSX.writeFile(wb, `products_${getTimestamp()}.xlsx`)
  }

  // Derive the list of column names from the first row of raw data returned by the query
  // This updates automatically whenever a new query is run
  const columns = (items ?? []).length > 0 ? Object.keys(items[0]) : []
  // Apply the view controls (search filter and sort) to the raw data from Redux
  // This runs whenever the data or the view config changes, but avoids unnecessary recalculation
  const transformedData = useMemo(() => {
    let rows = [...(items ?? [])]

    // If the user has typed in the search box, keep only rows where any cell contains the search term
    if (viewConfig.search) {
      const term = viewConfig.search.toLowerCase()
      rows = rows.filter((row) =>
        Object.values(row).some((val) => String(val ?? '').toLowerCase().includes(term))
      )
    }

    // If the user has selected a column to sort by, sort the rows accordingly
    // Uses locale-aware comparison so numbers sort numerically, not alphabetically
    if (viewConfig.sortBy) {
      rows.sort((a, b) => {
        const aVal = a[viewConfig.sortBy] ?? ''
        const bVal = b[viewConfig.sortBy] ?? ''
        const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true })
        return viewConfig.sortDir === 'asc' ? cmp : -cmp
      })
    }

    return rows
  }, [items, viewConfig])
  return (
    <div style={{ padding: '2rem' }}>
      <h1>P_Project Supply Dashboard</h1>
      <select onChange={(e) => sqlChange(e.target.value)}>
        <option value="">-- History --</option>
        {sqlHistory.map((option) => (
          <option key={option} value={option}>{option}</option>
          ))}
      </select>

      <div style={{ marginBottom: '1rem' }}>
        {/* SQL editor — the user types their query here */}
        <textarea
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={4}
          style={{
            width: '100%',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            padding: '0.5rem',
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Action buttons — Run executes the query, Export buttons download the current view */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button
            onClick={handleRun}
            disabled={status === 'loading'}
            style={{ padding: '0.4rem 1rem', cursor: 'pointer' }}
          >
            {status === 'loading' ? 'Running...' : 'Run (⌘↵)'}
          </button>
          <button
            onClick={exportCSV}
            disabled={transformedData.length === 0} // Disabled until there is data to export
            style={{ padding: '0.4rem 1rem', cursor: 'pointer' }}
          >
            Export CSV
          </button>
          <button
            onClick={exportXLSX}
            disabled={transformedData.length === 0} // Disabled until there is data to export
            style={{ padding: '0.4rem 1rem', cursor: 'pointer' }}
          >
            Export XLSX
          </button>
        </div>
      </div>

      {/* Show an error message if the query failed */}
      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Once data is loaded, show the view controls and the table */}
      {status === 'succeeded' && (
        <>
          {/* DataControls renders the search box, sort dropdown, and column checkboxes
              It calls setViewConfig whenever anything changes, which triggers transformedData to recalculate */}
          <DataControls columns={columns} onChange={setViewConfig} />

          {/* ProductTable renders the data — it receives the transformed (filtered/sorted) rows
              and the list of visible columns so it knows which columns to display */}
          <ProductTable data={transformedData} visibleColumns={viewConfig.visibleColumns} />
        </>
      )}
    </div>
  )
}

export default App

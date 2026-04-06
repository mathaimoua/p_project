import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, runCustomQuery } from './features/productsSlice'
import ProductTable from './components/ProductTable'
import DataControls from './components/DataControls'

const DEFAULT_SQL = 'SELECT * FROM products'

function App() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)
  const [sql, setSql] = useState(DEFAULT_SQL)
  const [viewConfig, setViewConfig] = useState({ visibleColumns: [], sortBy: '', sortDir: 'asc', search: '' })

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  function handleRun() {
    const trimmed = sql.trim()
    if (!trimmed) return
    if (trimmed === DEFAULT_SQL) {
      dispatch(fetchProducts())
    } else {
      dispatch(runCustomQuery(trimmed))
    }
  }

  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleRun()
  }

  const columns = items.length > 0 ? Object.keys(items[0]) : []

  const transformedData = useMemo(() => {
    let rows = [...items]

    if (viewConfig.search) {
      const term = viewConfig.search.toLowerCase()
      rows = rows.filter((row) =>
        Object.values(row).some((val) => String(val ?? '').toLowerCase().includes(term))
      )
    }

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

      <div style={{ marginBottom: '1rem' }}>
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
        <button
          onClick={handleRun}
          disabled={status === 'loading'}
          style={{ marginTop: '0.5rem', padding: '0.4rem 1rem', cursor: 'pointer' }}
        >
          {status === 'loading' ? 'Running...' : 'Run (⌘↵)'}
        </button>
      </div>

      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {status === 'succeeded' && (
        <>
          <DataControls columns={columns} onChange={setViewConfig} />
          <ProductTable data={transformedData} visibleColumns={viewConfig.visibleColumns} />
        </>
      )}
    </div>
  )
}

export default App

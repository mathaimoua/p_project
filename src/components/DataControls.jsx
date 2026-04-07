import { useState, useEffect } from 'react'

// DataControls renders the search box, sort controls, and column checkboxes
// It receives the list of column names from App and calls onChange whenever any setting changes
// App uses those changes to update viewConfig, which feeds into transformedData and ProductTable
function DataControls({ columns, onChange }) {
  // Which columns are currently checked (visible) — starts with all of them
  const [visibleColumns, setVisibleColumns] = useState(columns)

  // Which column is selected in the sort dropdown — empty means no sort applied
  const [sortBy, setSortBy] = useState('')

  // Sort direction — either 'asc' (A→Z, low→high) or 'desc' (Z→A, high→low)
  const [sortDir, setSortDir] = useState('asc')

  // The current text in the search box
  const [search, setSearch] = useState('')

  // When a new query is run, the columns prop will change
  // This resets all controls back to their defaults so stale settings don't carry over
  useEffect(() => {
    setVisibleColumns(columns)
    setSortBy('')
    setSearch('')
  }, [columns.join(',')]) // joins to a string so the effect only fires when the actual column list changes

  // Whenever any control changes, notify App with the latest settings
  // App uses this to update viewConfig, which recalculates transformedData
  useEffect(() => {
    onChange({ visibleColumns, sortBy, sortDir, search })
  }, [visibleColumns, sortBy, sortDir, search])

  // Adds or removes a single column from the visible list when its checkbox is toggled
  function toggleColumn(col) {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    )
  }

  // Selects all columns (when "All" is checked) or deselects all (when unchecked)
  function toggleAll(checked) {
    setVisibleColumns(checked ? columns : [])
  }

  // Used to control the "All" checkbox appearance
  const allChecked = visibleColumns.length === columns.length
  const someChecked = visibleColumns.length > 0 && !allChecked // true when partially selected

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', backgroundColor: '#fafafa' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Search box — filters rows in App via the search value passed to onChange */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', color: '#555' }}>Search</label>
          <input
            type="text"
            placeholder="Filter any column..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.35rem 0.5rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.85rem', minWidth: '180px' }}
          />
        </div>

        {/* Sort controls — a dropdown to pick the column and a button to toggle direction */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', color: '#555' }}>Sort by</label>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '0.35rem 0.5rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.85rem' }}
            >
              <option value="">— none —</option>
              {/* Populate the dropdown with one option per column */}
              {columns.map((col) => (
                <option key={col} value={col}>{col.replace(/_/g, ' ')}</option>
              ))}
            </select>

            {/* Clicking this toggles between ascending and descending — disabled if no sort column is selected */}
            <button
              onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
              disabled={!sortBy}
              title="Toggle sort direction"
              style={{
                padding: '0.35rem 0.6rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: sortBy ? 'pointer' : 'default',
                fontSize: '0.85rem',
                backgroundColor: sortBy ? '#fff' : '#f0f0f0',
                color: sortBy ? '#000' : '#aaa',
              }}
            >
              {sortDir === 'asc' ? '↑ Asc' : '↓ Desc'}
            </button>
          </div>
        </div>

        {/* Column visibility checkboxes — one per column returned by the query */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', color: '#555' }}>Columns</label>

            {/* "All" master checkbox — checked when all are visible, indeterminate when some are hidden */}
            <label style={{ fontSize: '0.8rem', color: '#555', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <input
                type="checkbox"
                checked={allChecked}
                ref={(el) => { if (el) el.indeterminate = someChecked }} // indeterminate = dash/partial state
                onChange={(e) => toggleAll(e.target.checked)}
              />
              All
            </label>
          </div>

          {/* Individual column checkboxes — checking/unchecking updates visibleColumns,
              which is passed back to App and used by both ProductTable and the export functions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1rem' }}>
            {columns.map((col) => (
              <label key={col} style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}>
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(col)}
                  onChange={() => toggleColumn(col)}
                />
                {col.replace(/_/g, ' ')} {/* Underscores replaced with spaces for readability */}
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DataControls

import { useState, useEffect } from 'react'

function DataControls({ columns, onChange }) {
  const [visibleColumns, setVisibleColumns] = useState(columns)
  const [sortBy, setSortBy] = useState('')
  const [sortDir, setSortDir] = useState('asc')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setVisibleColumns(columns)
    setSortBy('')
    setSearch('')
  }, [columns.join(',')])

  useEffect(() => {
    onChange({ visibleColumns, sortBy, sortDir, search })
  }, [visibleColumns, sortBy, sortDir, search])

  function toggleColumn(col) {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    )
  }

  function toggleAll(checked) {
    setVisibleColumns(checked ? columns : [])
  }

  const allChecked = visibleColumns.length === columns.length
  const someChecked = visibleColumns.length > 0 && !allChecked

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', backgroundColor: '#fafafa' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Search */}
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

        {/* Sort */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', color: '#555' }}>Sort by</label>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '0.35rem 0.5rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.85rem' }}
            >
              <option value="">— none —</option>
              {columns.map((col) => (
                <option key={col} value={col}>{col.replace(/_/g, ' ')}</option>
              ))}
            </select>
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

        {/* Columns */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', color: '#555' }}>Columns</label>
            <label style={{ fontSize: '0.8rem', color: '#555', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <input
                type="checkbox"
                checked={allChecked}
                ref={(el) => { if (el) el.indeterminate = someChecked }}
                onChange={(e) => toggleAll(e.target.checked)}
              />
              All
            </label>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1rem' }}>
            {columns.map((col) => (
              <label key={col} style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}>
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(col)}
                  onChange={() => toggleColumn(col)}
                />
                {col.replace(/_/g, ' ')}
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DataControls

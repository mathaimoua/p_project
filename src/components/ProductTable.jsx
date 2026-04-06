function ProductTable({ data, visibleColumns }) {
  if (data.length === 0) return <p>No data to display.</p>

  const allColumns = Object.keys(data[0])
  const columns = visibleColumns && visibleColumns.length > 0
    ? allColumns.filter((c) => visibleColumns.includes(c))
    : allColumns

  return (
    <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 320px)', border: '1px solid #ccc', borderRadius: '4px' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                style={{
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                }}
              >
                {col.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td
                  key={col}
                  style={{
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {typeof row[col] === 'boolean' ? (row[col] ? 'Yes' : 'No') : row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
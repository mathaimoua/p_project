// ProductTable renders the query results as a scrollable table
// It receives the already-filtered and sorted data from App (transformedData)
// and the list of columns the user has checked in DataControls (visibleColumns)
function ProductTable({ data, visibleColumns }) {
  // If there are no rows to show, display a simple message instead of an empty table
  if (data.length === 0) return <p>No data to display.</p>

  // Get every column name from the first row of data
  const allColumns = Object.keys(data[0])

  // If the user has hidden some columns, filter down to only the visible ones
  // If nothing is checked (empty array), fall back to showing all columns
  const columns = visibleColumns && visibleColumns.length > 0
    ? allColumns.filter((c) => visibleColumns.includes(c))
    : allColumns

  return (
    // Scrollable container — table can scroll both horizontally and vertically
    // maxHeight keeps it within the visible window so the page itself doesn't scroll
    <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 320px)', border: '1px solid #ccc', borderRadius: '4px' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            {/* Render one header cell per visible column
                position: sticky keeps the header row locked to the top while scrolling down */}
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
                  zIndex: 1, // Keeps the header above the scrolling rows
                }}
              >
                {/* Display the column name with underscores swapped for spaces and all caps */}
                {col.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render one row per data record */}
          {data.map((row, i) => (
            <tr key={i}>
              {/* Render one cell per visible column in this row */}
              {columns.map((col) => (
                <td
                  key={col}
                  style={{
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {/* Boolean values (true/false) are displayed as Yes/No for readability
                      All other values are rendered as-is */}
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

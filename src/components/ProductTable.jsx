import React from 'react'

const COLUMNS = [
  'sku', 'product_name', 'category', 'subcategory',
  'unit_cost', 'sale_price', 'quantity_on_hand',
  'reorder_threshold', 'unit_of_measure', 'last_restocked_date', 'is_active'
]

function ProductTable({ data }) {
  if (data.length === 0) return <p>No data to display.</p>

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col}
                style={{
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'left',
                  whiteSpace: 'nowrap'
                }}
              >
                {col.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {COLUMNS.map((col) => (
                <td
                  key={col}
                  style={{
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {col === 'is_active' ? (row[col] ? 'Yes' : 'No') : row[col]}
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
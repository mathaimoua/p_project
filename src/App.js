import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './features/productsSlice'
import ProductTable from './components/ProductTable'

function App() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h1>P_Project Supply Dashboard</h1>
      <ProductTable data={items} />
    </div>
  )
}

export default App
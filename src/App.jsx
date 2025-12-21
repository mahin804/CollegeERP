import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homer from './components/Homer'
import DashBoard from './components/DashBoard'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homer />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}

export default App

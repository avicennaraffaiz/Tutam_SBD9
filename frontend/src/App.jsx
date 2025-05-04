import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import AddNote from './pages/AddNote'

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </Container>
  )
}

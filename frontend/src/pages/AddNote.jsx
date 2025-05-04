import { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function AddNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/notes', { title, content })
    navigate('/')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} required multiline rows={4} />
      <Button type="submit" variant="contained">Add Note</Button>
    </Box>
  )
}

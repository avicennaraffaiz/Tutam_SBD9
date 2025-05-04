import { useEffect, useState } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Home() {
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    const res = await axios.get('/api/notes')
    setNotes(res.data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`/api/notes/${id}`)
    fetchNotes()
  }

  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note._id}
                  secondaryAction={
                    <IconButton edge="end" onClick={() => handleDelete(note._id)}>
                      <DeleteIcon />
                    </IconButton>
                  }>
          <ListItemText primary={note.title} secondary={note.content} />
        </ListItem>
      ))}
    </List>
  )
}

const express = require('express')

const app = express()

//Short:
app.use('/api/users', (req, res) => {
  res.json([{ name: 'Luciana', role: 'student' }])
})

app.use('/api/cards', (req, res) => {
  res.json([{ title: 'First Card' }])
})

/* Long:
app.use((req, res, next) => {
    req.url === '/api/cards' 
    ? res.end('[{"title": "First Card"}]')
    : next()
}) */

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})

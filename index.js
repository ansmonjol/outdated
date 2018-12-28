const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Fix CORS allow access origin headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Serve static public folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Simple info message
app.get('/', (req, res) => res.send('Outdated server running!'))

// Log once app running
app.listen(port, () => console.log(`Outdated app listening on port ${port}!`))

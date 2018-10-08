const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.use(express.static(__dirname + '/public'))
app.listen(PORT, () => console.log(`listening on ${PORT}`))

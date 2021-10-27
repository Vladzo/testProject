const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('All works!')
})

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.get('/hello', (req, res) => {
    res.send('world');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

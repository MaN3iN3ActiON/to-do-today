const express = require('express')

const app = express()
const port = 5000


app.get('/api/tasks', (req,res) => {
	res.send(`Hello Task-${req.path || 'doing'}!`)
})

app.get('/api/ids', (req,res) => {
	res.send(`Hello Task-${req.path || 'doing'}!`)
})

app.get('/api/allIds', (req,res) => {
	res.send(`Hello Task-${req.path || 'doing'}!`)
})

app.get('/:filter?', (req,res) => {
	res.send(`Hello Task-${req.params.filter || 'doing'}!`)
})

app.listen(port, () => console.log(`example app listening on port ${port}`))
const express = require('express')

const app = express()
const port = 5000

app.get('/:filter?', (req,res) => {
	res.send(`Hello Task-${req.params.filter || 'doing'}!`)
})

app.listen(port, () => console.log(`example app listening on port ${port}`))
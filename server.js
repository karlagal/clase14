const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
res.send("contestando con el metodo get")
})

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})

app.post('/', function (req, res) {
    res.send("contestando con el metodo post")
    })

    app.put('/', function (req, res) {
        res.send("contestando con el metodo put")
        })

        app.delete('/', function (req, res) {
            res.send("contestando con el metodo delete")
            })


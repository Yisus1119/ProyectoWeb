const express = require('express')
const app = express()
const port = 3004
const path = require("path");
const expressHbs = require("express-handlebars");



app.get('/', (req, res) => {
    res.send('Corriendo express!')
})




app.listen(port, () => {
    console.log(`Corriendo en el servidor: ${port}`)
})


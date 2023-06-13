const express = require('express')
const app = express()
const stinkControllers = require('./controllers/stinks')


//Config
const PORT = 9000

//Middleware
app.use('/stinks', stinkControllers)


//Home Route
app.get('/', (req, res) => {
    res.json({
        status: 200,
        body: "what it's actually working"
    })
})


//Serverstart
app.listen(PORT, () => {
    console.log(`really sdtupid app started at port ${PORT}`)
})
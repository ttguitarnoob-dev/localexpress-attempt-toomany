const express = require('express')
const app = express()


//Config
const PORT = 9000


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
const express = require('express')
const router = express.Router()



//Middleware
router.use(express.urlencoded({extended: false}))

//Routes

//Index
router.get('/', (req, res) => {
    res.json({
        message: "Index idiot is working"
    })
})

//Show
router.get('/:id', (req, res) =>  {
    res.json({
        message: "showing one thingy"
    })
})

//Create
router.post('/', (req, res) => {
    res.send('Hello from the create route')
    console.log("post request happened")
    console.log('rekt body', req.body)
})



module.exports = router
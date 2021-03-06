const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv').config()


//Server config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//Routes list
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

//Server starup
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

const express = require('express')
const app = express()
const path = require('path')
const data = require('./Data')

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res)=>{
    res.json({data})
    console.log(JSON.stringify(data))    
})
app.listen(process.env.PORT || 3000, ()=>console.log('app running on port 3000')
)


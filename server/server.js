const express = require('express')
const app = express()
app.listen(8000,() =>{
  console.info('node server start')
})
app.get('/', (req, res)=>{
   res.send('<h1>suhdsdsd</h1>')
})

app.get('/data', (req, res)=>{
  res.json({name:"shuliqi",age:12,lasr:"shu"})
})

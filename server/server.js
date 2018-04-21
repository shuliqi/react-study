const express = require('express')
// 链接mongoose，并且使用react这个集合
const mongoose = require('mongoose')
const DB_URL =  'mongodb://127.0.0.1:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',() => {
    console.info("数据库已成功链接")
})
//类似mysql的表，mongo里又文档，字段的概念
const User =  mongoose.model('user', new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
// 新增数据
User.create({
  user:'大妈',
  age:12
},(err,doc) => {
   if(!err){
     console.log(doc)
   }else{
     console.log(err)
   }
})
// 新建app
const app = express()
app.listen(8000,() =>{
  console.info('node.js开始服务')
})
app.get('/', (req, res)=>{
   res.send('<h1>suhdsdsd</h1>')
})

// 更新数据
const Update = (db,json = {},res) =>{
  db.update(json,{'$set':{age:100}},(err, doc) =>{
    if(!err){
     res.json({massage:"更新成功"})
    }else{
      res.json({massage:"更新失败"})
    }
  })
}
// 删除数据
const Remove = (db,json = {},res) =>{
  db.remove({age:12}, (err,doc) =>{
    if(!err){
     res.json({message:"已经成功删除"})
    }else{
      res.json({message:"删除失败"})
    }
  })
}
//查询数据
const Find = (db,json = {},res) =>{
  db.find(json,(err,doc) =>{
    if(!err){
      res.json(doc)
    }else{
     console.log(err)
    }
  })
}

app.get('/data', (req, res)=>{
  Find(User,{},res)
})

app.get('/delet',(req,res) =>{
  Remove(User,{age:12},res)
})

app.get('/update',(req,res)=>{
  Update(User,{name:'是多少'},res)
})

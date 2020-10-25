const express = require('express')
const router = express.Router()
const {db} = require('../db/index')
const {cryptoPWD} = require('../utils/encrypt')
const {generateToken, validateToken} = require('../utils/token')
const multer = require('multer')
const fs = require('fs')
const host_address = 'http://localhost:3000/upload/'
var upload = multer({
  dest: './public/uploads'
})
// 使用中間件
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// 增加一個用戶
router.post('/user/addUser', async (req, res) =>{
  // console.log(req.body)
  let {username, depart} = req.body
  let data = await validateToken(req.headers.authorization)
  if (data.name === 'root') {
    let state = await db.user.findUserExist(username)
    if(state === 'ok'){
      res.send('exist')
    }else {
      let userState = await db.user.addUser(username,cryptoPWD('msic@123'),depart,generateToken(username))
      if(userState) {
        res.send('ok')
      }else {
        res.send('')
      }
    }
  }else {
    res.send('')
  }
})

// 用户登陆
router.post('/user/login', async (req, res) =>{
  let {username, password} = req.body
  let newToken = generateToken(username)
  let data = await db.user.findUser(username, cryptoPWD(password))
  if (data){
    let newdata = await db.user.userUpdate(username,newToken)
    if (newdata === 'ok') {
      return res.send(Object.assign({},data,{token: newToken}))

    } else if (newdata === 'no_ok') {
      res.send('no_ok')
    }else {
      res.send('error')
    }
  }else {
    res.send(data)
  }

})



// 處理issue上傳
router.post('/issue/addIssue',(req, res) => {
  let {username,line,machineNum,barcode,description,user,stack,happenDate,imgUrl,imgUrlRes} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
            db.issue.addIssue(username, line,machineNum,barcode,description,user,stack,happenDate,host_address+imgUrl,host_address +imgUrlRes)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢issue信息
router.get('/issue/issueInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.issue.findIssue(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})


// 删除一个issue
router.post('/issue/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.issue.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})



// 處理needle上傳
router.post('/needle/needleHeight',(req, res) => {
  let {happenDate,machineNum,num,partNum,username,position,height,reverseHeight,mesureHeight,imgUrl,isOK,user} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
            db.toolHeight.addToolHeiht(happenDate,machineNum,num,partNum,position,height,reverseHeight,mesureHeight,host_address+imgUrl,isOK,user,username)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢needle信息
router.get('/needle/needleInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.toolHeight.findToolHeigth(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})


// 删除一个needle
router.post('/needle/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.toolHeight.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})


// 處理toolRecord上傳
router.post('/toolRecord/addToolRecord',(req, res) => {
  let {happenDate,machineNum,num,partNum,clear,confirm,replaceNil,replaceCap,description,result,upImage,downImage,user,username} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
            db.toolRecord.addToolRecord(happenDate,machineNum,num,partNum,clear,confirm,replaceNil,replaceCap,description,result,host_address+ upImage,host_address+ downImage,user,username)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢toolRecord信息
router.get('/toolRecord/toolRecordInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.toolRecord.findToolRecord(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})


// 删除一个toolRecord
router.post('/toolRecord/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.toolRecord.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})


// happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,createUser
// 處理onlineError上傳
router.post('/onlineError/addOnlineError',(req, res) => {
  let {happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,username} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
            db.onlineError.addOnlineError(happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,username)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢toolRecord信息
router.get('/onlineError/onlineErrorInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.onlineError.findOnlineError(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})

// 删除一个toolRecord
router.post('/onlineError/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.onlineError.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})




// happenDate,name,partNum,num,vendor,period,preTime,actualTime,department,user,createUser
// 處理apply
router.post('/apply/addApply',(req, res) => {
  let {happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,createUser} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
            db.apply.addApply(happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,createUser)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢apply
router.get('/apply/applyInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.apply.findApply(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})

// 删除一个apply
router.post('/apply/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.apply.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})



// happenDate,machineNum,station,line,phenomenon,position,issueNum,percent,createUser
// 处理every
router.post('/every/addEvery',(req, res) => {
  let {happenDate,machineNum,station,line,phenomenon,position,issueNum,percent,createUser} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
             db.every.addEvery(happenDate,machineNum,station,line,phenomenon,position,issueNum,percent,createUser)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢apply
router.get('/every/everyInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.every.findEvery(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})

// 删除一个apply
router.post('/every/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.every.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})


// happenDay,part,during,line,series,machine,orientation,question1,question2,answer,dealUser,lostTime,errorStatus,cause,owner,process,prevent
// 处理every
router.post('/total/addTotal',(req, res) => {
  let {happenDay,part,during,line,series,machine,orientation,question1,question2,answer,dealUser,lostTime,errorStatus,cause,owner,process,prevent,createUser} = req.body
  validateToken(req.headers.authorization).then(data => {
      if (data.name){
        db.user.findUserExist(username).then(state => {
          if (state === 'ok') {
             db.total.addTotal(happenDay,part,during,line,series,machine,orientation,question1,question2,answer,dealUser,lostTime,errorStatus,cause,owner,process,prevent,createUser)
            .then((data) => {
              if (data === 'ok'){
                res.send(data)
              } else {
                res.send('error')
              }
            })
          }else {
            res.send('no_exist')
          }
        })
      } else {
        res.send('')
      }

  })
  

})

// 查詢total
router.get('/total/totalInfo',(req, res) => {
  let {skip,limit,dateArray} = req.query
 
  let needDateArray = JSON.parse(dateArray)
  // console.log(req.query)
  db.total.findTotal(skip, limit,needDateArray)
  .then((data) => {
    res.send(data)
  })
})

// 删除一个apply
router.post('/total/deleteInfo',(req, res) => {
  let {_id,username} = req.body
  // console.log(_id)
  db.total.deleteItem(_id, username).then(data => {
    res.send(data)
  })
})


// 处理文件上传
router.post('/image/upload',upload.single('image') ,(req,res) => {
  let now_date = Date.now()
  fs.rename(req.file.path, "public/upload/" + req.file.filename+ now_date+'.png', function(err) {
    if (err) {
       res.send({
         state: 'error'
       })
        throw err;
    }else {
      res.send({
        state: 'ok',
        url: req.file.filename+ now_date+'.png'
      })
    }
})
})




// 所有用户信息
router.get('/user/info',  async (req, res) =>{
  let data = await db.user.getAllUserInfo()
  res.send(data)
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

// router.all('*', (req, res) => {
//   res.send("對不起你")
// })

module.exports = router
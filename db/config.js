
const config = require('../config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 地址
const DB_URL =`mongodb://${config.db_host}:${config.db_port}/`
// 表名
const MODEL_ISSUE = 'issue'
const MODEL_TOOL_HEIGHT = 'toolHeight'
const MODEL_TOOL_RECORD = 'toolRecord'
const MODEL_ONLINE_ERROR = 'onlineError'
const MODEL_APPLY = 'apply'
const MODEL_EVERY = 'every'
const MODEL_TOTAL = 'total'
const MODEL_USER = 'user'

// 用户配置表
const USER_SCHEMA = mongoose.model('User', new Schema ({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    default: ''
  },
  token: {
    type: String,
    default: ''
  },
  depart: {
    type: String,
    default: 'Te'
  },
  auth: {
    type: String,
    default: 'user'
  },
  createTime: {
    type: Date,
    default: Date.now
  },
})) 

// 異常表
const ISSUE_SCHEMA = mongoose.model('Issue', new Schema ({
  username: {
    type: String,
    default: 'user'
  },
  line:{
    type: String,
    default: '無'
  },
  machineNum: {
    type: String,
    default: '無'
  },
  barcode: {
    type: String,
    default: '無'
  },
  description: {
    type: String,
    default: 'Te'
  },
  user: {
    type: String,
    default: '無'
  },
  stack: {
    type: String,
    default: ''
  },
  happenDate: {
    type: Date,
    default: Date.now()
  },
  imgUrl: {
    type: String,
    default: ''
  },
  imgUrlRes: {
    type: String,
    default: ''
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
})) 
// happenDate,machineNum,num,partNum,position,height,reverseHeight,mesureHeight,imgUrl,isOK,user,createUse
// 探针高度表
const TOOL_HEIGHT_SCHEMA = mongoose.model('ToolHeight', new Schema ({
  happenDate: {
    type: Date,
    default: Date.now
  },
  machineNum: {
    type: String,
    default: ''
  },
  num: {
    type: String,
    default: ''
  },
  partNum: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''   
  },
  height: {
    type: Number,
    default: 0   
  },
  reverseHeight: {
    type: Number,
    default: 0     
  },
  mesureHeight: {
    type: Number,
    default: 0     
  },
  imgUrl: {
    type: String,
    default: ''
  },
  isOK: {
    type: String,
    default: ''
  },
  user: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
}))


// happenDate,machineNum,num,partNum,clear,confirm,replaceNil,replaceCap,description,result,upImage,downImage,user
// 保养记录
const TOOL_RECORD_SCHEMA = mongoose.model('ToolRecord', new Schema ({
  happenDate: {
    type: Date,
    default: Date.now
  },
  machineNum: {
    type: String,
    default: ''
  },
  num: {
    type: String,
    default: ''
  },
  partNum: {
    type: String,
    default: ''
  },
  clear: {
    type: String,
    default: ''   
  },
  confirm: {
    type: String,
    default: ''   
  },
  replaceNil: {
    type: String,
    default: ''   
  },
  replaceCap: {
    type: String,
    default: ''   
  },
  description: {
    type: String,
    default: ''   
  },
  result: {
    type: String,
    default: ''
  },
  upImage: {
    type: String,
    default: ''
  },
  downImage: {
    type: String,
    default: ''
  },
  user: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
}))




// happenDate,line,machineNum,station, phenomenon,position,happenNum,owner,description,createUser
// 保养记录
const ONLINE_ERROR_SCHEMA = mongoose.model('OnlineError', new Schema ({
  happenDate: {
    type: Date,
    default: Date.now
  },
  machineNum: {
    type: String,
    default: ''
  },
  line: {
    type: String,
    default: ''
  },
  station: {
    type: String,
    default: ''
  },
  phenomenon: {
    type: String,
    default: ''   
  },
  position: {
    type: String,
    default: ''   
  },
  happenNum: {
    type: String,
    default: ''   
  },
  owner: {
    type: String,
    default: ''   
  },
  description: {
    type: String,
    default: ''   
  },
  username: {
    type: String,
    default: ''   
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
}))

// happenDate,name,partNum,num,vendor,period,preTime,actualTime,department,user,createUser
// 配备申请表
const APPLY_SCHEMA = mongoose.model('Apply', new Schema ({
  happenDate: {
    type: Date,
    default: Date.now()
  },
  partNum: {
    type: String,
    default: ''
  },
  num: {
    type: String,
    default: ''
  },
  vendor: {
    type: String,
    default: ''
  },
  period: {
    type: String,
    default: ''   
  },
  preTime: {
    type: Date,
    default: Date.now()  
  },
  actualTime: {
    type: Date,
    default: Date.now()     
  },
  department: {
    type: String,
    default: ''   
  },
  user: {
    type: String,
    default: ''   
  },
  createUser: {
    type: String,
    default: ''   
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
}))

// happenDate,machineNum,station,line,phenomenon,position,issueNum,percent,createUser
// 每日集中问题

const EVERY_SCHEMA = mongoose.model('Every', new Schema ({
  happenDate: {
    type: Date,
    default: Date.now()
  },
  machineNum: {
    type: String,
    default: ''
  },
  station: {
    type: String,
    default: ''
  },
  line: {
    type: String,
    default: ''
  },
  phenomenon: {
    type: String,
    default: ''   
  },
  position: {
    type: String,
    default: ''
  },
  issueNum: {
    type: Number,
    default: 0   
  },
  department: {
    type: String,
    default: ''   
  },
  percent: {
    type: String,
    default: ''   
  },
  createUser: {
    type: String,
    default: ''   
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
}))


const TOTAL_SCHEMA= mongoose.model('total',new Schema({
  happenDay: {
    type: String,
    default: ''
  },
  part:{
    type: String,
    default: '白班'
  },
  during: {
    type: String,
    default: ''
  },
  line: {
    type: String,
    default: ''
  },
  series: {
    type: String,
    default: ''
  },
  machine: {
    type: String,
    default: ''
  },
  orientation: {
    type: String,
    default: 'AOI背板'
  },
  question1: {
    type: String,
    default: ''
  },
  question2: {
    type: String,
    default: ''
  },
  answer: {
    type:String,
    default: ''
  },
  dealUser: {
    type: String,
    default: ''
  },
  lostTime: {
    type: Number,
    default: 0
  },
  errorStatus: {
    type: String,
    default: ''
  },
  cause:{
    type: String,
    default: ''
  },
  owner: {
    type:String,
    default: 'TE'
  },
  process: {
    type:String,
    default: ''
  },
  prevent:{
    type: String,
    default: ''
  },
  createUser: {
    type: String,
    default: ''   
  },
  createDate: {
    type: Date,
    default: Date.now()
  }

}))




// 数据库默认配置
// 取消消息提示
const CONNECT_CONFIG = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

// 导出分类
exports.config = {
  DB_URL,
  MODEL_ISSUE,
  MODEL_TOOL_HEIGHT,
  MODEL_USER,
  MODEL_TOOL_RECORD,
  MODEL_ONLINE_ERROR,
  MODEL_APPLY,
  MODEL_EVERY,
  MODEL_TOTAL,
  USER_SCHEMA,
  ISSUE_SCHEMA,
  TOOL_HEIGHT_SCHEMA,
  TOOL_RECORD_SCHEMA,
  ONLINE_ERROR_SCHEMA,
  APPLY_SCHEMA,
  EVERY_SCHEMA,
  TOTAL_SCHEMA,
  CONNECT_CONFIG
}

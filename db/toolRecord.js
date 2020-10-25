const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {config} = require('./config')

// 增加一个Issue
const addToolRecord = async(happenDate,machineNum,num,partNum,clear,confirm,replaceNil,replaceCap,description,result,upImage,downImage,user,username) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_RECORD);
    // 2. 定义模型
    let ToolRecord = new config.TOOL_RECORD_SCHEMA({happenDate,machineNum,num,partNum,clear,confirm,replaceNil,replaceCap,description,result,upImage,downImage,user,username})
    // 3. 存储数据
    await ToolRecord.save()
    // 4. 断开连接
    mongoose.disconnect()
    // 5. 返回状态
    return 'ok'
  }catch(e) {
    return 'error'
    console.log(e)
  }
}
// 查詢issue
const findToolRecord = async(skip = 0,limit = 10, dateArray) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_RECORD);
    // 2. 定义模型
    // console.log(122)
    let ToolRecord = config.TOOL_RECORD_SCHEMA
    // 3. 存储数据
    let data = {}
    // console.log(ISODate)
    if (dateArray && dateArray.length > 1){
      console.log(dateArray)
      data.total = await ToolRecord.find({happenDate:{ 
      $gte: dateArray[0],
      $lt: dateArray[1]}}).count()
      // console.log(data)
      data.data = await ToolRecord.find({happenDate:{ 
        $gte: dateArray[0],
        $lt: dateArray[1]}}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    } else {
      data.total = await ToolRecord.find({}).count()
      // console.log(data)
      data.data = await ToolRecord.find({}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    }
    // console.log(data)
    // 4. 断开连接
    mongoose.disconnect()
    // console.log(data)
    return data
  }catch(e) {
    return 'error'
    console.log(e)
  }
}

// 删除一条信息
const deleteItem = async(_id, username) => {
  try {
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_RECORD);
       // 2. 定义模型
    let ToolRecord = config.TOOL_RECORD_SCHEMA
    let data = await  ToolRecord.deleteOne({'_id': _id})
    if (data=== 'error') {
      return ''
    } else {
      return 'ok'
    }
  } catch (error) {
    return 'error'
  }
}


exports.toolRecord= {
  addToolRecord,
  findToolRecord,
  deleteItem
}
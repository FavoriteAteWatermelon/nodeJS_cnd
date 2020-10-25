const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {config} = require('./config')

// 增加一个Issue
const addToolHeiht = async(happenDate,machineNum,num,partNum,position,height,reverseHeight,mesureHeight,imgUrl,isOK,user,username) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_HEIGHT);
    // console.log(position,height,reverseHeight,mesureHeight,imgUrl,isOK,user,createUser)
    // 2. 定义模型
    let ToolHeight = new config.TOOL_HEIGHT_SCHEMA({happenDate,machineNum,num,partNum,position,height,reverseHeight,mesureHeight,imgUrl,isOK,user,username})
    // 3. 存储数据
    let test = await ToolHeight.save()
    // console.log(test)
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
const findToolHeigth = async(skip = 0,limit = 10, dateArray) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_HEIGHT);
    // 2. 定义模型
    // console.log(122)
    let ToolHeight = config.TOOL_HEIGHT_SCHEMA
    // 3. 存储数据
    let data = {}
    // console.log(ISODate)
    if (dateArray && dateArray.length > 1){
      console.log(dateArray)
      data.total = await ToolHeight.find({happenDate:{ 
      $gte: dateArray[0],
      $lt: dateArray[1]}}).count()
      // console.log(data)
      data.data = await ToolHeight.find({happenDate:{ 
        $gte: dateArray[0],
        $lt: dateArray[1]}}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    } else {
      data.total = await ToolHeight.find({}).count()
      // console.log(data)
      data.data = await ToolHeight.find({}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
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
    await mongoose.connect(config.DB_URL + config.MODEL_TOOL_HEIGHT);
       // 2. 定义模型
    let ToolHeight = config.TOOL_HEIGHT_SCHEMA
    let data = await  ToolHeight.deleteOne({'_id': _id})
    if (data=== 'error') {
      return ''
    } else {
      return 'ok'
    }
  } catch (error) {
    return 'error'
  }
}


exports.toolHeight= {
  addToolHeiht,
  findToolHeigth,
  deleteItem
}
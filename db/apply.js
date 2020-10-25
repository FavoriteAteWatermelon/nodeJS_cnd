const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {config} = require('./config')

// 增加一个apply
const addApply = async(happenDate,name,partNum,num,vendor,period,preTime,actualTime,department,user,createUser) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_APPLY);
    // 2. 定义模型
    let Apply = new config.APPLY_SCHEMA({happenDate,name,partNum,num,vendor,period,preTime,actualTime,department,user,createUser})
    // 3. 存储数据
    await Apply.save()
    // 4. 断开连接
    mongoose.disconnect()
    // 5. 返回状态
    return 'ok'
  }catch(e) {
    return 'error'
    console.log(e)
  }
}
// 查詢findapply
const findApply = async(skip = 0,limit = 10, dateArray) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_APPLY);
    // 2. 定义模型
    // console.log(122)
    let Apply = config.APPLY_SCHEMA
    // 3. 存储数据
    let data = {}
    // console.log(ISODate)
    if (dateArray && dateArray.length > 1){
      console.log(dateArray)
      data.total = await Apply.find({happenDate:{ 
      $gte: dateArray[0],
      $lt: dateArray[1]}}).count()
      // console.log(data)
      data.data = await Apply.find({happenDate:{ 
        $gte: dateArray[0],
        $lt: dateArray[1]}}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    } else {
      data.total = await Apply.find({}).count()
      // console.log(data)
      data.data = await Apply.find({}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
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
    let Apply = config.APPLY_SCHEMA
    let data = await  Apply.deleteOne({'_id': _id})
    if (data=== 'error') {
      return ''
    } else {
      return 'ok'
    }
  } catch (error) {
    return 'error'
  }
}


exports.apply= {
  addApply,
  findApply,
  deleteItem
}
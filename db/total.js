const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {config} = require('./config')
// 增加一个apply
const addTotal = async(happenDay,part,during,line,series,machine,orientation,question1,question2,answer,dealUser,lostTime,errorStatus,cause,owner,process,prevent) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOTAL);
    // 2. 定义模型
    let Total = new config.TOTAL_SCHEMA({happenDay,part,during,line,series,machine,orientation,question1,question2,answer,dealUser,lostTime,errorStatus,cause,owner,process,prevent})
    // 3. 存储数据
    await Total.save()
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
const findTotal = async(skip = 0,limit = 10, dateArray) => {
  try{
    // 1. 连接数据库
    await mongoose.connect(config.DB_URL + config.MODEL_TOTAL);
    // 2. 定义模型
    // console.log(122)
    let Total = config.MODEL_TOTAL
    // 3. 存储数据
    let data = {}
    // console.log(ISODate)
    if (dateArray && dateArray.length > 1){
      console.log(dateArray)
      data.total = await Total.find({happenDate:{ 
      $gte: dateArray[0],
      $lt: dateArray[1]}}).count()
      // console.log(data)
      data.data = await Total.find({happenDate:{ 
        $gte: dateArray[0],
        $lt: dateArray[1]}}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    } else {
      data.total = await Total.find({}).count()
      // console.log(data)
      data.data = await Total.find({}).sort({ "_id": -1 }).skip( parseInt(skip) ).limit(parseInt(limit))
    }
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
    await mongoose.connect(config.DB_URL + config.MODEL_TOTAL);
       // 2. 定义模型
    let Total = config.MODEL_TOTAL
    let data = await  Total.deleteOne({'_id': _id})
    if (data=== 'error') {
      return ''
    } else {
      return 'ok'
    }
  } catch (error) {
    return 'error'
  }
}


exports.total= {
  addTotal,
  findTotal,
  deleteItem
}
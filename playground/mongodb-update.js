var {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return  console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    //findOneAndUpdate(filter,update,options,callback)
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5ed5ed8f3b973d6e0bd96122")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((res)=>{
    //     console.log(res);
    // });
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5ed55db60018c1111c387974")
    },{
        $set:{
            name:"Emmanuel Avwenake"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    });


    //db.close();
});
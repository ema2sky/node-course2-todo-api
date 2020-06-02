//const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return  console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count:${count}`)
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // });

    // db.collection('Users').find({name:'Emmanuel Avwenake'}).count().then((count)=>{
    //     console.log(`Users with name Emmanuel Avwenake: ${count}`);
    // },(err)=>{
    //     console.log('Unable to count users',err);
    // });
        db.collection('Users').find({name:'Emmanuel Avwenake'}).toArray().then((docs)=>{
            console.log('Users');
            console.log(JSON.stringify(docs,undefined,2))
        },(err)=>{
            console.log('Unable to fetch users')
        })

    
    //db.close();
});
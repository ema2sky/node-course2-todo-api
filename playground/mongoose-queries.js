const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// var id = "5ed80542add34f1c280237f711";

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid'); 
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos)
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo)
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//        return console.log('Id not found');
//     }
//     console.log('Todo',todo)
// }).catch((e)=>{
//     console.log(e);
// });

var id = "5ed71cf57207e010449206be";
Users.findById(id).then((user)=>{
    if(!user){
       return console.log('User not found')
    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{
    console.log(e)
});
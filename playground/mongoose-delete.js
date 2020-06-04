const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ed91c783b973d6e0bd96128').then((todo)=>{
    console.log(todo);
})
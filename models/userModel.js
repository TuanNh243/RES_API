const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userSchema = new Schema({
    id:{type:ObjectId},
    username:{type:String},
    password:{type:String},
    role:{type:String, enum: ['admin', 'user']}
});



const user = mongoose.model('user', userSchema);

// user.insertMany([
//             { username: 'john_doe', password: 'password123', role: 'user' },
//             { username: 'jane_doe', password: 'password456', role: 'admin' },
//             { username: 'sam_smith', password: 'password789', role: 'user' }]);

module.exports = mongoose.models.user || mongoose.model('user', user);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true},
	lastAccessed: { type: Date, default: Date.now },
	dateJoined: { type: Date, default: Date.now },
})

var UserModel = mongoose.model('User', UserSchema);

exports.list = function (){
	UserModel.find(function (err, users){
		if(!err){
			return users;
		}else{
			console.log(users);
			return {};
		}
	});
}

exports.findById = function (id){
	UserModel.findById(id, function(err, user){
		if(!err){
			return user;
		}else{
			console.log(err);
			return {};
		}
	})
}
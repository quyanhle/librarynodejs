var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Create a new author scheme

var AuthorSchema = Schema(
		{
			first_name : {type:String, required: true, max:100},
			last_name: {type:String, required:true, max:100},
			email : {type:String, required:true},
			dob : {type:Date},
		}
	);

// Get author's full name

AuthorSchema.virtual('name').get(function () {
	return this.first_name + ' ' + this.last_name;
}); 

AuthorSchema.virtual('url').get(function () {
	return '/catalog/author/' + this._id;
});

//Export Schema to Model

module.exports = mongoose.model('Author', AuthorSchema);

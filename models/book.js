var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Create a new book scheme

var BookSchema = Schema(
		{
			title : {type:String, required: true, max:100},
			author: {type:Schema.ObjectId, ref: 'Author', required:true},
			summary : {type:String, required:true},
			genre: [{type:Schema.ObjectId, ref: 'Genre'}]
		}
	); 

BookSchema.virtual('url').get(function () {
	return '/catalog/book/' + this._id;
});

//Export Schema to Model

module.exports = mongoose.model('Book', BookSchema);

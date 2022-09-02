import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/postRouter.js';
// username - memories password - DjLVTI38sG3zpaex

const app = express();
// limit is used because we have to post the images to the database and that may can be greater than 25mb.
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(bodyParser.json({ limit:"30mb", extended:true}))
app.use(cors());
app.use('/posts',postRoutes);	 



const CONNECTION_URL = 'mongodb+srv://memories:DjLVTI38sG3zpaex@cluster0.jrtytu8.mongodb.net/?retryWrites=true&w=majority'
const PORT  = process.env.PORT || 5000; 
 

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
	app.listen(PORT, function(){
		console.log('Server is running on Port', PORT);
	})
}).catch(function(err){
	console.log(err.message);
})

// mongoose.set('useFindAndModify', false);  // used to not have warnings in the console.









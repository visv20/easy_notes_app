const mongooseClient = require('mongoose');
mongooseClient.connect("mongodb://localhost:27017/notepadDB", {useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
    if(err)
    console.log(err);
});
mongooseClient.connection.once('open',function(){
    console.log('connection has been made');
});
const NotesSchema = mongooseClient.Schema({
    title: String,
    description: String
})

const Notes = mongooseClient.model("Notes", NotesSchema);
module.exports =Notes;
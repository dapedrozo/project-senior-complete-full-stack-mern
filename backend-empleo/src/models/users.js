const {Schema, model} = require('mongoose');

const formatString = new Schema({
    s:{
        type: String,
        trim: true
    }
},{_id:false})

const userSchema = new Schema({usuario:
    {
        type: formatString,
        required: true
    },
    pass:
    {
        type: String,
        required: true
    },
    rol:{
        type:formatString,
        required:true
    }
},{
    timestamps:{createdAt:false, updatedAt:true}
})

module.exports= model('users',userSchema);

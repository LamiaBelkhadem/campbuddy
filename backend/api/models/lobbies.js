import mongoose  from "mongoose";
const { schema } =mongoose;

const LobbiesSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    maximumParticipants: {
        type: Number,
        required: false
    },
    participants: {
        type: Array,
        default:[],
    },
    open:{
        type:Boolean,
        default:true,
    }

})
export default  mongoose.model("Lobby", LobbiesSchema)
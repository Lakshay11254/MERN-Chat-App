import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        tyoe: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        tyoe: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        tyoe: String,
        required: true
    },
//createdAt, updatedAt
}, {timestamps: true});

const Message = monggose.model("Message", messageSchema);
export default Message;
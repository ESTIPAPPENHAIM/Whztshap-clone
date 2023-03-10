const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
    message: {type:String, required: true},
    conversationId:{
        type: Schema.Types.ObjectId,
        ref: "Conversation",
        required: true,
    },
    data: {type: Date, required: true},
    from: {type:Schema.Types.ObjectId, ref:"User", required: true},
});

const Message = model("Message", messageSchema);
module.exports = Message;
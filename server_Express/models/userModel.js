const { model, Schema } = require("mongoose");

const user = new Schema({
    id:{ type: String, required: true, unique: true },
    fname:{ type: String, required: true, unique: true },
    sname:{ type: String, required: true, unique: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true, unique: true },
    ratings:{ type: String, required: true, unique: true },
    lastviewed:{ type: String, required: true, unique: true },
    baninfo:{ type: Schema.Types.ObjectId, ref: "ban"},
    token:{ type: String, required: true},
})

const ban = new Schema({
    banned:{type:Boolean, required: true, default:false},
    reason:{type: String}
})
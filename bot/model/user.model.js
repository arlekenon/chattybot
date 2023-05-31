const { DataTypes } = require("sequelize");
const db = require("../connection/db.connection");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: { type: Number, default: 0 },
    lustid: { type: Number, default: 0 },
    chatId: { type: Number, unique: true },
    update: { type: Boolean, default: false },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    username: String,
    phone: String,
    mail: String,
    address: String,
    admin: { type: Boolean, default: false },
    offdata: { type: Number, default: 0 },
    actionbalance: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
    premium: { type: Boolean, default: false },
    privel: Number,
    privelvol: { type: Number, default: 0 },
    privelpop: { type: Number, default: 0 },
    privelnumb: { type: Number, default: 0 },
    startPayload: String,
    limits: Number,
    timestamps: Number,
    requestchat: { type: Number, default: 0 },
    roleole: String,
    roleoleprompt: { type: String, default: '' },
    vibe: String,
    vibeprompt: { type: String, default: '' },
    prosetting: { type: Number, default: 0 },
    vozmojnosti: { type: Number, default: 0 },
    surpriz: { type: Number, default: 0 },
    info: { type: Number, default: 0 },
    zayavka: { type: Number, default: 0 },
    keyboard: { type: Number, default: 0 },
}, { timestamps: { createdAt: 'created_at' } });




module.exports = {userSchema}

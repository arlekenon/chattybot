import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: Number, default: 0 },
    chatId: { type: Number, unique: true },
    update: { type: Boolean, default: false },
    firstName: String,
    lastName: String,
    username: String,
    phone: String,
    mail: String,
    adress: String,
    admin: { type: Boolean, default: false },
    offdata: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
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


const userSchema = new mongoose.Schema({
    id: { type: Number, default: 0 },
    chatId: { type: Number, unique: true },
    update: { type: Boolean, default: false },
    firstName: String,
    lastName: String,
    username: String,
    startPayload: String,
    userdata: {
        phone: String,
        mail: String,
        address: String,
        admin: { type: Boolean, default: false },
    },
    chatgptdata: {
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
    },
    energydata: {
        limits: Number,
        timestamps: Number,
        balance: { type: Number, default: 0 },
        privel: Number,
        privelvol: { type: Number, default: 0 },
        privelpop: { type: Number, default: 0 },
        privelnumb: { type: Number, default: 0 },
    },
    offdata: { type: Number, default: 0 },
}, { timestamps: { createdAt: 'created_at' } });

sudo proxychains apt install mongodb-org
sudo proxychains apt-get install -y mongodb-org
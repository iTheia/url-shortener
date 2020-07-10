import mongoose from 'mongoose'

const Schema = mongoose.Schema

const urlSchema = Schema({
    url:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        createIndexes:true
    }
}, { timestamps:true})

const Url = mongoose.model('URL', urlSchema)

export default Url
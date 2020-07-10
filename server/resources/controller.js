import path from 'path'
import Url from './model'
import { nanoid } from 'nanoid'

const controller = {
    async get(req, res){
        res.sendFile(path.join(__dirname, '../../', '/client/public/index.html'))
    },
    async create(req, res){
        let { slug, url } = req.body
        if(!url){
            return res.status(400).send('Url is required')
        }
        const record = new Url({
            url,
            slug: !slug? nanoid(5) : slug.toLowerCase()
        })
        await record.save()
        res.send(record)
    },
    async getSingle(req, res){
        const {slug} = req.params
        const url = await Url.findOne({slug})
        if(!url){
            return res.redirect(`/?error=slug not found`)
        }
        res.redirect(url.url)
    }
}
export default controller
import express from 'express'
import { body } from 'express-validator'
import { controller } from './resources'
import { catchErrors } from './middlewares'

const router = express.Router()

router.route('/')
    .get(catchErrors(controller.get))
    .post([
        body('slug').trim().escape(),
        body('url').trim().isURL()
    ],catchErrors(controller.create))

router.route('/:slug')
    .get(catchErrors(controller.getSingle))

export default router
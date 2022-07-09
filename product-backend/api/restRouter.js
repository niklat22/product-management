import express from 'express'
import {productRouter} from './products'
import {categoriesRouter} from './categories'

export const restRouter = express.Router();
restRouter.use('/product',productRouter)
restRouter.use('/categories',categoriesRouter)
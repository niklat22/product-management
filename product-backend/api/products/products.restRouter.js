import express from "express";
import {
    getproducts,
    getEditproducts,
    productInsert,
    productUpdate,
    productDelete
} from './products.controller'
export const productRouter = express.Router();

productRouter.get('/getproducts', getproducts);
productRouter.get('/getEditproducts', getEditproducts);
productRouter.post('/productInsert', productInsert);
productRouter.post('/productUpdate', productUpdate);
productRouter.post("/productDelete", productDelete);

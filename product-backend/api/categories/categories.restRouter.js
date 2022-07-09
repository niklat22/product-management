import express from "express";
import {
    categoriesInsert
} from './categories.controller'
export const categoriesRouter = express.Router();

categoriesRouter.post('/categoriesInsert', categoriesInsert);

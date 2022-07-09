import {categories} from './categories.modal'

// Get categories
export const getCategories = async (req,res) =>{
  try{
      const categoriesData = await categories.find({})
      if(!categoriesData){
        return res.status(404).send({
            success: false,
            message: "Data not found"
        });
      }else{
        return res.status(201).send({
            success: true,
            data: categoriesData,
            message:'data find successfully'
        });
      }
  }
  catch(err){
      res.status(422).send({ success: false, message: err.message });
  }
}

// Insert categories
export const categoriesInsert = async (req,res) =>{
    try{
        const {category} = req.body;
        const cat = await categories.create({category});
        if(cat){
            return res.status(201).send({
                success: true,
                message: "Categories created successfully."
            });
        }
    }
    catch(err){
        res.status(422).send({ success: false, message: err.message });
    }
}
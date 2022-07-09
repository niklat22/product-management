import {products} from './products.modal'

// Get products
export const getproducts = async (req,res) =>{
  try{
      const productsData = await products.find({}).populate("categories")
      if(!productsData){
        return res.status(404).send({
            success: false,
            message: "Data not found"
        });
      }else{
        return res.status(201).send({
            success: true,
            data: productsData,
            message:'data find successfully'
        });
      }
  }
  catch(err){
      res.status(422).send({ success: false, message: err.message });
  }
}

// Insert products
export const productInsert = async (req,res) =>{
    try{
        // console.log("===produc insert");
        const {name, price, category} = req.body;
        const prod = await products.create({
            name,
            price,
            category
        });
        if(prod){
            return res.status(201).send({
                success: true,
                message: "product created successfully."
            });
        }
    }
    catch(err){
        res.status(422).send({ success: false, message: err.message });
    }
}

// Insert products
export const getEditproducts = async (req,res) =>{
    try{
        const {id} = req.query;
        const productsData = await products.findOne({_id: id})
        if(!productsData){
          return res.status(404).send({
              success: false,
              message: "Data not found"
          });
        }else{
          return res.status(201).send({
              success: true,
              data: productsData,
              message:'data find successfully'
          });
        }
    }
    catch(err){
        res.status(422).send({ success: false, message: err.message });
    }
  }

//edit product
export const productUpdate = async(req,res) =>{
  try{
      const {productId, name, price, category} = req.body;
      const success = await products.findByIdAndUpdate({_id:productId},{
        name,price,category
      })
      if(!success){
          res.status(401).send({
              success:false,
              message:'data update process failed due to user not found error'
          })
      }
      res.status(201).send({
          success:true,
          message:'data update successsully'
      })
  }
  catch(err){
      res.status(401).send({
          success:false,
          message:err.message
      })
  }
}

//delete product
export const productDelete = async(req,res) =>{
  try{
      const {productId} = req.body;
      const success = await products.deleteOne({_id:productId})
      if(!success){
          res.status(401).send({
              success:false,
              message:'data not deleted'
          })
      }
      res.status(201).send({
          success:true,
          message:'data deleted successsully'
      })
  }
  catch(err){
      res.status(401).send({
          success:false,
          message:err.message
      })
  }
}
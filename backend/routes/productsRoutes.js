import express from 'express';

import {
    createProduct,
     getProducts,
     updateProducts,
     deleteProducts,
 } from '../controllers/productController.js'

 const router =express.Router();

 // Route to create a new product 
    router.post('/add',createProduct);

 // Route to get all products
    router.get('/',getProducts);

  // Route to update a product by ID 
    router.put('/update/:id',updateProducts);

   // Route to delete a product by ID 
    router.delete('/delete/:id',deleteProducts);


    export default router;
    
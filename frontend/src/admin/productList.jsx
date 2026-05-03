import { useState,useEffect } from "react";
import api from "../api/axios";
import { Link } from "react-router";


export default function ProductList(){
   const [product ,setProduct]=useState([]);

   const loadProducts= async()=>{
    const response=await api.get("/products");
    setProduct(response.data);
   }

   const deletedProduct=async (id)=>{
    try{
       await api.delete(`/products/delete/${id}`);
       alert("Product Deleted Successfully!");
       loadProducts();
    }
    catch(err){
      console.error("Error Deleting Product:",err)
    }
   }

   useEffect(()=>{
    loadProducts();
   },[]);
}

return(
   <div className="max-w-4xl mx-auto mt-10 ">
    <div className="flex justify-between items-center mb-6"> 
        <h2 className="text-2xl font-bold">Product List</h2>
        <Link to="admin/products/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add New Product</Link>
    </div>

    <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
            <tr className="bg-gray-100">
               <th className="border border-gray-200 px-4 py-2">Title</th> 
               <th className="border border-gray-200 px-4 py-2">$Price</th>
               <th className="border border-gray-200 px-4 py-2">Stock</th>
               <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {ProductList.map((products)=>(
              <tr key={product.id} className="text-center">
                <td className="border border-gray-200 px-4 py-2">{product.title}</td>
                <td className="border border-gray-200 px-4 py-2">{product.price}</td>
                <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-200 px-4 py-2">
             <Link to={`/admin/products/edit/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Edit</Link>
               <button onClick={()=>deletedProduct(product.id)} className="text-red-500 hover:underline">
                Delete
               </button>
               </td>
              </tr>  
            ))}
        </tbody>
    </table>
   </div>
)
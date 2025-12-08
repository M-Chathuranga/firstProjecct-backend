import Product from "../models/product.js";
import { isAdmin } from "./userController.js";


// export function getStudentsSync(req, res){

// 	Student.find()
// 		.then(
// 			(students) => {
// 				res.json(students);
// 			}
// 	)
// 		.catch(() => {
// 			res.json({
// 				message: "Failed to fetch students",
// 			});
// 		});
// }


export async function createProduct(req,res) {
    if( ! isAdmin(req)) {
        return res.status(403).ison(
            {
                message : "Access denied. Admins only"
            }
        )
    }

    const product = new Product(req,body);

    try{
        const response = await product.save();

        res.json({
            message : "Product created successfuly",
            product : response

        });

    }catch (error) {
        console.log("Error creating product",error);
        return res.status(500).json({
            message : "faild to create product"
        })
    }
   
    
}


export async function getProducts(req,res) {
    try{
        if(isAdmin(req)){
            const products = await Product.find();
            return res.json(products);

        }else{
            const products = await Product.find({isAvailable : true});
            return res.json(products);
        }
    }catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ message : "Faild to fetch products"});
    }
       
}


export async function deleteProduct(req,res) {
    if( ! isAdmin(req)){
        res.status(403).json({
            message : "Access denied. Addmins only"
        });
        return;

    }

    try{
        const productId = req.params.productId;

        await Product.deleteOne({
            productId : productId
        });

        res.json({ message : "Product deletedd successfully"});
    }catch (error) {
        console.log("Error deleting product", error);
        res.status(500).json({ message : "Faild To delete product"});
        return;
    }
}


export async function updateProduct(req,res) {
    if( ! isAdmin(req)){
        res.status(403).json({ message : "Access denied. Admins only"});
        return;
    }

    const data = req.body;
    const productId = req.params.productId;
    // to prevent overwriting the productId in the request body
    data.productId = productId;

    try{
        await Product.updateOne(
            {
                productId : productId
            },
            data
        );
        res.json({ message : "Product updated successfully"});
    }catch (error) {
        console.log("Error updating product",error);
        res.status(500).json({message : " Faild to update product"});
        return;
    }
}

export async function getProductInfo(req,res) {
    try{
        const productId =req.params.productId;
        const product = await Product.findOne({productId : productId});

        if(product == null){
            res.status(404).json({ message : "Product not found"});
            return;
        }

        if( ! isAdmin){
            res.json(product);

        }else{
            if(product.isAvailable){
                res.json(product);
            }else{
                res.status(404).json({ message : "Product is not available"});
            }

        }


    }catch(error) {
        console.log("Error fetching product info", error);
        res.status(500).json({ message : "Faild to fetch product info"});
        return;
    }
    
}

// export async function searchProducts(req,res) {
//     const query = req.params.query;

//     try{
//         const products = await Product.find({
//             $or : [
//                 {name: {$regex:query , $options : "i"}},
//                 {altNames : { $elemMatch : { $regex: query,$options : "i"}}}
//             ],
//             isAvailable : true
//         })
//         res.json(products);

//     }catch{
//         res.status(500).json({
//             message : "Faild to search products"
//         });
//     }
    
    
// }
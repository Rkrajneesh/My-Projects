const express = require('express');
const router = express.Router();

const { createUser, loginUser, getUserDetails, updateUserDetails } 
                                                        = require("../controllers/userController.js")

const { createProduct, getFilterProduct, getProductDetails, updateProductDetails, deleteProduct } 
                                                        = require("../controllers/productController.js")

const { createCart, getCartDetails, updateCart, deleteCart } 
                                                        = require("../controllers/cartController")

const { createOrder, updateOrder } = require("../controllers/orderController")
const { authentication, authorization } = require("../middlewares/auth")



//User API
router.post("/register", createUser)
router.post("/login", loginUser)
router.get("/user/:userId/profile", authentication, getUserDetails)
router.put("/user/:userId/profile", authentication, authorization, updateUserDetails)

//Product API
router.post("/products", createProduct)
router.get("/products", getFilterProduct)
router.get("/products/:productId", getProductDetails)
router.put("/products/:productId", updateProductDetails)
router.delete("/products/:productId", deleteProduct)


//Cart API
router.post("/users/:userId/cart",   authentication, authorization, createCart)
router.get("/users/:userId/cart",    authentication, authorization, getCartDetails)
router.put("/users/:userId/cart/",   authentication, authorization, updateCart)
router.delete("/users/:userId/cart", authentication, authorization, deleteCart)

//Order API
router.post("/users/:userId/orders", authentication, authorization, createOrder)
router.put("/users/:userId/orders",  authentication, authorization, updateOrder)





module.exports = router;
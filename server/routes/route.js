import express from  'express';
 import { userSignUp ,userLogIn} from '../controller/user-controller.js'
 const router = express.Router();
import { getProducts,getProductById } from '../controller/product-controller.js';
import { addPaymentGateway,paymentResponse } from '../controller/payment-controller.js';




// //login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);
export default router; 
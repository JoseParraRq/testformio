const {Router}=require('express');
const { UserController } = require('../controllers/userController');
const {FormBuilderController} = require('./../controllers/formBuilderController');
const service = require('../models/user');
const { ProductController } = require('../controllers/productController');
const router=Router();


const list = (req,res)=>service
.list()
.then((response) => res.json(response))
.catch((e) => res.json({e}));


router.get("/",(req,res)=>{
    console.log("here the peticion");
    res.send("aprendiendo knex")
})

//router.get("/all",list);


router.post("/createForm",new FormBuilderController().createForm);

router.get("/getAllForms",new FormBuilderController().getAllForms);

router.post("/getFormById",new FormBuilderController().getFormById);

router.post("/getFormByName",new FormBuilderController().getFormByName);

router.put("/updateForm",new FormBuilderController().updateForm);

router.post("/createUser",new UserController().createUser);

router.get("/getAllUsers",new UserController().getAllUsers);

router.post("/getUserById",new UserController().getUserById);

router.put("/updateUser",new UserController().updateUser);

router.post("/createProduct",new ProductController().createProduct);

router.get("/getAllProducts",new ProductController().getAllProducts);

router.post("/getProductById",new ProductController().getProductById);


module.exports = router;
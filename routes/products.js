const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');
const JWT  = require('jsonwebtoken');
const config = require('../util/TokenConfig');
router.get('/all', async (req, res) => {
    try {
      const token = req.header("Authorization").split(' ')[1];

      if(token){
          JWT.verify(token, config.SECRETKEY, async function (err, id){
        if(err){
          res.status(403).json({"status": 403, "err": err});
        }else{
        //xử lý chức năng tương ứng với API
          const product = await productModel.find();
          res.json(product);
        }
      });
      }else{
        res.status(401).json({"status": 401});
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;
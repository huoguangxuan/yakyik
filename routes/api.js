var express = require('express');
var router = express.Router();
// var ZoneController = require('../controllers/ZoneController');
var controllers = require('../controllers')
router.get('/:resource',function(req,res,next){
	var resource = req.params.resource;
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Ivalid Resource Request:' + resource  
		})
	}
	controller.find(req.query,function(err,results){
		if(err){
				res.json({
					confirmation:'fail',
					message:err
				})

				return
			}else{
				res.json({
					confirmation:'success',
					results:results
				})
			}
	})
})
router.get('/:resource/:id',function(req,res,next){
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Ivalid Resource Request:' + resource  
		})
	}

	controller.findById(id,function(err,result){
			if(err){
				res.json({
					confirmation: 'fail',
					message: 'not found'
				})
				return
			}else{
				res.json({
					confirmation: 'succees',
					result:result
				})
			}
		})
})
router.post('/:resource',function(req, res, next){
	var resource =req.params.resource
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Ivalid Resource Request:' + resource  
		})
	}
	controller.create(req.body,function(err,result){
			if(err){
				res.json({
					confirmation: 'fail',
					message: 'not found'
				})

				return
			}else{
				res.json({
					confirmation: 'succees',
					result: result
				})
			}
			
		})
	
})
module.exports = router;
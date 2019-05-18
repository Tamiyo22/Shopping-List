const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');


//route GET api/items
//descript GET All Items
//access Public

router.get('/', (request,response)=>{
Item.find()
.sort({date: -1})
.then(items => response.json(items));
})


//route POST api/items
//descript create a item
//access Public

router.post('/', (request,response)=>{
const newItem = new Item({
name: request.body.name
})
newItem.save().then(item => response.json(item))
	})


	//route Delete api/items/id
//descript delete a item
//access Public

router.delete('/:id', (request,response)=>{

	Item.findById(request.params.id)
	.then(item => item.remove().then(()=> response.json({removed:true})))
	.catch(err => response.status(404).json({remove:false}))
		})







module.exports = router;

import express from 'express' 

import {GetProduct,GetProductbyid} from '../controller/Productcontroller.js'
const router = express.Router()

router.route('/').get(GetProduct)
router.route('/:id').get(GetProductbyid)
export default router
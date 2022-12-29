import express from 'express' 

import { GetUser, GetUserProfile } from '../controller/Usercontroller.js'
import {protect} from '../middleware/authmiddleware.js'
const router = express.Router()


router.post('/login', GetUser)
router.route('/profile').get(protect,GetUserProfile)
export default router
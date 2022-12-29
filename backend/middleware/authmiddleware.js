import jwt from 'jsonwebtoken'
import User from '../models/usermodel.js'
import asyncHandler from 'express-async-handler'
const protect = asyncHandler(async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, abc123)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }
        catch (error) {
            
        }
    }

}
)
export {protect}
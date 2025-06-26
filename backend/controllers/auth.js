require('dotenv').config()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


exports.register = async( req, res ) => {
  const { fullname, email, password } = req.body;
  
    //check if email already exists
    const existsEmail = await User.findOne({ email })
    if(existsEmail) {
        return res.status(400).json({ error:'Email already exists' });  
    } 
  
  const hashedPassword = await bcrypt.hash(password, 16)
  const user = new User({ fullname, email, password: hashedPassword })
  
  await user.save()
  res.status(200).json({ msg : 'User registered Successfully' })
}


exports.login = async (req, res)=> {
    const { email, password } =  req.body

    try {
        
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json( { error: 'User not found '})
        }
          
        const checkPassword = await bcrypt.compare(password, user.password )
         if(!checkPassword) {
            return res.status(400).json({ error : 'Password was incorrect '})
         }

         const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'})
         res.json({token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }
         })
    } catch (error) {
       res.status(500).json({ error: 'Server error' });
    }
}

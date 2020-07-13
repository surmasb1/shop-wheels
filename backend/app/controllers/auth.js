const mongoose = require('mongoose')
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../../config/app')



const User = mongoose.model('Col')

const signIn =  (req, res)=>{

       const {email, password} = req.body;
   User.findOne({email:req.body.email})
       .exec()
          .then((user)=>{
              console.log(user)
               if (!user){
                   res.status(401).json({message:'user doesnt exist' })
               }

               const isValid =  bCrypt.compareSync(password, user.password);
               if (isValid){
                   const token =  jwt.sign(user._id.toString(), jwtSecret)
                    res.json({token});
               } else {
                   res.status(401).json({message: 'invalid password'})
               }
          })
          .catch(err=>res.status(500).json({message: err.message +' dfd'}))
}
module.exports = {
    signIn
}

module.exports.regist =  async (req, res)=> {
    const candidate = await User.findOne({email: req.body.email})
if(candidate){
    res.status(409).json({message:'one more is yet'})
} else {
    const user = new User({
        email:req.body.email,
        password:req.body.password,
    })
    try{
        await user.save()
        res.status(201).json(user)
    } catch (e) {
        res.status(500).json({message: e.message +' dfd'})
    }
}


}



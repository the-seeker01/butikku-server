const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

const login = async (req,res) => {
    const { phone, countryCode } = req.body;
    if(!phone){
        return res.status(400).json({messsage:"Phone is required."});
    }
    if(!countryCode){
        return res.status(400).json({messsage:"Country Code is required."});
    }
    res.status(200).json({message:"Otp sent successfully."});
}

const verifyotp = async (req,res) => {
    const {phone, countryCode,otp} = req.body;
    if(!phone){
        return res.status(400).json({messsage:"Phone is required."});
    }
    if(!countryCode){
        return res.status(400).json({messsage:"Country Code is required."});
    }
    if(!otp){
        return res.status(400).json({messsage:"Otp is required."});
    }
    try{
        if(otp == "123456"){
            let user = await userModel.findOne({phone:phone});
            if(!user){
                res.status(200).json({
                    message: "Otp successfully verified."
                });
            }else{
                const token = jwt.sign({email: user.email,id: user._id},process.env.JWT_SECRET_KEY);
                delete user.password;
                res.status(200).json({
                    message:"Otp successfully verified.",
                    user:user,
                    token:token
                });
            }
        }else{
            res.status(400).json({message: "Wrong otp."});
        }
    }catch(error){
        res.status(500).json({message: error});
    }
    
}

const profile = async (req,res) => {
    const { username , password , phone , email, gender, dob , address } = req.body;
    if(!username){
        return res.status(400).json({messsage:"Username is required."});
    }
    // if(!password){
    //     return res.status(400).json({messsage:"Password is required"});
    // }
    if(!phone){
        return res.status(400).json({messsage:"Phone is required."});
    }
    if(!gender){
        return res.status(400).json({messsage:"Gender is required."});
    }
    if(!dob){
        return res.status(400).json({messsage:"Dob is required."});
    }
    if(!address){
        return res.status(400).json({messsage:"Address is required."});
    }
    try{
        const existingUser = await userModel.findOne({ email: email});
        if(existingUser){
            return res.status(400).json({message: "User already exits."});
        }
        // const hashedPassword = await bcrypt.hash(password,10);
        const result = await userModel.create({
            username: username,
            // password: hashedPassword,
            phone: phone,
            email: email,
            gender: gender,
            dob: dob,
            address: address
        });
        const token = jwt.sign({email: result.email,id: result._id},process.env.JWT_SECRET_KEY);
        res.status(200).json({ user: result, token: token});
    }catch(error){
        res.status(500).json({message: error});
    }
}

module.exports = {profile,login,verifyotp};
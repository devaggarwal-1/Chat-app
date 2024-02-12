import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })

    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 Day
        httpOnly: true,  //prevent XSS Attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;
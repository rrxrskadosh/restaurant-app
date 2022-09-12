import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
//Router
import { Link } from "react-router-dom";
//React Icons
import { MdShoppingBasket } from "react-icons/md";
//Framer Motion
import  { motion } from "framer-motion";
// Firebase Signin with Popups
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
// Hooks Context API and Redux
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const login = async () => {
       const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
       dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
       }); 
    }

    return(
        <header className="fixed z-50 w-screen p-6 px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items center gap-2">
                    <img src={Logo} className="w-20 object-cover cursor-pointer" alt="logo"/>
                    <p className="text-cartNumBg text-xl font-bold mt-4">RestauApp</p>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Service</li>
                    </ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
                        <div className="absolute -top-4 right-0 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img 
                            whileTap={{ scale: 0.6 }} 
                            className="w-10 min-w-[30px] h-10 min-h-[40px] cursor-pointer drop-shadow-2xl" 
                            src={Avatar} alt="userprofile" 
                            onClick={ login }
                        />
                    </div>
                   
                </div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden w-full h-full">Mobile</div>
        </header>
    )
};

export default Header;
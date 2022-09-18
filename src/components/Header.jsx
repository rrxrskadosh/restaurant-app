import React, { useState } from "react";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
//Router
import { Link } from "react-router-dom";
//React Icons
import { MdLogout, MdShoppingBasket, MdAdd} from "react-icons/md";
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

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
       if(!user){
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        }); 
       localStorage.setItem("user", JSON.stringify(providerData[0]));
       }else {
        setIsMenu(!isMenu);
       }
    }

    return(
        <header className="fixed z-50 w-screen p-4 px-8 md:p-6 md:px-10">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items center gap-2">
                    <img src={Logo} className="w-20 object-cover cursor-pointer" alt="logo"/>
                    <p className="text-cartNumBg text-xl font-bold mt-4">RestauApp</p>
                </Link>

                <div className="flex items-center gap-6">
                    <motion.ul 
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Service</li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
                        <div className="absolute -top-4 right-0 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img 
                            whileTap={{ scale: 0.6 }} 
                            className="w-10 min-w-[30px] h-10 min-h-[40px] cursor-pointer drop-shadow-2xl rounded-full" 
                            src={user ? user.photoURL : Avatar} alt="userprofile" 
                            onClick={ login }
                        />
                        {
                            isMenu && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 
                                right-0 cursor-pointer">
                                {
                                    user && user.email && (
                                    <Link to="/create-item">
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer 
                                    hover:bg-slate-100 transition-all duration-100 ease-in-out 
                                    text-textColor text-base">New Item <MdAdd />
                                    </p>
                                    </Link>
                                )}
                            
                                <p className="px-4 py-2 flex items-center gap-3 
                                    cursor-pointer hover:bg-slate-100 transition-all duration-100 
                                    ease-in-out text-textColor text-base">Logout <MdLogout />
                                </p>
                            </motion.div>
                            )
                        }
                    </div>
                    
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <Link to={"/"} className="flex items center gap-2">
                    <img src={Logo} className="w-20 object-cover cursor-pointer" alt="logo"/>
                    <p className="text-cartNumBg text-xl font-bold mt-4">RestauApp</p>
                </Link>
                <div className="relative">
                        <motion.img 
                            whileTap={{ scale: 0.6 }} 
                            className="w-10 min-w-[30px] h-10 min-h-[40px] cursor-pointer drop-shadow-2xl rounded-full" 
                            src={user ? user.photoURL : Avatar} alt="userprofile" 
                            onClick={ login }
                        />
                        {
                            isMenu && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 
                                right-0 cursor-pointer">
                                {
                                    user && user.email && (
                                    <Link to="/create-item">
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer 
                                    hover:bg-slate-100 transition-all duration-100 ease-in-out 
                                    text-textColor text-base">New Item <MdAdd />
                                    </p>
                                    </Link>
                                )}
                                <ul
                                    className="flex flex-col px-4 py-2 gap-4">
                                    <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Home</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Menu</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">About Us</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-75 transition-all ease-in-out cursor-pointer">Service</li>
                                </ul>
                            
                                <p className="px-4 py-2 flex items-center gap-3 
                                    cursor-pointer hover:bg-slate-100 transition-all duration-100 
                                    ease-in-out text-textColor text-base">Logout <MdLogout />
                                </p>
                            </motion.div>
                            )
                        }
                    </div>
            </div>
        </header>
    )
};

export default Header;
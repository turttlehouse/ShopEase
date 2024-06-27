import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // Navigate 
    const navigate = useNavigate();

    // Logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    }

    const [dropdownOpen,setDropdownOpen] = useState(false)

    const toggleDropdown = ()=>{
        setDropdownOpen(!dropdownOpen);
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-4 text-black font-bold lg:text-lg px-5">
            {/* Home */}
            <li>
                <Link to={'/'} className="nav-link">Home</Link>
            </li>

            {/* About */}
            <li>
                <Link to={'/about'} className="nav-link">About</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className="nav-link">All Products</Link>
            </li>

             {/* Cart */}
             <li className="relative">
                <Link to={'/cart'} className="nav-link relative">
                    Cart<sup className="absolute top-0.5 right-0 -mt-3 -mr-4 bg-blue-500 rounded-full px-2 text-xs text-white">{cartItems.length}</sup>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 sticky top-0 shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-3 px-5 lg:px-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <h2 className="text-black text-3xl font-bold italic">ShopEase</h2>
                            <img src="../img/file.png" className="h-6 sm:h-9" alt="logo" />
                        </div>
                    </Link>
                </div>

                {/* Burger Menu for Mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 mb-[130px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <div className={`lg:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {navList}

                    {/* Search Bar and User Links */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:block">
                            <SearchBar />
                        </div>

                        <ul className="flex items-center space-x-4">
                            {/* Signup */}
                            {!user && (
                                <li>
                                    <Link to={'/signup'} className="nav-link text-blue-500 font-bold underline">Register?</Link>
                                </li>
                            )}

                            {/* Login */}
                            {!user && (
                                <li>
                                    <Link to={'/login'} className="nav-link text-blue-500 font-bold underline">Login?</Link>
                                </li>
                            )}

                            {/* User */}
                            {user?.role === "user" && (
                                <li className="flex items-center">
                                    <FaUser className="text-4xl text-gray-700" />
                                    <Link to={'/user-dashboard'} className="nav-link">{user?.name}</Link>
                                </li>
                            )}

                            {/* Admin */}
                            {user?.role === "admin" && (
                                <li className="flex items-center">
                                    <FaUser className="text-xl text-gray-700" />
                                    <Link to={'/admin-dashboard'} className="nav-link">{user?.name}</Link>
                                </li>
                            )}


                    <button onClick={toggleDropdown} className="absolute top-[21px] right-[26px] text-black-500 font-bold focus:outline-none">
                        <FiChevronDown className="font-bold text-black text-2xl" />
                        {/* hello */}
                    </button>  

                    {
                        dropdownOpen && user && (

                            <div className="absolute top-[42px] right-[20px] flex justify-center">
                            <button onClick={logout} className=" text-black font-bold underline">
                              Logout
                            </button>
                          </div>

                        )
                    }
                        </ul>
                    </div>
                </div>
            </div>

            {/* Search Bar for Mobile */}
            {isMenuOpen && (
                <div className="block lg:hidden px-5 pb-3">
                    <SearchBar />
                     {/* Signup */}
                    {!user && (
                        <ul className="flex items-center space-x-4">
                            <li className="font-bold">
                                <Link to={'/signup'} className="nav-link underline">Register?</Link>
                            </li>
                            {/* Login */}
                            <li className="font-bold">
                                <Link to={'/login'} className="nav-link underline">Login?</Link>
                            </li>
                        </ul>
                    )}

                    {/* User */}
                    {user?.role === "user" && (
                        <ul className="flex items-center space-x-4">
                            <li className="flex items-center">
                                <FaUser className="text-xl text-gray-700" />
                                <Link to={'/user-dashboard'} className="nav-link font-bold">{user?.name}</Link>
                            </li>
                        </ul>
                    )}

                    {/* Admin */}
                    {user?.role === "admin" && (
                        <ul className="flex items-center space-x-4">
                            <li className="flex items-center">
                                <FaUser className="text-xl text-gray-700" />
                                <Link to={'/admin-dashboard'} className="nav-link">{user?.name}</Link>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;

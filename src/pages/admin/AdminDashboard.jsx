
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext, useState } from 'react';
import myContext from '../../context/myContext';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const {getAllProduct, getAllOrder, getAllUser} = context;

    // const [dropdownOpen,setDropdownOpen] = useState(false)

    // const toggleDropdown = ()=>{
    //     setDropdownOpen(!dropdownOpen);
    // }

     // Navigate 
    //  const navigate = useNavigate();

     // Logout function 
    //  const logout = () => {
    //      localStorage.clear('users');
    //      navigate("/login");
    //  }


    return (
        <Layout>

            <div>
            {/* Top */}
            <div className="top mb-5 px-5 mt-5">
                <div className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 py-5 border border-pink-100 rounded-lg">
                    <h1 className="relative text-center text-2xl font-bold text-black-500">Admin Dashboard</h1>

                    {/* <button onClick={toggleDropdown} className="absolute top-[50px] right-[580px] text-black-500 font-bold focus:outline-none">
                        <FiChevronDown className="" />
                        
                    </button>  

                    {
                        dropdownOpen && user && (

                            <div className="absolute md:top-16 md:right-[515px] flex justify-center">
                            <button onClick={logout} className="bg-blue-600 hover:bg-blue-800 text-white font-bold  px-4 rounded-full transition duration-300 ease-in-out">
                              Logout
                            </button>
                          </div>

                        )
                    } */}
                </div>
            </div>

            <div className="px-5">
                {/* Mid  */}
                <div className="mid mb-5">
                    {/* main  */}
                    <div className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 py-5 rounded-xl border border-pink-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img className="h-20 rounded-full" src="../img/admin.png" alt="" />
                        </div>
                        {/* text  */}
                           <div className="">
                            {/* Name  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Role : </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center">
                            {/* Total Products */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shopping-basket"
                                        >
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>

                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllProduct.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order  */}
                            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black-500 w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list-ordered"
                                        >
                                            <line x1={10} x2={21} y1={6} y2={6} />
                                            <line x1={10} x2={21} y1={12} y2={12} />
                                            <line x1={10} x2={21} y1={18} y2={18} />
                                            <path d="M4 6h1v4" />
                                            <path d="M4 10h2" />
                                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllOrder.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total Order</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black-500 w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>

                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllUser.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total User</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail/>
                        </TabPanel>

                        <TabPanel>
                           <UserDetail/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
             </div>

        </Layout>

    );
}

export default AdminDashboard;

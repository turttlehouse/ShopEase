const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl  border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg"  >
                            {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg> */}
                            <img className="h-10 mt-4 object-contain w-full" src="https://cdn-icons-png.flaticon.com/128/44/44313.png" alt="" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Pants</h2>
                            <p className="leading-relaxed">Our pants Made from high-quality cotton blends, these pants offer superior comfort and flexibility.
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl  border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg"  >
                            {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg> */}
                            <img className="h-10 mt-5 object-contain w-full" src="https://cdn-icons-png.flaticon.com/128/4488/4488005.png" alt="" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Tshirts</h2>
                            <p className="leading-relaxed">Our T-Shirts are 100% made of cotton Crafted from durable cotton twill.
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl  border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg"  >
                            {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg> */}
                            <img className="h-10 mt-5 object-contain w-full" src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Shoes</h2>
                            <p className="leading-relaxed">Step into style with our premium footwear collection, designed for comfort and performance
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;

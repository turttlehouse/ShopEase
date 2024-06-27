import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: '../img/men.png',
        name: 'Men'
    },
    {
        image: '../img/women.png',
        name: 'Women'
    },
    {
        image: '../img/shoes.png',
        name: 'shoes'
    },
    {
        image: '../img/electronics.png',
        name: 'Electronics'
    },
    {
        image: '../img/watch2.png',
        name: 'Watches & Accessories'
    }
]

const Category = () => {
    // navigate 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <h1 className="text-center mb-5 text-4xl font-bold">Our Categories</h1>
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div
                                        onClick={() => navigate(`/category/${item.name}`)}
                                        className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 hover:bg-pink-400 cursor-pointer mb-1 flex items-center justify-center"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">{item.name}</h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
};

export default Category;

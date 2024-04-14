import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

        const [categories, setCategories] = useState([])

        useEffect(() => {
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
        }, [])
        
    return (
        <div>
           <div className="my-3">
           <h3 className="text-xl font-bold text-[#403F3F]">All Categories</h3>
           <div className="mt-5">
           {
            categories.map(categoryItem => <NavLink key={categoryItem.id} to={`/category/${categoryItem.id}`} className={`block py-2 text-center rounded-lg mb-2 bg-gray-50 ${isActive => isActive ? 'text-red-500' : 'text-black'}`}>{categoryItem.name}</NavLink>)
           }
           </div>
           </div>
            
        </div>
    );
};

export default LeftSideNav;
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
           <div>
           <h3 className="text-xl font-bold text-[#403F3F]">All Categories</h3>
           {
            categories.map(categoryItem => <NavLink key={categoryItem.id} to={`/category/${categoryItem.id}`} className={`block mb-2 py-2 border-2 text-center`}>{categoryItem.name}</NavLink>)
           }
           </div>
            
        </div>
    );
};

export default LeftSideNav;
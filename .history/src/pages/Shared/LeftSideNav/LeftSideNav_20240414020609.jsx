import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            categories.map(categoryItem => <ul className="flex items-center gap-2" key={categoryItem.id}><li> <Link className="border-2 p-4">{categoryItem.name}</Link></li></ul>)
           }
           </div>
            
        </div>
    );
};

export default LeftSideNav;
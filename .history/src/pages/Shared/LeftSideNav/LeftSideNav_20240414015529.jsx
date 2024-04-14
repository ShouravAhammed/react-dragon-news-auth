import { useEffect, useState } from "react";

const LeftSideNav = () => {

        const [categories, setCategories] = useState([])

        useEffect(() => {
            fetch('categories.json')
            .then(res => res.json)
            .then(data => console.log(data))
        }, [])
    return (
        <div>
            <h3 className="text-xl font-bold text-[#403F3F]">All Categories</h3>
        </div>
    );
};

export default LeftSideNav;
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div>
            <Link to={'/'} className="px-5 py-2.5 relative group overflow-hidden font-medium bg-[#D72050] text-white inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gray-50 group-hover:h-full"></span>
<span className="relative group-hover:text-[#D72050]">Latest</span>
</Link>
<Marquee>
    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
</Marquee>
        </div>
    );
};

export default BreakingNews;
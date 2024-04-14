import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews/BreakingNews";
import News from "../Register/News";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                <h3 className="text-xl font-bold text-[#403F3F] my-3">All Categories</h3>
                    {
                        news.map(newDetail => <News key={newDetail._id} newDetail={newDetail}></News>)
                    }
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
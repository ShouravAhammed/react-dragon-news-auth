import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1 border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">News coming...........</div>
                <div className="col-span-1 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
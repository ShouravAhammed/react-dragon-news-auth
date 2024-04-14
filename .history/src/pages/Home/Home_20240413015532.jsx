import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <header></header>
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
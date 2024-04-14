import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <RightSideNav></RightSideNav>
            <LeftSideNav></LeftSideNav>
            <h3 className="text-3xl font-poppins">Home page</h3>
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">News coming...........</div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
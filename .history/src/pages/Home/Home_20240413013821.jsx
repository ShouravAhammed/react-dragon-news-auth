import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <RightSideNav></RightSideNav>
            <LeftSideNav></LeftSideNav>
            <h3 className="text-3xl font-poppins">Home page</h3>
            <div className="grid grid-cols-4">
                <div className="grid grid-cols-1"></div>
                <div className="grid cols"></div>
                <div className="grid grid-cols-1"></div>
            </div>
        </div>
    );
};

export default Home;
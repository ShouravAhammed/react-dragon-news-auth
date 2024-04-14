import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <RightSideNav></RightSideNav>
            <LeftSideNav></LeftSideNav>
            <h3 className="text-3xl font-poppins">Home page</h3>
        </div>
    );
};

export default Home;
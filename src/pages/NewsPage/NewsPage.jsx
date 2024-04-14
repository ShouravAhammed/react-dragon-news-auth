import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const NewsPage = () => {

    const {_id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>{_id}</p>
                </div>
                <div className="col-span-1">
                        <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
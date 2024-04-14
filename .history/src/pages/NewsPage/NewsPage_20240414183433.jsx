import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const NewsPage = () => {

    const {_id} = useParams();

    return (
        <div>
            <Header></Header>
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
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RIghtSideNav/RightSideNav";


const NewsPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className="col-span-3">

                </div>
                <div className="col-span-1">
                        <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
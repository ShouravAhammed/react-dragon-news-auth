import { Link } from "react-router-dom";
import prop-types from 'prop-types'

const News = ({newDetail}) => {
    const {title, image_url, details, _id} = newDetail || {}
    return (
        <div>
            <div className="card w-full rounded-none">
            <h2 className="card-title">{title}</h2>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>Read More......</Link> </p> : <p>{details}</p>
        }
  </div>
</div>
        </div>
    );
};



export default News;
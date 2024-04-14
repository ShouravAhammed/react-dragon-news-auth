import { Link } from "react-router-dom";


const News = ({newDetail}) => {
    const {title, image_url, details} = newDetail || {}
    return (
        <div>
            <div className="card w-full rounded-none">
            <h2 className="card-title">{title}</h2>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 200 ? <p>{details.slice(0, 200)} <Link>Read More</Link> </p> : <p>{details</p>
        }
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default News;
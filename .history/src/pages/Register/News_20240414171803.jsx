

const News = ({newDetail}) => {
    const {title, rating, image_url} = newDetail || {}
    return (
        <div>
            <div className="card w-full rounded-none">
            <h2 className="card-title">{title}</h2>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default News;
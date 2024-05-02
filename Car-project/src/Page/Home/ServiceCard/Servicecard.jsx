function Servicecard({ singleData }) {
  console.log(singleData);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={singleData?.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">$  {singleData.price} </h2>
          <p>{singleData?.title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicecard;

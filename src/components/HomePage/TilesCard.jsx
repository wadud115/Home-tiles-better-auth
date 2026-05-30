import Image from 'next/image';
import React from 'react';

const TilesCard = ({product}) => {
    return (
        <div  className=" mx-auto grid grid-cols-2 max-w-7xl px-4 sm:px-6 lg:px-8">

           <div className="card m-5 w-96 shadow-sm">
  <figure>
   <Image src={product.image} alt={product.title} width={200} height={250}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className=' line-clamp-3'>{product.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default TilesCard;
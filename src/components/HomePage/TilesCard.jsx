import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({product}) => {
    return (
        <div  className=" mx-auto grid grid-cols-2 max-w-7xl px-4 sm:px-6 lg:px-8">

           <div className="card m-5 w-96 shadow-sm">
  <figure>
   <Image className=' m-3 rounded-xl' src={product.image} alt={product.title} width={300} height={350}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product.title}
      <div className="badge badge-secondary">{product.material}</div>
    </h2>
    <p className=' line-clamp-3'>{product.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${product.price}</div>
      <Link href={`/Product/${product.id}`}> <button className="btn bg-pink-600 ">View Details</button></Link>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default TilesCard;
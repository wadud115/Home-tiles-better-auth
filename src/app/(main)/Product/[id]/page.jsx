// import {  getTileDetailsById } from '@/lib/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { CiBookmark, CiShare2 } from 'react-icons/ci';
// import { FaEye, FaStar } from 'react-icons/fa';


// // export const metadata = {
// //   title: "Dragon News - Details",
// //   description: "Best News portal in Bangladesh",
// // };

// export const generateMetadata = async({params})=>{
//     const {id} = await params;
//     console.log('params data' , id)

//      const tile = await getTileDetailsById(id)
   
//      console.log('details', tile);

//     return{
//          title: tile.title
//     }


// }

// const TileDetails = async({params}) => {
//     const {id} = await params;
//     console.log('params', id )

//     const tile = await getTileDetailsById(id)
//     console.log('details', tile)

//     return (
//         <div className='max-w-4xl mx-auto mt-10'>
//             Details page

//                     <div class="$$card  mt-5 bg-slate-100  shadow-sm">

           







//   <div class="$$card-body p-5">
//      <div className='flex justify-between items-center p-5'>

//                 <div className='flex justify-between items-center gap-3.5'>
//                     <Image src={tile.image} alt={tile.name} width={40} height={40} className='rounded-full'></Image>


//                 <div>
//                     <h2 className='font-bold'>{tile.title}</h2>
//                     <p className='text-xs text-gray-500 font-bold'>data</p>
//                 </div>
//                 </div>

//                 <div className='flex gap-2'>
//                     <CiShare2 className='text-xl' />
//                     <CiBookmark className='text-xl' />
//                 </div>
//             </div>
//             <h2 className="$$card-title text-xl font-bold my-5">{tile.title}</h2>

//   <figure>
//     <Image
//       src={tile?.image}
//       alt={tile.name}
//       width={300}
//       height={300} className='w-full' />
//   </figure>

//   <div className='font-semibold  text-gray-500 mt-10'>
//     {tile.title}
//   </div>

//   {/* <div className='flex justify-between mt-5 items-center gap-2'>
//     <div className='flex justify-baseline items-center gap-2'>
//         <h2 className='flex justify-between mt-5 items-center gap-2' ><FaStar /> {news.rating.number}</h2>
//        <h2 className='flex justify-between mt-5 items-center gap-2'><FaEye />{news.total_view}</h2>
//     </div>

//     <Link href={`/category/${news.category_id}`}>
//     <button className='btn bg-purple-500'>Show All News in This Category</button>
//     </Link>
//   </div> */}
    
    
    
//   </div>
// </div>
            
//         </div>
//     );
// };

// export default TileDetails;


import React from 'react';

const TileDetails = () => {
    return (
        <div>

            hello
            
        </div>
    );
};

export default TileDetails;
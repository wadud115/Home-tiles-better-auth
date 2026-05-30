
// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, ArrowRight } from "lucide-react";

import TilesCard from "@/components/HomePage/TilesCard";

// Mock tiles data
// const allTiles = [
//   {
//     id: "1",
//     title: "Azure Mosaic",
//     image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=600&fit=crop",
//     creator: "Studio Ceramic",
//     style: "Mediterranean",
//   },
//   {
//     id: "2",
//     title: "Geometric Noir",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
//     creator: "Modern Tiles Co",
//     style: "Contemporary",
//   },
//   {
//     id: "3",
//     title: "Terracotta Dreams",
//     image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=600&fit=crop",
//     creator: "Artisan Workshop",
//     style: "Rustic",
//   },
//   {
//     id: "4",
//     title: "Marble Elegance",
//     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
//     creator: "Luxe Surfaces",
//     style: "Classic",
//   },
//   {
//     id: "5",
//     title: "Moroccan Star",
//     image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop",
//     creator: "Artisan Workshop",
//     style: "Moroccan",
//   },
//   {
//     id: "6",
//     title: "Hexagon Bliss",
//     image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop",
//     creator: "Geo Designs",
//     style: "Modern",
//   },
//   {
//     id: "7",
//     title: "Coastal Wave",
//     image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=600&fit=crop",
//     creator: "Ocean Studios",
//     style: "Coastal",
//   },
//   {
//     id: "8",
//     title: "Vintage Floral",
//     image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=600&fit=crop",
//     creator: "Heritage Tiles",
//     style: "Vintage",
//   },
//   {
//     id: "9",
//     title: "Industrial Concrete",
//     image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
//     creator: "Urban Surfaces",
//     style: "Industrial",
//   },
// ];

const TilseData = async()=>{

  const res = await fetch(`http://localhost:4000/product`);
  const data = await res.json();
  return data;
  

}


const AllTiles = async() => {

  const products = await  TilseData();
  console.log('products', products)

  


  // const {id, title } = Data;
  

  //    const [searchQuery, setSearchQuery] = useState("");

  // const filteredTiles = allTiles.filter((tile) =>
  //   tile.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

    return (
   <div>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Explore Our Collection
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse through our extensive gallery of premium tiles
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="relative flex-1">
                {/* <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /> */}
                {/* <Input
                  type="text"
                  placeholder="Search tiles by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 rounded-xl border-border bg-background pl-12 text-lg shadow-sm focus-visible:ring-primary"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    
    <div className="grid grid-cols-3 w-7xl mx-auto p-5 my-10"> 
      {
  products.map((product)=> <TilesCard  key={product.id} product={product}></TilesCard> )
}
    </div>
    </div>
    );
};

export default AllTiles;
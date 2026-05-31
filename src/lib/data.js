export const getTileDetailsById= async(tile_id)=>{

  const res = await fetch(` http://localhost:3000/Product/${tile_id}`)

  const data = await res.json();
  return data;

}
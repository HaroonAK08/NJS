import Btn from "./Btn";

async function productData() {
  const response = await fetch(
    "https://9024eb87-9a49-49e2-b7b3-746f0e3dba3c.mock.pstmn.io"
  );
  const data = await response.json();
  return data;
}

export default async function Page() {
  const products = await productData();
  console.log("<<<>><><", products);

  return (
    <>
      <div>
        {products.map((item, index) => (
          <div key={index}> 
            <h1>{item.name}</h1>
            <Btn price= {item.price}/>
          </div>
        ))}
      </div>
    </>
  );
}

export function generateMetadata(){
    return{
        title:"Productss kaa title",
        description: "product description"
    }
}
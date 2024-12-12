"use client"

export default function Btn({price}){
    console.log(price);
    function clickedd(){
        alert(`You clicked me ${price}`)
      }
    return (
        
        <>
        <div>
        <button className="bg-green-700 text-white p-2" onClick={clickedd} >Click me</button>
        </div>
        </>
    )
}
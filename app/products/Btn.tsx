"use client";

function Btn({ price, name }: { price: number; name: string }) {
  console.log(price);

  function clickedd() {
    alert(`Price of ${name} is ${price}`);
  }

  return (
    <>
      <div>
        <button
          className="bg-green-700 text-white p-2"
          onClick={clickedd}
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default Btn;

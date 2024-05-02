import { useEffect, useState } from "react";
import Servicecard from "../ServiceCard/Servicecard";

function Service() {
  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-center space-y-2 w-6/12">
          <h2 className="text-2xl">Service</h2>
          <h1 className="text-4xl">Our Service Area</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            consequuntur aperiam cumque veniam blanditiis nam assumenda earum
            inventore cum dicta.
          </p>
        </div>
      
      </div>
      <div className="grid grid-cols-3 gap-10 my-10">
          {data?.map((singleData,index) => <Servicecard singleData={singleData} key={index}></Servicecard>)}
        </div>
    </div>
  );
}

export default Service;

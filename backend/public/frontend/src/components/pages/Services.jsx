import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    const getServices = async () => {
      const request = await fetch("/services");
      const result = await request.json();
      console.log(result);
      if (!result.error) {
        setServices(result);
      }
    };
    getServices();
  }, []);

  return (
    <div>
      <h3>Services in your area</h3>

      {services &&
        services.map((serv) => (
          <ul key={serv._id}>
            <li> title: {serv.title}</li>
            <li> description : {serv.description} </li>
            <li>Price : {serv.price}</li>
            <li> name : {serv.userId.username} </li>
          </ul>
        ))}
    </div>
  );
};

export default Services;

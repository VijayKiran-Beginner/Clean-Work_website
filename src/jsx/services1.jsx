import React from "react";
import ServiceCard from "./servicecard";
import services from "./services";

function Services() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

export default Services;

import React from "react";
import "./ListPackage.css"
function ListPackages(){
    const packages = [
        {
          id: 1,
          title: "Package 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$1000",
        },
        {
          id: 2,
          title: "Package 2",
          description: "Nulla facilisi. Fusce sed felis non velit volutpat volutpat.",
          price: "$1500",
        },
      ];
      return(
        <div>
        <div className="package-cards">
          {packages.map((pack) => (
            <div className="package-card" key={pack.id}>
              <h3>{pack.title}</h3>
              <p>{pack.description}</p>
              <p>{pack.price}</p>
            </div>
          ))}
        </div>
        </div>
      )
}

export default ListPackages;
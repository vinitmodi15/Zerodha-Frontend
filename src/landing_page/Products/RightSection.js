import React from "react";

function RightSection({
  image,
  productName,
  productDescription,
  link,
  LinkName,
}) {
  return (
    <div className="container mt-5   " >
      <div className="row">
        <div className="col-4 mt-5 p-5 " style={{marginLeft:"5%"}}>
          <h4 style={{marginTop:"6rem"}}>{productName}</h4>
          <p >{productDescription}</p>
          <a href="link" >
            {LinkName}
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 "  >
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

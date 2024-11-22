import React from "react";
import "./Card.css"
import Link from "next/link";

const Card = ({ image, title, description, id }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className={"cardImage"} />
      <div className="cardContent">
        <h3 className={"cardTitle"}>{title}</h3>
        <p className={"cardDescription"}><div dangerouslySetInnerHTML={{__html:description}}></div></p>
        <Link href={`/blog/${id}`} className={"cardButton"}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

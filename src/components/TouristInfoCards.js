import React from "react";
import InfoCard from "./InfoCard";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <InfoCard
            img="https://www.visitscotland.com/es-es/blog/wp-content/uploads/sites/3/2022/05/202110Park_Circus_and_Kelvingrove_Park.jpg.jpg"
            city="Glassgow"
            url="http://www.peoplemakeglasgow.com"
          />
        </div>
        <div className="col-md-4">
          <InfoCard
            img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
            city="Manchester"
            url="http://www.visitmanchester.com"
          />
        </div>
        <div className="col-md-4">
          <InfoCard
            img="https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg"
            city="London"
            url="http://www.visitlondon.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const SwiperPic = () => {
  return (
    <div>
      <Carousel autoPlay interval="2000" transitionTime="2000" infiniteLoop>
                    <div>
                        <img src="https://media.istockphoto.com/photos/concept-picture-id1154231467" alt="" />
                        <p className="legend">My Photo 1</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
                        <p className="legend">My Photo 2</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <p className="legend">My Photo 3</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
                        <p className="legend">My Photo 4</p>
                    </div>
                    <div>
                        <img  src="https://media.istockphoto.com/photos/fine-art-school-artist-mix-acrylic-paint-palette-picture-id1159292218?k=20&m=1159292218&s=612x612&w=0&h=B1H7OUHFcewigd3U8nkMBzYUDmTdDPSoz3rQSsn-MBg=" alt="" />
                        <p className="legend">My Photo 5</p>
                    </div>
                </Carousel>
    </div>
  );
};

export default SwiperPic;

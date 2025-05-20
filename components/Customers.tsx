"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomerData } from "@/data";
import CustomerCard from "./CustomerCard";
import Heading from "./shared/Headings";

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "10%",
    focusOnSelect: true,
    easing: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <div>
      <Heading
        subtitle="We collaborate with a diverse range of industries, providing tailored solutions to meet their unique needs. Our expertise spans across multiple sectors, ensuring efficiency, innovation, and growth."
        title="Our Customers"
      />
      <div className="my-20 gap-16 w-full">
        <Slider {...settings}>
          {CustomerData.map((product) => (
            <div key={product.id} className="px-4">
              <CustomerCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Customers;

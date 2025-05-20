import { ProductCardProps } from "@/interface";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

const CustomerCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full rounded-lg overflow-hidden shadow-lg bg-gray-900">
      <Fade duration={1500}>
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Fade>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
        <div className="flex flex-col h-full justify-end gap-4">
          <Zoom duration={1000} delay={300}>
            <h2 className="head-text text-left text-white">{product.name}</h2>
          </Zoom>

          <Fade duration={1000} delay={700}>
            <p className="body-text text-white text-left">
              {product.description}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

import Link from "next/link";
import { Slide, Zoom } from "react-awesome-reveal";
import { IconType } from "react-icons";

interface Props {
  id: number;
  IconUrl: IconType; 
  product: string;
  description: string;
  href?: string;
  buttonText?: string
}

const MaterialCard: React.FC<Props> = ({
  id,
  IconUrl,
  product,
  description,
  href = "/materials",
  buttonText = "Download",
}) => {
  return (
    <div key={id} className="basis-1/3 flex flex-col items-start text-left">
      <Slide direction="down" duration={1000}>
        <div className="block-container w-24 h-24">
          <div className="btn-back rounded-xl btn-back-green" />
          <div className="btn-front rounded-xl flex justify-center items-center text-5xl text-black">
            <IconUrl />
          </div>
        </div>
      </Slide>

      <div className="mt-5 flex flex-col">
        <Zoom duration={1000} delay={500}>
          <h4 className="subhead-text">{product}</h4>
        </Zoom>
        <Slide direction="up" duration={1000}>
          <p className="mt-2 body-text text-left">{description}</p>
        </Slide>
        <Zoom duration={1000} delay={500}>
          <div className="mt-5">
            <Link href={href}>
              <button>{buttonText}</button>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default MaterialCard;
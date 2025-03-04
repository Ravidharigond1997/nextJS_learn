import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgDate: StaticImageData;
  imgAlt: String;
  title: String;
}
function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgDate}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-3xl text-white font-black">{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;

import Hero from "@/components/Hero";
import Image from "next/image";

export default function Performance() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute -z-10 inset-0">
        <Hero
          imgDate="/welding.jpg"
          imgAlt="welding"
          title="We serve high performance applications"
        />
      </div>
    </div>
  );
}

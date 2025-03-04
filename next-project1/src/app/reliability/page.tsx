import Hero from "@/components/Hero";
import Image from "next/image";

export default function Reliablity() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute -z-10 inset-0">
        <Hero
          imgDate="/reliability.jpg"
          imgAlt="reliability"
          title="We support professional hardworks"
        />
      </div>
    </div>
  );
}

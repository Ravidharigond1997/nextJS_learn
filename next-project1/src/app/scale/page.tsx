import Hero from "@/components/Hero";
import Image from "next/image";

export default function Scale() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute -z-10 inset-0">
        <Hero
          imgDate="/scale.jpg"
          imgAlt="reliability"
          title="Our focus is hardword and teamwork and success"
        />
      </div>
    </div>
  );
}

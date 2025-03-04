import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute -z-10 inset-0">
        <Hero
          imgDate="/car-factory.jpg"
          imgAlt="home-image"
          title="Professianal cloud hosting"
        />
      </div>
    </div>
  );
}

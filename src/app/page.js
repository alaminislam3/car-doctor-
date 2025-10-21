import ServiceSection from "./api/service/ServiceSection";
import { Hero } from "./Shared/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ServiceSection />
    </div>
  );
}

import BlogSection from "@/components/BlogSection";
import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/HeroTwo";
import Instasec from "@/components/Instasec";
import NewArrivals from "@/components/NewArrivals";
import ShortSec from "@/components/ShortSec";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroTwo />
      <ShortSec
        title="Top Picks For You"
        description="find a bright ideal to suit your taste with our great selection of suspension, floor and table lights"
      />
      <NewArrivals/>
      <BlogSection/>
      <Instasec/>
    </div>
  );
}

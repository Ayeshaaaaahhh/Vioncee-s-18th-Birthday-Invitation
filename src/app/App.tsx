import { HeroSection } from "./components/HeroSection";
import { EventDetailsSection } from "./components/EventDetailsSection";
import { CountdownSection } from "./components/CountdownSection";
import { DressCodeSection } from "./components/DressCodeSection";
import { GallerySection } from "./components/GallerySection";
import { TraditionsSection } from "./components/TraditionsSection";
import { MessageSection } from "./components/MessageSection";
import { RSVPSection } from "./components/RSVPSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F4D5] overflow-x-hidden">
      <HeroSection />
      <EventDetailsSection />
      <CountdownSection />
      <DressCodeSection />
      <GallerySection />       
      <TraditionsSection />
      <MessageSection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}

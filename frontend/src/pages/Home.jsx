import Hero        from '../components/Hero.jsx';
import Marquee     from '../components/Marquee.jsx';
import Programs    from '../components/Programs.jsx';
import WhyStudy    from '../components/WhyStudy.jsx';
import HallOfFame  from '../components/HallOfFame.jsx';
import GlobalTieUps from '../components/GlobalTieUps.jsx';
import Placements  from '../components/Placements.jsx';


export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Programs />
      <WhyStudy />
      <HallOfFame />
      <GlobalTieUps />
      <Placements />
    </>
  );
}


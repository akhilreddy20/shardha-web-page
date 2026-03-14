import Hero        from '../components/Hero.jsx';
import Marquee     from '../components/Marquee.jsx';
import Programs    from '../components/Programs.jsx';
import WhyStudy    from '../components/Whystudy.jsx';
import HallOfFame  from '../components/Halloffame.jsx';
import GlobalTieUps from '../components/GlobaltieUps.jsx';
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


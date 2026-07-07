import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import ProjectManagement from '../components/sections/ProjectManagement';
import Projects from '../components/sections/Projects';
import Industries from '../components/sections/Industries';
import Clients from '../components/sections/Clients';
import Commitment from '../components/sections/Commitment';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <ProjectManagement />
      {/* <Projects /> */}
      <Industries />
      <Clients />
      <Commitment />
      <Contact />
    </main>
  );
};

export default HomePage;

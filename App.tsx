import { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { RoadmapSection } from './RoadmapSection';
import { QuizSection } from './QuizSection';
import { ProgressSection } from './ProgressSection';
import { InterviewSection } from './InterviewSection';
import { NavSection } from './types';

export default function App() {
  const [active, setActive] = useState<NavSection>('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [active]);

  const renderSection = () => {
    switch (active) {
      case 'Home':      return <HeroSection setActive={setActive} />;
      case 'Roadmap':   return <RoadmapSection />;
      case 'Quiz':      return <QuizSection />;
      case 'Progress':  return <ProgressSection />;
      case 'Interview': return <InterviewSection />;
      default:          return <HeroSection setActive={setActive} />;
    }
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <NavBar active={active} setActive={setActive} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

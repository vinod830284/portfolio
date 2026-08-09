import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { QuickStats } from './sections/QuickStats/QuickStats';
import { About } from './sections/About/About';
import { Experience } from './sections/Experience/Experience';
import { Highlights } from './sections/Highlights/Highlights';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Philosophy } from './sections/Philosophy/Philosophy';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './sections/Footer/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0D10] text-slate-900 dark:text-[#F5F7FA] selection:bg-accent-blue selection:text-white transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <QuickStats />
        <About />
        <Experience />
        <Highlights />
        <Skills />
        <Projects />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

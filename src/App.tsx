/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RunningPipeline from './components/RunningPipeline';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DataPipelineBackground from './components/DataPipelineBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-accent/30 selection:text-accent relative">
      <DataPipelineBackground />
      <Navbar />
      <main>
        <Hero />
        <RunningPipeline />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

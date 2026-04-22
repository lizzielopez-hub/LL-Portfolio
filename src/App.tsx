/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Background from './components/Background';
import CarBackground from './components/CarBackground';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [catsOn, setCatsOn] = useState(false);
  const [carsOn, setCarsOn] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-purple/30">
      {catsOn && <Background />}
      {carsOn && <CarBackground />}
      <Navigation
        catsOn={catsOn} onToggleCats={() => setCatsOn(v => !v)}
        carsOn={carsOn} onToggleCars={() => setCarsOn(v => !v)}
      />

      <main>
        <Hero />
        <div className="relative">
          <Sections />
        </div>
      </main>

      <Footer />
    </div>
  );
}

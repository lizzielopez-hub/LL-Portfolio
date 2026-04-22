const cats = [
  { src: '/cat_walking.png',     top: '8%',  left: '5%',  size: 120, peak: 0.30, motionAnim: 'catWalk', motionDur: '14s', pulseDelay: '0s',   pulseDur: '5s'  },
  { src: '/cat_sitting.webp',    top: '20%', left: '78%', size: 100, peak: 0.25, motionAnim: 'catSit',  motionDur: '10s', pulseDelay: '2.2s', pulseDur: '6s'  },
  { src: '/cat-licking-paw.svg', top: '55%', left: '12%', size: 110, peak: 0.28, motionAnim: 'catLick', motionDur: '8s',  pulseDelay: '1s',   pulseDur: '4.5s'},
  { src: '/cat_walking.png',     top: '72%', left: '65%', size: 90,  peak: 0.22, motionAnim: 'catWalk', motionDur: '16s', pulseDelay: '5s',   pulseDur: '7s'  },
  { src: '/cat_sitting.webp',    top: '40%', left: '45%', size: 80,  peak: 0.20, motionAnim: 'catSit',  motionDur: '12s', pulseDelay: '3.5s', pulseDur: '5.5s'},
  { src: '/cat-licking-paw.svg', top: '85%', left: '30%', size: 100, peak: 0.26, motionAnim: 'catLick', motionDur: '9s',  pulseDelay: '7s',   pulseDur: '4s'  },
  { src: '/cat_walking.png',     top: '15%', left: '52%', size: 70,  peak: 0.18, motionAnim: 'catWalk', motionDur: '18s', pulseDelay: '4s',   pulseDur: '8s'  },
  { src: '/cat_sitting.webp',    top: '62%', left: '88%', size: 95,  peak: 0.22, motionAnim: 'catSit',  motionDur: '11s', pulseDelay: '6s',   pulseDur: '5s'  },
];

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {cats.map((cat, i) => (
        /* Wrapper handles the motion (transform only) */
        <div
          key={i}
          style={{
            position: 'absolute',
            top: cat.top,
            left: cat.left,
            width: cat.size,
            animationName: cat.motionAnim,
            animationDuration: cat.motionDur,
            animationDelay: cat.pulseDelay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        >
          {/* Inner img handles opacity pulse + purple glow outline */}
          <img
            src={cat.src}
            alt=""
            width={cat.size}
            style={{
              display: 'block',
              // invert → sepia+hue-rotate → purple outlines; drop-shadow adds glow
              filter: [
                'invert(1)',
                'contrast(80)',   // crush anti-aliasing grays → pure black so screen blend removes them
                'sepia(1)',
                'hue-rotate(245deg)',
                'saturate(5)',
                'brightness(1.6)',
                'drop-shadow(0 0 7px rgba(168,85,247,0.85))',
              ].join(' '),
              // screen blend: black bg of inverted image vanishes, only outlines show
              mixBlendMode: 'screen',
              animationName: 'catPulse',
              animationDuration: cat.pulseDur,
              animationDelay: cat.pulseDelay,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              opacity: 0,
              ['--peak' as string]: cat.peak,
            }}
          />
        </div>
      ))}
    </div>
  );
}

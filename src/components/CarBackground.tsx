const cars = [
  { src: '/Right_Facing_Car.png',  top: '6%',  left: '3%',  size: 160, peak: 0.30, motionAnim: 'carDrive',  motionDur: '12s', pulseDelay: '0s',   pulseDur: '5s'  },
  { src: '/Front_Facing_Car.png',  top: '22%', left: '80%', size: 110, peak: 0.24, motionAnim: 'carIdle',   motionDur: '8s',  pulseDelay: '2s',   pulseDur: '6s'  },
  { src: '/Left_Facing_Car.png',   top: '50%', left: '60%', size: 150, peak: 0.28, motionAnim: 'carDrive',  motionDur: '15s', pulseDelay: '1s',   pulseDur: '4.5s'},
  { src: '/Right_Facing_Car.png',  top: '70%', left: '5%',  size: 130, peak: 0.22, motionAnim: 'carDrive',  motionDur: '18s', pulseDelay: '4s',   pulseDur: '7s'  },
  { src: '/Front_Facing_Car.png',  top: '38%', left: '40%', size: 90,  peak: 0.20, motionAnim: 'carIdle',   motionDur: '10s', pulseDelay: '3.5s', pulseDur: '5.5s'},
  { src: '/Left_Facing_Car.png',   top: '85%', left: '55%', size: 140, peak: 0.26, motionAnim: 'carDrive',  motionDur: '14s', pulseDelay: '6s',   pulseDur: '4s'  },
  { src: '/Right_Facing_Car.png',  top: '14%', left: '50%', size: 100, peak: 0.18, motionAnim: 'carDrive',  motionDur: '20s', pulseDelay: '5s',   pulseDur: '8s'  },
  { src: '/Front_Facing_Car.png',  top: '60%', left: '85%', size: 105, peak: 0.22, motionAnim: 'carIdle',   motionDur: '9s',  pulseDelay: '7s',   pulseDur: '5s'  },
];

export default function CarBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {cars.map((car, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: car.top,
            left: car.left,
            width: car.size,
            animationName: car.motionAnim,
            animationDuration: car.motionDur,
            animationDelay: car.pulseDelay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        >
          <img
            src={car.src}
            alt=""
            width={car.size}
            style={{
              display: 'block',
              filter: [
                'invert(1)',
                'contrast(80)',
                'sepia(1)',
                'hue-rotate(245deg)',
                'saturate(5)',
                'brightness(1.6)',
                'drop-shadow(0 0 7px rgba(168,85,247,0.85))',
              ].join(' '),
              mixBlendMode: 'screen',
              animationName: 'catPulse',
              animationDuration: car.pulseDur,
              animationDelay: car.pulseDelay,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              opacity: 0,
              ['--peak' as string]: car.peak,
            }}
          />
        </div>
      ))}
    </div>
  );
}

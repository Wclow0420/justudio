import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Percent, Zap } from 'lucide-react';
import logoDark from '../asset/logo-dark.png';
import { AnimatedCounter } from './AnimatedCounter';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Award, number: '30+', label: 'Projects Completed' },
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Percent, number: '50%', label: 'Below Market Price' },
    { icon: Zap, number: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#fff1cc' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="flex flex-col sm:flex-row items-center justify-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#0a3670' }}
          >
            <span>About</span>
            <img
              src={logoDark}
              alt="Justudio Logo"
              className="h-16 sm:h-20 md:h-24 w-auto max-h-28 mt-2 sm:mt-0"
            />
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#dcb417' }}></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#0a3670' }}>
            We are a dedicated design studio focused on crafting compelling visual experiences. 
            From eye‑catching posters and elegant menu designs to impactful signboards, memorable logos, 
            and high-performing websites – we bring creativity, speed, and professionalism to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: '#dcb417' }}
              >
                <stat.icon size={32} color="#0a3670" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#0a3670' }}>
                {isInView ? (
                  stat.number.endsWith('%')
                    ? <span>{stat.number}</span>
                    : <AnimatedCounter 
                        end={parseInt(stat.number)} 
                        suffix={stat.number.includes('+') ? '+' : ''}
                        delay={index * 0.3}
                        duration={2.5}
                      />
                ) : (
                  <span>{stat.number.includes('%') ? '0%' : '0+'}</span>
                )}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

  {/* Removed CTA button as requested */}
      </div>
    </section>
  );
}
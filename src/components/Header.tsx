import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoLight from '../asset/logo.png';
import logoDark from '../asset/logo-dark.png';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function Header({ activeSection, onSectionClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const spring = { type: 'spring', stiffness: 220, damping: 28, mass: 0.6 };
  const fastSpring = { type: 'spring', stiffness: 300, damping: 30, mass: 0.5 };

  const menuItems = [
    { id: 'categories', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Help Center' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ...spring, stiffness: 260 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        layout
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
          margin: isScrolled ? '12px auto' : '0px',
          borderRadius: isScrolled ? '50px' : '0px',
          boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.1)' : '0 0 0 rgba(0,0,0,0)',
          border: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '0px solid transparent',
          width: isScrolled ? 'fit-content' : '100%',
        }}
        transition={{
          layout: { ...spring },
          backgroundColor: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          boxShadow: { duration: 0.4 },
          borderRadius: { ...spring },
          width: { ...spring },
        }}
        className="mx-auto"
      >
        <motion.div
          layout
            animate={{
              paddingLeft: isScrolled ? '1.75rem' : '1.5rem',
              paddingRight: isScrolled ? '1.75rem' : '1.5rem',
              maxWidth: isScrolled ? 'fit-content' : '100%',
              margin: '0 auto',
            }}
            transition={{ layout: { ...spring }, paddingLeft: { ...fastSpring }, paddingRight: { ...fastSpring } }}
            className={`${isScrolled ? '' : 'container'} mx-auto lg:px-12`}
        >
          <motion.div
            layout="position"
            animate={{ gap: isScrolled ? '1.5rem' : '2rem' }}
            transition={{ gap: { ...spring } }}
            className={`flex items-center h-16 ${isScrolled ? '' : 'justify-between'}`}
          >
            {/* Logo Image */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => onSectionClick('home')}
              className="flex items-center cursor-pointer focus:outline-none"
              style={{ padding: 0, background: 'transparent' }}
            >
              <motion.img
                key={isScrolled ? 'logo-dark' : 'logo-light'}
                src={isScrolled ? logoDark : logoLight}
                alt="Justudio Logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-10 w-auto select-none"
                draggable={false}
              />
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ color: activeSection === item.id ? '#dcb417' : (isScrolled ? '#0a3670' : 'white') }}
                  transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
                  className={`transition-all duration-200 ${activeSection === item.id ? 'font-semibold' : 'hover:opacity-70'}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Contact Us Button */}
            <motion.button
              onClick={() => onSectionClick('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                backgroundColor: isScrolled ? '#0a3670' : 'transparent',
                color: 'white',
                border: isScrolled ? '2px solid #0a3670' : '2px solid rgba(255,255,255,0.3)',
              }}
              transition={{ ...spring, backgroundColor: { duration: 0.35 } }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200"
            >
              <span>Contact Us</span>
              <motion.div
                animate={{ backgroundColor: isScrolled ? 'rgba(255,255,255,0.2)' : 'rgba(10,54,112,0.1)' }}
                transition={{ duration: 0.35 }}
                className="w-5 h-5 rounded flex items-center justify-center"
              >
                <div className="w-2 h-3 border-r-2 border-b-2 border-current transform rotate-45 -translate-y-0.5" />
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(o => !o)}
              animate={{ color: isScrolled ? '#0a3670' : 'white' }}
              transition={{ duration: 0.3 }}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t mx-6 rounded-b-2xl shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            {menuItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => { onSectionClick(item.id); setMobileMenuOpen(false); }}
                whileHover={{ x: 10 }}
                className={`block w-full text-left py-3 transition-colors duration-200 ${activeSection === item.id ? 'font-semibold' : ''}`}
                style={{ color: activeSection === item.id ? '#dcb417' : '#0a3670' }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => { onSectionClick('contact'); setMobileMenuOpen(false); }}
              whileHover={{ x: 10 }}
              className="block w-full text-left py-3 font-medium border-t border-gray-200 mt-2 pt-4"
              style={{ color: '#0a3670' }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
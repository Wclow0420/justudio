import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12" style={{ backgroundColor: '#fff1cc' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-all duration-200 hover:shadow-lg"
            style={{ backgroundColor: '#0a3670' }}
          >
            <ArrowUp size={24} color="white" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0a3670' }}>
              Let's Create Something Amazing
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Ready to bring your vision to life? Let's discuss your next design project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t pt-8"
            style={{ borderColor: '#0a3670' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span style={{ color: '#0a3670' }}>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} color="#dcb417" fill="#dcb417" />
                </motion.div>
                <span style={{ color: '#0a3670' }}>by Justudio</span>
              </div>
              
              <p className="text-sm text-gray-600">
                © 2025 Justudio. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
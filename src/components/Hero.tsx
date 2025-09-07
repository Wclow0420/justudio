import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Award, Users, CheckCircle, Zap, Palette, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3670] via-[#0a3670] to-[#dcb417]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8"
          >
            {/* Award Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-2 bg-[#fff1cc] text-[#0a3670] px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-medium">Top Rated</span>
              </div>
              <div className="flex items-center gap-1 bg-[#dcb417] text-[#0a3670] px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">4.9</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              The #1 design studio to create 
              <span className="block" style={{ color: '#dcb417' }}>stress-free</span>
              <span className="block">projects</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 leading-relaxed max-w-lg"
            >
              From concept to completion, we specialize in poster design, menu creation, signboards, logos, and websites. Professional design solutions that bring your vision to life.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <AnimatedCounter 
                  end={30} 
                  suffix="+" 
                  delay={0.8}
                  className="text-3xl font-bold text-[#dcb417]"
                />
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={98} 
                  suffix="%" 
                  delay={1.0}
                  className="text-3xl font-bold text-[#dcb417]"
                />
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={24} 
                  suffix="h" 
                  delay={1.2}
                  className="text-3xl font-bold text-[#dcb417]"
                />
                <div className="text-sm text-gray-300">Delivery</div>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                aria-label="Go to Contact section"
                className="px-8 py-4 bg-[#dcb417] text-[#0a3670] rounded-xl font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById('categories');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                aria-label="Go to Services section"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#0a3670] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Palette className="w-5 h-5" />
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Device */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 bg-gray-800 rounded-[2rem] p-2 shadow-2xl max-w-sm w-full"
            >
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1700887937204-69f8b8400ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGVkaXRvcnxlbnwxfHx8fDE3NTcyMzE0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design Editor Interface"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
            
            {/* Floating Notification Cards */}
            
            {/* Project Completed Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-12 -left-16 lg:-left-16 md:-left-8 sm:left-2 sm:-top-6 bg-white rounded-2xl p-4 shadow-lg max-w-[200px] sm:max-w-[160px] z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Project Completed!</div>
                  <div className="text-sm text-gray-600">Logo design for TechCorp</div>
                </div>
              </div>
            </motion.div>

            {/* Client Love Card - Top Left, Lower - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute top-16 -left-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-4 shadow-lg max-w-[240px] z-20 hidden lg:block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="font-semibold">Client Love</span>
                </div>
                <div className="text-sm">"Exceeded all expectations! The poster design was perfect."</div>
                <div className="text-xs opacity-90">- Mike, Event Organizer</div>
              </div>
            </motion.div>

            {/* Premium Quality Card - Top Right - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="absolute -top-4 -right-20 bg-gradient-to-r from-[#0a3670] to-blue-800 text-white rounded-2xl p-4 shadow-lg max-w-[220px] z-20 hidden lg:block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#dcb417]" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
                <div className="text-sm opacity-90">"The website design boosted our sales by 40%!"</div>
                <div className="text-xs opacity-75">- Lisa, Business Owner</div>
              </div>
            </motion.div>

            {/* Client Review Card - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute top-1/3 -right-16 lg:-right-16 md:-right-8 sm:right-2 bg-white rounded-2xl p-4 shadow-lg max-w-[220px] sm:max-w-[160px] z-20"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="font-semibold text-gray-800">"Amazing work!"</div>
                <div className="text-sm text-gray-600">Sarah from Modern Cafe</div>
              </div>
            </motion.div>

            {/* Quick Response Card - Right Side, Lower - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="absolute bottom-1/3 -right-12 bg-[#fff1cc] rounded-2xl p-4 shadow-lg max-w-[200px] z-20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dcb417] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#0a3670]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0a3670]">Quick Response</div>
                  <div className="text-sm text-gray-700">Got back in 2 hours!</div>
                </div>
              </div>
            </motion.div>

            {/* Express Delivery Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="absolute -bottom-6 -right-8 lg:-right-8 md:-right-4 sm:right-2 sm:-bottom-2 bg-green-500 text-white rounded-2xl p-3 shadow-lg max-w-[180px] sm:max-w-[140px] z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Express Delivery</div>
                  <div className="text-xs opacity-90">Delivered in 12 hours!</div>
                </div>
              </div>
            </motion.div>

            {/* New Client Card - Bottom Left - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute -bottom-12 -left-12 bg-[#0a3670] text-white rounded-2xl p-4 shadow-lg max-w-[200px] z-20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dcb417] rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#0a3670]" />
                </div>
                <div>
                  <div className="font-semibold">New Client</div>
                  <div className="text-sm text-gray-300">Restaurant menu design</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-8 w-6 h-6 bg-[#fff1cc] rounded-full opacity-60"
            />
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-16 right-16 w-4 h-4 bg-[#dcb417] rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
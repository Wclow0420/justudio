import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FileImage, Menu as MenuIcon, MapPin, Palette, Globe, Camera } from 'lucide-react';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export function Categories({ onCategorySelect }: CategoriesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Dynamically gather image counts from local Done folders
  // Vite import.meta.glob will inline these at build time
  // Updated paths: assets moved under src/asset
  const posterAssets = (import.meta as any).glob('../asset/Poster/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });
  const menuAssets = (import.meta as any).glob('../asset/Menu/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });
  const signboardAssets = (import.meta as any).glob('../asset/Signboard/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });
  const logoAssets = (import.meta as any).glob('../asset/logo/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });
  const websiteAssets = (import.meta as any).glob('../asset/Website/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });
  const shootingAssets = (import.meta as any).glob('../asset/Shooting/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true });

  const categories = [
    {
      id: 'poster',
      name: 'Poster',
      icon: FileImage,
      description: 'Eye-catching poster designs for events, promotions, and campaigns',
      color: '#0a3670',
  count: String(Object.keys(posterAssets).length)
    },
    {
      id: 'menu',
      name: 'Menu',
      icon: MenuIcon,
      description: 'Elegant menu designs for restaurants, cafes, and food businesses',
      color: '#dcb417',
  count: String(Object.keys(menuAssets).length)
    },
    {
      id: 'signboard',
      name: 'Signboard',
      icon: MapPin,
      description: 'Professional signboard designs for storefronts and businesses',
      color: '#0a3670',
  count: String(Object.keys(signboardAssets).length)
    },
    {
      id: 'logo',
      name: 'Logo',
      icon: Palette,
      description: 'Memorable logo designs that represent your brand identity',
      color: '#dcb417',
  count: String(Object.keys(logoAssets).length)
    },
    {
      id: 'website',
      name: 'Website',
      icon: Globe,
      description: 'Modern website designs that engage and convert visitors',
      color: '#0a3670',
  count: String(Object.keys(websiteAssets).length || 0)
    },
    {
      id: 'shooting',
      name: 'Shooting',
      icon: Camera,
      description: 'Professional photo shooting & art direction for your brand',
      color: '#dcb417',
  count: String(Object.keys(shootingAssets).length || 0)
    }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a3670' }}>
            Our Design Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#dcb417' }}></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Explore our diverse portfolio across different design categories. 
            Click any category to view featured work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            // Different gradient styles for each category
            const gradients = [
              'linear-gradient(135deg, #0a3670 0%, #dcb417 100%)', // Poster
              'linear-gradient(45deg, #dcb417 0%, #fff1cc 100%)', // Menu
              'linear-gradient(225deg, #fff1cc 0%, #0a3670 100%)', // Signboard
              'linear-gradient(315deg, #0a3670 0%, #fff1cc 50%, #dcb417 100%)', // Logo
              'linear-gradient(180deg, #dcb417 0%, #0a3670 100%)', // Website
              'linear-gradient(90deg, #0a3670 0%, #dcb417 50%, #0a3670 100%)' // Shooting
            ];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.06,
                  y: -12,
                  boxShadow: '0 25px 55px rgba(0,0,0,0.18)',
                  transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategorySelect(category.id)}
                className="group cursor-pointer rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden aspect-[3/4]"
                style={{ 
                  background: gradients[index],
                }}
              >
                {/* Icon in top left */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <category.icon size={24} color="white" />
                </motion.div>

                {/* Main content - centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.name.toUpperCase()}
                  </motion.h3>
                  <div className="w-14 h-0.5 bg-white mb-3"></div>
                  <p className="text-white text-xs font-semibold tracking-wide uppercase">
                    Design Portfolio
                  </p>
                  <div className="mt-6">
                    <span className="text-xs font-semibold px-3 py-1.5 bg-white/25 backdrop-blur-sm text-white rounded-full">
                      {category.count} Projects
                    </span>
                  </div>
                </div>

                {/* Subtle overlay for better text readability */}
                {/* Book side effect and overlay */}
                <div className="absolute inset-0">
                  {/* Book spine/side on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-black/30 rounded-l-3xl"></div>
                  
                  {/* Book edge highlight */}
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/10 to-white/5"></div>
                  
                  {/* Main overlay for text readability */}
                  {/* Category-specific background image with low opacity */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{
                      backgroundImage: `url(${ 
                        index === 0 ? 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixlib=rb-4.1.0&utm_source=figma&utm_medium=referral' : // Poster (Food-themed)
                        index === 1 ? 'https://images.unsplash.com/photo-1740396740013-e5636e22c9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWVudSUyMGxheW91dHxlbnwxfHx8fDE3NTcyMzAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' : // Menu
                        index === 2 ? 'https://images.unsplash.com/photo-1730307401824-aea4887b60bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNpZ25ib2FyZCUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzU3MjMwMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' : // Signboard
                        index === 3 ? 'https://images.unsplash.com/photo-1670341445620-cc35bf57fe56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU3MTc1MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' : // Logo
                        index === 4 ? 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzIzMDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' : // Website
                        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NTcyMzE5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' // Shooting
                      })`
                    }}
                  ></div>
                  
                  {/* Main overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent bg-[length:100%_70%] bg-bottom bg-no-repeat"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We also take on custom projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2"
            style={{ 
              borderColor: '#dcb417',
              color: '#dcb417',
              backgroundColor: 'transparent'
            }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#dcb417';
              e.currentTarget.style.color = '#0a3670';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#dcb417';
            }}
          >
            Contact Us for Custom Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
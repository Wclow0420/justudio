import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Eye, ExternalLink, X } from 'lucide-react';

interface PortfolioProps {
  selectedCategory?: string;
}

export function Portfolio({ selectedCategory }: PortfolioProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Dynamic local assets per category (Done folders)
  const localGlobs = useMemo(() => ({
    poster: (import.meta as any).glob('../asset/Poster/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true }),
    menu: (import.meta as any).glob('../asset/Menu/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true }),
    logo: (import.meta as any).glob('../asset/logo/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true }),
    signboard: (import.meta as any).glob('../asset/Signboard/Done/*.{png,jpg,jpeg,JPEG,PNG,JPG}', { eager: true }),
  }), []);

  const projects = useMemo(() => {
    const result: any[] = [];
    let idCounter = 1;
    Object.entries(localGlobs).forEach(([category, files]) => {
      const fileMap = files as Record<string, unknown>;
      Object.keys(fileMap).forEach((path) => {
        const fileName = path.split('/').pop() || '';
        const title = fileName.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
        // Each eager module export might be { default: 'url' }
        const mod: any = (fileMap as any)[path];
        const imageUrl = typeof mod === 'string' ? mod : (mod?.default || path);
        result.push({
          id: idCounter++,
          title,
          category,
          image: imageUrl,
          description: ''
        });
      });
    });
    return result;
  }, [localGlobs]);

  const filteredProjectsAll = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const [showAll, setShowAll] = useState(false);
  const filteredProjects = showAll ? filteredProjectsAll : filteredProjectsAll.slice(0,5);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a3670' }}>
            {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Portfolio` : 'Featured Portfolio'}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#dcb417' }}></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            {selectedCategory 
              ? `Explore my ${selectedCategory} design projects that showcase creativity and professionalism.`
              : 'A curated selection of my best work across all design categories.'
            }
          </p>
        </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Hover overlay (desktop only) with single eye icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 hidden md:flex items-center justify-center bg-black/50 transition-opacity"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/95 rounded-full text-gray-800 shadow-lg"
                  >
                    <Eye size={22} />
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="font-bold mb-2 group-hover:text-[#dcb417] transition-colors duration-200" style={{ color: '#0a3670' }}>
                  {project.title}
                </h3>
                {/* Description removed per requirement */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#dcb41720', color: '#dcb417' }}>
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjectsAll.length > 5 && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: '#0a3670', color: 'white' }}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.button>
          </div>
        )}

        {/* Modal for project details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-4 -right-4 p-3 bg-white/90 rounded-full hover:bg-white shadow-lg transition-colors duration-200"
              >
                <X size={20} />
              </button>
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}

  {/* Removed old category-specific View All button in favor of Show More */}
      </div>
    </section>
  );
}
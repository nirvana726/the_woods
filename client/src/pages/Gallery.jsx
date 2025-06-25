import { useState } from 'react';
import PageHero from '../components/common/PageHero';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Static Image Data
const images = [
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', title: 'Resort Exterior' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80', title: 'Lobby & Lounge' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', title: 'Poolside View' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', title: 'Deluxe Room' },
  { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80', title: 'Hiking Trail' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80', title: 'Mountain Scenery' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', title: 'Camping Site' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', title: 'Local Cuisine' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', title: 'Yoga Session' },
];

export default function Gallery() {
  const [layout, setLayout] = useState('masonry');
  const [selectedImage, setSelectedImage] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Our Gallery"
        subtitle="Capture the beauty and essence of The Woods"
        bgImage="https://images.unsplash.com/photo-1501117716987-c8c394bb29df?auto=format&fit=crop&w=1200&q=80"
      />

      <div className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4 flex justify-center items-center gap-4">
          <button onClick={() => setLayout('masonry')} className={`px-4 py-2 rounded-md text-sm font-semibold transition ${layout === 'masonry' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            Masonry
          </button>
          <button onClick={() => setLayout('grid')} className={`px-4 py-2 rounded-md text-sm font-semibold transition ${layout === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            Grid
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {layout === 'masonry' ? (
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {images.map((image, i) => (
              <motion.div
                key={i}
                className="mb-4 group relative cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                  {image.title}
                </div>
              </motion.div>
            ))}
          </Masonry>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, i) => (
              <motion.div
                key={i}
                className="aspect-square group relative cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                  {image.title}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img src={selectedImage} className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} />
            <button className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

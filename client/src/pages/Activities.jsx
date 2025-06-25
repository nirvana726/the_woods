import { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { FaHiking, FaSeedling, FaUsers, FaGlassCheers, FaCamera } from 'react-icons/fa';

// --- Data ---
// We add a 'category' property to each activity
const allActivities = [
  {
    title: "Hiking and Nature Trails",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    description: "Discover the unparalleled beauty of Dolakha's landscapes with our guided hiking trails.",
  },
  {
    title: "Exploring the Local Culture",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1534532787225-b4b3e640b3de?auto=format&fit=crop&w=600&q=80",
    description: "Immerse yourself in the rich traditions and vibrant local life of the Charikot region.",
  },
  {
    title: "Agriculture Camp",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1597916819322-19297071a153?auto=format&fit=crop&w=600&q=80",
    description: "Get hands-on experience with sustainable and traditional farming practices.",
  },
  {
    title: "Banquet Service",
    category: "Recreation",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    description: "Celebrate your special moments surrounded by the serene beauty of nature.",
  },
  {
    title: "Wellness & Yoga",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    description: "Rejuvenate your mind and body with our guided wellness and yoga sessions.",
  },
  {
    title: "Mountain Photography",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    description: "Capture the majestic beauty of the Himalayas with our photography tours.",
  },
];

const categories = ["All", "Adventure", "Nature", "Cultural", "Wellness", "Recreation"];

// --- Component ---
export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredActivities =
    selectedCategory === "All"
      ? allActivities
      : allActivities.filter((activity) => activity.category === selectedCategory);

  return (
    <div className="bg-white">
      <PageHero
        title="Unforgettable Activities"
        subtitle="Adventures & Experiences"
        bgImage="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Intro Text Section */}
      <section className="py-12 text-center bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Discover the beauty of Charikot through our carefully curated experiences. From thrilling adventures to peaceful cultural immersions.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="py-8 sticky top-20 bg-white z-10 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <div key={index} className="group rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <a href="#" className="font-semibold text-blue-600 hover:underline">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Book your stay with us and experience the perfect blend of luxury and adventure in the heart of Charikot.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/booking" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Your Stay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

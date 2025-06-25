import { FaBed, FaWifi, FaMountain } from 'react-icons/fa';

const featuredRooms = [
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    title: "Deluxe Mountain View",
    description: "Spacious room with a private balcony offering breathtaking mountain views.",
    features: [
      { icon: <FaBed />, text: "King Bed" },
      { icon: <FaWifi />, text: "Free WiFi" },
      { icon: <FaMountain />, text: "Mountain View" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Forest Cabin",
    description: "A rustic and cozy cabin nestled deep within the serene forest.",
    features: [
      { icon: <FaBed />, text: "Queen Bed" },
      { icon: <FaWifi />, text: "Free WiFi" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    title: "Family Suite",
    description: "Perfect for families, with multiple beds and ample space for everyone.",
    features: [
      { icon: <FaBed />, text: "2 Queen Beds" },
      { icon: <FaWifi />, text: "Free WiFi" },
    ],
  },
];

export default function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Luxury Rooms & Villas
          </h2>
          <p className="text-gray-600 mt-2">Experience comfort and elegance in our thoughtfully designed accommodations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={room.image} alt={room.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <a href="/rooms" className="text-blue-600 font-semibold hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/rooms" className="inline-block bg-white border-green-400 text-green-400 font-semibold px-8 py-3 rounded hover:bg-green-700 shadow transition">
            Explore All Accommodations
          </a>
        </div>
      </div>
    </section>
  );
}

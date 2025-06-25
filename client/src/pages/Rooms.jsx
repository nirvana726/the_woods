import PageHero from '../components/common/PageHero';
import { FaWifi, FaMountain, FaUserFriends, FaBed, FaTv, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Static data for the rooms - later, this will come from your backend
const roomsData = [
  {
    name: 'Family Room',
    price: '3000',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=800&q=80',
    maxGuests: 4,
    size: 'Spacious',
    amenities: [
      { icon: <FaWifi />, text: 'Free WiFi' },
      { icon: <FaMountain />, text: 'Mountain View' },
      { icon: <FaTv />, text: 'TV' },
      { icon: <FaFire />, text: 'Fireplace' },
    ],
  },
  {
    name: 'King Size Room',
    price: '2500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    maxGuests: 2,
    size: 'Spacious',
    amenities: [
      { icon: <FaWifi />, text: 'Free WiFi' },
      { icon: <FaMountain />, text: 'Mountain View' },
      { icon: <FaBed />, text: 'King Bed' },
    ],
  },
  {
    name: 'Triple Sharing Room',
    price: '2800',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    maxGuests: 3,
    size: 'Spacious',
    amenities: [
      { icon: <FaWifi />, text: 'Free WiFi' },
      { icon: <FaMountain />, text: 'Forest View' },
      { icon: <FaUserFriends />, text: 'Triple Beds' },
      { icon: <FaTv />, text: 'TV' },
    ],
  },
];

// Data for the "Why Choose" section
const whyChooseUs = [
    { title: 'Stunning Views', description: 'Every room offers breathtaking views of the surrounding mountains and forests.' },
    { title: 'Nature Integration', description: 'Thoughtfully designed to harmonize with the natural environment.' },
    { title: 'Luxury Amenities', description: 'Premium furnishings and modern amenities for ultimate comfort.' },
    { title: 'Spacious Parking', description: 'Ample parking space for guests with vehicles, ensuring easy access.' },
];

export default function Rooms() {
  return (
    <div className="bg-white">
      {/* 1. Use the new PageHero component */}
      <PageHero
        title="Luxury Rooms & Villas"
        subtitle="Our Accommodations"
        bgImage="https://images.unsplash.com/photo-1560200353-ce0a76b1d425?auto=format&fit=crop&w=1200&q=80"
      />

      {/* 2. Room Listing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-24">
          {roomsData.map((room, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className={`relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-md">
                  NPR {room.price}
                </div>
              </div>

              {/* Details Column */}
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <span className="text-sm font-semibold text-blue-500 mb-1">FEATURED</span>
                <h2 className="text-3xl font-bold mb-4">{room.name}</h2>
                <div className="flex items-center space-x-8 mb-6 text-gray-600">
                  <span><strong className="text-gray-800">Max Guests:</strong> {room.maxGuests} People</span>
                  <span><strong className="text-gray-800">Room Size:</strong> {room.size}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center space-x-3 text-gray-700">
                      <span className="text-blue-500">{amenity.icon}</span>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Link 
                    to={`/rooms/${room.name.toLowerCase().replace(/ /g, '-')}`}
                    className="px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition"
                  >
                    View Details
                  </Link>
                  <Link 
                    to="/booking"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Why Choose Our Rooms?" Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Rooms?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

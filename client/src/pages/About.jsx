import PageHero from '../components/common/PageHero';
import { FaLeaf, FaHeart, FaMountain, FaTree } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaLeaf className="w-12 h-12 text-green-600" />,
      title: "Sustainability",
      description: "We are committed to preserving the natural beauty of Charikot through eco-friendly practices and sustainable tourism."
    },
    {
      icon: <FaHeart className="w-12 h-12 text-red-500" />,
      title: "Hospitality",
      description: "Our warm Nepali hospitality ensures every guest feels like family, creating memories that last a lifetime."
    },
    {
      icon: <FaMountain className="w-12 h-12 text-blue-500" />,
      title: "Adventure",
      description: "We provide authentic mountain experiences that connect you with nature while maintaining luxury and comfort."
    },
    {
      icon: <FaTree className="w-12 h-12 text-green-700" />,
      title: "Conservation",
      description: "We actively participate in local conservation efforts to protect the pristine environment for future generations."
    }
  ];

  const team = [
    {
      name: "Rajan Thapa",
      role: "Co-Founder",
      image: "path-to-rajan-image.jpg",
      description: "Rajan Thapa is the co-founder of The Woods Charikot Resort, bringing a strong background in education and leadership to the venture. With years of experience in managing educational institutions, he brings a thoughtful, community-centered approach to hospitality."
    },
    {
      name: "Nirajan Thapa",
      role: "Founder / Managing Director",
      image: "path-to-nirajan-image.jpg",
      description: "Nirajan Thapa is the visionary behind The Woods Charikot Resort. A civil engineer by education, he combines technical expertise with a deep love for nature and sustainable living. Born and raised in Nepal, Nirajan has long been inspired by the beauty of the Charikot region."
    }
  ];

  const stats = [
    { number: "2018", label: "Year Founded", sublabel: "Established" },
    { number: "20+", label: "Dedicated staff", sublabel: "Team Members" },
    { number: "1000+", label: "Satisfied Visitors", sublabel: "Happy Guests" }
  ];

  return (
    <div className="bg-white">
      {/* Use the new PageHero component */}
      <PageHero
        title="About Us"
        subtitle="Our Story, Our Values"
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">A Legacy of Nepalese Hospitality</h2>
          <div className="max-w-3xl">
            <p className="text-gray-600 mb-6">
              Nestled in the pristine hills of Charikot, Dolakha, The Woods Charikot was born from a vision to create a sanctuary where luxury harmoniously coexists with nature. Our story began when our founder, inspired by the breathtaking beauty of the Himalayas, dreamed of sharing this magical place with the world.
            </p>
            <p className="text-gray-600">
              Since opening our doors, we have been committed to providing an authentic Nepali experience wrapped in modern luxury. Every detail of our resort has been carefully crafted to honor the local culture while offering world-class amenities and services.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Values
            <p className="text-lg font-normal text-gray-600 mt-2">
              The principles that guide everything we do at The Woods Charikot Resort
            </p>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
            <p className="text-lg font-normal text-gray-600 mt-2">
              The passionate individuals who make your experience extraordinary
            </p>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.sublabel}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience The Woods Charikot Resort?
          </h2>
          <p className="text-gray-600 mb-8">
            Join us for an unforgettable journey where luxury meets nature
          </p>
          <a 
            href="/booking" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}

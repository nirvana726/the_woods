import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "United Kingdom",
    rating: 5,
    text: "An absolutely stunning resort with breathtaking views. The staff went above and beyond to make our stay memorable. The rooms are beautifully designed and the food was exceptional.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "John Miller",
    location: "Australia",
    rating: 5,
    text: "Perfect getaway in the mountains. The peaceful environment and natural surroundings made for a truly relaxing experience. Will definitely return!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    text: "The Woods Charikot Resort exceeded all our expectations. The mountain views are incredible, and the local cuisine was a highlight of our stay.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold">
            What Our Guests Say
          </h1>
          <p className="text-gray-600 mt-2">Read about the experiences that make our resort special</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">500+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">95%</div>
              <div className="text-gray-600">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

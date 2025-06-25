import PageHero from '../components/common/PageHero';

const rooms = [
  {
    name: "Family Room",
    price: "From NPR 3000/night",
    featured: true,
  },
  {
    name: "King Size Room",
    price: "From NPR 2500/night",
    featured: true,
  },
  {
    name: "Triple Sharing Room",
    price: "From NPR 2800/night",
    featured: true,
  },
];

export default function Booking() {
  return (
    <div>
      <PageHero
        title="Book Your Stay"
        subtitle="Make a Reservation"
        bgImage="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          {/* Booking Form */}
          <form className="md:col-span-2 bg-gray-50 rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Send us your booking inquiry</h2>
            <p className="text-gray-600 mb-6">
              We&apos;ll get back to you with availability and pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name<span className="text-red-500">*</span></label>
                <input type="text" name="name" required className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email<span className="text-red-500">*</span></label>
                <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Phone</label>
                <input type="tel" name="phone" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Room Type</label>
                <select name="roomType" className="w-full border rounded px-3 py-2">
                  <option value="">Select a room</option>
                  {rooms.map((room) => (
                    <option key={room.name} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Check-in<span className="text-red-500">*</span></label>
                <input type="date" name="checkin" required className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Check-out<span className="text-red-500">*</span></label>
                <input type="date" name="checkout" required className="w-full border rounded px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Guests<span className="text-red-500">*</span></label>
              <input type="number" name="guests" min="1" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" className="w-full border rounded px-3 py-2" rows={4}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Booking Inquiry
            </button>
            <p className="text-xs text-gray-500 mt-2">
              * Our team will respond to your inquiry within 24 hours.
            </p>
          </form>

          {/* Sidebar: Accommodations & Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Accommodations</h2>
              <ul className="space-y-4">
                {rooms.map((room) => (
                  <li key={room.name} className="border-b pb-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{room.name}</span>
                      <span className="text-blue-600 font-bold text-sm">{room.price}</span>
                    </div>
                    {room.featured && (
                      <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Featured Room</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="mb-2">
                <span className="font-semibold">Phone:</span>
                <a href="tel:+9779851122519" className="text-blue-600 hover:underline block">+977-9851122519</a>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:thewoodscharikot@gmail.com" className="text-blue-600 hover:underline block">thewoodscharikot@gmail.com</a>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Location:</span>
                <div>Charikot, Dolakha District, Nepal</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-lg font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="mb-2">Call us directly for urgent inquiries or immediate booking assistance.</p>
              <a href="tel:+9779851122519" className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">
                Call Now: +977-9851122519
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
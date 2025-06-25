import PageHero from '../components/common/PageHero';

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help you plan your perfect escape to nature"
        bgImage="https://images.unsplash.com/photo-1587560699334-cc4ff6349094?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-gray-50 rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions about your stay? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name<span className="text-red-500">*</span></label>
                <input type="text" name="firstName" required className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name<span className="text-red-500">*</span></label>
                <input type="text" name="lastName" required className="w-full border rounded px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Email<span className="text-red-500">*</span></label>
              <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" name="phone" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject<span className="text-red-500">*</span></label>
              <input type="text" name="subject" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message<span className="text-red-500">*</span></label>
              <textarea name="message" required className="w-full border rounded px-3 py-2" rows={5}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-2">
              * Our team will respond to your inquiry within 24 hours.
            </p>
          </form>

          {/* Resort Info & Map */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="mb-2">
                <span className="font-semibold">Location:</span>
                <div>Charikot, Dolakha District<br />Bagmati Province, Nepal</div>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Phone:</span>
                <div>
                  <a href="tel:+9779851122519" className="text-blue-600 hover:underline block">+977-9851122519</a>
                  <a href="tel:+9779843473163" className="text-blue-600 hover:underline block">+977-9843473163</a>
                </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:thewoodscharikot@gmail.com" className="text-blue-600 hover:underline block">thewoodscharikot@gmail.com</a>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Hours:</span>
                <div>24/7 Reception<br />Restaurant: 6:00 AM - 10:00 PM</div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                title="Resort Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=86.048%2C27.664%2C86.068%2C27.684&amp;layer=mapnik"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

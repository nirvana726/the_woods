export default function HomeAbout() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to The Woods Charikot Resort
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          A hidden gem in the heart of Charikot. Nestled amidst the tranquil hills, 
          our resort is more than just a place to stay — it's an escape into nature. 
          Built with wood, warmth, and whispers of the forest, we offer a cozy yet 
          modern retreat for travelers, families, and seekers of stillness.
        </p>
        <a
          href="/about"
          className="mt-8 inline-block bg-transparent border-2 border-gray-800 text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 hover:text-white transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

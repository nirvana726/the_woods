import PropTypes from 'prop-types';

export default function PageHero({ title, subtitle, bgImage }) {
  const defaultBgImage =
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';

  return (
    <section
      className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('${bgImage || defaultBgImage}')`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {subtitle && (
          <p className="text-sm md:text-base font-outfit font-semibold uppercase tracking-wider mb-2 drop-shadow-lg !text-white">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-playfair font-bold drop-shadow-lg !text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
};

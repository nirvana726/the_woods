import PropTypes from 'prop-types';

export default function PageHero({ title, subtitle, bgImage }) {
  // A default background image if one isn't provided, ensuring it always looks good.
  const defaultBgImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

  return (
    <section 
      className="relative bg-cover bg-center h-[40vh] flex items-center justify-center text-white"
      style={{ 
        // Use the provided bgImage or fall back to the default
        backgroundImage: `url('${bgImage || defaultBgImage}')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered text content */}
      <div className="relative z-10 text-center px-4">
        {subtitle && (
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider mb-2 opacity-90">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold">
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

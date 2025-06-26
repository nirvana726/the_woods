import PageHero from '../../components/common/PageHero';

const policyBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

export default function Terms() {
  return (
    <div>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please Read Our Terms Carefully"
        bgImage={policyBg}
      />
      <section className="py-16 bg-gray-50 min-h-[40vh]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
            <p className="text-gray-700 leading-relaxed">
              This is the Terms & Conditions page. Add your terms and conditions content here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 
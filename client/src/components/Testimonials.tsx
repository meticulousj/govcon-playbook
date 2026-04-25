import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'The GovCon Marketing Playbook transformed how we approach federal contracting. The strategic framework in Chapter 7 on diversifying beyond the Big Four alone has helped us identify three new customer segments we hadn\'t considered. The templates are practical and immediately actionable—our team used the LinkedIn strategy to generate qualified leads within weeks. This is the most comprehensive yet accessible guide to government contracting I\'ve encountered.',
    author: 'Sarah Mitchell',
    title: 'VP of Business Development',
    company: 'Apex Federal Solutions',
    rating: 5
  },
  {
    id: 'testimonial-2',
    quote: 'As someone who\'s been in government contracting for 15 years, I was skeptical about another "playbook." But this resource is different—it bridges the gap between foundational concepts and advanced strategies perfectly. The 30/60/90 plan in Chapter 9 gave us a structured roadmap for our market entry, and the comparison tables in Chapter 7 helped us decide between GSA Schedules and subcontracting. I\'ve recommended it to every startup founder I know entering the GovCon space.',
    author: 'James Chen',
    title: 'CEO & Founder',
    company: 'Federal Tech Innovations',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
            Trusted by Government Contracting Leaders
          </h2>
          <p className="text-lg" style={{ color: '#2D2D2D' }}>
            See what industry professionals say about the playbook
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg border transition-all hover:shadow-lg"
              style={{
                borderColor: '#E8E6E0',
                backgroundColor: '#FFFBF7',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4A574';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8E6E0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    style={{
                      fill: '#D4A574',
                      color: '#D4A574',
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6" style={{ color: '#2D2D2D', lineHeight: '1.7', fontSize: '1rem' }}>
                "{testimonial.quote}"
              </blockquote>

              {/* Divider */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#D4A574',
                  margin: '1.5rem 0',
                }}
              />

              {/* Author Info */}
              <div>
                <p className="font-serif font-bold" style={{ color: '#1B3A6B', fontSize: '1.0625rem' }}>
                  {testimonial.author}
                </p>
                <p style={{ color: '#D4A574', fontSize: '0.875rem', fontWeight: '600' }}>
                  {testimonial.title}
                </p>
                <p style={{ color: '#999', fontSize: '0.875rem' }}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E8E6E0' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                500+
              </p>
              <p style={{ color: '#2D2D2D' }}>
                Government contractors have used the playbook
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                4.9/5
              </p>
              <p style={{ color: '#2D2D2D' }}>
                Average rating from users
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                $2.3B+
              </p>
              <p style={{ color: '#2D2D2D' }}>
                In federal contracts won by playbook users
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p style={{ color: '#2D2D2D', marginBottom: '1rem' }}>
            Join hundreds of successful government contractors
          </p>
          <button
            onClick={() => {
              window.location.href = '/guide';
            }}
            className="px-8 py-3 rounded font-serif font-bold transition-all inline-block"
            style={{
              backgroundColor: '#D4A574',
              color: '#1B3A6B',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8C9A0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#D4A574';
            }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, BookOpen, Newspaper, FileText } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'newsletter' | 'publication' | 'resource';
  icon: React.ReactNode;
  url: string;
  author?: string;
  frequency?: string;
}

const resources: Resource[] = [
  {
    id: 'contracting-catalyst',
    title: 'Contracting Catalyst',
    description: 'The Federal Edge - Insights and strategies for navigating federal contracting with actionable guidance on government procurement trends and best practices.',
    type: 'newsletter',
    icon: <Newspaper size={24} style={{ color: '#D4A574' }} />,
    url: 'https://contractingcatalyst.substack.com/',
    author: 'Contracting Catalyst',
    frequency: 'Regular updates'
  },
  {
    id: 'sam-gov',
    title: 'SAM.gov',
    description: 'The official System for Award Management where you can register your business, search for federal contracting opportunities, and manage your company profile.',
    type: 'resource',
    icon: <FileText size={24} style={{ color: '#D4A574' }} />,
    url: 'https://sam.gov/',
    author: 'U.S. General Services Administration'
  },
  {
    id: 'gsa-schedule',
    title: 'GSA Schedule Program',
    description: 'Learn about GSA Schedules, one of the fastest ways to start selling to the federal government with pre-negotiated pricing and terms.',
    type: 'resource',
    icon: <FileText size={24} style={{ color: '#D4A574' }} />,
    url: 'https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules',
    author: 'General Services Administration'
  },
  {
    id: 'sba-govcon',
    title: 'SBA Government Contracting',
    description: 'Small Business Administration resources for government contracting including certifications, training, and support for small businesses entering the federal market.',
    type: 'resource',
    icon: <FileText size={24} style={{ color: '#D4A574' }} />,
    url: 'https://www.sba.gov/federal-contracting',
    author: 'U.S. Small Business Administration'
  },
  {
    id: 'federal-procurement',
    title: 'Federal Acquisition Regulation (FAR)',
    description: 'The comprehensive set of rules governing federal procurement. Essential reference for understanding government contracting requirements and processes.',
    type: 'publication',
    icon: <BookOpen size={24} style={{ color: '#D4A574' }} />,
    url: 'https://www.acquisition.gov/far/',
    author: 'U.S. General Services Administration'
  },
  {
    id: 'govinfo',
    title: 'GovInfo Federal Documents',
    description: 'Official repository of federal government documents including procurement regulations, agency policies, and contracting guidance.',
    type: 'resource',
    icon: <FileText size={24} style={{ color: '#D4A574' }} />,
    url: 'https://www.govinfo.gov/',
    author: 'Government Publishing Office'
  }
];

export default function RecommendedReading() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F8F6F1' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
            Recommended Reading
          </h2>
          <p className="text-lg" style={{ color: '#2D2D2D' }}>
            Curated resources to complement your government contracting education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border transition-all hover:shadow-lg"
              style={{
                borderColor: '#E8E6E0',
                backgroundColor: '#FFFFFF',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4A574';
                e.currentTarget.style.backgroundColor = '#FFFBF7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8E6E0';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  {resource.icon}
                </div>
                <ExternalLink
                  size={18}
                  style={{
                    color: '#D4A574',
                    opacity: 0,
                    transform: 'translate(0, -2px)',
                    transition: 'all 0.3s ease',
                  }}
                  className="group-hover:opacity-100"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translate(2px, -4px)';
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-opacity-100 transition-colors" style={{ color: '#1B3A6B' }}>
                {resource.title}
              </h3>

              {/* Author/Source */}
              {resource.author && (
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#D4A574' }}>
                  {resource.author}
                </p>
              )}

              {/* Description */}
              <p className="text-sm mb-4" style={{ color: '#2D2D2D', lineHeight: '1.5' }}>
                {resource.description}
              </p>

              {/* Frequency or Type Badge */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #E8E6E0' }}>
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                  style={{
                    backgroundColor: resource.type === 'newsletter' ? '#DCFCE7' : resource.type === 'publication' ? '#FEF3C7' : '#E0E7FF',
                    color: resource.type === 'newsletter' ? '#15803D' : resource.type === 'publication' ? '#92400E' : '#3730A3',
                  }}
                >
                  {resource.type === 'newsletter' ? '📬 Newsletter' : resource.type === 'publication' ? '📖 Publication' : '🔗 Resource'}
                </span>
                {resource.frequency && (
                  <span className="text-xs" style={{ color: '#999' }}>
                    {resource.frequency}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 p-8 rounded-lg border" style={{ borderColor: '#E8E6E0', backgroundColor: '#FFFFFF' }}>
          <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#1B3A6B' }}>
            Why These Resources?
          </h3>
          <p style={{ color: '#2D2D2D', lineHeight: '1.6' }}>
            The GovCon Marketing Playbook provides comprehensive guidance on marketing and business development strategies for government contracting. These recommended resources complement the playbook by offering official government information, regulatory guidance, and industry insights. Contracting Catalyst provides timely updates on federal procurement trends, while SAM.gov, GSA, and SBA resources offer authoritative information on registration, certifications, and opportunities. Together, these resources create a complete foundation for success in government contracting.
          </p>
        </div>
      </div>
    </section>
  );
}

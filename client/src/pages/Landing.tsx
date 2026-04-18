import { ArrowRight, BookOpen, CheckCircle2, Copy, Zap, BarChart3, Users, FileText } from 'lucide-react';
import FAQ from '@/components/FAQ';
import NewsletterSignup from '@/components/NewsletterSignup';
import RecommendedReading from '@/components/RecommendedReading';

export default function Landing() {
  const handleStartGuide = () => {
    window.location.href = '/guide';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b" style={{ borderColor: '#E8E6E0', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold" style={{ color: '#1B3A6B' }}>
            GovCon Playbook
          </div>
          <button
            onClick={handleStartGuide}
            className="px-6 py-2 rounded font-serif transition-colors"
            style={{ backgroundColor: '#D4A574', color: '#1B3A6B' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8C9A0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4A574'}
          >
            Start Guide
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#D4A574' }}>
            Your Complete Resource
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Master Government Contracting
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A comprehensive, interactive guide to building a successful GovCon business. From foundational concepts to advanced strategies.
          </p>
          <button
            onClick={handleStartGuide}
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-serif text-lg transition-colors"
            style={{ backgroundColor: '#D4A574', color: '#1B3A6B' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8C9A0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4A574'}
          >
            Explore the Playbook
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>10</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: '#D4A574' }}>Chapters</div>
              <p className="text-sm mt-2" style={{ color: '#2D2D2D' }}>Comprehensive coverage from foundations to advanced tactics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>50+</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: '#D4A574' }}>Templates</div>
              <p className="text-sm mt-2" style={{ color: '#2D2D2D' }}>Email, social media, and proposal templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>100%</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: '#D4A574' }}>Interactive</div>
              <p className="text-sm mt-2" style={{ color: '#2D2D2D' }}>Persistent checklists, progress tracking, and more</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>Free</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: '#D4A574' }}>Access</div>
              <p className="text-sm mt-2" style={{ color: '#2D2D2D' }}>No login required, no paywalls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F6F1' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
              Powerful Features
            </h2>
            <p className="text-lg" style={{ color: '#2D2D2D' }}>
              Everything you need to succeed in government contracting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <BookOpen size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    10 Substantive Chapters
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    From foundational concepts like DUNS numbers and SAM registration to advanced strategies for diversifying your customer base and building your LinkedIn presence.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <CheckCircle2 size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    Persistent Checklists
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Track your progress with chapter-specific checklists. Your progress is automatically saved and persists across browser sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <Copy size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    Copy-to-Clipboard Templates
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    50+ ready-to-use email, social media, and proposal templates. Copy any template with one click and customize for your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <BarChart3 size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    Progress Tracking
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Visual progress indicators show your completion status across all chapters. Track which chapters you have completed and which need attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <Zap size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    CO Callouts & Stat Blocks
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Important insights for Contracting Officers and key statistics highlighted throughout the guide for quick reference.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                  <FileText size={24} style={{ color: '#1B3A6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#1B3A6B' }}>
                    Print-Friendly Design
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Print any chapter for offline reference or team sharing. Professional formatting maintains readability and style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
              What You will Learn
            </h2>
            <p className="text-lg" style={{ color: '#2D2D2D' }}>
              A complete roadmap from foundations to advanced government contracting strategies
            </p>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: 'Introduction to GovCon Marketing', desc: 'Understand the federal procurement landscape and why government contracting requires a different approach' },
              { num: 2, title: 'GovCon Foundations', desc: 'Essential infrastructure including DUNS numbers, SAM registration, and small business certifications' },
              { num: 3, title: 'GSA Advantage and Schedule Contracts', desc: 'Leverage GSA contracts to accelerate your sales cycle and gain direct access to federal buyers' },
              { num: 4, title: 'Subcontracting and Prime Relationships', desc: 'Start as a subcontractor and build relationships that lead to prime contracting opportunities' },
              { num: 5, title: 'Vendor Days and Industry Days', desc: 'Identify, prepare for, and maximize networking opportunities with federal agencies' },
              { num: 6, title: 'LinkedIn and Digital Presence', desc: 'Build your company online brand and use social media for government contracting' },
              { num: 7, title: 'Beyond the Big Four', desc: 'Diversify your customer base across federal agencies beyond DoD and GSA' },
              { num: 8, title: 'Templates and Tools', desc: 'Ready-to-use email, social media, and proposal templates for immediate application' },
              { num: 9, title: '30/60/90 Day Action Plan', desc: 'A structured roadmap for implementing GovCon strategies in your first quarter' },
              { num: 10, title: 'Resources and Glossary', desc: 'Essential references, key terminology, and industry resources' },
            ].map((chapter) => (
              <div key={chapter.num} className="flex gap-4 p-4 rounded-lg border" style={{ borderColor: '#E8E6E0' }}>
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-white"
                  style={{ backgroundColor: '#1B3A6B' }}
                >
                  {chapter.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold mb-1" style={{ color: '#1B3A6B' }}>
                    {chapter.title}
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>{chapter.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-4" style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Federal Institutional Authority Design
            </h2>
            <p className="text-lg opacity-90">
              Crafted specifically for government contracting professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-serif font-bold mb-2">Professional Aesthetic</h3>
              <p className="opacity-90">
                Navy and gold color scheme reflects authority and prestige of government contracting
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-serif font-bold mb-2">Serif Typography</h3>
              <p className="opacity-90">
                Georgia serif fonts for headers establish formality and institutional confidence
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-serif font-bold mb-2">Responsive Design</h3>
              <p className="opacity-90">
                Works seamlessly on mobile, tablet, and desktop devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F6F1' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
              Who Should Use This
            </h2>
            <p className="text-lg" style={{ color: '#2D2D2D' }}>
              The playbook is designed for anyone entering or expanding in government contracting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#1B3A6B' }}>
                Business Development Teams
              </h3>
              <p style={{ color: '#2D2D2D' }}>
                Learn proven strategies for identifying opportunities, building relationships, and winning government contracts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="text-3xl mb-4">👔</div>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#1B3A6B' }}>
                Company Executives
              </h3>
              <p style={{ color: '#2D2D2D' }}>
                Understand the government market landscape and develop a strategic plan for entering or expanding your GovCon business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border" style={{ borderColor: '#E8E6E0' }}>
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#1B3A6B' }}>
                Entrepreneurs
              </h3>
              <p style={{ color: '#2D2D2D' }}>
                Start your government contracting journey with a comprehensive roadmap and actionable strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Recommended Reading */}
      <RecommendedReading />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Ready to Master Government Contracting?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#2D2D2D' }}>
            Start with the interactive playbook. Learn at your own pace, track your progress, and access templates whenever you need them.
          </p>
          <button
            onClick={handleStartGuide}
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-serif text-lg transition-colors"
            style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D5A8C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1B3A6B'}
          >
            Explore the Playbook
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t" style={{ borderColor: '#E8E6E0', backgroundColor: '#F8F6F1' }}>
        <div className="max-w-6xl mx-auto text-center" style={{ color: '#2D2D2D' }}>
          <p className="mb-2">GovCon Marketing Playbook</p>
          <p className="text-sm opacity-75">Your comprehensive guide to government contracting success</p>
        </div>
      </footer>
    </div>
  );
}

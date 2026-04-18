import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'time-commitment',
    question: 'How long does it take to complete the playbook?',
    answer: 'The playbook is designed for flexible learning. Most users can read through all 10 chapters in 3-5 hours of focused reading. However, the real value comes from working through the checklists and implementing the strategies, which typically takes 2-4 weeks depending on your company\'s current GovCon maturity. You can progress at your own pace—many teams read one chapter per week and spend time implementing each chapter\'s recommendations before moving forward. The playbook is designed to be revisited multiple times as your business evolves.'
  },
  {
    id: 'company-size',
    question: 'Is this playbook suitable for companies of all sizes?',
    answer: 'Yes, the playbook is designed for companies of all sizes entering or expanding in government contracting. Whether you\'re a startup just beginning your GovCon journey or an established company diversifying into federal markets, you\'ll find relevant content. The foundational chapters (1-2) cover essential setup steps required by all companies. Chapters 3-7 provide strategies for different market entry approaches—from GSA schedules to subcontracting to direct prime contracting. Larger companies may focus on chapters 7-9 (diversifying customer base and advanced strategies), while smaller companies may prioritize chapters 2-5 (foundations and initial market entry). The templates and checklists are customizable for your company\'s specific situation.'
  },
  {
    id: 'printing',
    question: 'Can I print the playbook or download it as a PDF?',
    answer: 'Absolutely! The playbook is fully print-friendly. Each chapter is optimized for printing with proper page breaks, readable fonts, and professional formatting that preserves the navy and gold design. You can print individual chapters or the entire playbook directly from your browser using the Print button in each chapter. The print layout automatically hides navigation elements and optimizes spacing for paper. For offline access, you can print to PDF using your browser\'s print-to-PDF feature, which will create a professional document you can share with your team or reference offline. All checklists, templates, and content are preserved in the printed version.'
  },
  {
    id: 'progress-tracking',
    question: 'How does progress tracking work and is my data secure?',
    answer: 'Your progress is tracked locally on your device using browser localStorage—no data is sent to any server. When you complete checklist items or mark chapters complete, this information is automatically saved in your browser. This means your progress persists even if you close the browser and return later. However, progress is device-specific: if you access the playbook from a different device or browser, you\'ll start fresh. For team-wide tracking, you can export your completed checklists or take screenshots of your progress dashboard. Since all data stays on your device, your information is completely private and secure. We don\'t collect any personal data or track your usage.'
  },
  {
    id: 'templates',
    question: 'Can I customize the email and social media templates?',
    answer: 'Yes, all templates are designed as starting points for customization. Each template includes placeholder text and structure that you should adapt to your company\'s voice, specific services, and target audience. When you copy a template, it\'s placed in your clipboard ready to paste into your email client, LinkedIn, or other platforms where you can immediately edit it. The templates cover common scenarios (cold outreach, post-vendor day follow-up, thought leadership posts, etc.), but you\'ll want to personalize them with your company name, specific capabilities, contact information, and any unique value propositions. Think of them as frameworks that save you time on structure while you focus on customization.'
  },
  {
    id: 'updates',
    question: 'Will the playbook be updated with new content?',
    answer: 'The playbook is designed to be evergreen content focused on fundamental government contracting strategies that remain relevant. However, the government procurement landscape does evolve—new platforms emerge, regulations change, and agency priorities shift. We\'re committed to keeping the playbook current. Updates may include refreshed statistics, new templates reflecting current best practices, additional resources, and clarifications based on user feedback. When updates are released, you\'ll be able to access them immediately. Your progress and checklists will be preserved across updates. If you\'d like to stay informed about updates or provide feedback, you can reach out through the contact information provided.'
  },
  {
    id: 'support',
    question: 'What if I have questions while using the playbook?',
    answer: 'The playbook is designed to be self-contained and comprehensive, with each chapter providing detailed explanations, examples, and actionable guidance. If you have specific questions about government contracting, the resources section in Chapter 10 includes links to official government websites (SAM.gov, GSA.gov, SBA.gov) where you can find authoritative information. For technical questions about using the playbook itself (progress tracking, printing, templates), most issues can be resolved by refreshing your browser or clearing your browser cache. If you encounter any technical issues or have suggestions for improving the playbook, you can provide feedback through the contact form. We\'re committed to continuously improving the user experience based on feedback.'
  },
  {
    id: 'cost',
    question: 'Is there any cost to access the playbook?',
    answer: 'No, the GovCon Marketing Playbook is completely free. There are no subscription fees, no paywalls, and no hidden costs. All 10 chapters, all templates, all checklists, and all interactive features are available at no charge. We believe that access to quality government contracting guidance should not be a barrier to entry. Whether you\'re a solo entrepreneur or a large company, you have full access to everything the playbook offers. You don\'t need to create an account, provide payment information, or subscribe to a service. Simply visit the playbook and start learning. If you find the playbook valuable, we\'d appreciate you sharing it with others in your network who might benefit.'
  }
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className = '' }: FAQProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={`py-20 px-4 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: '#2D2D2D' }}>
            Find answers to common questions about the playbook
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden transition-all"
              style={{ borderColor: '#E8E6E0' }}
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-5 transition-colors"
                style={{
                  backgroundColor: expandedId === item.id ? '#FEF3C7' : '#F8F6F1',
                }}
              >
                <h3 className="text-lg font-serif font-bold text-left" style={{ color: '#1B3A6B' }}>
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  style={{
                    color: '#1B3A6B',
                    transform: expandedId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 border-t" style={{ borderColor: '#E8E6E0', backgroundColor: '#FFFFFF' }}>
                  <p style={{ color: '#2D2D2D', lineHeight: '1.6' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-8 rounded-lg border" style={{ borderColor: '#E8E6E0', backgroundColor: '#F8F6F1' }}>
          <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#1B3A6B' }}>
            Did not find your answer?
          </h3>
          <p style={{ color: '#2D2D2D' }}>
            If you have a question not covered here, please check the Resources and Glossary section in Chapter 10 of the playbook, which includes links to official government resources and industry references. You can also provide feedback or report issues through the contact form.
          </p>
        </div>
      </div>
    </section>
  );
}

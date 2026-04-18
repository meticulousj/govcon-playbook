import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { Chapter, ChecklistItem as ChecklistItemType } from '@/lib/chapters';

interface ChapterContentProps {
  chapter: Chapter;
  onChapterComplete: (chapterId: string) => void;
}

export default function ChapterContent({ chapter, onChapterComplete }: ChapterContentProps) {
  const [checklist, setChecklist] = useState<Set<string>>(new Set());
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  // Load checklist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${chapter.id}`);
    if (saved) {
      setChecklist(new Set(JSON.parse(saved)));
    }
  }, [chapter.id]);

  // Save checklist to localStorage
  useEffect(() => {
    localStorage.setItem(`checklist-${chapter.id}`, JSON.stringify(Array.from(checklist)));
    
    // Check if all items are completed
    if (chapter.checklist && checklist.size === chapter.checklist.length && checklist.size > 0) {
      onChapterComplete(chapter.id);
    }
  }, [checklist, chapter, onChapterComplete]);

  const toggleChecklistItem = (itemId: string) => {
    setChecklist(prev => {
      const newChecklist = new Set(prev);
      if (newChecklist.has(itemId)) {
        newChecklist.delete(itemId);
      } else {
        newChecklist.add(itemId);
      }
      return newChecklist;
    });
  };

  const copyToClipboard = (text: string, templateName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateName);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-0">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#D4A574' }}>
          Chapter {chapter.number}
        </div>
        <h1 className="text-4xl font-serif font-bold pb-4 mb-4" style={{ color: '#1B3A6B', borderBottom: '2px solid #D4A574' }}>
          {chapter.title}
        </h1>
        <p className="text-lg italic" style={{ color: '#2D2D2D' }}>{chapter.subtitle}</p>
      </div>

      {/* Intro Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>{chapter.content}</p>
      </div>

      {/* Stats Section */}
      {chapter.stats && chapter.stats.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {chapter.stats.map((stat, idx) => (
            <div key={idx} className="stat-block">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label font-bold">{stat.label}</div>
              <div className="text-xs mt-2" style={{ color: '#2D2D2D' }}>{stat.context}</div>
            </div>
          ))}
        </div>
      )}

      {/* Callouts Section */}
      {chapter.callouts && chapter.callouts.length > 0 && (
        <div className="my-8 space-y-4">
          {chapter.callouts.map((callout, idx) => (
            <div key={idx} className="co-callout">
              <div className="co-callout-label">{callout.type === 'co' ? '🏛️ CO Callout' : callout.type === 'warning' ? '⚠️ Warning' : '💡 Tip'}</div>
              <div className="font-serif font-bold mt-1" style={{ color: '#1B3A6B' }}>{callout.title}</div>
              <p className="text-sm mt-2" style={{ color: '#2D2D2D' }}>{callout.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Sections */}
      {chapter.sections && chapter.sections.map((section, idx) => (
        <div key={idx} className="my-8">
          <h2 className="text-2xl font-serif font-bold mt-6 mb-3" style={{ color: '#1B3A6B' }}>{section.heading}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>{section.content}</p>
          </div>
        </div>
      ))}

      {/* Comparison Tables */}
      {chapter.comparisons && chapter.comparisons.length > 0 && (
        <div className="my-8">
          {chapter.comparisons.map((comparison, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>{comparison.title}</h3>
              <div className="overflow-x-auto">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      {comparison.headers.map((header, hIdx) => (
                        <th key={hIdx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Templates Section */}
      {chapter.templates && chapter.templates.length > 0 && (
        <div className="my-8">
          <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>Ready-to-Use Templates</h2>
          <div className="space-y-4">
            {chapter.templates.map((template, idx) => (
              <div key={idx} className="template-box">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1B3A6B' }}>{template.name}</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#2D2D2D' }}>{template.type}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(template.content, template.name)}
                    className="template-copy-btn flex items-center gap-1"
                  >
                    {copiedTemplate === template.name ? (
                      <>
                        <Check size={14} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs whitespace-pre-wrap break-words" style={{ color: '#2D2D2D' }}>{template.content}</pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Checklist Section */}
      {chapter.checklist && chapter.checklist.length > 0 && (
        <div className="my-8">
          <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: '#1B3A6B' }}>Chapter Checklist</h2>
          <div className="bg-white border rounded-lg p-6" style={{ borderColor: '#E8E6E0' }}>
            {/* Group by category */}
            {Array.from(
              new Set(chapter.checklist.map(item => item.category || 'General'))
            ).map((category) => (
              <div key={category} className="mb-6 last:mb-0">
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#D4A574' }}>
                  {category}
                </div>
                <div className="space-y-3">
                  {chapter.checklist
                    ?.filter(item => (item.category || 'General') === category)
                    .map((item) => (
                      <label key={item.id} className="checklist-item">
                        <input
                          type="checkbox"
                          checked={checklist.has(item.id)}
                          onChange={() => toggleChecklistItem(item.id)}
                          className="checklist-checkbox"
                        />
                        <span className={`text-sm ${checklist.has(item.id) ? 'line-through opacity-60' : ''}`} style={{ color: checklist.has(item.id) ? '#6B6B6B' : '#2D2D2D' }}>
                          {item.text}
                        </span>
                      </label>
                    ))}
                </div>
              </div>
            ))}
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid #E8E6E0' }}>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>
                Completed: <span className="font-bold" style={{ color: '#D4A574' }}>{checklist.size} of {chapter.checklist?.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

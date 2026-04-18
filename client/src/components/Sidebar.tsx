import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { chapters } from '@/lib/chapters';

interface SidebarProps {
  currentChapterId: string;
  onChapterSelect: (chapterId: string) => void;
  completedChapters: Set<string>;
}

export default function Sidebar({ currentChapterId, onChapterSelect, completedChapters }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progress = completedChapters.size > 0 ? Math.round((completedChapters.size / chapters.length) * 100) : 0;

  const handleChapterClick = (chapterId: string) => {
    onChapterSelect(chapterId);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded transition-colors"
        style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-80 overflow-y-auto transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:z-auto`}
        style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-serif font-bold mb-2">GovCon Playbook</h1>
            <p className="text-sm opacity-90">Your guide to government contracting success</p>
          </div>

          {/* Progress Section */}
          <div className="mb-8 pb-6" style={{ borderBottom: '1px solid #2D5A8C' }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#D4A574' }}>Progress</span>
              <span className="text-sm font-bold" style={{ color: '#D4A574' }}>{progress}%</span>
            </div>
            <div className="w-full rounded-full h-2" style={{ backgroundColor: '#2D5A8C' }}>
              <div
                className="rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#D4A574', height: '100%' }}
              />
            </div>
            <p className="text-xs mt-2 opacity-75">{completedChapters.size} of {chapters.length} chapters completed</p>
          </div>

          {/* Chapters List */}
          <nav className="space-y-1">
            {chapters.map((chapter) => {
              const isActive = currentChapterId === chapter.id;
              const isCompleted = completedChapters.has(chapter.id);

              return (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full text-left px-4 py-3 rounded transition-colors flex items-center justify-between group`}
                  style={{
                    backgroundColor: isActive ? '#D4A574' : 'transparent',
                    color: isActive ? '#1B3A6B' : '#F8F6F1',
                  }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Progress Indicator */}
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: isCompleted ? '#D4A574' : isActive ? '#1B3A6B' : '#2D5A8C',
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wider opacity-75">
                        Chapter {chapter.number}
                      </div>
                      <div className="text-sm font-serif truncate">{chapter.title}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

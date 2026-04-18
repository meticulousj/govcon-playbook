import { ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { chapters } from '@/lib/chapters';

interface ChapterNavProps {
  currentChapterId: string;
  onChapterSelect: (chapterId: string) => void;
}

export default function ChapterNav({ currentChapterId, onChapterSelect }: ChapterNavProps) {
  const currentIndex = chapters.findIndex(ch => ch.id === currentChapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="chapter-nav">
      <div className="flex gap-2">
        {prevChapter && (
          <button
            onClick={() => onChapterSelect(prevChapter.id)}
            className="px-4 py-2 rounded transition-colors font-serif flex items-center gap-2"
            style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D5A8C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1B3A6B'}
          >
            <ChevronLeft size={18} />
            Previous
          </button>
        )}
      </div>

      <button
        onClick={handlePrint}
        className="px-4 py-2 rounded transition-colors no-print flex items-center gap-2"
        style={{ backgroundColor: '#D4A574', color: '#1B3A6B' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8C9A0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4A574'}
      >
        <Printer size={18} />
        Print
      </button>

      <div className="flex gap-2">
        {nextChapter && (
          <button
            onClick={() => onChapterSelect(nextChapter.id)}
            className="px-4 py-2 rounded transition-colors font-serif flex items-center gap-2"
            style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D5A8C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1B3A6B'}
          >
            Next
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

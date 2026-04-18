import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ChapterContent from '@/components/ChapterContent';
import ChapterNav from '@/components/ChapterNav';
import { chapters } from '@/lib/chapters';

export default function Home() {
  const [currentChapterId, setCurrentChapterId] = useState('intro');
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set());

  // Load completed chapters from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completed-chapters');
    if (saved) {
      setCompletedChapters(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save completed chapters to localStorage
  useEffect(() => {
    localStorage.setItem('completed-chapters', JSON.stringify(Array.from(completedChapters)));
  }, [completedChapters]);

  const handleChapterComplete = (chapterId: string) => {
    setCompletedChapters(prev => {
      const newSet = new Set(prev);
      newSet.add(chapterId);
      return newSet;
    });
  };

  const currentChapter = chapters.find(ch => ch.id === currentChapterId);

  if (!currentChapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        currentChapterId={currentChapterId}
        onChapterSelect={setCurrentChapterId}
        completedChapters={completedChapters}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="bg-background">
          {/* Chapter Content */}
          <ChapterContent
            chapter={currentChapter}
            onChapterComplete={handleChapterComplete}
          />

          {/* Chapter Navigation */}
          <div className="max-w-4xl mx-auto px-4 lg:px-0 pb-8">
            <ChapterNav
              currentChapterId={currentChapterId}
              onChapterSelect={setCurrentChapterId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

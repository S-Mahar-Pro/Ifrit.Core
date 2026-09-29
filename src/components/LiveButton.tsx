import React from 'react';

interface LiveButtonProps {
  active: boolean;
  onClick: () => void;
}

export default function LiveButton({ active, onClick }: LiveButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${
        active
          ? 'bg-amber-500 text-black animate-pulse shadow-lg shadow-amber-500/50'
          : 'bg-amber-600/20 border-2 border-amber-500/50 text-amber-400 hover:bg-amber-600/40'
      }`}
    >
      <span className="text-lg">●</span>
      {active ? 'LIVE' : 'GO LIVE'}
    </button>
  );
}

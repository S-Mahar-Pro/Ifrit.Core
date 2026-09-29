import React, { useState } from 'react';

export default function VoiceButton() {
  const [isListening, setIsListening] = useState(false);

  const toggleVoice = () => {
    setIsListening(!isListening);
    if (!isListening) {
      console.log('Voice input started...');
      // Integrate Web Speech API here
    } else {
      console.log('Voice input stopped');
    }
  };

  return (
    <button
      onClick={toggleVoice}
      className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
        isListening
          ? 'bg-amber-500 text-black animate-pulse'
          : 'bg-gold/20 border border-gold/40 text-gold hover:bg-gold/30'
      }`}
    >
      {isListening ? '🎤 Listening...' : '🎤 Voice Input'}
    </button>
  );
}

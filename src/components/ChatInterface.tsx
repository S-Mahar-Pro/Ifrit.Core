import React, { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  liveActive: boolean;
}

export default function ChatInterface({ liveActive }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Copy Sir. IFRIT CORE is online and ready for task execution. How may I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Analyze... Processing your request: "${input}"\n\nTask acknowledged, Sir. Engaging universal knowledge engine and initiating zero-defect execution protocols. Please stand by.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-h-96 bg-purple-900/40 backdrop-blur border border-gold/20 rounded-lg overflow-hidden">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-gold/20 border border-gold/30 text-white'
                  : 'bg-purple-800/50 border border-gold/20 text-gray-100'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs text-gray-400 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gold/20 p-4 bg-black/40">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={liveActive ? 'Listening... (or type)' : 'Type your command or query...'}
            className="flex-1 bg-black/50 border border-gold/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50"
          />
          <button
            onClick={handleSend}
            className="bg-gold hover:bg-yellow-300 text-black font-bold px-6 py-2 rounded transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

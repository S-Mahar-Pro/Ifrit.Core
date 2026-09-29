import React, { useState } from 'react';
import AuthPanel from './AuthPanel';
import ChatInterface from './ChatInterface';
import VoiceButton from './VoiceButton';
import LiveButton from './LiveButton';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [liveActive, setLiveActive] = useState(false);

  if (!isAuthenticated) {
    return <AuthPanel onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gold/20 bg-black/40 backdrop-blur-md p-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gold mb-2 drop-shadow-lg">
            IFRIT CORE
          </h1>
          <p className="text-sm text-gold/70">
            [ UNIVERSAL AUTONOMOUS PHYSICAL & DIGITAL ENGINE ]
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Omniscient Autonomous General Intelligence — Master of Universal Science, Physical Engineering, & Zero-Defect Execution.
          </p>
        </div>

        {/* Top Control Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <LiveButton active={liveActive} onClick={() => setLiveActive(!liveActive)} />
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              isOffline
                ? 'bg-red-600 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {isOffline ? 'OFFLINE' : 'ONLINE'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {isOffline ? (
          <div className="text-center py-16">
            <p className="text-2xl text-amber-400">System Offline</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Chat Area */}
            <div className="lg:col-span-3">
              <ChatInterface liveActive={liveActive} />
            </div>

            {/* Sidebar Controls */}
            <aside className="bg-purple-900/40 backdrop-blur border border-gold/20 rounded-lg p-6">
              <h3 className="text-gold text-lg font-semibold mb-4">Controls</h3>
              <VoiceButton />
              
              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <p className="text-gold/70">System Status</p>
                  <p className="text-emerald-400 font-semibold">● Active</p>
                </div>
                <div>
                  <p className="text-gold/70">Voice</p>
                  <p className="text-gray-300">Ready</p>
                </div>
                <div>
                  <p className="text-gold/70">Live Bridge</p>
                  <p className={liveActive ? 'text-amber-400 font-semibold' : 'text-gray-300'}>
                    {liveActive ? '● Connected' : 'Inactive'}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

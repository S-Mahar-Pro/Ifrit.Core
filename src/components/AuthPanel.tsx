import React, { useState } from 'react';

interface AuthPanelProps {
  onAuthenticate: () => void;
}

export default function AuthPanel({ onAuthenticate }: AuthPanelProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify master credentials
    if (username === 'Mahar69658607' && password === 'Mahar@69$') {
      setError('');
      onAuthenticate();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gold mb-2 drop-shadow-lg">
            IFRIT CORE
          </h1>
          <p className="text-sm text-gold/70 mb-2">
            [ UNIVERSAL AUTONOMOUS PHYSICAL & DIGITAL ENGINE ]
          </p>
          <p className="text-xs text-gray-400">
            Master Authentication Required
          </p>
        </div>

        {/* Auth Form */}
        <form
          onSubmit={handleLogin}
          className="bg-purple-900/60 backdrop-blur border border-gold/30 rounded-lg p-8 space-y-6"
        >
          {/* Username */}
          <div>
            <label className="block text-gold text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/50 border border-gold/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50"
              placeholder="Enter master username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gold text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-gold/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50"
              placeholder="Enter master password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded p-3 text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold to-amber-400 text-black font-bold py-3 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all drop-shadow-lg"
          >
            AUTHENTICATE
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          Proprietary System - Mahar69658607
        </p>
      </div>
    </div>
  );
}

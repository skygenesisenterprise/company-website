'use client';

import { useEffect } from 'react';

export default function DiscordPage() {
  useEffect(() => {
    // Redirect to the actual Discord server
    window.location.href = 'https://discord.gg/YWRBs6nrcT';
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting to Discord server...</p>
      </div>
    </div>
  );
}
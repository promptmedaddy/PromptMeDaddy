"use client";

import { useState } from "react";

export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);

  if (!ageVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">PromptMeDaddy</h1>
          <p className="text-zinc-400 text-lg">
            Create and chat with your own AI cam characters
          </p>
          
          <div className="border border-zinc-800 rounded-xl p-8 space-y-6 bg-zinc-950">
            <p className="text-xl font-medium">Are you 18 or older?</p>
            <p className="text-sm text-zinc-500">
              This site contains adult content. You must be 18+ to enter.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setAgeVerified(true)}
                className="px-8 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-medium transition"
              >
                Yes, I am 18+
              </button>
              <a
                href="https://www.google.com"
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition"
              >
                No, take me back
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">PromptMeDaddy</h1>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#create" className="hover:text-white transition">Create Character</a>
          <a href="#chat" className="hover:text-white transition">Chat</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Create your own<br />
          <span className="text-pink-500">AI Cam Character</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          Design a custom AI girl or guy, then chat and prompt them like a real cam experience.
        </p>
        <button className="px-10 py-4 bg-pink-600 hover:bg-pink-500 rounded-xl font-semibold text-lg transition">
          Create Your First Character</button>
        <a href="/create" className="hidden">
        </button>
      </section>

      {/* Features */}
      <section className="px-6 py-16 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900">
            <h3 className="font-semibold text-lg mb-2">Custom Characters</h3>
            <p className="text-zinc-400 text-sm">
              Full control over appearance, personality, and style.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900">
            <h3 className="font-semibold text-lg mb-2">Cam-Style Chat</h3>
            <p className="text-zinc-400 text-sm">
              Prompt them to act, tease, and respond like a real cam model.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900">
            <h3 className="font-semibold text-lg mb-2">Private & Instant</h3>
            <p className="text-zinc-400 text-sm">
              Your characters and chats stay private. Start in seconds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

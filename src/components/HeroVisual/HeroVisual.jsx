import { useState } from 'react';
import { motion } from 'framer-motion';

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState('call'); // 'call' | 'map' | 'hermes'

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 via-accent-violet/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Glass Mobile Mockup Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-64 sm:w-72 h-[490px] rounded-[40px] p-3 glass-panel border border-slate-300 dark:border-white/10 shadow-2xl shadow-accent-blue/10 flex flex-col justify-between overflow-hidden"
      >
        {/* Phone Notch & Ear Speaker */}
        <div className="flex justify-center items-center gap-2 pt-1 pb-2">
          <div className="w-16 h-4 bg-black/50 rounded-full flex items-center justify-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-accent-blue/80 animate-pulse" />
            <div className="w-6 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Mock App Screen Interface */}
        <div className="flex-1 rounded-[28px] bg-slate-900 dark:bg-[#0B0D10] p-3.5 border border-white/10 flex flex-col justify-between relative overflow-hidden text-left">
          {/* Top App Header & Interactive Mode Tabs */}
          <div className="pb-2.5 border-b border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center font-bold text-[10px] text-white shadow-sm">
                  RN
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">React Native Demo</div>
                  <div className="text-[9px] text-accent-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    iOS & Android
                  </div>
                </div>
              </div>
              <div className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
                Hermes 0.73
              </div>
            </div>

            {/* Interactive Screen Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('call')}
                className={`py-1 text-[10px] font-mono rounded font-medium transition-all ${
                  activeTab === 'call' ? 'bg-accent-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                WebRTC
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`py-1 text-[10px] font-mono rounded font-medium transition-all ${
                  activeTab === 'map' ? 'bg-accent-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                GIS Map
              </button>
              <button
                onClick={() => setActiveTab('hermes')}
                className={`py-1 text-[10px] font-mono rounded font-medium transition-all ${
                  activeTab === 'hermes' ? 'bg-accent-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Engine
              </button>
            </div>
          </div>

          {/* Screen Content 1: WebRTC */}
          {activeTab === 'call' && (
            <div className="space-y-2.5 py-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-video rounded-xl bg-slate-800 border border-white/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/30 to-transparent" />
                  <span className="text-[10px] font-mono font-bold text-accent-blue z-10">iOS Host</span>
                  <div className="absolute bottom-1 left-1.5 text-[8px] font-mono text-white/80">60 FPS • 1080p</div>
                </div>
                <div className="relative aspect-video rounded-xl bg-slate-800 border border-white/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent-violet/30 to-transparent" />
                  <span className="text-[10px] font-mono font-bold text-accent-violet z-10">Android Peer</span>
                  <div className="absolute bottom-1 left-1.5 text-[8px] font-mono text-white/80">Mediasoup</div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-2.5 rounded-xl bg-black/70 border border-white/10 font-mono text-[9px] space-y-1 text-slate-300">
                <div className="text-accent-violet font-semibold">{"// WebRTC PeerConnection"}</div>
                <div><span className="text-accent-blue">const</span> peer = <span className="text-emerald-400">new</span> RTCPeerConnection();</div>
                <div>dispatch(<span className="text-amber-300">setStream</span>(peer));</div>
              </div>
            </div>
          )}

          {/* Screen Content 2: GIS Map */}
          {activeTab === 'map' && (
            <div className="space-y-2 py-2">
              <div className="relative h-28 rounded-xl bg-slate-800 border border-white/10 overflow-hidden p-2 flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400 z-10">
                  <span>GPS Active</span>
                  <span>29.9695° N, 76.8783° E</span>
                </div>
                <div className="flex justify-center z-10">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/30 border border-accent-blue flex items-center justify-center animate-bounce">
                    <span className="w-2 h-2 rounded-full bg-accent-blue" />
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-300 z-10">Environmental Field Report</div>
              </div>
              <div className="p-2 rounded-xl bg-black/70 border border-white/10 font-mono text-[9px] text-slate-300">
                Observation Sync: <span className="text-emerald-400 font-bold">Verified</span>
              </div>
            </div>
          )}

          {/* Screen Content 3: Hermes Runtime */}
          {activeTab === 'hermes' && (
            <div className="space-y-2 py-2">
              <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/10 space-y-2 font-mono text-[9px]">
                <div className="flex justify-between text-slate-300">
                  <span>Engine:</span>
                  <span className="text-accent-blue font-bold">Hermes Bytecode</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Heap Memory:</span>
                  <span className="text-emerald-400 font-bold">14.2 MB</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>UI Thread:</span>
                  <span className="text-accent-cyan font-bold">60.0 FPS</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>JS Thread:</span>
                  <span className="text-accent-violet font-bold">59.8 FPS</span>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-black/70 border border-white/10 font-mono text-[9px] text-slate-300">
                Bridge Latency: <span className="text-emerald-400 font-bold">&lt; 2ms</span>
              </div>
            </div>
          )}

          {/* Native Action Controls */}
          <div className="flex items-center justify-around pt-2 border-t border-white/10">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white text-[10px]">
              🎙️
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center text-white text-xs shadow-md">
              📞
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white text-[10px]">
              📹
            </div>
          </div>
        </div>

        {/* Bottom Phone Bar */}
        <div className="flex justify-center pt-2 pb-0.5">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </motion.div>

      {/* Floating Orbital Component 1: React Native Atom */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-2 -right-2 sm:top-4 sm:right-0 w-24 h-24 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-80 drop-shadow-glow-blue">
          <ellipse cx="50" cy="50" rx="42" ry="14" stroke="#3B82F6" strokeWidth="2.5" fill="none" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="14" stroke="#8B5CF6" strokeWidth="2.5" fill="none" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="14" stroke="#06B6D4" strokeWidth="2.5" fill="none" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="5" fill="#3B82F6" />
        </svg>
      </motion.div>

      {/* Floating Floating Badge 2: iOS & Android Native */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 -left-2 sm:bottom-8 sm:left-2 p-3 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg shadow-sm">
          📱
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">Cross-Platform</div>
          <div className="text-[10px] text-slate-600 dark:text-[#A5ACB8]">iOS & Android Parity</div>
        </div>
      </motion.div>

      {/* Floating Badge 3: WebRTC / Real-Time */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 p-3 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-sm">
          📡
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">WebRTC & Mediasoup</div>
          <div className="text-[10px] text-blue-600 dark:text-accent-cyan font-mono font-semibold">Real-Time Streams</div>
        </div>
      </motion.div>
    </div>
  );
}

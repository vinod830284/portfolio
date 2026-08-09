import { motion } from 'framer-motion';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 via-accent-violet/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Glass Mobile Mockup Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-64 sm:w-72 h-[480px] rounded-[40px] p-3 glass-panel border border-white/10 shadow-2xl shadow-accent-blue/10 flex flex-col justify-between overflow-hidden"
      >
        {/* Phone Notch & Ear Speaker */}
        <div className="flex justify-center items-center gap-2 pt-1 pb-3">
          <div className="w-16 h-4 bg-black/50 rounded-full flex items-center justify-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-accent-blue/80 animate-pulse" />
            <div className="w-6 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Mock App Screen Interface */}
        <div className="flex-1 rounded-[28px] bg-bg-dark/90 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
          {/* Top App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center font-bold text-xs text-white shadow-sm">
                RN
              </div>
              <div>
                <div className="text-xs font-semibold text-white">EvalPulse.app</div>
                <div className="text-[10px] text-accent-cyan flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  WebRTC Connected
                </div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
              Hermes 0.73
            </div>
          </div>

          {/* WebRTC Video Stream Grid Mock */}
          <div className="grid grid-cols-2 gap-2 my-3">
            <div className="relative aspect-video rounded-xl bg-surface-elevatedDark/80 border border-white/10 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/30 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-accent-blue/20 border border-accent-blue/50 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-accent-blue">iOS</span>
              </div>
              <div className="absolute bottom-1 left-2 text-[9px] font-mono text-white/80">60 FPS • 1080p</div>
            </div>

            <div className="relative aspect-video rounded-xl bg-surface-elevatedDark/80 border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-violet/30 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-accent-violet/20 border border-accent-violet/50 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-accent-violet">Android</span>
              </div>
              <div className="absolute bottom-1 left-2 text-[9px] font-mono text-white/80">Mediasoup</div>
            </div>
          </div>

          {/* Mock Code Snippet */}
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[10px] space-y-1 text-slate-300">
            <div className="text-accent-violet font-semibold">{"// Redux Toolkit + WebRTC"}</div>
            <div><span className="text-accent-blue">const</span> peer = <span className="text-emerald-400">new</span> RTCPeerConnection();</div>
            <div>dispatch(<span className="text-amber-300">setMediaStream</span>(peer));</div>
          </div>

          {/* Native Action Controls */}
          <div className="flex items-center justify-around pt-3 border-t border-white/10">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white text-xs">
              🎙️
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center text-white text-sm shadow-md">
              📞
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-white text-xs">
              📹
            </div>
          </div>
        </div>

        {/* Bottom Phone Bar */}
        <div className="flex justify-center pt-2 pb-1">
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
        className="absolute -bottom-2 -left-2 sm:bottom-8 sm:left-2 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg shadow-sm">
          📱
        </div>
        <div>
          <div className="text-xs font-bold text-white">Cross-Platform</div>
          <div className="text-[10px] text-content-secondaryDark">iOS & Android Parity</div>
        </div>
      </motion.div>

      {/* Floating Badge 3: WebRTC / Real-Time */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-sm">
          📡
        </div>
        <div>
          <div className="text-xs font-bold text-white">WebRTC & Mediasoup</div>
          <div className="text-[10px] text-accent-cyan font-mono">Real-Time Streams</div>
        </div>
      </motion.div>
    </div>
  );
}

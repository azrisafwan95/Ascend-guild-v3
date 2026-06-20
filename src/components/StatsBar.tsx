import { Coins, Shield, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatsBar = () => {
  return (
    <div className="h-20 border-b border-stone-800 bg-[#0c0a09]/80 backdrop-blur-xl px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40 lg:ml-64">
      <div className="flex items-center gap-4 lg:gap-8 ml-14 lg:ml-0">
        {/* Rank Badge - Wax Seal Style */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#8b0000] flex items-center justify-center border-4 border-[#d4af37] shadow-[0_0_15px_rgba(139,0,0,0.4)] relative">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37]" />
              {/* Seal "tails" */}
              <div className="absolute -bottom-2 -left-1 w-3 h-6 bg-[#8b0000] rotate-12 -z-10 border-b-2 border-r-2 border-[#d4af37]/50" />
              <div className="absolute -bottom-2 -right-1 w-3 h-6 bg-[#8b0000] -rotate-12 -z-10 border-b-2 border-l-2 border-[#d4af37]/50" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest">Guild Rank</p>
            <h2 className="text-xs lg:text-sm font-black text-[#d4af37] guild-header">High Vanguard</h2>
          </div>
        </div>

        {/* Level Progress */}
        <div className="hidden md:flex flex-col gap-1.5 w-32 lg:w-44">
          <div className="flex justify-between items-end">
            <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest">Prestige</p>
            <p className="text-[9px] text-[#d4af37] font-black uppercase">LVL 42</p>
          </div>
          <div className="h-1.5 w-full bg-stone-900 border border-stone-800 p-[1px]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#8b0000] to-[#d4af37]"
            />
          </div>
        </div>
      </div>

      {/* Gold & Profile */}
      <div className="flex items-center gap-3 lg:gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 bg-[#d4af37]/5 px-3 lg:px-4 py-2 border border-[#d4af37]/20 rounded-sm"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#f3cf7a] to-[#d4af37] flex items-center justify-center shadow-lg">
            <Coins className="w-3.5 h-3.5 text-stone-950" />
          </div>
          <span className="text-[#d4af37] text-sm lg:text-base font-black font-mono tracking-tight">
            12,450.00 <span className="text-[9px] opacity-60">GP</span>
          </span>
        </motion.div>
        
        <div className="h-8 w-px bg-stone-800" />

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-2 text-stone-500 hover:text-[#d4af37] transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8b0000] rounded-full border border-[#0c0a09]" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-[#d4af37] guild-header">Sir Arthemis</p>
              <p className="text-[9px] text-stone-500 font-bold uppercase">Master Craftsman</p>
            </div>
            <div className="w-10 h-10 rounded bg-stone-900 border border-[#d4af37]/30 p-0.5 shadow-xl overflow-hidden group cursor-pointer hover:border-[#d4af37] transition-colors">
              <img 
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=b6e3f4" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-sm group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

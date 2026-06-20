import { Calendar, Users, ArrowRight, ShieldAlert, ShieldCheck, ShieldQuestion, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface QuestCardProps {
  title: string;
  difficulty: 'Legendary' | 'Epic' | 'Rare' | 'Common';
  reward: number;
  status: 'Open' | 'In Progress' | 'Awaiting Deposit' | 'Completed';
  applicants: number;
  deadline: string;
}

const difficultyTheme = {
  Legendary: 'from-orange-500/20 to-yellow-500/20 text-orange-400 border-orange-500/50',
  Epic: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/50',
  Rare: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/50',
  Common: 'from-stone-500/20 to-stone-400/20 text-stone-400 border-stone-500/50',
};

export const QuestCard = ({ title, difficulty, reward, status, applicants, deadline }: QuestCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="quest-paper rounded-sm p-5 relative overflow-hidden group shadow-2xl"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10px] right-[-10px] w-12 h-12 bg-[#d4af37] rotate-45" />
      </div>

      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          "px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest bg-gradient-to-r border",
          difficultyTheme[difficulty]
        )}>
          {difficulty}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-stone-500 text-[10px] font-bold uppercase">Reward:</span>
          <span className="text-[#d4af37] font-black tracking-tight text-lg">{reward.toLocaleString()}<span className="text-[10px] ml-0.5 opacity-60">GP</span></span>
        </div>
      </div>

      <h3 className="text-xl font-black text-stone-100 mb-4 guild-header line-clamp-2 leading-tight group-hover:text-[#d4af37] transition-colors">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-1.5 text-stone-400">
          <Users className="w-4 h-4 text-stone-500" />
          <span className="text-xs font-bold">{applicants} Adventurers</span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-400">
          <Calendar className="w-4 h-4 text-stone-500" />
          <span className="text-xs font-bold">{deadline}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-stone-800/50">
        <div className="flex items-center gap-2">
          {status === 'Open' && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
          {status === 'In Progress' && <ShieldQuestion className="w-4 h-4 text-amber-500" />}
          {status === 'Awaiting Deposit' && <ShieldAlert className="w-4 h-4 text-red-500" />}
          <span className={cn(
            "text-[10px] font-black uppercase tracking-tighter",
            status === 'Open' ? 'text-emerald-500' : 
            status === 'In Progress' ? 'text-amber-500' : 
            'text-red-500'
          )}>{status}</span>
        </div>

        <button className="flex items-center gap-1.5 text-[10px] font-black uppercase text-[#d4af37] hover:tracking-widest transition-all">
          Accept Contract
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Background seal water mark */}
      <div className="absolute -bottom-4 -right-4 opacity-[0.03] rotate-[-15deg] group-hover:scale-110 transition-transform">
        <Shield className="w-32 h-32 text-stone-100" />
      </div>
    </motion.div>
  );
};

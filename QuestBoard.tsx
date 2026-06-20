import { Search, Filter, Plus, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { QuestCard } from './QuestCard';
import { EscrowWidget } from './EscrowWidget';
import { supabase } from '../lib/supabase';

interface Quest {
  id: string | number;
  title: string;
  difficulty: 'Legendary' | 'Epic' | 'Rare' | 'Common';
  reward: number;
  status: 'Open' | 'In Progress' | 'Awaiting Deposit' | 'Completed';
  applicants: number;
  deadline: string;
}

const mockQuests: Quest[] = [
  {
    id: 1,
    title: "Eldritch Frontend Architecture",
    difficulty: "Legendary",
    reward: 12500,
    status: "Open",
    applicants: 12,
    deadline: "3 Days left"
  },
  {
    id: 2,
    title: "Shadow Realm Database Migration",
    difficulty: "Epic",
    reward: 8000,
    status: "In Progress",
    applicants: 5,
    deadline: "1 Week left"
  },
  {
    id: 3,
    title: "Necromancer UI/UX Design",
    difficulty: "Rare",
    reward: 4500,
    status: "Awaiting Deposit",
    applicants: 8,
    deadline: "2 Days left"
  }
];

export const QuestBoard = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('quests')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setQuests(data as Quest[]);
        } else {
          // If table is empty or doesn't exist (and error didn't trigger), 
          // use mock data for demonstration
          setQuests(mockQuests);
        }
      } catch (err: any) {
        console.error('Error fetching quests:', err.message);
        setError(err.message);
        setQuests(mockQuests); // Fallback to mock data on error
      } finally {
        setLoading(false);
      }
    };

    fetchQuests();
  }, []);

  return (
    <div className="p-4 lg:p-8 lg:ml-64 min-h-screen bg-slate-950">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 pt-16 lg:pt-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-1 lg:mb-2 uppercase guild-header">Quest Board</h1>
          <p className="text-xs lg:text-sm text-stone-400">Available contracts for the worthy adventurers.</p>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-[#d4af37] to-[#996515] text-[#0c0a09] px-8 py-3 rounded-sm font-black shadow-[0_0_20px_rgba(212,175,55,0.3)] group guild-header"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="text-sm">PUBLISH CONTRACT</span>
        </motion.button>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-900/20 border border-red-900/50 text-red-400 text-xs rounded-sm">
          Notice: Showing local records. Guild treasury connection restricted ({error}).
        </div>
      )}

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input 
                type="text" 
                placeholder="Search quests..." 
                className="w-full bg-stone-900/50 border border-stone-800 rounded-sm py-3 pl-12 pr-4 text-sm text-stone-300 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-stone-900 border border-stone-800 px-4 py-3 rounded-sm text-stone-400 hover:text-[#d4af37] transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold guild-header">Filters</span>
            </button>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-[#d4af37] animate-spin" />
              <p className="text-[#d4af37] guild-header animate-pulse">Consulting the Ancient Ledger...</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
            >
              {quests.map((quest, index) => (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <QuestCard {...quest} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Sidebar Widget Area */}
        <div className="w-full xl:w-80 space-y-6">
          <EscrowWidget />
        </div>
      </div>
    </div>
  );
};

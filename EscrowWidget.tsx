import { Activity, Landmark, Gavel } from 'lucide-react';

const activeJobs = [
  { id: 1, title: 'Slaughter the Backend Kraken', progress: 50, status: 'Treasury Secured' },
  { id: 2, title: 'Enchant the User Interface', progress: 50, status: 'Awaiting Royal Approval' },
];

export const EscrowWidget = () => {
  return (
    <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-sm p-6 h-fit xl:sticky xl:top-28 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]" />
      
      <div className="flex items-center gap-2 mb-6">
        <Gavel className="w-5 h-5 text-[#d4af37]" />
        <h3 className="font-bold text-[#d4af37] guild-header text-sm">Active Contracts</h3>
      </div>

      <div className="space-y-6">
        {activeJobs.map((job) => (
          <div key={job.id} className="space-y-3">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold text-stone-300 guild-header line-clamp-1">{job.title}</p>
              <div className="bg-stone-800 p-1 rounded-sm border border-stone-700">
                <Activity className="w-3 h-3 text-[#d4af37]" />
              </div>
            </div>
            
            <div className="h-2 w-full bg-stone-900 border border-stone-800 p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-[#8b0000] to-[#d4af37]"
                style={{ width: `${job.progress}%` }}
              />
            </div>

            <div className="flex items-center gap-2 text-[10px] text-stone-500 font-bold uppercase tracking-tighter">
              <Landmark className="w-3 h-3" />
              <span>{job.status}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-3 rounded-sm border border-[#d4af37]/20 text-[#d4af37]/60 text-[10px] font-black hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all uppercase tracking-widest bg-stone-900/50">
        View Ledger Records
      </button>

      <div className="mt-6 bg-[#8b0000]/5 rounded-sm p-4 border border-[#8b0000]/20">
        <p className="text-[9px] text-[#8b0000] font-black mb-2 uppercase tracking-widest">Guild Decree</p>
        <p className="text-[11px] text-stone-500 italic">"The sword that is not sharpened will fail its master. Keep your skills keen."</p>
      </div>
    </div>
  );
};

import { 
  Sword, 
  Shield, 
  Trophy, 
  Vault, 
  Store, 
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
  ScrollText,
  Map
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';

const menuItems = [
  { icon: LayoutDashboard, label: 'Grand Hall', active: true },
  { icon: ScrollText, label: 'Quest Board', active: false, badge: '12' },
  { icon: Map, label: 'World Map', active: false },
  { icon: Shield, label: 'Guild Missions', active: false },
  { icon: Trophy, label: 'Hall of Fame', active: false },
  { icon: Vault, label: 'Treasury', active: false },
  { icon: Store, label: 'Blacksmith', active: false, badge: 'New' },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0c0a09] border-r border-stone-800 shadow-2xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-10 lg:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#996515] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Sword className="text-[#0c0a09] w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#d4af37] guild-header">ASCEND</h1>
              <p className="text-[9px] text-stone-500 font-bold tracking-[0.3em] uppercase">The Guild Hall</p>
            </div>
          </div>
          <button className="lg:hidden text-stone-400" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 group relative",
                item.active 
                  ? "bg-[#8b0000]/10 text-[#d4af37] border-l-4 border-[#8b0000]" 
                  : "text-stone-400 hover:text-[#d4af37] hover:bg-stone-900/50"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5",
                item.active ? "text-[#d4af37]" : "group-hover:text-[#d4af37] transition-colors"
              )} />
              <span className="font-bold guild-header text-sm flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className={cn(
                  "px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-tighter",
                  item.badge === 'New' ? "bg-blue-900/40 text-blue-400 border border-blue-400/30" : "bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30"
                )}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-2 border-t border-stone-800/50">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded text-stone-500 hover:text-[#d4af37] transition-all group">
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          <span className="font-bold guild-header text-xs">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded text-stone-600 hover:text-red-500 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-bold guild-header text-xs">Retire</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-5 left-5 z-[60]">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2.5 bg-[#1a1a1a] border border-[#d4af37]/30 rounded shadow-2xl text-[#d4af37]"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-screen flex-col fixed left-0 top-0 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-[70]" onClick={() => setIsOpen(false)}>
          <aside 
            className="w-72 h-full flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
};

import { Sidebar } from './components/Sidebar';
import { StatsBar } from './components/StatsBar';
import { QuestBoard } from './components/QuestBoard';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400/30">
      {/* Sidebar Navigation */}
      <Sidebar />

      <div className="flex flex-col min-h-screen">
        {/* Top Stats Bar */}
        <StatsBar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden">
          <QuestBoard />
        </main>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

export default App;

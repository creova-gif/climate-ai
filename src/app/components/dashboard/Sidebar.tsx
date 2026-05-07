type PageType = 'overview' | 'advisory' | 'farmers' | 'ledger' | 'delivery' | 'alerts' | 'settings';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside 
      className="w-[220px] min-w-[220px] flex flex-col overflow-hidden relative"
      style={{ background: '#1A1714' }}
    >
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(31,107,62,0.15), transparent)' }}
      />
      
      {/* Logo */}
      <div className="px-[18px] pt-5 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-2.5 mb-1">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
            style={{ background: '#3A9E62' }}
          >
            🌦
          </div>
          <div className="text-[15px] font-extrabold text-white tracking-tight">Hali ya Hewa</div>
        </div>
        <div className="text-[9px] text-white/35 uppercase tracking-wider" style={{ fontFamily: "'Space Mono', monospace" }}>
          Climate Advisory Platform
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 flex-1 relative z-10">
        <div className="text-[8px] text-white/25 uppercase tracking-widest px-2 pt-2 pb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
          Main
        </div>
        <NavButton icon="📊" label="Overview" active={currentPage === 'overview'} onClick={() => onPageChange('overview')} />
        <NavButton icon="🤖" label="Advisory Engine" active={currentPage === 'advisory'} onClick={() => onPageChange('advisory')} badge="3" />
        <NavButton icon="👨‍🌾" label="Farmers" active={currentPage === 'farmers'} onClick={() => onPageChange('farmers')} />
        <NavButton icon="📡" label="Climate Ledger" active={currentPage === 'ledger'} onClick={() => onPageChange('ledger')} badge="8" badgeColor="#2E86C1" />
        <NavButton icon="📨" label="Delivery" active={currentPage === 'delivery'} onClick={() => onPageChange('delivery')} />
        
        <div className="text-[8px] text-white/25 uppercase tracking-widest px-2 pt-2 pb-1 mt-2" style={{ fontFamily: "'Space Mono', monospace" }}>
          System
        </div>
        <NavButton icon="🔔" label="Alerts" active={currentPage === 'alerts'} onClick={() => onPageChange('alerts')} badge="2" badgeColor="#E05252" />
        <NavButton icon="⚙️" label="Settings" active={currentPage === 'settings'} onClick={() => onPageChange('settings')} />
      </nav>

      {/* Footer - Season Info */}
      <div className="p-3 border-t relative z-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="rounded-lg px-2.5 py-2" style={{ 
          background: 'rgba(58,158,98,0.15)',
          border: '1px solid rgba(58,158,98,0.25)'
        }}>
          <div className="text-[8px] text-white/35 uppercase tracking-wider mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
            Active Season
          </div>
          <div className="text-[11px] font-semibold text-white/80">Masika 2026</div>
          <div className="text-[10px] text-white/40 mt-0.5">La Niña weakening · IOD Neutral</div>
        </div>
      </div>
    </aside>
  );
}

interface NavButtonProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: string;
  badgeColor?: string;
}

function NavButton({ icon, label, active, onClick, badge, badgeColor = '#3A9E62' }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13px] font-medium transition-all mb-px"
      style={{
        background: active ? 'rgba(58,158,98,0.2)' : 'transparent',
        color: active ? '#fff' : 'rgba(255,255,255,0.55)'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
        }
      }}
    >
      <span className="text-[15px] w-[18px] text-center">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span 
          className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white"
          style={{ background: badgeColor }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

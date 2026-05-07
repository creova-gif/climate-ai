interface TopbarProps {
  onSendAdvisory: () => void;
}

export function Topbar({ onSendAdvisory }: TopbarProps) {
  return (
    <div 
      className="h-[54px] flex-shrink-0 px-6 flex items-center gap-4 border-b"
      style={{
        background: '#FFFFFF',
        borderColor: '#E2DDD6'
      }}
    >
      <div className="flex-1">
        <div className="text-[15px] font-bold" style={{ color: '#1A1714' }}>
          Platform Overview
        </div>
        <div className="text-[11px]" style={{ color: '#8A837A' }}>
          Tanzania · ICPAC Masika 2026 · 3 Zones Active
        </div>
      </div>
      
      <StatPill color="#3A9E62" label="3 Zones Active" />
      <StatPill color="#F5A623" label="2 Drought Alerts" />
      <StatPill color="#3A9E62" label="1,000 Farmers" />
      
      <button
        onClick={onSendAdvisory}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-white transition-all hover:opacity-90"
        style={{ background: '#1F6B3E' }}
      >
        📤 Send Advisory
      </button>
    </div>
  );
}

function StatPill({ color, label }: { color: string; label: string }) {
  return (
    <div 
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap border"
      style={{
        background: '#F8F6F1',
        borderColor: '#E2DDD6',
        color: '#4A443D'
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </div>
  );
}
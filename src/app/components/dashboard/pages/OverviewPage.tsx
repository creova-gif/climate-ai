import { useState } from 'react';

export function OverviewPage() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-3">
        <KPI 
          label="Registered Farmers"
          value="1,000"
          delta="↑ 312 this month"
          color="#3A9E62"
          deltaType="up"
        />
        <KPI 
          label="Active Drought Alerts"
          value="2"
          delta="↑ 1 new · Dodoma + Singida"
          color="#F5A623"
          deltaType="up"
        />
        <KPI 
          label="Advisories Sent"
          value="4,782"
          delta="↑ 18% from last season"
          color="#2E86C1"
          deltaType="up"
        />
        <KPI 
          label="Message Open Rate"
          value="84%"
          delta="↑ 6pts vs SMS-only pilots"
          color="#3A9E62"
          deltaType="up"
        />
      </div>

      {/* Zones + Alerts */}
      <div className="grid grid-cols-[1fr_300px] gap-4">
        <Panel title="🗺 Agroecological Zones — Tanzania" subtitle="ICPAC Masika 2026">
          <div className="grid grid-cols-3 gap-3">
            <ZoneCard
              name="Dodoma"
              region="Central Region · 312 farmers"
              risk={82}
              riskType="high"
              riskLabel="82% drought risk"
              badge="Drought Alert"
              badgeType="drought"
              selected={selectedZone === 'dodoma'}
              onClick={() => setSelectedZone('dodoma')}
            />
            <ZoneCard
              name="Morogoro"
              region="Eastern Region · 287 farmers"
              risk={71}
              riskType="medium"
              riskLabel="71% flood risk"
              badge="Flood Watch"
              badgeType="flood"
              selected={selectedZone === 'morogoro'}
              onClick={() => setSelectedZone('morogoro')}
            />
            <ZoneCard
              name="Arusha"
              region="Northern Region · 401 farmers"
              risk={45}
              riskType="low"
              riskLabel="Near normal"
              badge="Low Risk"
              badgeType="ok"
              selected={selectedZone === 'arusha'}
              onClick={() => setSelectedZone('arusha')}
            />
          </div>
        </Panel>

        <Panel title="⚡ Live Alerts" compact>
          <div className="flex flex-col gap-2">
            <Alert
              icon="🔥"
              type="drought"
              title="Dodoma Drought — Critical"
              desc="Rainfall 32% below normal. 312 farmers at risk. Advisory pending."
              time="2h ago"
            />
            <Alert
              icon="🌊"
              type="flood"
              title="Morogoro Flood Watch"
              desc="Above-normal rains forecast. Drainage advisory recommended."
              time="6h ago"
            />
            <Alert
              icon="✅"
              type="ok"
              title="Arusha — Normal Season"
              desc="Near-normal forecast. Standard planting advisory sent to 401 farmers."
              time="1d ago"
            />
          </div>
        </Panel>
      </div>

      {/* Delivery Stats */}
      <Panel title="📊 Delivery Performance — This Season">
        <div className="grid grid-cols-4 gap-4">
          <DeliveryStat
            label="WhatsApp Delivered"
            value="3,241"
            progress={84}
            progressColor="#3A9E62"
            subtitle="84% open rate"
          />
          <DeliveryStat
            label="SMS Delivered"
            value="1,141"
            progress={71}
            progressColor="#2E86C1"
            subtitle="71% receipt rate"
          />
          <DeliveryStat
            label="USSD Sessions"
            value="400"
            progress={62}
            progressColor="#F5A623"
            subtitle="62% completion"
          />
          <DeliveryStat
            label="Decision Changed"
            value="67%"
            progress={67}
            progressColor="#3A9E62"
            subtitle="Farmer self-report"
          />
        </div>
      </Panel>
    </>
  );
}

function KPI({ label, value, delta, color, deltaType }: {
  label: string;
  value: string;
  delta: string;
  color: string;
  deltaType: 'up' | 'down' | 'flat';
}) {
  const deltaColors = {
    up: '#1F6B3E',
    down: '#C0392B',
    flat: '#8A837A'
  };

  return (
    <div className="bg-white border rounded-xl p-4 relative overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: color }} />
      <div className="text-[11px] font-medium mb-1.5" style={{ color: '#8A837A' }}>{label}</div>
      <div className="text-[26px] font-extrabold mb-1 leading-none tracking-tight" style={{ color: '#1A1714' }}>
        {value}
      </div>
      <div className="text-[11px]" style={{ color: deltaColors[deltaType] }}>{delta}</div>
    </div>
  );
}

function Panel({ title, subtitle, children, compact }: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2DDD6' }}>
        <div className="text-[13px] font-bold" style={{ color: '#1A1714' }}>{title}</div>
        {subtitle && (
          <div className="text-[10px]" style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A' }}>
            {subtitle}
          </div>
        )}
      </div>
      <div className={compact ? 'p-3' : 'p-4'}>
        {children}
      </div>
    </div>
  );
}

function ZoneCard({ name, region, risk, riskType, riskLabel, badge, badgeType, selected, onClick }: {
  name: string;
  region: string;
  risk: number;
  riskType: 'high' | 'medium' | 'low';
  riskLabel: string;
  badge: string;
  badgeType: 'drought' | 'flood' | 'ok';
  selected: boolean;
  onClick: () => void;
}) {
  const riskColors = {
    high: 'linear-gradient(90deg, #F5A623, #C0392B)',
    medium: 'linear-gradient(90deg, #F5A623, #E8A000)',
    low: '#3A9E62'
  };

  const badgeStyles = {
    drought: { bg: '#FEF3E3', color: '#B8660A', border: 'rgba(184,102,10,0.2)' },
    flood: { bg: '#E8F0F8', color: '#1A5280', border: 'rgba(26,82,128,0.2)' },
    ok: { bg: '#E8F5EE', color: '#1F6B3E', border: 'rgba(31,107,62,0.2)' }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border rounded-xl p-4 cursor-pointer transition-all relative"
      style={{
        borderColor: selected ? '#3A9E62' : '#E2DDD6',
        boxShadow: selected ? '0 0 0 3px rgba(58,158,98,0.12)' : 'none',
        transform: 'translateY(0)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#D0CAC0';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(26,23,20,0.08), 0 4px 16px rgba(26,23,20,0.04)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = '#E2DDD6';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <div className="text-[15px] font-extrabold mb-0.5" style={{ color: '#1A1714' }}>{name}</div>
      <div className="text-[11px] mb-3" style={{ color: '#8A837A' }}>{region}</div>
      <div className="h-1 rounded-sm mb-2 overflow-hidden" style={{ background: '#F8F6F1' }}>
        <div
          className="h-full rounded-sm transition-all duration-700"
          style={{ width: `${risk}%`, background: riskColors[riskType] }}
        />
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-semibold" style={{ color: '#4A443D' }}>
          {riskType === 'high' ? '🌡' : riskType === 'medium' ? '🌊' : '✅'} {riskLabel}
        </span>
        <span
          className="px-2 py-0.5 rounded text-[9px] tracking-wide border"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: badgeStyles[badgeType].bg,
            color: badgeStyles[badgeType].color,
            borderColor: badgeStyles[badgeType].border
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

function Alert({ icon, type, title, desc, time }: {
  icon: string;
  type: 'drought' | 'flood' | 'ok';
  title: string;
  desc: string;
  time: string;
}) {
  const styles = {
    drought: { bg: '#FEF3E3', border: 'rgba(184,102,10,0.2)' },
    flood: { bg: '#E8F0F8', border: 'rgba(26,82,128,0.2)' },
    ok: { bg: '#E8F5EE', border: 'rgba(31,107,62,0.2)' }
  };

  return (
    <div
      className="flex gap-2.5 items-start p-2.5 rounded-lg border"
      style={{ background: styles[type].bg, borderColor: styles[type].border }}
    >
      <span className="text-base flex-shrink-0">{icon}</span>
      <div className="flex-1">
        <div className="text-[12px] font-bold mb-0.5" style={{ color: '#1A1714' }}>{title}</div>
        <div className="text-[11px] leading-relaxed" style={{ color: '#4A443D' }}>{desc}</div>
      </div>
      <span className="text-[9px] flex-shrink-0 pt-0.5" style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A' }}>
        {time}
      </span>
    </div>
  );
}

function DeliveryStat({ label, value, progress, progressColor, subtitle }: {
  label: string;
  value: string;
  progress: number;
  progressColor: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="text-[11px] mb-1" style={{ color: '#8A837A' }}>{label}</div>
      <div className="text-[20px] font-extrabold" style={{ color: '#1A1714' }}>{value}</div>
      <div className="h-1 rounded-sm overflow-hidden mt-1.5" style={{ background: '#F8F6F1' }}>
        <div
          className="h-full rounded-sm transition-all"
          style={{ width: `${progress}%`, background: progressColor }}
        />
      </div>
      <div className="text-[10px] mt-1" style={{ color: '#8A837A' }}>{subtitle}</div>
    </div>
  );
}

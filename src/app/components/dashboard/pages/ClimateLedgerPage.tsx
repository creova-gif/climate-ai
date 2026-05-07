export function ClimateLedgerPage() {
  const observations = [
    { farmer: 'Juma Mwangi', zone: 'Dodoma', date: 'Apr 10, 2026', rainfall: 'Light', temp: 'Hot', cropStress: 'Wilting' },
    { farmer: 'Amina Hassan', zone: 'Morogoro', date: 'Apr 10, 2026', rainfall: 'Moderate', temp: 'Normal', cropStress: 'Normal' },
    { farmer: 'John Kilonzo', zone: 'Arusha', date: 'Apr 9, 2026', rainfall: 'Heavy', temp: 'Normal', cropStress: 'Normal' },
    { farmer: 'Fatuma Ali', zone: 'Dodoma', date: 'Apr 9, 2026', rainfall: 'None', temp: 'Hot', cropStress: 'Yellowing' },
    { farmer: 'Paulo Mshana', zone: 'Morogoro', date: 'Apr 8, 2026', rainfall: 'Light', temp: 'Normal', cropStress: 'Normal' },
    { farmer: 'Juma Mwangi', zone: 'Dodoma', date: 'Apr 3, 2026', rainfall: 'None', temp: 'Hot', cropStress: 'Wilting' },
    { farmer: 'Amina Hassan', zone: 'Morogoro', date: 'Apr 3, 2026', rainfall: 'Moderate', temp: 'Normal', cropStress: 'Normal' },
    { farmer: 'John Kilonzo', zone: 'Arusha', date: 'Apr 2, 2026', rainfall: 'Heavy', temp: 'Cold', cropStress: 'Normal' },
  ];

  return (
    <>
      <div 
        className="text-[12px] px-3.5 py-2.5 rounded-lg border"
        style={{
          background: '#E8F0F8',
          borderColor: 'rgba(26,82,128,0.2)',
          color: '#4A443D'
        }}
      >
        📡 <strong>Community Climate Ledger</strong> — Farmers log weekly observations via USSD/WhatsApp. This hyperlocal data validates satellite models and improves advisory accuracy. Data is sold to research partners.
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Panel title="📊 Observation Summary">
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Total Observations" value="127" color="#2E86C1" />
            <StatCard label="Active Farmers Logging" value="87" color="#3A9E62" />
            <StatCard label="This Week" value="24" color="#F5A623" />
            <StatCard label="Avg Response Time" value="31 sec" color="#1F6B3E" />
          </div>
        </Panel>

        <Panel title="💰 Data Monetization">
          <div className="flex flex-col gap-2">
            <div className="p-3 rounded-lg border" style={{ background: '#F8F6F1', borderColor: '#E2DDD6' }}>
              <div className="text-[10px] mb-1" style={{ color: '#8A837A' }}>Potential Revenue (Q2 2026)</div>
              <div className="text-[20px] font-extrabold" style={{ color: '#1A1714' }}>$8,400</div>
              <div className="text-[11px] mt-1" style={{ color: '#4A443D' }}>Based on 1,000 farmers × 12 weeks × $0.70/obs</div>
            </div>
            <div className="text-[11px] leading-relaxed" style={{ color: '#4A443D' }}>
              <strong>Buyers:</strong> Amini, IBM Research Africa, CGIAR, ACRE Africa (parametric insurance triggers)
            </div>
          </div>
        </Panel>
      </div>

      <Panel title="📝 Recent Observations">
        <div className="grid grid-cols-2 gap-3">
          {observations.map((obs, i) => (
            <ObservationCard key={i} {...obs} />
          ))}
        </div>
      </Panel>
    </>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div className="px-4 py-3 border-b" style={{ borderColor: '#E2DDD6' }}>
        <div className="text-[13px] font-bold" style={{ color: '#1A1714' }}>{title}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="p-3 rounded-lg border" style={{ background: '#F8F6F1', borderColor: '#E2DDD6' }}>
      <div className="text-[10px] mb-1" style={{ color: '#8A837A' }}>{label}</div>
      <div className="text-[20px] font-extrabold" style={{ color }}>{value}</div>
    </div>
  );
}

function ObservationCard({ farmer, zone, date, rainfall, temp, cropStress }: {
  farmer: string;
  zone: string;
  date: string;
  rainfall: string;
  temp: string;
  cropStress: string;
}) {
  return (
    <div className="bg-white border rounded-lg p-3.5" style={{ borderColor: '#E2DDD6' }}>
      <div className="text-[12px] font-bold mb-1" style={{ color: '#1A1714' }}>{farmer}</div>
      <div className="text-[10px] mb-2.5" style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A' }}>
        {zone} · {date}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <MetricBadge label="Rainfall" value={rainfall} />
        <MetricBadge label="Temp" value={temp} />
        <MetricBadge label="Crop Stress" value={cropStress} span2 />
      </div>
    </div>
  );
}

function MetricBadge({ label, value, span2 }: { label: string; value: string; span2?: boolean }) {
  return (
    <div className={`rounded p-2 ${span2 ? 'col-span-2' : ''}`} style={{ background: '#F8F6F1' }}>
      <div className="text-[9px] uppercase tracking-wide mb-0.5" style={{ color: '#8A837A' }}>{label}</div>
      <div className="text-[13px] font-bold" style={{ color: '#1A1714' }}>{value}</div>
    </div>
  );
}

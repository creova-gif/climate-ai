import { Link } from 'react-router';

export function StrategicPlan() {
  return (
    <div style={{
      background: '#0A0F0D',
      color: '#E8F0EA',
      fontFamily: "'Syne', sans-serif",
      fontSize: '14px',
      lineHeight: '1.6',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header className="max-w-[1000px] mx-auto px-8 pt-12 pb-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div 
          className="flex items-center gap-2.5 mb-4 text-[10px] uppercase tracking-widest"
          style={{ color: '#3DD68C', fontFamily: "'JetBrains Mono', monospace" }}
        >
          <div className="w-8 h-px" style={{ background: '#3DD68C' }} />
          CREOVA Strategic Intelligence · April 2026
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-tight tracking-tight mb-4">
          The Plan to Fill<br />the <span style={{ color: '#3DD68C' }}>Climate Gap</span>
        </h1>
        <p className="max-w-[640px] text-base leading-relaxed italic" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: '#6B7D70' }}>
          A research-grounded, sequenced strategy for what to build, in what order, with what architecture — closing the actual documented gaps in Africa's AI climate ecosystem. Honest. Specific. Executable.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <NavPill href="#gaps">The 5 Gaps</NavPill>
          <NavPill href="#phase1">Phase 1 — Now</NavPill>
          <NavPill href="#phase2">Phase 2 — Scale</NavPill>
          <NavPill href="#phase3">Phase 3 — System</NavPill>
          <NavPill href="#revenue">Revenue Model</NavPill>
          <Link
            to="/"
            className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border transition-all"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              borderColor: 'rgba(255,255,255,0.14)',
              color: '#6B7D70'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3DD68C';
              e.currentTarget.style.color = '#3DD68C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
              e.currentTarget.style.color = '#6B7D70';
            }}
          >
            ← Back to Platform
          </Link>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-8 pb-24">
        {/* The Gaps Section */}
        <Divider id="gaps" label="The 5 Documented Gaps" />

        <div className="rounded-xl overflow-hidden p-6 mb-6" style={{ background: '#111A14', border: '1px solid rgba(255,255,255,0.14)' }}>
          <div className="text-[9px] uppercase tracking-widest mb-2.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#3DD68C' }}>
            What the research actually says is missing
          </div>
          <div className="text-[15px] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: 'rgba(232,240,234,0.85)' }}>
            The world has built the forecasting models. ICPAC, RiverMamba, and CNN deep learning now predict East African floods 2–3 seasons ahead. What doesn't exist is the <strong style={{ color: '#E8F0EA' }}>infrastructure that translates those predictions into money, action, and protection for real people</strong> — in their language, through channels they actually use, before the disaster arrives. That is the gap. Everything below is built on that truth.
          </div>
        </div>

        <GapTable />

        {/* Phase 1 */}
        <Divider id="phase1" label="Phase 1 · Build · Months 0–6" />

        <Phase
          number="01"
          title="Prove the translation layer. Get to 1,000 farmers. Get first B2B contract."
          badge="Now → Month 6"
          badgeColor="green"
        >
          <Insight color="green">
            <strong>The strategic logic:</strong> You don't need to build a forecast model. You need to be the pipe that connects the best models in the world (ICPAC, WFP, FEWS NET — all free and public) to the people those models can't reach. This is a software and distribution play, not a science play. Lowest technical barrier. Highest real-world impact. Most defensible by local presence.
          </Insight>

          <ProductCard
            color="green"
            name="🌾 Hali ya Hewa — Swahili Climate Advisory"
            tag="Build First"
            tagColor="green"
            tagline='"Hali ya Hewa" = "State of the Weather" in Swahili. A Swahili-first AI layer translating public climate forecasts into actionable farmer advisory — delivered via WhatsApp, USSD, and SMS.'
          >
            Pull ICPAC seasonal forecasts (free, public API), FEWS NET food security alerts, and local Tanzania Meteorological Authority data. Run through a lightweight AI layer (Claude Haiku or a fine-tuned open model) that translates complex forecast language into plain Swahili advice: "This season, plant sorghum instead of maize in Dodoma. Rain arrives 3 weeks late. Add 20% more water retention mulch." Deliver via WhatsApp Business API (most farmers already use it), USSD code, and SMS fallback for feature phones.
          </ProductCard>

          <ProductCard
            color="amber"
            name="📡 Community Climate Ledger — Ground Truth Data Collection"
            tag="Build Alongside"
            tagColor="amber"
            tagline="The data Africa's AI models are missing. Farmers log what they observe. You build the ground-truth dataset that makes every model more accurate."
          >
            <strong>The insight from research:</strong> Africa is data-dark not because nothing is happening, but because farmer observations never get digitized. Every farmer knows when the rains came, how much, what happened to their crops. That knowledge exists and then disappears. Build a simple USSD/WhatsApp flow where farmers log weekly observations — rainfall (none/light/moderate/heavy), temperature (hot/normal/cold), crop stress signs (wilting/yellowing/normal). Takes 30 seconds.
          </ProductCard>
        </Phase>

        {/* Phase 2 */}
        <Divider id="phase2" label="Phase 2 · Scale · Months 6–18" />

        <Phase
          number="02"
          title="Add financial products. Close B2B deals. Reach 50,000 farmers and first revenue."
          badge="Month 6 → Month 18"
          badgeColor="amber"
        >
          <Insight color="amber">
            <strong>The strategic shift:</strong> Phase 1 builds trust and data. Phase 2 monetizes them. You layer climate-linked financial products on top of your advisory relationships — because a farmer who already trusts your weather advice is the easiest possible customer for climate insurance. This is the Safaricom playbook: earn trust with a communication service, then sell financial products on the same rails.
          </Insight>

          <ProductCard
            color="amber"
            name="🛡️ Hifadhi ya Hali ya Hewa — Parametric Climate Insurance Layer"
            tag="Phase 2 Core"
            tagColor="amber"
            tagline='"Hifadhi ya Hali ya Hewa" = "Climate Protection." Parametric micro-insurance bundled directly into your farmer advisory platform — auto-triggered by the same ICPAC data you already use.'
          >
            <strong>What the research proves this can work:</strong> Less than 5% of African farmers are insured, but Kenya is introducing new Index Insurance Regulations (2025) requiring 10-day claim settlement. The product: farmers pay TZS 5,000–15,000/season (~$2–$6) for automatic payout when ICPAC data shows rainfall falls below a drought threshold for their zone. No claim needed. No paperwork. Payout goes to M-Pesa instantly.
          </ProductCard>

          <ProductCard
            color="blue"
            name="💰 Anticipatory Cash API — Pre-Disaster Finance Delivery"
            tag="B2B / Institutional"
            tagColor="blue"
            tagline="Sell your farmer registry and mobile money rails to WFP, Red Cross, and NGOs as the last-mile delivery infrastructure for pre-disaster cash transfers."
          >
            <strong>The gap:</strong> WFP disbursed $82M in anticipatory action funds across Eastern Africa in 2024–2025 — but the infrastructure to get that money to the most vulnerable people before a disaster is fragmented and slow. You become that infrastructure. You have the farmer registry, the mobile money rails, and the climate trigger data from ICPAC.
          </ProductCard>
        </Phase>

        {/* Revenue Model */}
        <Divider id="revenue" label="Revenue Model — Year 1 Targets" />

        <div className="rounded-xl overflow-hidden" style={{ background: '#111A14', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="px-5 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="text-[13px] font-bold">💰 Projected Revenue Streams</div>
          </div>
          <div className="p-5">
            <RevenueRow
              name="Insurance Distribution Fees"
              amount="$45k–$90k"
              timeframe="Month 6–12"
              how="10–20% commission on premiums"
            />
            <RevenueRow
              name="Ground-Truth Data Sales"
              amount="$8k–$12k"
              timeframe="Month 3–12"
              how="Sold to Amini, insurers, CGIAR"
            />
            <RevenueRow
              name="B2B Anticipatory Cash API"
              amount="$25k–$40k"
              timeframe="Month 9–12"
              how="WFP/Red Cross last-mile delivery contract"
            />
            <RevenueRow
              name="MRV-as-a-Service (Phase 3)"
              amount="$60k–$120k"
              timeframe="Month 12+"
              how="AI-powered carbon credit verification"
              last
            />
          </div>
        </div>

        <div className="mt-8 p-5 rounded-xl border-l-4" style={{ background: 'rgba(224,82,82,0.06)', borderColor: '#E05252' }}>
          <div className="text-[9px] uppercase tracking-widest mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E05252' }}>
            Hard Truth Section
          </div>
          <div className="text-[13px] leading-relaxed" style={{ color: 'rgba(232,240,234,0.7)' }}>
            <strong style={{ color: '#E8F0EA' }}>None of this works if you don't ship.</strong> The entire climate AI ecosystem is drowning in white papers, pilot projects, and "proof of concepts" that never reach 1,000 users. The only moat you have is execution speed and local trust. Build fast. Deploy messy. Iterate with real farmers. A working WhatsApp bot serving 100 farmers today is worth more than a perfect system serving zero farmers in 6 months.
          </div>
        </div>
      </div>
    </div>
  );
}

function NavPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border transition-all"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        borderColor: 'rgba(255,255,255,0.14)',
        color: '#6B7D70',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3DD68C';
        e.currentTarget.style.color = '#3DD68C';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
        e.currentTarget.style.color = '#6B7D70';
      }}
    >
      {children}
    </a>
  );
}

function Divider({ id, label }: { id?: string; label: string }) {
  return (
    <div id={id} className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
      <div className="text-[9px] uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70' }}>
        {label}
      </div>
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
    </div>
  );
}

function GapTable() {
  const gaps = [
    { name: 'Last-Mile Translation', who: '65%+ of Africans in rural areas', severity: 'Critical', what: 'AI forecasts exist at national level; nothing reaches farmers in local languages via accessible channels' },
    { name: 'Climate Finance Delivery', who: 'Smallholder farmers, pastoralists', severity: 'Critical', what: '$82M+ in anticipatory action funds exist but disbursement is slow, fragmented, paper-based' },
    { name: 'Affordable MRV for Small Projects', who: 'Community forests, small agri projects', severity: 'High', what: 'Traditional MRV costs $15,000–$30,000/project — excluding all small African projects from carbon markets' },
    { name: 'Parametric Insurance Access', who: 'Smallholder farmers, pastoralists', severity: 'High', what: 'Less than 5% of African farmers are insured. Products exist but distribution gaps are massive' },
  ];

  return (
    <div className="overflow-hidden rounded-lg mb-6" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
      <table className="w-full text-[12px]">
        <thead>
          <tr style={{ background: '#111A14' }}>
            <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-widest font-normal" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70', borderColor: 'rgba(255,255,255,0.14)' }}>Gap</th>
            <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-widest font-normal" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70', borderColor: 'rgba(255,255,255,0.14)' }}>Who suffers</th>
            <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-widest font-normal" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70', borderColor: 'rgba(255,255,255,0.14)' }}>Severity</th>
            <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-widest font-normal" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70', borderColor: 'rgba(255,255,255,0.14)' }}>What's missing</th>
          </tr>
        </thead>
        <tbody>
          {gaps.map((gap, i) => (
            <tr key={i} className={i < gaps.length - 1 ? 'border-b' : ''} style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <td className="px-3 py-2.5 font-semibold" style={{ color: '#E8F0EA' }}>{gap.name}</td>
              <td className="px-3 py-2.5" style={{ color: 'rgba(232,240,234,0.75)' }}>{gap.who}</td>
              <td className="px-3 py-2.5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: gap.severity === 'Critical' ? '#E05252' : '#F5A623' }} />
                  <span style={{ color: 'rgba(232,240,234,0.75)' }}>{gap.severity}</span>
                </span>
              </td>
              <td className="px-3 py-2.5" style={{ color: 'rgba(232,240,234,0.75)', lineHeight: '1.55' }}>{gap.what}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Phase({ number, title, badge, badgeColor, children }: {
  number: string;
  title: string;
  badge: string;
  badgeColor: 'green' | 'amber' | 'blue';
  children: React.ReactNode;
}) {
  const badgeColors = {
    green: { bg: 'rgba(61,214,140,0.12)', color: '#3DD68C', border: 'rgba(61,214,140,0.25)' },
    amber: { bg: 'rgba(245,166,35,0.12)', color: '#F5A623', border: 'rgba(245,166,35,0.25)' },
    blue: { bg: 'rgba(91,155,213,0.12)', color: '#5B9BD5', border: 'rgba(91,155,213,0.25)' }
  };

  return (
    <div className="rounded-xl overflow-hidden mb-12" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-4 px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <span className="text-[10px] uppercase tracking-widest flex-shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70' }}>
          Phase {number}
        </span>
        <span className="text-[1.1rem] font-bold flex-1" style={{ color: '#E8F0EA' }}>{title}</span>
        <span
          className="text-[9px] uppercase tracking-wider px-3 py-1 rounded-full flex-shrink-0 border"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: badgeColors[badgeColor].bg,
            color: badgeColors[badgeColor].color,
            borderColor: badgeColors[badgeColor].border
          }}
        >
          {badge}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

function Insight({ color, children }: { color: 'green' | 'amber' | 'red' | 'blue'; children: React.ReactNode }) {
  const colors = {
    green: { border: '#3DD68C', bg: 'rgba(61,214,140,0.05)' },
    amber: { border: '#F5A623', bg: 'rgba(245,166,35,0.06)' },
    red: { border: '#E05252', bg: 'rgba(224,82,82,0.06)' },
    blue: { border: '#5B9BD5', bg: 'rgba(91,155,213,0.07)' }
  };

  return (
    <div
      className="border-l-4 px-3.5 py-3 rounded-r-lg text-[13px] leading-relaxed"
      style={{
        borderColor: colors[color].border,
        background: colors[color].bg,
        color: 'rgba(232,240,234,0.8)'
      }}
    >
      {children}
    </div>
  );
}

function ProductCard({ color, name, tag, tagColor, tagline, children }: {
  color: 'green' | 'amber' | 'blue' | 'red';
  name: string;
  tag: string;
  tagColor: 'green' | 'amber' | 'blue';
  tagline: string;
  children: React.ReactNode;
}) {
  const topColors = {
    green: '#3DD68C',
    amber: '#F5A623',
    blue: '#5B9BD5',
    red: '#E05252'
  };

  const badgeColors = {
    green: { bg: 'rgba(61,214,140,0.12)', color: '#3DD68C', border: 'rgba(61,214,140,0.25)' },
    amber: { bg: 'rgba(245,166,35,0.12)', color: '#F5A623', border: 'rgba(245,166,35,0.25)' },
    blue: { bg: 'rgba(91,155,213,0.12)', color: '#5B9BD5', border: 'rgba(91,155,213,0.25)' }
  };

  return (
    <div className="rounded-xl overflow-hidden relative" style={{ background: '#111A14', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: topColors[color] }} />
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="text-base font-bold leading-tight" style={{ color: '#E8F0EA' }}>{name}</div>
          <span
            className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap border"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: badgeColors[tagColor].bg,
              color: badgeColors[tagColor].color,
              borderColor: badgeColors[tagColor].border
            }}
          >
            {tag}
          </span>
        </div>
        <div className="text-[13px] italic mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: '#6B7D70' }}>
          {tagline}
        </div>
        <div className="text-[13px] leading-relaxed" style={{ color: 'rgba(232,240,234,0.7)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function RevenueRow({ name, amount, timeframe, how, last }: {
  name: string;
  amount: string;
  timeframe: string;
  how: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[2fr_1fr_1fr_2fr] gap-2 py-2.5 text-[12px] items-center ${!last ? 'border-b' : ''}`}
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <div style={{ color: '#E8F0EA', fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#3DD68C' }}>{amount}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B7D70', fontSize: '11px' }}>{timeframe}</div>
      <div style={{ color: 'rgba(232,240,234,0.6)' }}>{how}</div>
    </div>
  );
}

import { useState } from 'react';

export function AdvisoryEnginePage() {
  const [zone, setZone] = useState('dodoma');
  const [crop, setCrop] = useState('maize');
  const [language, setLanguage] = useState<'swahili' | 'english'>('swahili');
  const [isGenerating, setIsGenerating] = useState(false);
  const [advisory, setAdvisory] = useState('');

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const advisories = {
        swahili: "Msimu huu wa Masika 2026, kuna uwezekano wa mvua kupungua hadi 32% chini ya wastani katika Mkoa wa Dodoma. Tunapendekeza kupanda mahindi na mtama kwa uwiano wa 40:60 badala ya 70:30 kwa kawaida. Ongeza mulch ya kuzuia maji kwa asilimia 20% zaidi ili kuhifadhi unyevu. Mvua itaanza wiki 2-3 baada ya kawaida — subiri hadi siku 15 Aprili kabla ya kupanda.",
        english: "This Masika 2026 season, there is a 32% below-average rainfall forecast for Dodoma Region. We recommend planting maize and sorghum in a 40:60 ratio instead of the usual 70:30. Increase water-retention mulch by 20% to preserve moisture. Rains will arrive 2-3 weeks late — wait until April 15 before planting."
      };
      setAdvisory(advisories[language]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <>
      <div 
        className="text-[12px] px-3.5 py-2.5 rounded-lg border"
        style={{
          background: '#E8F5EE',
          borderColor: 'rgba(31,107,62,0.2)',
          color: '#4A443D'
        }}
      >
        🤖 <strong>Advisory Engine</strong> — Powered by Claude API. Select a zone and crop, then generate a Swahili advisory based on live ICPAC forecast data. Preview across WhatsApp, SMS, and USSD before sending.
      </div>

      <div className="grid grid-cols-[300px_1fr] gap-4">
        {/* Config Panel */}
        <div className="flex flex-col gap-3">
          <Panel title="⚙️ Configuration">
            <div className="flex flex-col gap-3">
              <FormGroup label="Agroecological Zone">
                <select 
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{
                    borderColor: '#E2DDD6',
                    background: '#FFFFFF',
                    color: '#1A1714'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option value="dodoma">Dodoma (Central)</option>
                  <option value="morogoro">Morogoro (Eastern)</option>
                  <option value="arusha">Arusha (Northern)</option>
                  <option value="mbeya">Mbeya (Southern Highlands)</option>
                  <option value="shinyanga">Shinyanga (Lake Zone)</option>
                </select>
              </FormGroup>

              <FormGroup label="Primary Crop">
                <select 
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{
                    borderColor: '#E2DDD6',
                    background: '#FFFFFF',
                    color: '#1A1714'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option value="maize">Maize (Mahindi)</option>
                  <option value="sorghum">Sorghum (Mtama)</option>
                  <option value="cassava">Cassava (Muhogo)</option>
                  <option value="beans">Beans (Maharage)</option>
                  <option value="rice">Rice (Mchele)</option>
                </select>
              </FormGroup>

              <FormGroup label="Season">
                <select 
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{
                    borderColor: '#E2DDD6',
                    background: '#FFFFFF',
                    color: '#1A1714'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option>Masika 2026 (Mar–May)</option>
                  <option>Vuli 2026 (Oct–Dec)</option>
                </select>
              </FormGroup>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full px-3.5 py-2 rounded-lg text-[12px] font-semibold text-white transition-all disabled:opacity-50"
                style={{ background: '#1F6B3E' }}
              >
                {isGenerating ? '⏳ Generating...' : '✨ Generate Advisory'}
              </button>
            </div>
          </Panel>

          <Panel title="📊 Forecast Data (ICPAC)">
            <div className="rounded-lg p-3 border" style={{ background: '#F8F6F1', borderColor: '#E2DDD6' }}>
              <div className="text-[9px] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A' }}>
                Dodoma — Masika 2026
              </div>
              <div className="flex flex-col gap-1">
                <DataRow label="Rainfall" value="32% below normal" />
                <DataRow label="Temp" value="+1.2°C anomaly" />
                <DataRow label="Onset" value="Late (15 Apr ±7d)" />
                <DataRow label="Drought Risk" value="High (82%)" />
              </div>
            </div>
          </Panel>
        </div>

        {/* Advisory Output */}
        <Panel title="📝 Advisory Output" tag="ICPAC + Claude Haiku">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 p-1 border rounded-lg" style={{ background: '#F8F6F1', borderColor: '#E2DDD6' }}>
              <button
                onClick={() => setLanguage('swahili')}
                className="px-3.5 py-1 rounded text-[11px] font-semibold transition-all"
                style={{
                  background: language === 'swahili' ? '#FFFFFF' : 'transparent',
                  color: language === 'swahili' ? '#1A1714' : '#8A837A',
                  boxShadow: language === 'swahili' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                Swahili
              </button>
              <button
                onClick={() => setLanguage('english')}
                className="px-3.5 py-1 rounded text-[11px] font-semibold transition-all"
                style={{
                  background: language === 'english' ? '#FFFFFF' : 'transparent',
                  color: language === 'english' ? '#1A1714' : '#8A837A',
                  boxShadow: language === 'english' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                English
              </button>
            </div>
          </div>

          <div 
            className="p-4 border rounded-lg min-h-[120px] relative"
            style={{
              background: '#F8F6F1',
              borderColor: '#E2DDD6',
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '14px',
              lineHeight: '1.75',
              color: '#1A1714'
            }}
          >
            {isGenerating ? (
              <div className="flex items-center justify-center h-full">
                <div className="w-5 h-5 border-2 rounded-full animate-spin"
                  style={{
                    borderColor: '#E2DDD6',
                    borderTopColor: '#3A9E62'
                  }}
                />
              </div>
            ) : advisory ? (
              advisory
            ) : (
              <div style={{ color: '#8A837A', fontStyle: 'italic', fontSize: '13px' }}>
                Click "Generate Advisory" to create a climate advisory based on the selected parameters...
              </div>
            )}
          </div>

          {advisory && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <ChannelPreview type="whatsapp" message={advisory} />
              <ChannelPreview type="sms" message={advisory.substring(0, 160)} />
            </div>
          )}
        </Panel>
      </div>
    </>
  );
}

function Panel({ title, tag, children }: { title: string; tag?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div className="px-4 py-3 border-b flex items-center gap-2.5" style={{ borderColor: '#E2DDD6' }}>
        <div className="text-[13px] font-bold flex-1" style={{ color: '#1A1714' }}>{title}</div>
        {tag && (
          <span 
            className="text-[9px] uppercase tracking-wide px-2 py-1 rounded border"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: '#E8F5EE',
              color: '#1F6B3E',
              borderColor: 'rgba(31,107,62,0.15)'
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-semibold" style={{ color: '#4A443D' }}>{label}</label>
      {children}
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-[11px]">
      <span style={{ color: '#8A837A' }}>{label}</span>
      <span style={{ color: '#1A1714', fontWeight: 600, fontFamily: "'Space Mono', monospace", fontSize: '10px' }}>
        {value}
      </span>
    </div>
  );
}

function ChannelPreview({ type, message }: { type: 'whatsapp' | 'sms'; message: string }) {
  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div 
        className="flex items-center gap-2 px-3 py-2 border-b text-[11px] font-bold"
        style={{
          background: '#F8F6F1',
          borderColor: '#E2DDD6',
          color: '#1A1714'
        }}
      >
        {type === 'whatsapp' ? '💬 WhatsApp' : '📱 SMS'}
      </div>
      <div className="p-3">
        {type === 'whatsapp' ? (
          <div className="rounded-xl rounded-br-none p-2.5 shadow-sm"
            style={{
              background: '#DCF8C6',
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '12px',
              lineHeight: '1.6',
              color: '#1A1A1A'
            }}
          >
            {message}
            <div className="text-[10px] text-right mt-1" style={{ color: '#8B9' }}>14:23</div>
          </div>
        ) : (
          <>
            <div className="rounded-xl rounded-tl-none p-2.5"
              style={{
                background: '#E8E8E8',
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '11px',
                lineHeight: '1.5',
                color: '#1A1A1A'
              }}
            >
              {message}
            </div>
            <div className="text-[9px] text-right mt-1" style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A' }}>
              {message.length}/160 chars
            </div>
          </>
        )}
      </div>
    </div>
  );
}

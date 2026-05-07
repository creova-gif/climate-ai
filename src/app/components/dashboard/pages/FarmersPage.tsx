import { useState } from 'react';

export function FarmersPage() {
  const [showForm, setShowForm] = useState(false);

  const farmers = [
    { id: '001', name: 'Juma Mwangi', zone: 'Dodoma', crop: 'Maize', phone: '+255 712 345 678', enrolled: 'Mar 2026' },
    { id: '002', name: 'Amina Hassan', zone: 'Morogoro', crop: 'Rice', phone: '+255 754 123 456', enrolled: 'Feb 2026' },
    { id: '003', name: 'John Kilonzo', zone: 'Arusha', crop: 'Beans', phone: '+255 689 234 567', enrolled: 'Mar 2026' },
    { id: '004', name: 'Fatuma Ali', zone: 'Dodoma', crop: 'Sorghum', phone: '+255 732 456 789', enrolled: 'Jan 2026' },
    { id: '005', name: 'Paulo Mshana', zone: 'Morogoro', crop: 'Cassava', phone: '+255 765 987 654', enrolled: 'Mar 2026' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Panel 
          title="👨‍🌾 Registered Farmers"
          action={
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white transition-all"
              style={{ background: '#1F6B3E' }}
            >
              + Add Farmer
            </button>
          }
        >
          <div className="overflow-hidden rounded-lg border" style={{ borderColor: '#E2DDD6' }}>
            <table className="w-full text-[12px]">
              <thead>
                <tr style={{ background: '#F8F6F1' }}>
                  <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-wider font-normal"
                    style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A', borderColor: '#E2DDD6' }}>
                    ID
                  </th>
                  <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-wider font-normal"
                    style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A', borderColor: '#E2DDD6' }}>
                    Name
                  </th>
                  <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-wider font-normal"
                    style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A', borderColor: '#E2DDD6' }}>
                    Zone
                  </th>
                  <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-wider font-normal"
                    style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A', borderColor: '#E2DDD6' }}>
                    Primary Crop
                  </th>
                  <th className="text-left px-3 py-2 border-b text-[9px] uppercase tracking-wider font-normal"
                    style={{ fontFamily: "'Space Mono', monospace", color: '#8A837A', borderColor: '#E2DDD6' }}>
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {farmers.map((farmer, i) => (
                  <tr key={farmer.id} className={i < farmers.length - 1 ? 'border-b' : ''} style={{ borderColor: '#E2DDD6' }}>
                    <td className="px-3 py-2.5 font-semibold" style={{ color: '#1A1714' }}>{farmer.id}</td>
                    <td className="px-3 py-2.5" style={{ color: '#4A443D' }}>{farmer.name}</td>
                    <td className="px-3 py-2.5" style={{ color: '#4A443D' }}>{farmer.zone}</td>
                    <td className="px-3 py-2.5" style={{ color: '#4A443D' }}>{farmer.crop}</td>
                    <td className="px-3 py-2.5" style={{ color: '#4A443D', fontFamily: "'Space Mono', monospace", fontSize: '11px' }}>
                      {farmer.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="📝 Enroll New Farmer">
          {showForm ? (
            <div className="flex flex-col gap-3">
              <FormGroup label="Full Name">
                <input
                  type="text"
                  placeholder="e.g., Juma Mwangi"
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{ borderColor: '#E2DDD6', background: '#FFFFFF', color: '#1A1714' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                />
              </FormGroup>
              <FormGroup label="Phone Number">
                <input
                  type="tel"
                  placeholder="+255 712 345 678"
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{ borderColor: '#E2DDD6', background: '#FFFFFF', color: '#1A1714' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                />
              </FormGroup>
              <FormGroup label="Zone">
                <select
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{ borderColor: '#E2DDD6', background: '#FFFFFF', color: '#1A1714' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option>Select zone...</option>
                  <option>Dodoma</option>
                  <option>Morogoro</option>
                  <option>Arusha</option>
                  <option>Mbeya</option>
                  <option>Shinyanga</option>
                </select>
              </FormGroup>
              <FormGroup label="Primary Crop">
                <select
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{ borderColor: '#E2DDD6', background: '#FFFFFF', color: '#1A1714' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option>Select crop...</option>
                  <option>Maize</option>
                  <option>Sorghum</option>
                  <option>Cassava</option>
                  <option>Beans</option>
                  <option>Rice</option>
                </select>
              </FormGroup>
              <button
                className="w-full px-3.5 py-2 rounded-lg text-[12px] font-semibold text-white transition-all"
                style={{ background: '#1F6B3E' }}
              >
                ✓ Enroll Farmer
              </button>
            </div>
          ) : (
            <div className="text-center py-10 flex flex-col items-center gap-2">
              <div className="text-[32px] opacity-50">📝</div>
              <div className="text-[13px]" style={{ color: '#8A837A' }}>
                Click "Add Farmer" to enroll a new farmer
              </div>
            </div>
          )}
        </Panel>
      </div>
    </>
  );
}

function Panel({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E2DDD6' }}>
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2DDD6' }}>
        <div className="text-[13px] font-bold" style={{ color: '#1A1714' }}>{title}</div>
        {action}
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

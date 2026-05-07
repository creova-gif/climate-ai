import { useState } from 'react';

interface SendAdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SendAdvisoryModal({ isOpen, onClose }: SendAdvisoryModalProps) {
  const [progress, setProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSending(false);
            setProgress(0);
            onClose();
          }, 500);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity"
      style={{
        background: 'rgba(26,23,20,0.5)',
        backdropFilter: 'blur(4px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none'
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-[480px] w-[90%] transition-transform"
        style={{
          boxShadow: '0 4px 24px rgba(26,23,20,0.12)',
          transform: isOpen ? 'scale(1)' : 'scale(0.96)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-[16px] font-extrabold mb-1" style={{ color: '#1A1714' }}>
          Send Climate Advisory
        </div>
        <div className="text-[12px] mb-4" style={{ color: '#8A837A' }}>
          Broadcast the generated advisory to farmers in the selected zone
        </div>

        {isSending ? (
          <div className="py-6">
            <div className="text-center mb-4">
              <div className="text-[14px] font-semibold" style={{ color: '#1A1714' }}>
                Sending to 312 farmers in Dodoma...
              </div>
              <div className="text-[12px] mt-1" style={{ color: '#8A837A' }}>
                {progress}% complete
              </div>
            </div>
            <div className="h-1 rounded-sm overflow-hidden" style={{ background: '#F8F6F1' }}>
              <div
                className="h-full rounded-sm transition-all"
                style={{ width: `${progress}%`, background: '#3A9E62' }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold" style={{ color: '#4A443D' }}>Target Zone</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg outline-none transition-colors text-[13px]"
                  style={{ borderColor: '#E2DDD6', background: '#FFFFFF', color: '#1A1714' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3A9E62'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2DDD6'}
                >
                  <option>Dodoma (312 farmers)</option>
                  <option>Morogoro (287 farmers)</option>
                  <option>Arusha (401 farmers)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold" style={{ color: '#4A443D' }}>Delivery Channel</label>
                <div className="flex gap-2">
                  <label className="flex-1 flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition-all"
                    style={{ borderColor: '#E2DDD6' }}>
                    <input type="checkbox" className="w-4 h-4" defaultChecked style={{ accentColor: '#1F6B3E' }} />
                    <span className="text-[12px]" style={{ color: '#1A1714' }}>WhatsApp</span>
                  </label>
                  <label className="flex-1 flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition-all"
                    style={{ borderColor: '#E2DDD6' }}>
                    <input type="checkbox" className="w-4 h-4" defaultChecked style={{ accentColor: '#1F6B3E' }} />
                    <span className="text-[12px]" style={{ color: '#1A1714' }}>SMS</span>
                  </label>
                  <label className="flex-1 flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition-all"
                    style={{ borderColor: '#E2DDD6' }}>
                    <input type="checkbox" className="w-4 h-4" style={{ accentColor: '#1F6B3E' }} />
                    <span className="text-[12px]" style={{ color: '#1A1714' }}>USSD</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 px-3.5 py-2 rounded-lg text-[12px] font-semibold transition-all border"
                style={{
                  background: '#F8F6F1',
                  borderColor: '#E2DDD6',
                  color: '#4A443D'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="flex-1 px-3.5 py-2 rounded-lg text-[12px] font-semibold text-white transition-all"
                style={{ background: '#1F6B3E' }}
              >
                📤 Send Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

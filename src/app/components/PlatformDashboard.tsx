import { useState } from 'react';
import { Link } from 'react-router';
import { Sidebar } from './dashboard/Sidebar';
import { Topbar } from './dashboard/Topbar';
import { OverviewPage } from './dashboard/pages/OverviewPage';
import { AdvisoryEnginePage } from './dashboard/pages/AdvisoryEnginePage';
import { FarmersPage } from './dashboard/pages/FarmersPage';
import { ClimateLedgerPage } from './dashboard/pages/ClimateLedgerPage';
import { SendAdvisoryModal } from './dashboard/SendAdvisoryModal';

type PageType = 'overview' | 'advisory' | 'farmers' | 'ledger' | 'delivery' | 'alerts' | 'settings';

export function PlatformDashboard() {
  const [currentPage, setCurrentPage] = useState<PageType>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <OverviewPage />;
      case 'advisory':
        return <AdvisoryEnginePage />;
      case 'farmers':
        return <FarmersPage />;
      case 'ledger':
        return <ClimateLedgerPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ 
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: '#F2F0EB'
    }}>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <Topbar onSendAdvisory={() => setIsModalOpen(true)} />
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {/* Link to Strategic Plan */}
          <Link 
            to="/plan" 
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-all hover:shadow-sm"
            style={{
              background: 'rgba(31,107,62,0.08)',
              borderColor: 'rgba(31,107,62,0.2)',
              color: '#1F6B3E',
              width: 'fit-content'
            }}
          >
            📋 View Strategic Plan
          </Link>
          {renderPage()}
        </div>
      </div>
      <SendAdvisoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#F2F0EB' }}>
      <div className="text-center">
        <div className="text-[64px] mb-4">🌦</div>
        <h1 className="text-[32px] font-extrabold mb-2" style={{ color: '#1A1714' }}>
          Page Not Found
        </h1>
        <p className="text-[14px] mb-6" style={{ color: '#8A837A' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-semibold text-white transition-all"
          style={{ background: '#1F6B3E' }}
        >
          ← Back to Platform
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', padding: '16px' }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#2D7C5F', textDecoration: 'none' }}>
            MarketSpot
          </Link>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {user ? (
              <>
                {user.userType === 'organizer' && (
                  <Link href="/organizer/dashboard" style={{ color: '#2C3E50', textDecoration: 'none' }}>
                    Dashboard
                  </Link>
                )}
                {user.userType === 'vendor' && (
                  <Link href="/vendor/dashboard" style={{ color: '#2C3E50', textDecoration: 'none' }}>
                    My Events
                  </Link>
                )}
                <button
                  onClick={logout}
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#2C3E50', fontSize: '16px' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" style={{ color: '#2C3E50', textDecoration: 'none' }}>
                  Login
                </Link>
                <Link href="/signup" style={{ padding: '8px 16px', backgroundColor: '#2D7C5F', color: 'white', borderRadius: '6px', textDecoration: 'none' }}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#2C3E50', color: 'white', padding: '32px', textAlign: 'center', marginTop: '64px' }}>
        <p>&copy; 2026 MarketSpot. All rights reserved.</p>
      </footer>
    </div>
  );
}

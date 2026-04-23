import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      if (user.userType === 'organizer') {
        router.push('/organizer/dashboard');
      } else {
        router.push('/vendor/dashboard');
      }
    }
  }, [loading, user, router]);

  if (loading || user) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '384px' }}>
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section style={{ background: 'linear-gradient(to right, #2D7C5F, #2C3E50)', color: 'white', padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>Welcome to MarketSpot</h1>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>
            The all-in-one platform for local markets and vendors
          </p>
          {!user && (
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/signup" style={{ padding: '12px 24px', backgroundColor: 'white', color: '#2D7C5F', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                Get Started
              </Link>
              <Link href="/login" style={{ padding: '12px 24px', border: '2px solid white', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                Login
              </Link>
            </div>
          )}
          {user && (
            <div>
              <p style={{ fontSize: '18px', marginBottom: '24px' }}>Welcome, {user.name || user.email}!</p>
              {user.userType === 'organizer' && (
                <Link href="/organizer/dashboard" style={{ padding: '12px 24px', backgroundColor: 'white', color: '#2D7C5F', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
                  Go to Dashboard
                </Link>
              )}
              {user.userType === 'vendor' && (
                <Link href="/vendor/browse" style={{ padding: '12px 24px', backgroundColor: 'white', color: '#2D7C5F', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
                  Browse Events
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px', color: '#2D7C5F' }}>Why MarketSpot?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2D7C5F', marginBottom: '8px' }}>For Organizers</h3>
              <p style={{ color: '#666' }}>
                Create events, manage vendors, track revenue, and grow your market.
              </p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2D7C5F', marginBottom: '8px' }}>For Vendors</h3>
              <p style={{ color: '#666' }}>
                Discover local markets, book booths, and connect with customers.
              </p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2D7C5F', marginBottom: '8px' }}>Simple & Fast</h3>
              <p style={{ color: '#666' }}>
                No complicated setup. Start selling in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

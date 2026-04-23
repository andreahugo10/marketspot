import { useAuth } from '../../hooks/useAuth';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function VendorDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '384px' }}>
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!user || user.userType !== 'vendor') {
    router.push('/login');
    return null;
  }

  return (
    <Layout>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2D7C5F', marginBottom: '32px' }}>My Events</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#666', fontSize: '14px' }}>Upcoming Events</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#2D7C5F' }}>0</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#666', fontSize: '14px' }}>Total Earnings</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#2D7C5F' }}>$0</p>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Ready to grow?</h2>
          <p style={{ color: '#666', marginBottom: '16px' }}>Browse available markets and book your booth</p>
          <Link href="/vendor/browse" style={{ padding: '12px 24px', backgroundColor: '#2D7C5F', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            Browse Available Events
          </Link>
        </div>
      </div>
    </Layout>
  );
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useAuth } from '../../hooks/useAuth';

export default function VendorBrowse() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.userType !== 'vendor')) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2D7C5F', marginBottom: '32px' }}>Browse Markets</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Search available markets and book your next event booth.</p>
      </div>
    </Layout>
  );
}

import { useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';

export default function Test() {
  const [status, setStatus] = useState('Testing...');

  useEffect(() => {
    try {
      console.log('Auth:', auth);
      console.log('DB:', db);
      setStatus('Firebase loaded successfully!');
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  }, []);

  return (
    <div style={{ padding: '40px', fontSize: '18px' }}>
      <p>{status}</p>
    </div>
  );
}

'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="text-white">Wird geladen...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
          
          <div className="text-white">
            <p className="mb-4">Willkommen, {session?.user?.name}!</p>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Ihre Fragebogen-Antworten</h2>
              <p className="text-blue-100">
                Hier werden Ihre Antworten auf den Fragebogen angezeigt.
                Diese Funktion wird in Kürze verfügbar sein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
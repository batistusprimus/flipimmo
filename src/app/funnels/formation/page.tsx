'use client';
import { useSearchParams } from 'next/navigation';
import { config } from './config';

export default function Page() {
  const sp = useSearchParams();
  const variantKey = (sp.get('v') as 'a' | 'b') || undefined;
  const utm = Object.fromEntries([...sp.entries()].filter(([k]) => k.startsWith('utm_')));

  // TODO: brancher le moteur quand prêt, et transmettre variant/utm/config
  // return <QuizEngine config={config} variantKey={variantKey} utm={utm} />;
  return (
    <main style={{ maxWidth: 720, margin: '40px auto', padding: 16 }}>
      <h1 style={{ marginBottom: 8 }}>{config.title}</h1>
      <p style={{ color: '#555', marginBottom: 16 }}>
        Placeholder du tunnel « {config.slug} ». Variante: {variantKey ?? 'auto'}. UTMs capturés: {Object.keys(utm).length}
      </p>
      <p>Le moteur de quiz sera branché ici. Vous pouvez déjà modifier les étapes dans <code>config.ts</code>.</p>
    </main>
  );
}

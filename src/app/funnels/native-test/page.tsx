import type { Metadata } from 'next';

import TestForm from './TestForm';

export const metadata: Metadata = {
  title: 'Formulaire natif – Test',
  description: 'Prototype de formulaire natif FlipImmo avec tracking intégré.',
};

export default function NativeTestPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]/70">Prototype</p>
          <h1 className="mt-4 text-4xl font-extrabold text-[#1E3A8A]">Formulaire natif FlipImmo</h1>
          <p className="mt-4 text-base text-slate-600">
            Test complet de la brique formulaire maison : logique conditionnelle, tracking Mixpanel &amp; Meta, envoi GHL.
          </p>
        </div>
        <TestForm />
      </div>
    </div>
  );
}



import type { Metadata } from 'next';

import TestForm from './TestForm';

export const metadata: Metadata = {
  title: 'Formulaire natif – Test',
  description: 'Prototype de formulaire natif FlipImmo avec tracking intégré.',
};

export default function NativeTestPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Prototype</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Formulaire natif FlipImmo</h1>
          <p className="mt-3 text-base text-slate-600">
            Test complet de la brique formulaire maison : logique conditionnelle, tracking Mixpanel & Meta, envoi GHL.
          </p>
        </div>
        <TestForm />
      </div>
    </div>
  );
}



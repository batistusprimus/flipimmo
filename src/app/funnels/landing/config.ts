import type { FormWizardConfig } from '@/features/forms/core';

import { nativeTestFormConfig } from '@/app/funnels/native-test/config';

export const landingFormConfig: FormWizardConfig = {
  ...nativeTestFormConfig,
  steps: [...nativeTestFormConfig.steps],
  id: 'landing-form',
  name: 'FlipImmo – Landing Formulaire',
};


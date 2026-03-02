import { useState, useEffect } from 'react';

const ONBOARDING_KEY = 'validator_onboarding_done';

export function useOnboarding() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const done = localStorage.getItem(ONBOARDING_KEY);
    if (!done) setShowWelcome(true);
  }, []);

  const dismissWelcome = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setShowWelcome(false);
  };

  return { showWelcome, dismissWelcome };
}

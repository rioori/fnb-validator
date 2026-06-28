import type { Metadata } from 'next';
import EmbedCalculator from './EmbedCalculator';

export const metadata: Metadata = {
  title: 'F&B Break-Even Calculator — Validator.vn',
  description: 'Free embeddable break-even calculator for Vietnamese F&B businesses.',
  robots: { index: false, follow: false },
};

export default function EmbedBreakEvenPage() {
  return <EmbedCalculator />;
}

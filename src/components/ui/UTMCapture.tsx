'use client';
import { useUTM } from '@/hooks/useUTM';

export default function UTMCapture() {
  useUTM();
  return null;
}

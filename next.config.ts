import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  turbopack: {},
  async redirects() {
    return [
      // Legacy /features/* URLs (VI) → canonical /tinh-nang/*
      // The /en/features/ variants already work via middleware; the VI plain /features/ don't.
      { source: '/features/:slug', destination: '/tinh-nang/:slug', permanent: true },
      // Legacy bakery URL without year suffix — Google indexed both variants before we renamed
      { source: '/kien-thuc/chi-phi-mo-tiem-banh-ngot', destination: '/kien-thuc/chi-phi-mo-tiem-banh-ngot-2026', permanent: true },
      { source: '/en/knowledge/chi-phi-mo-tiem-banh-ngot', destination: '/en/knowledge/chi-phi-mo-tiem-banh-ngot-2026', permanent: true },
      // Common city slug typos — HCM should be ho-chi-minh
      { source: '/chi-phi-mo/:model/tai/hcm', destination: '/chi-phi-mo/:model/tai/ho-chi-minh', permanent: true },
      { source: '/chi-phi-mo/:model/tai/hn', destination: '/chi-phi-mo/:model/tai/ha-noi', permanent: true },
      { source: '/en/opening-costs/:model/tai/hcm', destination: '/en/opening-costs/:model/tai/ho-chi-minh', permanent: true },
      { source: '/en/opening-costs/:model/tai/hn', destination: '/en/opening-costs/:model/tai/ha-noi', permanent: true },
    ];
  },
};

export default nextConfig;

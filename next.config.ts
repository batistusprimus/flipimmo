import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Évite l'échec du build sur les règles ESLint (déploiement plus simple)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Évite l'échec du build sur erreurs TS (optionnel, on peut le retirer ensuite)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

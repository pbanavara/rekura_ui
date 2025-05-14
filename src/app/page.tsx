'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Layout from "@/components/layout/Layout";

// Dynamically import components with no SSR to avoid hydration issues with animations
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
      </main>
    </Layout>
  );
}

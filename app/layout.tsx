import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MMTI - 猫猫性格测试',
  description: '探索你的猫咪灵魂，发现你像什么样的猫猫。MMTI猫猫性格测试，18道题发现你的猫咪人格。',
  keywords: ['猫咪', '性格测试', 'MMTI', '心理测试', '趣味测试'],
  openGraph: {
    title: 'MMTI - 猫猫性格测试',
    description: '探索你的猫咪灵魂，发现你像什么样的猫猫',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐱</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})



export default function PageLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <main className={`${inter.variable} ${roboto.variable}`}>
        <div>{children}</div>
      </main>
    );
  }
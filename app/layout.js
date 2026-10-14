import { Courier_Prime } from 'next/font/google';
import './globals.css';

const caesuraFont = Courier_Prime({
   variable: '--font-caesura',
   subsets: ['latin'],
   weight: '400',
});

export const metadata = {
   title: 'Caesura.co.uk | Caesura',
   description: 'What does Caesura mean?',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${caesuraFont.variable}`}>
         <body>{children}</body>
      </html>
   );
}

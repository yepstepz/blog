import cs from 'classnames';

import '@styles/fonts.css';
import '@app/globals.css';
import '@styles/code/theme.css';
import '@styles/content/tables.css';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { HCard } from '@components/Partials/microformats/h-card';
import { ThemeProvider } from "@components/ThemeProvider";

export default function RootLayout({
 // Layouts must accept a children prop.
 // This will be populated with nested layouts or pages
 children,
}: {
  children: React.ReactNode
}) {

  // meta to layout???
  return (
    <html lang="ru">
      <body>
        <ThemeProvider>
          <Header />
          <main className={cs('content', 'container')}>
            <HCard visible={false} />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

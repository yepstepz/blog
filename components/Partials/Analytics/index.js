import Script from 'next/script';

export const Analytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-B74K9THPPN"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-B74K9THPPN');
      `}
    </Script>
  </>
);

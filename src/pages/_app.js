import '@/styles/globals.css'
import { AnnouncementsContextProvider } from '@/context/AnnouncementsContext'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
      const handleRouteChange = (url) => {
          // gtag.pageview(url);
        };
    
      router.events.on("routeChangeComplete", handleRouteChange);
    
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E7P5CSE90D', {
              page_path: window.location.pathname,
            });
          `,
          }}
      />

    <AnnouncementsContextProvider>
      <Component {...pageProps} />
    </AnnouncementsContextProvider>
  </>
  );
}

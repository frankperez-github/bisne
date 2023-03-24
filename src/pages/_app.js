import '@/styles/globals.css'
import { AnnouncementsContextProvider } from '@/context/AnnouncementsContext'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
        window.gtag("config", "G-E7P5CSE90D", {
            page_path: url,
        });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
    };
}, [router.events]);

  return (
  <AnnouncementsContextProvider>
    <Component {...pageProps} />
  </AnnouncementsContextProvider>
  );
}

import '@/styles/globals.css'
import { AnnouncementsContextProvider } from '@/context/AnnouncementsContext'


export default function App({ Component, pageProps }) {
  return (
  <AnnouncementsContextProvider>
    <Component {...pageProps} />
  </AnnouncementsContextProvider>
  );
}

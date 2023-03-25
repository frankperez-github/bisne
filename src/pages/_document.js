import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2342183452345155"
     crossorigin="anonymous"></script>
      <Head />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-E7P5CSE90D"></script>
      <script dangerouslySetInnerHTML={{
                            __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-E7P5CSE90D');`,}} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

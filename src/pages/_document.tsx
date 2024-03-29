import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
        rel="stylesheet"
      /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon-16x16.png"
      />
      <link rel="manifest" href="./site.webmanifest"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

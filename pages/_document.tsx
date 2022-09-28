import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Ashik Rahman - Developer" />
        <meta
          property="og:image"
          content="https://v2.ashrhmn.com/images/user1.jpeg"
        />
        <meta
          name="title"
          content="Ashik Rahman | Fullstack and Blockchain Developer"
        />
        <meta name="keywords" content="Ashik Rahman" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ashrhmn7" />
        <meta
          name="twitter:title"
          content="Ashik Rahman | Fullstack and Blockchain Developer"
        />
        <meta property="fb:app_id" content="ashrhmn7" />
        <meta property="og:image:alt" content="Ashik Rahman | Developer" />
        <meta
          name="twitter:description"
          content="23 years old and from Bangladesh. Development has been an interest for many years, and works with anything from Desktop App to Mobile App and fullstack development. All the skills and tools are self-taught over years of practice and expanding my horizons"
        />
        <meta property="og:site_name" content="Ashik Rahman" />
        <meta property="og:url" content="https://ashrhmn.com/" />
        <meta
          property="og:description"
          content="23 years old and from Bangladesh. Development has been an interest for many years, and works with anything from Desktop App to Mobile App and fullstack development. All the skills and tools are self-taught over years of practice and expanding my horizons"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

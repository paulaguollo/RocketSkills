import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-PT">
      <Head>
        <meta name="description" content="RocketSkills - Plataforma de matchmaking inteligente" />
        <link rel="icon" href="/rocket-icon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! */}
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </Html>
  );
}

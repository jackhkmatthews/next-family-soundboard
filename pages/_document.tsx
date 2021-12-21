import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/inconsolata/v21/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyya15IDhunA.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/inconsolata/v21/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyx615IDhunJ_o.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&display=optional"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

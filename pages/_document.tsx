import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='원하는 취미를 인터넷 강의로 손쉽게 제공하는 플랫폼입니다!'
          />
          <meta name='keywords' content='강의, 인터넷 강의, 취미' />
          <meta name='author' content='8dong' />
          <link rel='icon' href='data:,' />
          <link
            rel='stylesheet'
            href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

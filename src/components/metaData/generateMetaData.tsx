import Head from 'next/head';

const GenerateMetaData = () => {
  const title = 'ヒトリゴト OGP';
  const discription = 'あなたの心に響く、誰かのヒトリゴト';
  const image = "https://www.webtech.co.jp/blog/wp-content/uploads/2015/01/fb_1200x630.png";

  return (
    <Head>
      <title>ヒトリゴト OGP</title>
      <meta name="description" content={ discription } />
      <meta property="og:title" content={ title } />
      <meta property="og:discription" content={ discription } />
      <meta property="og:image" content={ image } />
    </Head>
  )
};
  
  export default GenerateMetaData;
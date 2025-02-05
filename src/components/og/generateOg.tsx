import Head from 'next/head';

const GenerateOg = () => {
  const title = 'ヒトリゴト OGP';
  const description = 'あなたの心に響く、誰かのヒトリゴト';
  const image = "https://www.webtech.co.jp/blog/wp-content/uploads/2015/01/fb_1200x630.png";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default GenerateOg;
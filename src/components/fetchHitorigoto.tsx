"use client"

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import SectionButton from './section-button';
import { Hitorigoto } from '../types/hitorigoto';
import Head from 'next/head';

const FetchHitorigoto = () => {
  const [hitorigoto, setHitorigoto] = useState<Hitorigoto | null>(null);

  /** ヒトリゴトを取得 */
  const fetchHitorigotoData = async () => {
    try {
      const { data, error } = await supabase.from('random_hitorigoto').select('*').eq('delete_flg', false).limit(1);
      if (error) {
        console.error('エラーが発生しました:', error);
      } else {
        setHitorigoto(data[0]);
      }
    } catch (error) {
      console.error('予期せぬエラーが発生しました:', error);
    }
  };

  useEffect(() => {
    fetchHitorigotoData();
  }, []);

  const handleButtonClick = () => {
    fetchHitorigotoData();
  };
  
    return (
      <div>
        {hitorigoto && <p>{hitorigoto.message}</p>}
        <img width={100} height={100}  src="https://www.webtech.co.jp/blog/wp-content/uploads/2015/01/fb_1200x630.png" />
        <SectionButton onClickEvent={handleButtonClick} buttonName='誰かのヒトリゴトを聞く' />

        <Head>
        <title>誰かのヒトリゴト</title>
        <meta property="og:title" content={hitorigoto ? hitorigoto.message : '誰かのヒトリゴト'} />
        <meta property="og:description" content="あなたの心に響く、誰かのヒトリゴト" />
        <meta property="og:image" content="https://www.webtech.co.jp/blog/wp-content/uploads/2015/01/fb_1200x630.png" />
        </Head>
      </div>
    );
};
  
  export default FetchHitorigoto;
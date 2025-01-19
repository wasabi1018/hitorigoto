"use client"

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import SectionButton from './section-button';
import { Hitorigoto } from '../types/hitorigoto';
import { Helmet } from 'react-helmet';

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
        <img width={100} height={100}  src="https://i.pinimg.com/736x/c7/ba/5d/c7ba5dd7c0bcc0edc5d1aa56ce19a118.jpg" />
        <Helmet>
          <title>ヒトリゴト</title>
          <meta property="og:image" content="https://i.pinimg.com/736x/c7/ba/5d/c7ba5dd7c0bcc0edc5d1aa56ce19a118.jpg" />
        </Helmet>
        <SectionButton onClickEvent={handleButtonClick} buttonName='誰かのヒトリゴトを聞く' />
      </div>
    );
};
  
  export default FetchHitorigoto;
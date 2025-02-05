"use client"

import { useState, useEffect } from 'react';
import { useRouter, usePathname  } from 'next/navigation';
import Head from 'next/head';
import { supabase } from '../../lib/supabaseClient';
import { Hitorigoto } from '../../types/hitorigoto';
import SectionButton from '../section-button';
import GenerateMetaData from '../metaData/generateMetaData';

const FetchHitorigoto = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hitorigoto, setHitorigoto] = useState<Hitorigoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ogImageUrl, setOgImageUrl] = useState('https://ogp.buta3.net/image/ogp630.png');

  /** 
   * ヒトリゴトを取得
   */
  const fetchHitorigotoData = async () => {
    try {
      // 論理削除されていないヒトリゴトをランダムに取得する
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

  /**
   * 誰かのヒトリゴトを聞くボタン押下時の処理
   */
  const handleButtonClick = () => {
    // ヒトリゴトを取得する
    fetchHitorigotoData();
    // ヒトリゴト表示モーダルを開く
    setIsModalOpen(true);
    // OGP設定
    setOgImageUrl("https://wepress.web-magazine.jp/wp-content/uploads/2019/10/ogp2.jpg");
    // SNS共有用のパラメータを付与
    router.push(`${pathname}?test=test`, {scroll: false});
  };

  /**
   * ヒトリゴト表示モーダルを閉じる
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // SNS共有用のパラメータを除去
    router.push(pathname, {scroll: false});
  };
  
    return (
      <div>
        <SectionButton onClickEvent={handleButtonClick} buttonName='誰かのヒトリゴトを聞く' />
        {
          isModalOpen && (
            <div className='p-modal'>
              <Head>
                <meta property="og:image" content={ogImageUrl} />
              </Head>
              <div className='p-modal-content'>
                {hitorigoto && <p>{hitorigoto.message}</p>}
                <img src="https://wepress.web-magazine.jp/wp-content/uploads/2019/10/ogp2.jpg" />
               <button onClick={handleCloseModal}>閉じる</button>
               </div>
            </div>
          )
        }
        <GenerateMetaData />
      </div>
    );
};
  
  export default FetchHitorigoto;
"use client"

import { supabase } from '../lib/supabaseClient';
import { useState } from 'react';
import { toast } from 'react-toastify';
import SectionEmotionsSelect from './section-emotions-select';
import SectionButton from './section-button';
import { Emotions } from './Emotions';

const AddHitorigoto = () => {
  /** 呟きメッセージ */
  const [tweetMessage, setTweetMessage] = useState('');

  /** 感情 */
  const [selectedEmotion, setSelectedEmotion] = useState(Emotions.Meh);

  /** 感情変更関数 */
  const handleEmotionChange = (emotion: Emotions) => {
    setSelectedEmotion(emotion);
  }
 
  /** ヒトリゴトを追加 */
  const addHitorigotoData = async () => {
    const {error } = await supabase
    .from('hitorigoto')
    .insert([{message: tweetMessage, emotion: selectedEmotion, delete_flg: false}]);

    if (error) {
      console.error('エラーが発生しました:', error);
      toast.error('呟きに失敗しました。');
    }
    else {
      toast.success('呟きに成功しました。');
    }
  };
  
    return (
      <div>
        <textarea className='c-tweet u-mt-10' onChange={(e) => setTweetMessage(e.target.value)} maxLength={300} placeholder='ヒトリゴトを呟いてみよう。300文字以内'></textarea>
        <p>このヒトリゴトの気持ちは？</p>
        <SectionEmotionsSelect onEmotionChange={handleEmotionChange}/>
        <SectionButton onClickEvent={addHitorigotoData} buttonName='ヒトリゴトを呟く' />
      </div>
    );
};
  
  export default AddHitorigoto;
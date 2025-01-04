import React from 'react';
import SectionTitle from './section-title';
import SectionExplanation from './section-explanation';
import SectionButton from './section-button';
import SectionEmotionsSelect from './section-emotions-select';

const Tweet = () => {
    return (
        <div className='p-section--tweet u-mt-100'>
            <SectionTitle title='呟く'/>
            <SectionExplanation explanation='ヒトリゴトを呟くと、誰かに聞かれちゃうかも。' />
            <textarea className='c-tweet u-mt-10' maxLength={300} placeholder='ヒトリゴトを呟いてみよう。300文字以内'></textarea>
            <SectionEmotionsSelect />
            <SectionButton buttonName='ヒトリゴトを呟く' />
        </div>
    );
};

export default Tweet;
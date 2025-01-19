import React from 'react';
import SectionTitle from './section-title';
import SectionExplanation from './section-explanation';
import AddHitorigoto from './addHitorigoto';

const Tweet = () => {


    return (
        <div className='p-section--tweet u-mt-100'>
            <SectionTitle title='呟く'/>
            <SectionExplanation explanation='ヒトリゴトを呟くと、誰かに聞かれちゃうかも。' />
            <AddHitorigoto />
        </div>
    );
};

export default Tweet;
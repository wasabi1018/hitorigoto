import React from 'react';
import SectionTitle from './section-title';
import SectionExplanation from './section-explanation';
import NextHearing from './nextHearing';

const Hearing = () => {
    return (
        <div className='p-section--hearing u-mt-150'>
            <SectionTitle title='聞く'/>
            <SectionExplanation explanation='誰かのヒトリゴト、盗み聞きしちゃう？' />
            <NextHearing />
        </div>
    );
};

export default Hearing;
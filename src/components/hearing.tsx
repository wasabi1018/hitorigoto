import React from 'react';
import SectionTitle from './section-title';
import SectionExplanation from './section-explanation';
import SectionButton from './section-button';

const Hearing = () => {
    return (
        <div className='p-section u-mt-150'>
            <SectionTitle title='聞く'/>
            <SectionExplanation explanation='誰かのヒトリゴト、盗み聞きしちゃう？' />
            <SectionButton buttonName='誰かのヒトリゴトを聞く' />
        </div>
    );
};

export default Hearing;
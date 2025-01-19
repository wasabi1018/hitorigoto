import React from 'react';
import SectionTitle from './section-title';
import SectionExplanation from './section-explanation';
import FetchHitorigoto from './fetchHitorigoto';

const Hearing = () => {
    return (
        <div className='p-section--hearing u-mt-150'>
            <SectionTitle title='聞く'/>
            <SectionExplanation explanation='誰かのヒトリゴト、盗み聞きしちゃう？' />
            <FetchHitorigoto />
        </div>
    );
};

export default Hearing;
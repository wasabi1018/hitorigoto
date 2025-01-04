import React from 'react';

type SectionExplanationProps = {
    /** 説明 */
    explanation : string
}

/** セクション 説明 */
const SectionExplanation = ({ explanation }: SectionExplanationProps) => {
    return (
        <div className='c-section-explanation'>
            <h2>
                { explanation }
            </h2>
        </div>
    );
};

export default SectionExplanation;
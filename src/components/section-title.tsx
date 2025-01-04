import React from 'react';

type SetctionTitleProps = {
    /** タイトル */
    title : string
}

/** セクション タイトル */
const SectionTitle = ({ title }: SetctionTitleProps) => {
    return (
        <div className='c-title-circle'>
            <h2>{ title }</h2>
        </div>
    );
};

export default SectionTitle;
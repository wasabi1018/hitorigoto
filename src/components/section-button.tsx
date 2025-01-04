import React from 'react';

type SetctionButtonProps = {
    /** ボタン名 */
    buttonName : string
}

/** セクション ボタン */
const SectionButton = ({ buttonName }: SetctionButtonProps) => {
    return (
        <div className='c-button'>
            <button className='u-mt-10'>
                { buttonName }
            </button>
        </div>
    );
};

export default SectionButton;
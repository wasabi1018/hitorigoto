import React from 'react';

type SetctionButtonProps = {
    /** ボタン名 */
    buttonName : string;
    /** クリック時のイベント */
    onClickEvent: () => void;
}

/** セクション ボタン */
const SectionButton = ({ buttonName, onClickEvent }: SetctionButtonProps) => {
    return (
        <div className='c-button'>
            <button onClick={onClickEvent} className='u-mt-10'>
                { buttonName }
            </button>
        </div>
    );
};

export default SectionButton;
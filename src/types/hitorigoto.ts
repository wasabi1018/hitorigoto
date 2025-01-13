/**
 * ヒトリゴト
 */
export interface Hitorigoto {
    /** id */
    id:                 number;
    /** メッセージ */
    message:            string;
    /** 感情 */
    emotion:            number;
    /** 削除フラグ */
    deleteFlg:          boolean;
    /** 登録日時 */
    registerDateTime:   Date;
}
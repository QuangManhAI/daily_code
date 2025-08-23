// bổ sung trạng thái giao dịch của hành động mượn/ trả.

export enum TxStatus {
    BORROWED = 'BORROWED',
    RETURNED = 'RETURNED',
    LOST = 'LOST'
}
export interface Policy{
    AppUserId:number;
    CGST:number;
    EligibleForNCB:number;
    IGST:number;
    PaymentType:string;
    PolicyEffectiveDt:Date;
    PolicyExpirationDt:Date;
    PolicyId:string;
    PolicyNumber:number;
    QuoteNumber:number;
    RateDt:Date;
    ReceiptNumber:number;
    SGST:number;
    Status:string;
    Term:number;
    TotalFees:number;
    TotalPremium:number;

}
export interface PolicyDetails{
    PolicyEffectiveDt: string;
    PolicyExpirationDt: string;
    Term: number;
}
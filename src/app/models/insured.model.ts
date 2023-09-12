export interface Insured {
    InsuredId : String;
    UserTypeId : number;
    ContactId : String;
    FirstName : String;
    LastName : String;
    AadharNumber : String;
    LicenseNumber : String;
    PANNumber : String;
    AccountNumber  : String;
    IFSCCode  : String;
    BankName  : String;
    BankAddress  : String;
    AddressLine1  : String;
    AddressLine2  : String;
    City  : String;
    State  : String;
    Pincode  : String;
    MobileNo  : String;
    Email  : String;
}

export interface InsuredDetails{
aadharNumber:String;
accountNumber:String;
bankAddress:String;
bankName:String;
contactId:String;
firstName:String;
ifscCode:String;
insuredId:String;
lastName:String;
licenseNumber:String;
panNumber:String;
userTypeId:number;
}

export interface ContactDetails{
    addressLine1:String;
    addressLine2:String;
city:String;
contactId:String;
email:String;
firstName:String;
lastName:String;
mobileNo:String;
pincode:String;
state:String;
}

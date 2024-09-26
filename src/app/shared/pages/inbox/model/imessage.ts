export interface IMessage {
  id:number,
  subject:string,
  emailBody:string,
  /*recipient:{
    email:string
  },*/
  recipientEmail:string,
  /*sender:{
    email:string,
  },*/
  senderEmail:string,
  sentTime:Date
}

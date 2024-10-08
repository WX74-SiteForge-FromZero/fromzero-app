export interface IDeliverable {
  id:number,
  name:string,
  description:string,
  date:Date,
  state?:string,
  developerMessage?:string
}

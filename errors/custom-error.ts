class CustomAPIError extends Error{
    message:any;
    statusCode: number;
  constructor(message:any, statusCode:number) {
    super(message)
    this.statusCode = statusCode
  }
}

export default CustomAPIError

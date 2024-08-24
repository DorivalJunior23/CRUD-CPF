export class ExistsCpfException extends Error {
  constructor(message){
    super(message);
     this.type = 'ExistsCpfException';
     this.message = 'CPF already exists.';
  }
}
       
export class InvalidCpfException extends Error {
  constructor(message) {
    super(message);
     this.type = 'InvalidCpfException';
     this.message = 'CPF is not valid.';
  }
}

export class NotFoundCpfException extends Error {
  constructor(message){
      super(message);
       this.type = 'NotFoundCpfException';
       this.status = 'CPF not found.';
  }
}


    
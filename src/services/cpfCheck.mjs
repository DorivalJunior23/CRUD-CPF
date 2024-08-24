import { InvalidCpfException } from "../exceptions/exception.mjs";

function cpfCheck(cpf){
    const cpfCheck = String(cpf);
    if (cpfCheck.length !== 11 || isNaN(cpf)) { //Valida se o CPF recebido é valido
      throw new InvalidCpfException();
    }
}

export default cpfCheck;

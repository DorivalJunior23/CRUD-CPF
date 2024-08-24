import { Router } from "express";

import Controller from './controller/controller.mjs'

const router = Router();

router.get('/cpf', Controller.getCpfs); //Retorna a lista de CPFs da lista restrita (US04)

router.get('/cpf/:cpf', Controller.getCpf);  //Verifica se um CPF está adicionado na lista restrita (US02) 

router.post('/cpf', Controller.addCpfToList); //Adiciona um CPF na lista restrita (US01)

router.delete('/cpf/:cpf', Controller.removeCpfFromList); //Remove um CPF adicionado na lista restrita (US03)

export {router};
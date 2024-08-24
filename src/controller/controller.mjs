import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { ExistsCpfException, NotFoundCpfException, InvalidCpfException } from "../exceptions/exception.mjs"; 
import cpfCheck from "../services/cpfCheck.mjs";

export default {
  async addCpfToList(req, res) {
    try {
      const {cpf} = req.body

      cpfCheck(cpf); //Valida se o CPF recebido é valido

      const cpfConsult = await prisma.cpf.findUnique({ where: { cpf } }); //Consulta o bd para saber se o CPF já esta listado
      
      if (cpfConsult) {
        throw new ExistsCpfException();
      }

      const cpfData = await prisma.cpf.create({
        data: {
          cpf,
        },
      });

      return res.status(201).json(cpfData);                       //retorna o status e os dados do CPF
    } catch (error) {
      if (error instanceof InvalidCpfException){                 //retorna o status, tipo e mensagem do erro
        return res.status(422).json(error);
      }else if(error instanceof ExistsCpfException) {
        return res.status(400).json(error);
      } else {
        return res.status(500).json(error);
      }
    }
  },

async getCpf(req,res) {
    try {
      const {cpf} = req.params;                       //Passa o parametro da URL para variavel
        
      cpfCheck(cpf);
    
      
      const cpfConsult = await prisma.cpf.findUnique({
          select:{
            cpf: true,
            createdAt: true,                              //Indica quais campos passar para a variavel 
          },
            where: {
              cpf: String(cpf),
            }
          });
      
        if (!cpfConsult) {                               //Valida se o CPF já esta listado
          throw new NotFoundCpfException();
        }
      
        
      
        return res.status(200).json(cpfConsult); 
        } catch (error) {
          if (error instanceof InvalidCpfException){   
            return res.status(422).json(error);
          }else if(error instanceof NotFoundCpfException) {
            return res.status(404).json(error);
          } else {
            return res.status(500).json(error);
          }
        }
      },

async removeCpfFromList(req, res) {
    try {
      const {cpf} = req.params                 

      cpfCheck(cpf);

      
        const cpfConsult = await prisma.cpf.findUnique({
            where: {
              cpf: cpf,
            },
        });
      
        if (!cpfConsult) {
          throw new NotFoundCpfException();
        }
    
        await prisma.cpf.delete({                                  // deleta o CPF se estiver listado
            where: {
              cpf: cpf,
            },
        });
      
          return res.status(200).json();
        } catch (error) {
          if (error instanceof InvalidCpfException ){
            return res.status(422).json(error);
          }else if( error instanceof NotFoundCpfException) {
            return res.status(404).json(error);
          } else {
            return res.status(500).json(error);
          }
          }
      },
      async getCpfs(req, res) {
        try {
            const cpfs = await prisma.cpf.findMany({            //recebe todos os CPFs listados
              select:{
                cpf: true,
                createdAt: true,
              },
            });
          
              return res.status(200).json(cpfs);
        } catch (error) {           
              return res.status(500).json(error);
        }
        },
    
};
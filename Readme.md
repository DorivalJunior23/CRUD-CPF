# Build
npm i express<br>
docker build -t my-app .<br>
docker-compose up<br>

# Frameworks

## Express
Um dos motivos da utilização do Express nessa aplicação é o fato de ele ser uma ferramenta muito eficiente, capaz de lidar com um grande número de solicitações simultâneas. Além disso, ele é muito bem documentado.

## Prisma
O Prisma é um excelente ORM que é muito bem documentado e compatível com muitos bancos de dados (PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale, MariaDB). Ele também tem funções como o npx prisma studio que oferece a possibilidade de observar e editar o banco de dados.

# Arquitetura Microservices 

## Resiliência: 
Se um serviço falhar, os outros serviços ainda poderão funcionar.

## Escalabilidade:
Os serviços podem ser escalonados individualmente, conforme a necessidade.

## Flexibilidade:
Os serviços podem ser facilmente modificados ou substituídos.

## Manutibilidade: 
Os serviços são menores e mais simples, o que os torna mais fáceis de depurar e manter.

## Segurança: 
Os serviços podem ser isolados uns dos outros, o que dificulta os ataques.

# Versão do Node.js
v18.12.1

# Descrição do Sistema:

Este sistema consiste em um servidor Express.js que foi configurado e está em execução em uma máquina virtual da Oracle. Este servidor fornece uma API para manipular recursos armazenados em um banco de dados MongoDB. A API implementa quatro operações principais:

GET (READ): Esta operação é utilizada para recuperar uma representação de um recurso. O servidor Express expõe endpoints que permitem aos clientes realizar solicitações GET para ler os recursos existentes no banco de dados. Por exemplo, ao acessar um determinado endpoint, como "/recursos", o servidor retornaria os recursos armazenados no banco de dados MongoDB.

POST (CREATE): Esta operação é utilizada para criar novos recursos. A API inclui endpoints que aceitam solicitações POST para criar novos recursos no banco de dados MongoDB. Os clientes podem enviar dados no corpo da solicitação POST para criar novos registros.

PUT (UPDATE): Esta operação é utilizada para atualizar recursos existentes. O servidor Express disponibiliza endpoints que permitem aos clientes enviar solicitações PUT para atualizar os recursos armazenados no banco de dados MongoDB. Os clientes devem fornecer os dados atualizados no corpo da solicitação PUT.

DELETE (DELETE): Esta operação é utilizada para excluir recursos existentes. A API possui endpoints que aceitam solicitações DELETE para remover recursos específicos do banco de dados MongoDB. Os clientes devem especificar o recurso a ser excluído no endpoint correspondente.

O servidor Express.js é responsável por receber as solicitações HTTP, rotear essas solicitações para os manipuladores apropriados e interagir com o banco de dados MongoDB para realizar as operações necessárias.

Essa configuração permite que os clientes interajam com os recursos armazenados no banco de dados MongoDB por meio de uma interface RESTful fornecida pela API Express.js.
![Screenshot_1](https://github.com/fregnani123/converterMoedas/assets/99106631/d5e84a2c-dc1b-42d6-8f37-21a67136150d)

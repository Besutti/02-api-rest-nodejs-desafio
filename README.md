Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.

# link
    https://efficient-sloth-d85.notion.site/Desafio-02-be7cdb37aaf74ba898bc6336427fa410 

# Regras da Aplicação
    - [] Deve ser possível criar um usuário;
        * id
        * session_id
        * nome
        * email
    - [] Deve ser possível identificar o usuário entre as requisições;
    - [] Deve ser possível registrar uma refeição feita, com as seguintes informações;
        * Nome
        * Descrição
        * Data e Hora
        * Está dentro ou não da dieta
    - [] Deve ser possível editar uma refeição, podendo alterar todos os dados acima;
    - [] Deve ser possível apagar uma refeição;
    - [] Deve ser possível listar todas as refeições de um usuário;
    - [] Deve ser possível visualizar uma única refeição;
    - [] Deve ser possível recuperar as métricas de um usuário;
        * Quantidade total de refeições registradas
        * Quantidade total de refeições dentro da dieta
        * Quantidade total de refeições fora da dieta
        * Melhor sequência de refeições dentro da dieta
    - [] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou;


# Tabelas
    Users
        Id
        session_id
        nome
        email
    Meals
        Id
        User_Id
        Name
        Description
        Created_at
        its_dieat
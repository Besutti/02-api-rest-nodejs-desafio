Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.

# link
    https://efficient-sloth-d85.notion.site/Desafio-02-be7cdb37aaf74ba898bc6336427fa410 

# Regras da Aplicação
    - [x] Deve ser possível criar um usuário;
    - [x] Deve ser possível identificar o usuário entre as requisições;
    - [x] Deve ser possível registrar uma refeição feita, com as seguintes informações;
        * Nome
        * Descrição
        * Data e Hora
        * Está dentro ou não da dieta
    - [x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima;
    - [x] Deve ser possível apagar uma refeição;
    - [x] Deve ser possível listar todas as refeições de um usuário;
    - [x] Deve ser possível visualizar uma única refeição;
    - [] Deve ser possível recuperar as métricas de um usuário;
        [x] Quantidade total de refeições registradas
        [x] Quantidade total de refeições dentro da dieta
        [x] Quantidade total de refeições fora da dieta
        [x] Melhor sequência de refeições dentro da dieta
    - [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou;


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
## Descrição
 
Este projeto é destinado ao desafio técnico proposto pela Trybe no dias de Blitz. O desafio conta com uma história para nos colocar no contexto do problema,
aprensenta também requisitos técnios e funcionalidades que devem estar presentes para se adequar a entrega do desafio.

### Técnologias Usadas
  
  #### Backend
  
    - Prisma,
    - Typescript,
    - Node,
    - MySql
  
  #### Frontend
    
    - CRA (create-react-app),
    - Typescript,
    
  #### Geral
  
    - Eslint,
    - Prettier

### Como rodar a aplicação

 - Como a entrega se deu antes da conclusão do desafio, a aplicação ainda está como desenvolvimento.
 
 Primeiro:
  
  - Antes de começar tenha na sua maquina o docker instalado.
  
  Clone o repositorio na pasta desejada usando:
    
    git clone git@github.com:viniciusfernands/desafio-tecnico-Blitz.git
    
  Entre na pasta criada e rode:
  
    docker-compose up -d --build
    
  Este comando irá iniciar o banco de dados MySql em um container.
  <br/>
  Em pastas separadas acesse um terminal dentro das pasta backend e um terminal dentro da pasta frontend:
  
   No terminal do backend rode:
    
      npm start
      
   No terminal do frontend rode:
    
      npm start

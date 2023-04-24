
# Aplicação Angular - API GitHub

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.6.
## Autor

- [@luccazovedi](https://www.github.com/luccazovedi)

## Stack utilizada

**Front-end:** Angular, Bootstrap, HTML, CSS

**Back-end:** NodeJS

## Funcionalidades

- Diferentes tipos de Requisições;
- Single Page Aplication;
- Preview em Tempo Real;


# Desenvolvimento da Aplicação

### Dependências
```bash
 npm install bootstrap
```
```bash
 npm install @ocktokit/REST
```
```bash
 npm install axios
```
```bash
 npm install -g @angular/cli
```
```bash
 npm install ngx-pagination
```
```bash
 npm install rxjs
```

### Clone 

Clone o projeto para utilizar

```bash
 gh repo clone luccazovedi/app-api-github
```

### Servidor

Execute `ng serve` para ativar o Servidor de Desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação irá recarregar automaticamente caso haja qualquer alteração nos recursos dos arquivos. 

### Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode utilize `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Contrução para o modo Produção

Execute `ng build` para construir o prejeto. 
O artefato será armazenado dentro do diretório `dist/`.

### Testes Unitários

Execute `ng test` para testes unitários via [Karma](https://karma-runner.github.io).

### Testes fim-a-fim

Execute `ng e2e` para executar o teste fim-a-fim via plataforma de sua escolha.
Para usar este comando, primeiro adicione o pacote que implemente a capacidade de implementar o teste.

### Ajuda

Dúvidas, utilize `ng help` ou acesse [Angular CLI Overview and Command Reference](https://angular.io/cli).


# Documentação da API

#### Retorna todos os repositórios

```http
  GET https://api.github.com/repositories
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `per_page` | `integer` | **Opcional**. Define o número de repositórios por página. |
| `since` | `integer` | **Opcional**. Retorna repositórios criados após o ID especificado. |

#### Retorna um usuário especifico

```http
  GET https://api.github.com/users/{username}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. O nome do usuário. |



# Feedback

Se você tiver algum feedback, por favor me contate por meio do e-mail luccazovedi@gmail.com ou através das Redes Sociais.


## Demonstração

Em breve será utilizado o Git Page para utilização pública.

## Melhorias

Futuramente serão implementadas melhorias de recursos como:
- Informações mais detalhadas;
- Temas diferentes;
- Mais abas de acesso;
- Inclusão do envio de e-mails via PHP.

<p align="center">
  <img src="https://github.com/angular/angular/blob/main/aio/src/assets/images/logos/angular/angular.png?raw=true" alt="angular-logo" width="120px" height="120px"/>
</p>

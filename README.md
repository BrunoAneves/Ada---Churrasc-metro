🚀 **Desenvolvimento do Churrascômetro: Projeto Prático** 🚀

🔍 **Objetivo:**
Desenvolver uma calculadora interativa chamada "Churrascômetro" para facilitar o planejamento de churrascos. A calculadora deve funcionar em 3 passos, permitindo que os usuários insiram informações relevantes e recebam uma estimativa dos itens necessários com base no número de convidados.

📝 **Requisitos:**

1️⃣ **Passo 1 - Cadastro de Dados:**
- Permitir que os usuários preencham seus dados, incluindo nome, e-mail, CEP e consentimento para receber promoções.
- Validar campos obrigatórios (nome, e-mail e CEP) e exibir indicação visual se inválidos.
- Verificar se o e-mail fornecido é válido.
- Carregar automaticamente o checkbox de consentimento marcado.
- Armazenar os dados localmente para não solicitá-los novamente após recarregar a página.

2️⃣ **Passo 2 - Escolha da Quantidade de Pessoas:**
- Permitir que os usuários indiquem a quantidade de homens, mulheres/adultos, crianças e pessoas que bebem bebidas alcoólicas presentes no churrasco.
- Validar campos para aceitar somente inteiros não negativos.

3️⃣ **Passo 3 - Tabela de Resultados:**
- Exibir uma tabela com o resultado do cálculo, mostrando a quantidade estimada de cada item necessário para o churrasco com base nas informações fornecidas.

📊 **Itens Calculados na Tabela de Resultados:**
- Carne: 0,4 KG por homem, 0,32 KG por mulher e 0,20 KG por criança.
- Pão de Alho: 2 por adulto e 1 por criança.
- Carvão: 1 KG por pessoa.
- Sal: 0,04 KG por pessoa.
- Gelo: 5 KG a cada 10 pessoas.
- Refrigerante: 1 garrafa de 2L a cada 5 pessoas.
- Água: 1 garrafa de 1L a cada 5 pessoas.
- Cerveja: 3 garrafas de 600ml por pessoa (adultos).

🛠️ **Tecnologias Utilizadas:**
- HTML, CSS e JavaScript com manipulação do DOM.
- Armazenamento local no navegador (Web Storage API) para preservar os dados inseridos.
- Chamadas assíncronas para verificar a validade do CEP fornecido pelos usuários.

🔍 **Critérios de Avaliação:**
1. Funcionalidade correta e atendimento aos requisitos especificados.
2. Uso de seletores e métodos para manipulação do DOM.
3. Adição e remoção de classes e estilização via JavaScript para feedback visual.
4. Uso de eventos ligados aos elementos da página para interatividade.
5. Armazenamento eficiente dos dados no navegador para melhor experiência do usuário.
6. Utilização adequada de chamadas assíncronas para garantir eficiência na validação do CEP.

🌟 **Experimente você mesmo:** [Link para a aplicação](https://brunoaneves.github.io/Ada-Churrascometro/)


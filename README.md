# ✏️ Desafio Shakers Semana 3: Metafields e Metaobjetos

Este repositório contém a solução para o Desafio da Semana 3 da Shakers. O objetivo foi criar uma seção de slider dinâmica que consome dados de Metaobjetos e Metafields no Shopify 2.0.

## 🚀 O que foi implementado

- **Metaobjeto (`product__with--banner`):** Criado para associar um produto a uma imagem de banner personalizada.
- **Metafield de Lista:** Um campo no produto que armazena uma lista de entradas do Metaobjeto acima.
- **Slider Dinâmico:** Seção construída com **Swiper.js (v11)**.
- **Lógica Liquid:** - Uso de `.value` para acessar os dados dos Metaobjetos.
  - Uso de `all_products` para transformar o handle em objeto de produto completo.
  - Validação condicional para evitar erros de renderização.

## 🛠️ Como configurar

1. **Criar Metaobjeto:** Nome `product__with--banner` com campos de Produto e Imagem.
2. **Criar Metafield:** No Produto, tipo Metaobject (lista de entradas), referenciando o objeto criado.
3. **Vincular Dados:** Cadastrar as entradas no Admin e associá-las a um produto.

## 💻 Como testar localmente

Certifique-se de ter o **Shopify CLI** instalado:

1. Clone o repositório.
2. No terminal, execute:
   ```bash
   shopify theme dev
No Editor de Temas, selecione a seção "Metaobject Slider" e escolha o produto configurado.

🔗 Links da Entrega
<br>

- Meu Pull Request: [Pull Request](https://github.com/pedrocalazans05/shakers-semana-3-dados-avancados/pull/2)
- Vídeo de Demonstração: [Video]()

<br>
Made by Pedro Calazans 🤠

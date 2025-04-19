<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/P-py/cash-track">
    <img src="assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Cash-track</h3>

  <p align="center">
    O Cashtrack é uma aplicação web desenvolvida para ajudar usuários a gerenciar suas finanças pessoais de forma intuitiva e eficiente. A plataforma permite o controle de gastos e receitas, fornecendo uma visão clara do saldo e do histórico financeiro do usuário.
    <br />
    <a href="https://github.com/P-py/cash-track/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://cash-track-puce.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/P-py/cash-track/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/P-py/cash-track/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#stack-de-tecnologias">Stack de tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#configuração-inicial">Configuração inicial</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usabilidade">Usabilidade</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
      <ul>
        <li><a href="#como-contribuir">Como contribuir</a></li>
        <li><a href="#regras-de-contribuição">Regras de contribuição</a></li>
      </ul>
    <li><a href="#licença-do-projeto">Licença do projeto</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

O **Cashtrack** é uma aplicação web desenvolvida com foco em controle financeiro pessoal. Criado como parte de um projeto acadêmico na disciplina de Desenvolvimento da [Faculdade de Engenharia de Sorocaba (FACENS)](https://facens.br/), o sistema oferece uma interface moderna, responsiva e intuitiva, permitindo que usuários registrem entradas e despesas, visualizem históricos de transações e gerenciem suas contas com segurança e praticidade.

A aplicação é construída com tecnologias modernas de front-end e back-end, utilizando HTML, CSS, JavaScript, integração com APIs RESTful construídas em Kotlin e banco de dados PostgreSQL. Além disso, incorpora boas práticas de UX/UI, autenticação com tokens JWT e suporte para múltiplas resoluções de tela, garantindo uma ótima experiência em dispositivos desktop e mobile.

O projeto está em constante evolução e novas funcionalidades estão sendo implementadas.

**Esse repositório contém o código referente ao _front-end_ do projeto**.

[![Cashtrack Screen Shot][product-screenshot]](https://cash-track-puce.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Stack de tecnologias

[![HTML Logo][html-shield]]()
[![CSS Logo][css-shield]]()
[![JS Logo][javascript-shield]]()

O frontend do projeto **Cashtrack** foi desenvolvido com foco em responsividade, performance e experiência do usuário. As principais tecnologias utilizadas foram:

- **HTML5** – Estrutura semântica das páginas e componentes da interface.
- **CSS3** – Estilização customizada com variáveis, animações, transições e uso intensivo de media queries para garantir responsividade.
- **JavaScript (Vanilla)** – Manipulação do DOM, controle de eventos, chamadas à API e lógica de interface.
- **SwiperJS** – Biblioteca para criação de carrosséis e sliders responsivos, especialmente em dispositivos móveis.
- **AOS (Animate on Scroll)** – Biblioteca para animações suaves de entrada de elementos conforme o scroll da página.
- **Figma** – Ferramenta utilizada para o design dos wireframes e prototipação visual do sistema.
- **Git & GitHub** – Versionamento e colaboração em equipe.

Além disso, a arquitetura do frontend foi pensada para facilitar a integração com a API RESTful do backend, garantindo uma comunicação eficiente e segura através de tokens JWT armazenados via cookies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Configuração inicial

Esta seção fornece instruções sobre como obter uma cópia local do projeto e executá-lo para desenvolvimento e testes.

### Pré-requisitos

- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/) (**Recomendado**)

Verifique se as versões estão corretamente instaladas executando:

```bash
git --version
```

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/P-py/cash-track.git
    ```

2. Acesse o diretório de arquivos e abra com VSCode:
    ```bash
    cd cash-track
    code .
    ```

3. Faça instalação da extensão live-server no VSCode
4. Execute o projeto usando a extensão


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usabilidade

A aplicação Cashtrack foi desenvolvida para oferecer uma experiência intuitiva e responsiva ao usuário. A seguir, estão algumas das funcionalidades disponíveis no frontend:

- 📊 **Dashboard interativo:** Visualize entradas e saídas financeiras de forma clara e organizada.
- ➕ **Cadastro de transações:** Registre despesas e receitas com poucos cliques.
- 🔐 **Login seguro:** Autenticação via token JWT com persistência de sessão através de cookies.
- ⚙️ **Gerenciamento de conta:** Altere suas informações pessoais ou exclua sua conta diretamente pelo painel.
- 📱 **Design responsivo:** Totalmente adaptado para dispositivos móveis, tablets e desktops.
- 🎨 **Animações dinâmicas:** Animações suaves com AOS e transições fluidas entre seções com SwiperJS.

Essas funcionalidades garantem uma navegação simples e eficiente, facilitando o controle financeiro do usuário de forma acessível e moderna.

> ⚠️ A aplicação requer conexão com o backend para o funcionamento completo das funcionalidades.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- v0.2.0
  - [ ] Implementação dos componentes visuais da página de histórico geral
  - [ ] Otimização de termos de SEO
- v0.3.0 ~ v1.0.0
  - [ ] Refactor para um framework robusto de desenvolvimento front-end

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contribuindo

Contribuições são muito bem-vindas! Se você deseja sugerir melhorias, reportar bugs ou adicionar novas funcionalidades ao Cashtrack, você pode usar as opções de reportar bugs ou features, ou então abrir um Pull-Request:

### Como contribuir

1. **Fork este repositório**
2. Crie uma branch para sua feature ou correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça suas alterações e commits:
    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request

### Regras de contribuição
- Sempre mantenha seu código limpo e documentado.
- Escreva commits claros e objetivos.
- Siga a estrutura do projeto e os padrões de nomenclatura existentes.
- Certifique-se de que suas alterações não quebram funcionalidades existentes.
- Sugestões de contribuição

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## Licença do projeto

Este projeto está licenciado sob os termos da licença MIT. Seus autores podem ser encontrados na aba de [Contributors](https://github.com/P-py/cash-track/graphs/contributors) do GitHub.

Você pode consultar os detalhes completos no arquivo [`LICENSE.txt`](./LICENSE.txt).

Sinta-se à vontade para usar, modificar e distribuir este projeto, respeitando os termos da licença.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contato

Entre em contato com os desenvolvedores do projeto Cashtrack:

- **Pedro Salviano Santos** – 236586@facens.br
- **Luiz Gustavo Motta Viana** – 236428@facens.br
- **Ronaldo Simeone Antonio** – 190232@facens.br
- **Erick Ferreira Ribeiro** – 237046@facens.br

Projeto desenvolvido como parte da disciplina de **Desenvolvimento Web**

Facens – 2025

Sinta-se à vontade para contribuir, abrir issues ou enviar sugestões via GitHub!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/P-py/cash-track.svg?style=for-the-badge
[html-shield]: https://img.shields.io/badge/html-black?logo=html5
[css-shield]: https://img.shields.io/badge/css-black?logo=css3
[javascript-shield]: https://img.shields.io/badge/javascript-black?logo=javascript
[contributors-url]: https://github.com/P-py/cash-track/graphs/contributors
[license-shield]: https://img.shields.io/github/license/P-py/cash-track.svg?style=for-the-badge
[license-url]: https://github.com/P-py/cash-track/blob/master/LICENSE.txt
[product-screenshot]: assets/images/frontend_demo.png
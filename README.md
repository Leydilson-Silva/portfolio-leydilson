# Portfólio Profissional - José Leydilson

Uma experiência digital imersiva construída com as mais modernas tecnologias do ecossistema JavaScript, focada em performance, User Experience (UX) e código limpo.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
</p>

---

## 🚀 Sobre o Projeto

Este não é apenas um site estático para listar projetos. É uma **aplicação web moderna e totalmente funcional**, desenvolvida para demonstrar proficiência em arquitetura de software front-end, criação de hooks personalizados, otimização de renderização com o Next.js App Router e um profundo cuidado com a experiência do usuário.

Cada componente foi planejado para ser eficiente, reutilizável e esteticamente agradável, refletindo as melhores práticas do mercado.

## ✨ Destaques Técnicos (Key Features)

Esta aplicação implementa soluções técnicas avançadas para resolver problemas comuns de forma elegante e performática.

### 🎨 Interface Estilo macOS & Glassmorphism
A navegação principal foi reinventada como uma **Dock flutuante** inspirada no macOS.
- **Interatividade:** Ícones com efeitos de escala e destaque no hover, proporcionando feedback visual instantâneo.
- **Responsividade:** A Dock é perfeitamente funcional em desktops e dispositivos móveis.
- **Estilo:** Efeito de *Glassmorphism* (`backdrop-blur`) para uma integração suave e moderna com qualquer conteúdo de fundo.

### 🌍 Sistema de Internacionalização (i18n)
Para garantir acessibilidade global, o portfólio conta com um sistema de tradução dual-idioma (PT-BR / EN).
- **Leve e Eficiente:** Construído do zero utilizando a **Context API** do React, eliminando a necessidade de bibliotecas externas pesadas como `i18next` ou `react-intl`.
- **Gerenciamento Global:** O estado do idioma é gerenciado globalmente, permitindo que qualquer componente consuma as traduções de forma reativa.

### 💡 Tema Dinâmico (Dark/Light Mode)
A aplicação possui um sistema de tema completo, permitindo ao usuário alternar entre um modo claro e um modo escuro com estética *Cyberpunk/Neon*.
- **Persistência:** A escolha do tema é salva no `localStorage` do navegador, mantendo a preferência do usuário entre as sessões.
- **Sem "Flicker":** A lógica é aplicada de forma a evitar o "flash" de tema incorreto no carregamento inicial da página, garantindo uma transição suave.

### 🤖 Automação de Conteúdo com Node.js `fs`
Um dos diferenciais técnicos deste projeto é a automação na exibição de galerias de imagens.
- **Zero Manutenção:** Em vez de importar manualmente cada imagem de projeto, foi criado um script no lado do servidor que utiliza o módulo `fs` do Node.js.
- **Como Funciona:** O script em `src/lib/getImages.ts` lê automaticamente o conteúdo de um diretório de projeto (ex: `/public/projects/project-a/`), identifica todas as imagens e as disponibiliza para o componente de carrossel ou galeria. Para adicionar novas imagens a um projeto, basta fazer o upload do arquivo para a pasta correta.

```typescript
// Exemplo da simplicidade no front-end:
// O componente apenas consome a lista de imagens
// gerada automaticamente pelo servidor.
const images = getImagesForProject('project-a');

return <Carousel images={images} />;
```

---

<!-- ## 🔧 Como Rodar o Projeto (Getting Started)

Para explorar o código e rodar a aplicação localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd SEU_REPOSITORIO
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

--- -->

## 👨‍💻 Autor & Contato

**José Leydilson Silva de Araújo**

- **LinkedIn:** [https://www.linkedin.com/in/SEU_LINKEDIN](https://www.linkedin.com/in/leydilson)
- **GitHub:** [https://github.com/leydilson](https://github.com/leydilson-silva)

Obrigado por visitar!
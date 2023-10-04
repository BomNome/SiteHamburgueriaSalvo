//Cabeçalho
class Header extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `
        <link rel="stylesheet "href="css/estiloheader.css">
        <header>
            
            <nav class="menu">
              <div class="linkContainer">
                <div class="individualLink">
                <p><a href='homepage.html'>Home</a></p>
                </div>

                <div class="individualLink">
                <p><a href='cardapio.html'>Cardápio</a></p>
                </div>

                <img src="imagens/logo_cabecalho.png" alt="Logo" class="logo">

                <div class="individualLink">
                <p><a href='sobre.html'>Sobre</a></p>
                </div>

                <div class="individualLink">
                <p><a href='#'>Contato</a></p>
                </div>
              </div>
            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
//Fim Cabeçalho


class Componente1 extends HTMLParagraphElement {
    constructor() {
        super();
        this.innerHTML = `
        <p>Hola desde framgento.js</p>
        `;
    }
}

customElements.define("team-vv", Componente1);
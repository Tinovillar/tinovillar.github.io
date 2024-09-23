class Componente1 extends HTMLParagraphElement {
    constructor() {
        super();
        this.innerHTML = `
        <p>Planeta de los Simios (Todas)</p>
        `;
    }
}

customElements.define("team-vv", Componente1);
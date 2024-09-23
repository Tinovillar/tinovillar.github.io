class Componente1 extends HTMLParagraphElement {
    constructor() {
        super();
        this.innerHTML = `
        <p>Planeta de los Simios</p>
        `;
    }
}

customElements.define("team-vv", Componente1);
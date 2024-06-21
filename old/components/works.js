class Works extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /* html */ `
            <p>
                works
            </p>
        `
    }
}

customElements.define("works-section", Works)
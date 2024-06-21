class GetInTouch extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /* html */ `
            <p>
                get-in-touch
            </p>
        `
    }
}

customElements.define("get-in-touch-section", GetInTouch)
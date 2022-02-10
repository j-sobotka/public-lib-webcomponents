import { customElement, html, LitElement, property } from 'lit-element';

@customElement('test-gp')
export class TestGp extends LitElement {
    @property({ type: String }) title = 'Witaj !';

    @property({ type: Number }) counter = 5;

    __increment() {
        this.counter += 1;
    }

    render() {
        return html`
            <h2>${this.title} Nr. ${this.counter}!</h2>
            <button @click=${this.__increment}>Klik !</button>
        `;
    }
}

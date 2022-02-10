import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('map-button')
export class MapButton extends LitElement {
    @property({ type: String }) title = 'Otwórz';
    @property({ type: Object }) onClick?: VoidFunction;
    static styles = css`
        :host([hidden]) {
            display: none !important;
        }
        :host {
            display: block;
        }
    `;

    render() {
        return html`<button @click=${this.onClick}>${this.title}</button>`;
    }
}

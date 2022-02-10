import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('map-container')
export class MapContainer extends LitElement {
    @property({ type: Object }) onClick?: VoidFunction;
    @property({ type: String }) title = '';
    static styles = css`
        :host([hidden]) {
            display: none !important;
        }
        :host {
            display: block;
            position: absolute;
            width: 350px;
            height: 100%;
            background-color: #eee;
            box-sizing: border-box;
        }
        .container {
            display: flex;
            flex-direction: column;
        }

        .header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid hsla(214, 57%, 24%, 0.1);
            padding: 0.25rem;
        }
    `;

    render() {
        return html`<div class="container">
            <div class="header">
                <span>${this.title}</span>
                <button @click=${this.onClick}>X</button>
            </div>
            <slot></slot>
        </div>`;
    }
}

import { LitElement, html, customElement, css, property } from 'lit-element';
import './map-button';
import './map-container';
import './test-gp';

@customElement('map-test-widget')
export class MapTestWidget extends LitElement {
    @property({ type: Boolean }) opened = false;
    static styles = css`
        :host {
            display: block;
        }
    `;

    handleClick = () => {
        this.opened = !this.opened;
    };
    render() {
        return html`<map-button .onClick=${this.handleClick} ?hidden=${this.opened} title="Klik"></map-button>
            <map-container .onClick=${this.handleClick} ?hidden=${!this.opened}><test-gp></test-gp></map-container>`;
    }
}

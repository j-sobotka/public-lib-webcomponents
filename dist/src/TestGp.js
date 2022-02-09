import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class TestGp extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
}
TestGp.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--test-gp-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], TestGp.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], TestGp.prototype, "counter", void 0);
//# sourceMappingURL=TestGp.js.map
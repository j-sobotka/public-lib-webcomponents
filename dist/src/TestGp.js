import { __decorate } from "tslib";
import { html, LitElement, property } from "lit-element";
export class TestGp extends LitElement {
    constructor() {
        super(...arguments);
        this.title = "Hey there";
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
__decorate([
    property({ type: String })
], TestGp.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], TestGp.prototype, "counter", void 0);
//# sourceMappingURL=TestGp.js.map
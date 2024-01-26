import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  
  @state()
  isChecked = false;

  @state()
  disabled = false;

  render() {
    return html`
      <p>
        <input type="checkbox" ?checked=${this.isChecked} ?disabled=${this.disabled}>Check me
      </p>

      <p>
        <button @click=${this.onToggleCheckedClicked}>Toggle the check box</button>
      </p>

      <p>
        <button @click=${this.onToggleDisabledClicked}>Toggle disabled</button>
      </p>
    `
  }

  onToggleCheckedClicked() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }

  onToggleDisabledClicked() {
    this.disabled = !this.disabled;
    console.log(this.disabled);
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}

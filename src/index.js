import {LitElement, html} from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <div>This is a test</div>
    `;
  }
}

customElements.define('my-element', MyElement);

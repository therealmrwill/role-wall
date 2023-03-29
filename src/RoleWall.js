import { html, css, LitElement } from 'lit';

export class RoleWall extends LitElement {
  static styles = css`
    :host {
      padding: 25px;
      color: var(--role-wall-text-color, #000);
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
    .h1{
      font-size: 2em;
    }
  `;

  static properties = {
    id: { type: String },
    locked: { type: Boolean },
    data: { type: Array, Reflect: true },
    shownData: { type: Array, Reflect: true },
    lock: {type: String}
  };

  constructor() {
    super();
    this.id = "-1";
    this.locked = true;
    this.data = [];
    this.shownData= [];
  }

  firstUpdated(changeProperties) {
    console.log("Element loaded");
    this._lockElement();
    this.data = Array.from(this.children);
    this.innerHTML = "";
    this.shownData.push(html`<h1 class="h1">This content is locked</h1>`);
  }

  _lockElement(){
    if(this.locked) return;

    this.locked = true;
    console.log("Attempting to lock element");
    this.shownData = [];
    this.shownData.push(html`<h1 class="h1">This content is locked</h1>`);
  }

  _unlockElement(){
    if(this.locked == false) return;

    this.locked = false;
    console.log("Attempting to unlock element");
    this.shownData = this.data;
  }
  
  _addLockedContent(content){
    content.push("<h1>This content is locked</h1>");
  
  }


  //render 

  //return html' 
    //$(content)


  render() {
    var tempText = this.locked ? "Unlock Content" : "Lock Content";

    var content = [];

    this.shownData.forEach(element => {
        content.push(element);
    });

      return html`
      ${content}
      <div>
        <button @click=${this.locked ? this._unlockElement : this._lockElement} style="-webkit-user-select: none; -ms-user-select: none; 
        user-select: none;"> ${tempText} </button>
      </div>
      
    `

    

    
  }
}

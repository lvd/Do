# Do
Super small js library to easily create DOM elements

Examples :

// Create <div>Hello</div>
Do.elem('div', { text: "Hello" });

// Create <div><strong>Hello</strong></div>
Do.elem('div', { html: "<strong>Hello</strong>" });
// or
Do.elem('div', { children: [Do.elem('strong', {text: "Hello"}] });


// button
Do.elem('button', {                       
  texte : 'Send',
  style: 'margin: 10px 20px 10px 5px',
  parent: someDiv,
  events: [{nom: 'click', fonction: this.send, bindElement: this, param: [[param1, param2]]}],
  classNames: ['mh_form_submit'] 
});

//imput 
Createur.elem('input', {             
            id: 'someId',
            attributs: [['type', 'number'], ['step', '1'], ['placeholder', 'Fill me !'], ['name': 'someName' ];,
            parent: someDiv 
});


// It would be nice to improve Do. (More options. Opimization.)

# Do
Super small js library (one class, one static method) to easily create DOM elements. Vanilla savor.

*Method*
--------

Do.elem(*tag*, *options*);

* **tag** : string, tag name for created element, mandatory
* **options** : array of properties for created element, optional, processed in this order
    * **id**: string, id for element
    * **html**: string, *innerHTML* for element
    * **text**: *textNode* for element (added after innerHTML)
    * **attributes**: array of arrays representing attributes, added with *setAttribute*
        * **0**: attribute name, string
        * **1**: attribute value, string
    * **events**: array of objects representing events, added with *addEventListener*
        * **name**: name of event
        * **callback**: function called when event is triggered
        * **bindObject**: bound object for callback, default is created element
        * **params**: parameters for callback
    * **htmlClasses**: array of classNames (string) for created element (added with *classList.add*)
    * **style**: css rules (string) used as style attribute for created element
    * **children**: array of DOM elements to appendChild to element, added with *appendChild* (added after innerHTML and textNode)
    * **parent**: DOM element used as parent for created element (created element added with *appendChild*)
        

*Examples*
------------

```javascript
// Create <div>Hello</div>
Do.elem('div', { text: "Hello" });
```
```javascript
// Create <p><strong>Hello</strong> <em>everybody</em></p>
Do.elem('p', { html: "<strong>Hello</strong> <em>everybody</em>" });

// or
Do.elem('div', {
    children: [
        Do.elem('strong', {text: "Hello"}), 
        document.createTextNode(" "), 
        Do.elem('em', {text: "everybody"})
    ] 
});
```

```javascript
// button
const button = Do.elem('button', {                       
    text : 'Send',
    parent: someDiv,
    events: [{
        name: 'click', 
        callback: this.send, 
        params: [this]
    }],
    classNames: ['beautifulButton'],
    style: 'margin: 10px 20px 10px 5px' 
});
```

```javascript
//imput 
Createur.elem('input', {             
    id: 'age',
    attributes: [
        ['type', 'number'],
        ['name': 'age' ],
        ['min', '18'], 
        ['step', '1'], 
        ['placeholder', 'Fill me with yout age!']        
    ],
    parent: someForm 
});
```

*Examples directly working in browser console*
------------

**First** : copy/paste Do class in console.

```javascript
// set "hello" div in body
document.body.innerHTML = "";
Do.elem('div', { text: "Hello", parent: document.body });
```

```javascript
// set "hello" button in body
document.body.innerHTML = "";
Do.elem('button', {                       
    text : 'Say hello',
    parent: document.body,
    events: [{
        name: 'click', 
        callback: function() {alert('hello');}
    }]
});
```

```javascript
// set "hello" button in body using an Example class
document.body.innerHTML = "";

class Example {

   constructor(parent, name, buttonText) {
      this.text = "Hello";
      this.name = name;
      this.button = 
         Do.elem('button', { 
            id: "button-01",
            text: buttonText,
            parent: parent,
            events: [{
              name: 'click', 
              callback: this.displayMessage,
              params: [this]
            }],
            style: "margin: 10vmin; padding: 5px; width: 20em; background-color: #c9d8c5"
         });
    }
      
    displayMessage(example) {
        alert(`${example.text} ${example.name}\n Button id : ${this.id}`);
    }
}

new Example(document.body, "DoName", "Click me");
```


*Improvements*
--------------

It would be nice to improve Do. (More interesting options. Code optimization.)
It would be nice to benchmark Do. (Compare Do versus full document.createElement etc... code.)

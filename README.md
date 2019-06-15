# Do
Super small js library (one method) to easily create DOM elements. Vanilla savor.

*Method*
--------

Do.elem(*tag*, *options*);

* tag : string, tag name of created element, mandatory
* options : array of properties for created element, optional

*Examples *
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
        Do.elem('strong', {text: "Hello"}, 
        document.createTextNode("Hello World"), 
        Do.elem('em', {text: "everybody"}
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


*Improvements*
--------------

It would be nice to improve Do. (More interesting options. Code optimization.)
It would be nice to benchmark Do. (Compare Do versus full document.createElement etc... code.)

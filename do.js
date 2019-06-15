// v1.0

class Do {

    static elem(tag, options={}) {
        const el = document.createElement(tag);
        if ('id' in options) el.setAttribute('id', options.id);
        if ('html' in options) el.innerHTML = options.html;
        if ('text' in options) el.appendChild(document.createTextNode(options.text));
        if ('style' in options) el.setAttribute('style', options.style);
        if ('parent' in options) options.parent.appendChild(el);
        if ('children' in options) for (const enfant of options.children) el.appendChild(enfant);
        if ('classNames' in options) for (const classe of options.classNames) el.classList.add(classe);
        if ('attributes' in options) for (const attr of options.attributes) el.setAttribute(attr[0], attr[1]);
        if ('events' in options) {
            for (const event of options.events) {
                const bindingParams = [];
                const bindingObject = (('bindElement' in event) ? event.bindingObject : el);
                bindingParams.push(bindingElement);
                if ('params' in event) bindingParams.push(...event.params);
                el.addEventListener(event.name, event.callback.bind(...bindingParams));
            }
        }
        return el;
    }
}

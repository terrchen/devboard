const h = {
    elemById: (id) => {
        return document.getElementById(id);
    },
    createArticle: (params) => {
        return createElement("article", params);
    },
    createBreak: () => {
        return createElement("br");
    },
    createButton: (params) => {
        return createElement("button", params);
    },
    createCheckbox: (params) => {
        let checkbox = createElement("input", params);
        checkbox.type = "checkbox";

        let { checked, disabled } = params || {};
    
        if ( checked )
            checkbox.checked = checked;
    
        if ( disabled !== undefined )
            checkbox.disabled = disabled;
    
        return checkbox;
    },
    createDetail: (params) => {
        return createElement("details", params);
    },
    createDiv: (params) => {
        return createElement("div", params);
    },
    createInput: (params) => {
        return createElement("input", params);
    },
    createImg : (params) => {
        const { src } = params;
        const img = createElement("img", params);
        img.src = src;
        return img;
    },
    createH1: (params) => {
        return createElement("h1", params);
    },
    createH2: (params) => {
        return createElement("h2", params);
    },
    createH3: (params) => {
        return createElement("h3", params);
    },
    createH4: (params) => {
        return createElement("h4", params);
    },
    createH5: (params) => {
        return createElement("h5", params);
    },
    createHeader: (header, params) => {
        return createElement(header, params);
    },
    createLabel : (params) => {
        const label = createElement("label", params);

        if ( !params )
            return;

        // for is a reserved word
        let { for: _for } = params;

        if ( _for !== undefined )
            label.setAttribute("for", _for);

        return label;
    },
    createLI: (params) => {
        return createElement("li", params);
    },
    createLink: (params) => {
        const link = createElement("a", params);
    
        if ( !params ) 
            return link;

        const { target, href } = params;

        if ( target )
            link.setAttribute("target", target);
    
        if ( href )
            link.href = href;

        return link;
    },
    createNav: (params) => {
        return createElement("nav", params);
    },
    createP: (params) => {
        return createElement("p", params);
    },
    createParagraph: (params) => {
        return createElement("p", params);
    },
    createPre: (params) => {
        return createElement("pre", params);
    },
    createSpan: (params) => {
        return createElement("span", params);
    },
    createSummary: (params) => {
        return createElement("summary", params);
    },
    createTextNode: (text) => {
        return document.createTextNode(text);
    },
    createTable: (params) => {
        return createElement("table", params);
    },
    createTableBody: (params) => {
        return createElement("tbody", params);
    },
    createTableCell: (params) => {
        return createElement("td", params);
    },
    createTableHead: (params) => {
        return createElement("thead", params);
    },
    createTableHeadCell: (params) => {
        return createElement("th", params);
    },
    createTableRow: (params) => {
        return createElement("tr", params);
    },
    createUL: (params) => {
        return createElement("ul", params);
    },
    createLi: (params) => {
        return createElement("li", params);
    },
    hide: (elem) => {
        elem.style.display = "none";
        //let { style } = elem;
        //style._display = style.display;
        //style.display = "none";
    },
    show: (elem) => {
        elem.style.display = null;
        //let { style } = elem;

        //if ( style._display ) {
        //    style.display = style._display;
        //    delete style._display;
        //} else {
        //    delete style.display;
        //}
    }
}

function createElement(type, params) {
    let elem = document.createElement(type);

    if ( !params )
        return elem;

    let { id, ariaLabel, role, html, text, cls, pointerEvents, title, style, append } = params;

    if ( id !== undefined )
        elem.id = id;

    if ( ariaLabel )
        elem.setAttribute("aria-label", ariaLabel);

    if ( role )
        elem.setAttribute("role", role);

    if ( html !== undefined ) {
        if ( typeof(html) === "object" )
            elem.appendChild(html);
        else
            elem.innerHTML = html;
    } else if ( text !== undefined ) {
        elem.innerText = text;
    }

    if ( cls )
        elem.setAttribute("class", cls);

    if ( pointerEvents )
        elem.setAttribute("pointer-events", pointerEvents);

    if ( title !== undefined )
        elem.setAttribute("title", title);

    if ( append ) {
        if ( append.length !== undefined ) {
            append.forEach(e => {
                if ( e === undefined || e === null )
                    return;

                elem.appendChild(e);
            });
        } else {
            elem.appendChild(append);
        }
    }

    if ( !style )
        return elem;

    for ( let name in style )
        elem.style[name] = style[name];

    return elem;
}
    
module.exports = h;

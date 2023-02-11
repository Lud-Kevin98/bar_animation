'use strict';

function SVG (c, f, a){
    let n = document.createElementNS('http://www.w3.org/2000/svg', f);
    for (let i in a){
        n.setAttribute(i, a[i]);
    }
    return c.appendChild(n);
}


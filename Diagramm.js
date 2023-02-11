'use strict';

function kevin () {

   

    let svg = SVG(document.body, 'svg', {width:1000, height:1000});
   
    let g=SVG(svg, 'g', {});
    
   
    let j = 220;
    let s = 0;
    let t=1;
    let l=21;
    
    for (let i=10; i<=200; i+=10){

        SVG(g, 'rect', {x:500, y:i, width:10, height:j, class:'bar', id:`trans${t}`});
        
        SVG(g, 'line', {x1:505, y1:5, x2:505, y2:230, fill:'none', stroke:'black',
         'stroke-width':0.5, id:`trans${t}`})[l];

        j-=10;
        l--;


        document.getElementById(`trans${t}`).style.transformOrigin = 'center center';
        document.getElementById(`trans${t}`).style.animation = `spin 5s ${s}s linear infinite alternate `;
    
        t++;
        s+=0.5;
    }  
    SVG(g, 'path', {d:'M300 600 L500 300 L700 600 Z', fill:'yellow',stroke:'#f9004d', id:"text"});
    
    document.getElementById("text").style.transformOrigin= '50% 50%';
    document.getElementById("text").style.animation ="spin1 2s infinite";
}
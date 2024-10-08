$.fn.extend({ addStyle              : function(a)      { return this.attr("style", (this.attr("style")==undefined ? a : this.attr("style") + " " + a)); } });
$.fn.extend({ as                    : function(a)      { return this.attr("style", (this.attr("style")==undefined ? a : this.attr("style") + " " + a)); } });
$.fn.extend({ contentEditable       : function()       { return this.on("mousedown", function () { $(this).attr("contenteditable", "true"); }).on("focusout",  function () { $(this).removeAttr("contenteditable"); }); } });
$.fn.extend({ cs                    : function(t)      { return this.click(function(){t.slideToggle(); }) } });
$.fn.extend({ flash                 : function(a)      { const time=100; return this.animate({ backgroundColor: "red" }, time, function(){ $(this).animate({ backgroundColor: "transparent" }, time); }); } });
$.fn.extend({ ff                    : function(a)      { return this.finish().flash(); } });
$.fn.extend({ ld                    : function(f)      { return this.on(`load`, f) } });
$.fn.extend({ pf                    : function(a, b)   { return this.parents(a).find(b); } });
$.fn.extend({ pft                   : function(a, b, c){ return this.parents(a).find(b).text(c); } });
$.fn.extend({ pfh                   : function(a, b, c){ return this.parents(a).find(b).html(c); } });
$.fn.extend({ ps                    : function(a, b)   { return this.attr("style", $(this).attr("style").replace(`${a}`, `${b}`) )     } });
$.fn.extend({ removeStyl            : function()       { return this.removeAttr("style")  } });
$.fn.extend({ removeStyle           : function(a)      { return this.attr("style", $(this).attr("style").replace(`${a}`, ``).trim() )  } });
$.fn.extend({ replaceStyle          : function(a, b)   { return this.attr("style", $(this).attr("style").replace(`${a}`, `${b}`) )     } });
$.fn.extend({ rs                    : function(a)      { return this.attr("style", $(this).attr("style").replace(`${a}`, ``).trim() )  } });
$.fn.extend({ rf                    : function(a, b)   { 
    
    const left =`100px`;
    const right=`450px`;
    // 600=40 100 10 450

    return (
        this.find(`.ref-ul`).length==0
        ?  
        this.append(
            `<ul class="ref-ul">
                <li>
                    <nav style="display: grid; grid-template-columns: ${left} ${right}; gap: 10px;">
                        <small style="word-break: break-all;"><b>${a}</b></small>
                        <small><b><a href="${b}">${b}</a></b></small>
                    </nav>
                </li>
            </ul>`)
        :
        this.find(`.ref-ul`).append(
                `<li>
                    <nav style="display: grid; grid-template-columns: ${left} ${right}; gap: 10px;">
                        <small style="word-break: break-all;"><b>${a}</b></small>
                        <small><b><a href="${b}">${b}</a></b></small>
                    </nav>
                </li>`) 
    );
} });
$.fn.extend({ rt9                   : function()       { return this.click(function(){ $(this).toggleTextRotate90();  }) } });
$.fn.extend({ rt18                  : function()       { return this.click(function(){ $(this).toggleTextRotate180(); }) } });
$.fn.extend({ rtm18                 : function()       { return this.click(function(){ $(this).toggleTextRotateM180(); }) } });
$.fn.extend({ styl                  : function()       { return this.attr("style"); } });
$.fn.extend({ style                 : function(a)      { return this.attr("style", a); } });
$.fn.extend({ toggleHtml            : function(a, b)   { return this.html(this.html() != a ? a : b); } });
$.fn.extend({ toggleStyle           : function(a, b)   { return this.attr("style", (this.attr("style") != a ? a : b) ); } });
$.fn.extend({ toggleText            : function(a, b)   { return this.text(this.text() != a ? a : b);} });
$.fn.extend({ toggleTextRotate90    : function()       { const a0 = `display: inline-block; transition-duration: 100ms;`; const a = a0 + `transform: rotate(90deg);`; const b = a0 + `transform: rotate(0deg);`; return this.toggleStyle(a, b); }});
$.fn.extend({ toggleTextRotate180   : function()       { const a0 = `display: inline-block; transition-duration: 100ms;`; const a = a0 + `transform: rotate(180deg);`; const b = a0 + `transform: rotate(0deg);`; return this.toggleStyle(a, b); }});
$.fn.extend({ toggleTextRotateM180  : function()       { const a0 = `display: inline-block; transition-duration: 100ms;`; const a = a0 + `transform: rotate(-180deg);`; const b = a0 + `transform: rotate(0deg);`; return this.toggleStyle(a, b); }});




// ** Parameter **
//-----------------
// a=``
// t=$()
// f=function(){}


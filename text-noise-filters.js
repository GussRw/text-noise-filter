function conjuntionsFilter(text){
    var wordsArray = ["el", "la","al","n", "los", "las", "un", "una", "unos", "unas","a", "ante", "bajo", "cabe", "con",
        "contra", "de", "desde", "durante", "en", "entre", "hacia", "hasta", "mediante", "para", "por", "según",
        "sin", "so", "sobre", "tras", "versus", "vía","y","e", "ni", "o", "u", "bien, ya", "pero", "mas","más", "sino", "si",
        "luego", "que", "se","del","es","qué", "como", "cuando", "aunque", "no" ,"d"];
    return wordsFilter(text,wordsArray);

}

function htmlTagsFilter(text){
    var htmlTags =[
        "<!>","<!DOCTYPE>","</a>","<a>","</abbr>","<abbr>","</acronym>","<acronym>","</address>","<address>","</applet>","<applet>"
        ,"</area>","<area>","</article>","<article>","</aside>","<aside>","</audio>","<audio>","</b>","<b>","</base>","<base>","</basefont>","<basefont>"
        ,"</bdi>","<bdi>","</bdo>","<bdo>","</big>","<big>","</blockquote>","<blockquote>","</body>","<body>","</br>","<br>","</button>","<button>"
        ,"</canvas>","<canvas>","</caption>","<caption>","</center>","<center>","</cite>","<cite>","</code>","<code>","</col>","<col>"
        ,"</colgroup>","<colgroup>","</datalist>","<datalist>","</dd>","<dd>","</del>","<del>","</details>","<details>","</dfn>","<dfn>"
        ,"</dialog>","<dialog>","</dir>","<dir>","</div>","<div>","</dl>","<dl>","</dt>","<dt>","</em>","<em>","</embed>","<embed>"
        ,"</fieldset>","<fieldset>","</figcaption>","<figcaption>","</figure>","<figure>","</font>","<font>","</footer>","<footer>"
        ,"</form>","<form>","</frame>","<frame>","</frameset>","<frameset>","</h1>","<h1>","</h2>","<h2>","</h3>","<h3>","</h4>","<h4>"
        ,"</h5>","<h5>","</h6>","<h6>","</head>","<head>","</header>","<header>","</hr>","<hr>","</html>","<html>","</i>","<i>","</iframe>","<iframe>"
        ,"</img>","<img>","</input>","<input>","</ins>","<ins>","</kbd>","<kbd>","</label>","<label>","</legend>","<legend>","</li>","<li>"
        ,"</link>","<link>","</main>","<main>","</map>","<map>","</mark>","<mark>","</menu>","<menu>","</menuitem>","<menuitem>"
        ,"</meta>","<meta>","</meter>","<meter>","</nav>","<nav>","</noframes>","<noframes>","</noscript>","<noscript>","</object>","<object>"
        ,"</ol>","<ol>","</optgroup>","<optgroup>","</option>","<option>","</output>","<output>","</p>","<p>","</param>","<param>"
        ,"</picture>","<picture>","</pre>","<pre>","</progress>","<progress>","</q>","<q>","</rp>","<rp>","</rt>","<rt>","</ruby>","<ruby>"
        ,"</s>","<s>","</samp>","<samp>",'<//script>' , "<script>","<section>","<section>","</select>","<select>","</small>","<small>"
        ,"</source>","<source>","</span>","<span>","</strike>","<strike>","</strong>","<strong>","</style>","<style>","</sub>","<sub>"
        ,"</summary>","<summary>","</sup>","<sup>","</svg>","<svg>","</table>","<table>","</tbody>","<tbody>","</td>","<td>","</template>","<template>"
        ,"</textarea>","<textarea>","</tfoot>","<tfoot>","</th>","<th>","</thead>","<thead>","</time>","<time>","</title>","<title>"
        ,"</tr>","<tr>","</track>","<track>","</tt>","<tt>","</u>","<u>","</ul>","<ul>","</var>","<var>","</video>","<video>","</wbr>","<wbr>"]
    return replaceHtmlFilter(text,htmlTags);
}

function xmlHtmlCharactersFilter(text){
  var xmlHtmlCharacters = {"exclamation":"!","quot":'"',"percent":"%","amp":"&","apos":"'","add":"+","lt":"<","equal":"="
    ,"gt":">","nbsp":" ","iexcl":"¡","cent":"¢","pound":"£","curren":"¤","yen":"¥","brvbar":"¦","sect":"§","uml":"¨","copy":"©"
    ,"ordf":"ª","laquo":"«","not":"¬","shy":" ","reg":"®","macr":"¯","deg":"°","plusmn":"±","sup2":"²","sup3":"³","acute":"´"
    ,"micro":"µ","para":"¶","middot":"·","cedil":"¸","sup1":"¹","ordm":"º","raquo":"»","frac14":"¼","frac12":"½","frac34":"¾"
    ,"iquest":"¿","Agrave":"À","Aacute":"Á","Acirc":"Â","Atilde":"Ã","Auml":"Ä","Aring":"Å","AElig":"Æ","Ccedil":"Ç","Egrave":"È"
    ,"Eacute":"É","Ecirc":"Ê","Euml":"Ë","Igrave":"Ì","Iacute":"Í","Icirc":"Î","Iuml":"Ï","ETH":"Ð","Ntilde":"Ñ","Ograve":"Ò"
    ,"Oacute":"Ó","Ocirc":"Ô","Otilde":"Õ","Ouml":"Ö","times":"×","Oslash":"Ø","Ugrave":"Ù","Uacute":"Ú","Ucirc":"Û","Uuml":"Ü"
    ,"Yacute":"Ý","THORN":"Þ","szlig":"ß","agrave":"à","aacute":"á","acirc":"â","atilde":"ã","auml":"ä","aring":"å","aelig":"æ"
    ,"ccedil":"ç","egrave":"è","eacute":"é","ecirc":"ê","euml":"ë","igrave":"ì","iacute":"í","icirc":"î","iuml":"ï","eth":"ð"
    ,"ntilde":"ñ","ograve":"ò","oacute":"ó","ocirc":"ô","otilde":"õ","ouml":"ö","divide":"÷","oslash":"ø","ugrave":"ù","uacute":"ú"
    ,"ucirc":"û","uuml":"ü","yacute":"ý","thorn":"þ","yuml":"ÿ","OElig":"Œ","oelig":"œ","Scaron":"Š","scaron":"š","Yuml":"Ÿ"
    ,"fnof":"ƒ","circ":"ˆ","tilde":"˜","Alpha":"Α","Beta":"Β","Gamma":"Γ","Delta":"Δ","Epsilon":"Ε","Zeta":"Ζ","Eta":"Η"
    ,"Theta":"Θ","Iota":"Ι","Kappa":"Κ","Lambda":"Λ","Mu":"Μ","Nu":"Ν","Xi":"Ξ","Omicron":"Ο","Pi":"Π","Rho":"Ρ","Sigma":"Σ"
    ,"Tau":"Τ","Upsilon":"Υ","Phi":"Φ","Chi":"Χ","Psi":"Ψ","Omega":"Ω","alpha":"α","beta":"β","gamma":"γ","delta":"δ","epsilon":"ε"
    ,"zeta":"ζ","eta":"η","theta":"θ","iota":"ι","kappa":"κ","lambda":"λ","mu":"μ","nu":"ν","xi":"ξ","omicron":"ο","pi":"π"
    ,"rho":"ρ","sigmaf":"ς","sigma":"σ","tau":"τ","upsilon":"υ","phi":"φ","chi":"χ","psi":"ψ","omega":"ω","thetasym":"ϑ","upsih":"ϒ"
    ,"piv":"ϖ","ensp":" ","emsp":" ","thinsp":" ","zwnj":" ","zwj":" ","lrm":" ","rlm":" ","ndash":"–","mdash":"—","horbar":"―"
    ,"lsquo":"‘","rsquo":"’","sbquo":"‚","ldquo":"“","rdquo":"”","bdquo":"„","dagger":"†","Dagger":"‡","bull":"•","hellip":"…"
    ,"permil":"‰","prime":"′","Prime":"″","lsaquo":"‹","rsaquo":"›","oline":"‾","frasl":"⁄","euro":"€","image":"ℑ","weierp":"℘"
    ,"real":"ℜ","trade":"™","alefsym":"ℵ","larr":"←","uarr":"↑","rarr":"→","darr":"↓","harr":"↔","crarr":"↵","lArr":"⇐","uArr":"⇑"
    ,"rArr":"⇒","dArr":"⇓","hArr":"⇔","forall":"∀","part":"∂","exist":"∃","empty":"∅","nabla":"∇","isin":"∈","notin":"∉","ni":"∋"
    ,"prod":"∏","sum":"∑","minus":"−","lowast":"∗","radic":"√","prop":"∝","infin":"∞","ang":"∠","and":"∧","or":"∨","cap":"∩"
    ,"cup":"∪","int":"∫","there4":"∴","sim":"∼","cong":"≅","asymp":"≈","ne":"≠","equiv":"≡","le":"≤","ge":"≥","sub":"⊂","sup":"⊃"
    ,"nsub":"⊄","sube":"⊆","supe":"⊇","oplus":"⊕","otimes":"⊗","perp":"⊥","sdot":"⋅","lceil":"⌈","rceil":"⌉","lfloor":"⌊","rfloor":"⌋"
    ,"lang":"〈","rang":"〉","loz":"◊","spades":"♠","clubs":"♣","hearts":"♥","diams":"♦"};

    result = text;
    $.each(xmlHtmlCharacters, function(key, value){
      result =  result.replace(new RegExp("&"+key+";","gim"),value);
    });
    return result.toLowerCase();
}

function symbolsFilter(text){
    var symbols = [".", ",", ";", "?", ":", "¿","%","-","&","[","]","{","}","º","#","·"];
    return replaceFilter(text,symbols);
}

function numbersFilter(text){
    return text.replace(/[0-9]+/g," ")
}

function wordsFilter(text, exceptions){
    var result ="";
    $.each(text.split(" "), function(key, value){
        value = value.toString();
        if (exceptions.indexOf(value.toLowerCase()) != -1)
            return true;
        else
            result += (value +" ");
    });
    return result;
}

function replaceHtmlFilter(text, exceptions) {
    var result = text;
    $.each(exceptions, function(key, value){
        value = value.toString();
        result = result.replace(new RegExp(value.substr(0,value.length-1)+"([^>]+)?>", "gim")," ")
    });
    return result;
}

function replaceFilter(text, exceptions) {
    var result = text;
    $.each(exceptions, function(key, value){
        value = value.toString();
        result = result.replace(new RegExp("\\"+value, "gim"), " ")
    });
    return result;
}

function spacesFilter(text){
    return text.replace(/[\s]{2,}/g, " ");
}

function htmlTagsContentFilter(text, tag){
    var result = text.toString()
    $.each(tag, function (key, value) {
        var re = new RegExp("<"+value+"([\\s\\S]+?)"+value+">","gim");
        result = result.replace(re," ");
    });
    return result;
}

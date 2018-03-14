# Text Noise Filter

###Use
````html
    <script src="text-noise-filters.js"></script>
````
###Methods

#####HTML Tags Content Filter
Remove all the contents of the tag from the beginning to the end of this including the tag.<br/>  
*param* *text*   : The text that will be modified. <br/>
*param*  *array* : The tags that will be removed  <br/>
*return* Text without tags in array param <br/>
````javascript
    text = htmlTagsContentFilter(text, ["script", "style","noscript"]);
````

#####HTML Tags Filter
Remove all html tags including in the text.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text without html tags  <br/>
````javascript
    text = htmlTagsFilter(text);
````

#####XML HTML Characters Filter
Replace all special characters by their value.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text with characters replaced  <br/>
````javascript
    text = xmlHtmlCharactersFilter(text);
````

#####Symbols Filter
Remove symbols from the text, for example: +,/,*,{,}.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text without symbols <br/>
````javascript
    text = symbolsFilter(text);
````

#####Numbers Filter
Remove numbers from the text, for example: 1,76,098.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text without numbers <br/>
````javascript
    text = numbersFilter(text);
````

#####Spaces Filter
Remove additional spaces that are not necessary.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text without unnecessary spaces <br/>
````javascript
    text = numbersFilter(text);
````

#####Spaces Filter
Remove words that are not important from the Spanish language.<br/>  
*param* *text*   : The text that will be modified. <br/>
*return* Text without unimportant words <br/>
````javascript
    text = conjuntionsFilter(text);
````

                 

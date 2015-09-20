// var marked = require('marked');
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: true,
//   smartLists: true,
//   smartypants: false
// });
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: true,
  sanitize: false,
  smartLists: true,
  smartypants: true
});
oldHTML = document.getElementById("readme").childNodes[1].innerHTML;
mdButtonClick = false;

function ajaxRequest(url,ids)
{
    var xmlHttpRequest = null;
    if(window.XMLHttpRequest)
    {
        xmlHttpRequest = new XMLHttpRequest();
    }

    if(null != xmlHttpRequest)
    {
        xmlHttpRequest.open("GET", url, true);
        xmlHttpRequest.onreadystatechange = function(){
            if (xmlHttpRequest.readyState == 4){
                if (xmlHttpRequest.status == 200) {
                    var content = xmlHttpRequest.responseText;
                    document.getElementById("readme").childNodes[1].innerHTML =  marked(content);
                    (function(){var a,b;"undefined"!==typeof MathJax&&null!==MathJax||(b=document.createElement("script"),b.setAttribute("type","text/x-mathjax-config"),b.innerHTML="MathJax.Hub.Config({\n  tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']], displayMath: [['$$','$$']]}\n,TeX: { equationNumbers: { autoNumber: 'AMS' } }});",a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("src","https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"),document.head.appendChild(b),document.head.appendChild(a))}).call(this);
         }
            }
        }
        xmlHttpRequest.send(null); 
    }
}

raws = document.getElementById('raw-url');
var mdButton = document.createElement('a');
mdButton.innerHTML = "GithubMD";
mdButton.setAttribute("class","btn btn-sm ");
mdButton.id = "mdButton";

href = 'https://github.com'+raws.getAttribute('href');
console.log(href)
mdButton.addEventListener('click',function () {
  if (mdButtonClick==false)
  {
        ajaxRequest(href,'githubMD');
        mdButtonClick = true
  }
    },false); 

raws.parentNode.insertBefore(mdButton,raws)
// document.getElementById('readme').innerHTML =
//       marked('# Marked in browser\n\nRendered by **marked**.');

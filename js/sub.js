  // MathJax.Hub.Config({"HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"], linebreaks: { automatic:true }, EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50) },
  //           tex2jax: {
  //         inlineMath: [ ['$','$'], ["\\(","\\)"] ],
  //         displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
  //         processEscapes: true
  //       },
  //           TeX: {  noUndefined: { attributes: { mathcolor: "red", mathbackground: "#FFEEEE", mathsize: "90%" } }, Macros: { href: "{}" } },
  //           messageStyle: "none"
  //       });  

  // MathJax.Hub.Queue(function() {
  //           var all = MathJax.Hub.getAllJax(), i;
  //           for(i=0; i < all.length; i += 1) {
  //               all[i].SourceElement().parentNode.className += ' has-jax';
  //           }
  //       });
   (function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    document.getElementsByTagName("head")[0].appendChild(script);
  })();
  // (function(){var a,b;"undefined"!==typeof MathJax&&null!==MathJax||(b=document.createElement("script"),b.setAttribute("type","text/x-mathjax-config"),b.innerHTML="MathJax.Hub.Config({\n  tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']], displayMath: [['$$','$$'],['\\\\[','\\\\]'] ]}\n,TeX: { equationNumbers: { autoNumber: 'AMS' } }});",a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("src","https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"),document.head.appendChild(b),document.head.appendChild(a))}).call(this);
  // console.log('sss');

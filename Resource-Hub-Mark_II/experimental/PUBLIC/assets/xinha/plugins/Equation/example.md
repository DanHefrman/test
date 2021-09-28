AsciiMathML Example
===================

This shows how to set up your page to display MathML using AsciiMathML

Add this to the head section of your document:


      <!-- This block is optional configuration -->
      <script type="text/javascript">
        var mathcolor = "black"; // You may change the color of the formulae (default: red)
        var showasciiformulaonhover = false; // helps students learn ASCIIMath, set to false if you like  (default:true)
        var mathfontfamily = "Arial"; //and the font (default: serif, which is good I think)
      </script>
      <!-- THIS LOADS THE ACTUAL SCRIPT, PLEASE ADJUST THE URL --<
      <script type="text/javascript" src="/xinha/plugins/Equation/ASCIIMathML.js"></script>

<span class="AM">\`int\_a^bf(x)dx\`</span>

<span class="AM">\`\[\[a,b\],\[c,d\]\]\`</span>  

ASCIIMathML by [Peter Jipsen](http://www.chapman.edu/~jipsen), [Chapman University](http://www.chapman.edu)  
For more information on AsciiMathML visit this page: <http://www1.chapman.edu/~jipsen/mathml/asciimath.html>

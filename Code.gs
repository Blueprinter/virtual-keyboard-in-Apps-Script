/*
  The code in this file Code.gs has no license -
  You can do whatever you want with it -
*/

function doGet() {
  return HtmlService.createTemplateFromFile('H_Index').evaluate().setTitle("Virtual Keyboard");
}

function loadCSS_(arr) {
  var i,h,l;
  h="";
  l = arr.length;
  for (i=0;i<l;i++){
    h = h + HtmlService.createHtmlOutputFromFile(arr[i]).getContent();
  }

  return h;
};

function getSkrpt_(a){
try{
  var errHtml,f,h,i,L,rE,thisFile;
  //a - array of file names, h - html, f - file name
  
  h="";
  errHtml="";
  L = a.length;
  
  for (i=0;i<L;i++) {
    f=a[i];//one file
    try{
      thisFile = HtmlService.createHtmlOutputFromFile(f).getContent();
    }catch(e) {
      thisFile = undefined;
    }
    if (!thisFile) {
      errHtml = errHtml + "<div>" + f + " missing - Add the file<div>";
      continue;
    }
    
    h = h + thisFile;
  }
  rE = new RegExp("<" + "script>","g");//The string for the tag name is being broken up into multipe sections for a very
  //special situation that has nothing to do with this code or how the add-on works - its to avoid having a program find
  //the tag name when parsing this  code to strip out the comments
  h = h.replace(rE,"");//Replace all occurrences of the tag

  rE = new RegExp("</" + "script>","g");
  h = h.replace(rE,"");  
  
  return '<' + 'script language="javascript">' + h + "</" + "script>" + errHtml;
}catch(e){
  errHndl_(e,'vjtijfr87qt49i','a: '+a);
  return "<div>Error: " + e.message + "<div>";
};
};



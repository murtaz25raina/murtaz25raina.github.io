var likes =0;
function liker() {
    if(likes===0)
    {
      document.getElementById("like").innerHTML ='<i class="fas fa-thumbs-up"></i>&nbsp;Liked!';    
        likes++;
        document.getElementById("liketxt").innerHTML = likes+' person liked this!';
    }
    else 
    {
            likes++;
        document.getElementById("liketxt").innerHTML = likes +' people have liked this!';
    }
}
function comments(cmt){
    var par = document.createElement("div");
    var lis = document.createTextNode(cmt.value);
   par.appendChild(lis);
   // par.prepend(lis);
    var vs = document.getElementById("listcomments");
    //vs.appendChild(par);
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
}
var once=1;
function editor(eds)
{
    var vs = document.getElementById("inaminadica");
    if(once===1){
    var fun = document.getElementById("blogBody").innerHTML;
    document.getElementById("blogBody").setAttribute('style','display:none;');
    var par = document.createElement('textarea');
    var lis = document.createTextNode(fun.trim());
    par.appendChild(lis);
    vs.appendChild(par);
    par.classList.add("editcmnt1");
  par.style.height = (par.scrollHeight)+"px";
        document.getElementById("editing").innerHTML ='Save&nbsp;<i class="fas fa-save"></i>'; 
    once=2;
        
        document.getElementsByClassName("blogAuthor")[0].style.marginBottom="10px";
    }
    else {
       var gun = document.getElementsByClassName("editcmnt1")[0].value; 
       console.log(gun);
        document.getElementById("blogBody").innerHTML =gun;
        document.getElementsByClassName("editcmnt1")[0].setAttribute('style','display:none;');
        document.getElementById("blogBody").setAttribute('style','display:block;');
         document.getElementById("editing").innerHTML ='Edit&nbsp;<i class="fas fa-edit"></i>';
        once=1;
        vs.removeChild(vs.lastChild);
    }
        
}
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
let BackVal='';
for(let item of buttons){
  item.addEventListener('click',(e)=>{
      let buttonText=e.target.innerText;
      console.log("text",buttonText);
      if(buttonText==='X'){
          buttonText='*';
          screenValue+=buttonText;
          screen.value=screenValue;
      }
      else if(buttonText==='C'){
         screenValue='';
         screen.value=screenValue;
      }
      else if(buttonText=='='){
        //console.log(screen.value.substr(0,3))
          if(screen.value.substr(0,3)=='Cos'){
            screenValue=Math.cos(screen.value.slice(4,-1));
            screen.value=screenValue;
          }
          else if(screen.value.substr(0,3)=='Sin'){
            screenValue=Math.sin(screen.value.slice(4,-1));
            screen.value=screenValue;
          }
          else if(screen.value.substr(0,3)=='Tan'){
              //console.log("TAN",screen.value.slice(4,-1))
            screenValue=Math.tan(screen.value.slice(4,-1));
            screen.value=screenValue;
          }
          else{
            screenValue=eval(screen.value);
            screen.value=screenValue;
          }
      }
      else if(buttonText=='Back'){
          //screenValue= screen.value.substr(0,screen.value.length-1);
          screenValue=screen.value.slice(0,screen.value.length-1);
          screen.value=screenValue;
      }
      else{
          screenValue+=buttonText;
          screen.value=screenValue;
      }
  })  
}
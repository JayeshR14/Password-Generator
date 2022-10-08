const generator = document.querySelector('.generate');
const passwordBoard = document.querySelector('.passwordBoard');
const copy = document.querySelector('.copy');
const copiedAlert = document.querySelector('.copied');
const arrow = document.querySelector('.arrow');
const notice = document.querySelector('.notice');


function generate()
{
   let randomString1 = '';
   let randomString2 = '';
   let randomString3 = '';
   let patter1 = 'AB@C/DEFGHIJKLMN#$%^&*(WXYZ1625897340abcsefghijklmnopqrstuvwxyz';
   let patter2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!%&*()^_+{}|\/?~abcsefghijklmnopqrstuvwxyz';
   let patter3 = '1625897340abcsefkpqrstuvwxyz}{)(\/%$#@!&*';

   for(let i = 0;i<6;i++)
   {
     randomString1 += patter1.charAt(Math.floor(Math.random()*patter1.length));
   }
   for(let J = 0;J<5;J++)
   {
     randomString2 += patter2.charAt(Math.floor(Math.random()*patter2.length));
   }
   for(let k = 0;k<6;k++)
   {
     randomString3 += patter3.charAt(Math.floor(Math.random()*patter3.length));
   }
  
//  console.log(randomString1+randomString2+randomString3);
   passwordBoard.value = ""+randomString1 + randomString2 + randomString3;
   copiedAlert.style.opacity = "0";

}

generator.addEventListener('click',generate);

function copied()
{
  if(passwordBoard.value == '')
  {
    copiedAlert.style.opacity = "1";
   copiedAlert.innerHTML = "Kindly Generate Password !!";
  }
  else{
  passwordBoard.select();
  document.execCommand('Copy');
  passwordBoard.value = " "; 
  copiedAlert.style.opacity = "0";
  arrow.style.opacity = "1";
  notice.style.opacity = "1";
  }

  setTimeout(()=>{
    
  passwordBoard.value = ''; 
    arrow.style.opacity = "0";
    notice.style.opacity = "0";
  },1000)
}
copy.addEventListener('click',copied)


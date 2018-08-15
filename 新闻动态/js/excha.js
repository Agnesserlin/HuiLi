
    $(function(){
	 
      $("ul li").mouseover(function(){
	  $(this).stop();
	   $(this).siblings().stop();
	  $(this).animate({width:'930px'},500).siblings().animate({width:'50px'},500);
	  	  
	  });
   });


           var  sinput=$(".two")[0];
           sinput.onblur=function(){
           	  
           	  var strValue= this.value;
          
           	  var reg=new RegExp("^[0-9]{15}$|^[0-9]{18}$|^[0-9]{17}(|X|x)$");
           	  
           	  if(strValue==null || strValue.trim().length==0 || !reg.test(strValue)){
           	  	  
           	  	  this.style.border="1px solid red";
           	  	  $(".shfz")[0].style.display="block";
           	
           	  }
           	  else{
           	  	  this.style.border="1px solid black";
           	  	 $(".shfz")[0].style.display="none";
           	     
           	  }
           }


           var  jinput=$(".three")[0];
           jinput.onblur=function(){
           	  
           	  var strValue2= this.value;
          
           	  var reg2=new RegExp("^1[34578][0-9]{9}$");
           	  
           	  if(strValue2==null || strValue2.trim().length==0 || !reg2.test(strValue2)){
           	  	  
           	  	  this.style.border="1px solid red";
           	  	  $(".shj")[0].style.display="block";
           	
           	  }
           	  else{
           	  	  this.style.border="1px solid black";
           	  	$(".shj")[0].style.display="none";
           	     
           	  }
           }
           
           var  yinput=$(".four")[0];
           yinput.onblur=function(){
           	  
           	  var strValue3= this.value;
          
           	  var reg3=new RegExp("^[1-9][0-9]{5}$");
           	  
           	  if(strValue3==null || strValue3.trim().length==0 || !reg3.test(strValue3)){
           	  	  
           	  	  this.style.border="1px solid red";
           	  	  $(".yzh")[0].style.display="block";
           	
           	  }
           	  else{
           	  	  this.style.border="1px solid black";
           	  	$(".yzh")[0].style.display="none";
           	     
           	  }
           }
           
				var  dinput=$(".six")[0];
          		 dinput.onblur=function(){
           	  
           	  var strValue3= this.value;
          
           	  var reg3=new RegExp("^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$");
           	  
           	  if(strValue3==null || strValue3.trim().length==0 || !reg3.test(strValue3)){
           	  	  
           	  	  this.style.border="1px solid red";
           	  	  $(".dh")[0].style.display="block";
           	
           	  }
           	  else{
           	  	  this.style.border="1px solid black";
           	  	$(".dh")[0].style.display="none";
           	     
           	  }
           }
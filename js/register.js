$(".input").focus(function(){
	$(this).css("border","1px solid pink");
});

//验证手机号
var iphone= document.getElementById("phone");
var phmsg=document.getElementsByClassName("message")[0];
var reg_phone=new RegExp("^1[0-9]{10}$");

//失去焦点之后，调用有名字的方法
iphone.onblur=function(){
	checkedPhone();
};
function  checkedPhone(){
  var strPhone =iphone.value;
  if(strPhone==null || strPhone.trim().length==0){
       // 请输入电话号码
       iphone.style.border="1px solid red";
       phmsg.innerHTML="请输入电话号码";
       return false;
     }else{
       if(!reg_phone.test(strPhone)){
    	  	// 输入符合规范的电话号码
          iphone.style.border="1px solid red";
          phmsg.innerHTML="输入符合规范的电话号码";
          return false;
        }else{
          iphone.style.border="1px solid black";
          phmsg.innerHTML="";
          return  true;
        }

      }
    }

//验证用户名
var user= document.getElementById("user");
var umsg=document.getElementsByClassName("message")[1];
var reg_user=new RegExp(/^[\u4E00-\u9FA5]{2,4}$/);

//失去焦点之后，调用有名字的方法
user.onblur=function(){
	checkedUser();
};
function  checkedUser(){
  var strUser =user.value;
  if(strUser==null || strUser.trim().length==0){
       // 请输入电话号码
       user.style.border="1px solid red";
       umsg.innerHTML="请输入用户名";
       return false;
     }else{
       if(!reg_user.test(strUser)){
    	  	// 输入符合规范的电话号码
          user.style.border="1px solid red";
          umsg.innerHTML="输入符合规范的用户名";
          return false;
        }else{
          user.style.border="1px solid black";
          umsg.innerHTML="";
          return  true;
        }

      }
    }

//验证密码
var ipwd=document.getElementById("password");
var ppmsg=document.getElementsByClassName("message")[2];
var reg_pwd=new RegExp("^[0-9A-Za-z_]{6,20}$");

//失去焦点时，调用
ipwd.onblur=function(){
  checkedPWd();	
}
function checkedPWd(){
  var strPwd=ipwd.value;
  if(strPwd==null || strPwd.trim().length==0){
    ipwd.style.border="1px solid red";
    ppmsg.innerHTML="密码不能为空";
    return false;
  }else{
    if(!reg_pwd.test(strPwd)){
     ipwd.style.border="1px solid red";
     ppmsg.style.display="block";
     ppmsg.innerHTML="输入6-20位的密码";
     return false;
   }else{
     ipwd.style.border="1px solid black";
     ppmsg.innerHTML="";
     return true;
   }



 }
}

//验证确认密码
//验证密码
var ipwd1=document.getElementById("passworded");
var ppmsg1=document.getElementsByClassName("message")[3];
var reg_pwd1=document.getElementById("password");

//失去焦点时，调用
ipwd1.onblur=function(){
  checkedPWd1();
}
function checkedPWd1(){
  var strPwd1=ipwd1.value;
  var strPwd2=reg_pwd1.value;
  if(strPwd1==null || strPwd1.trim().length==0){
    ipwd1.style.border="1px solid red";
    ppmsg1.innerHTML="确认密码不能为空";
    return false;
  }else{
    if(strPwd2!=strPwd1){
     ipwd1.style.border="1px solid red";
     ppmsg1.style.display="block";
     ppmsg1.innerHTML="密码不一致";
     return false;
   }else{
     ipwd1.style.border="1px solid black";
     ppmsg1.innerHTML="";
     return true;
   }
 }
}


//本地存储
function checkAll(){
	if(checkedPhone() & checkedPWd() ){
		// 将符合规范的电话和密码存起来
            //
            var phone= iphone.value;
            var pwd=ipwd.value;
            localStorage.setItem(phone,pwd);
            location.href="login.html";
            return false;		
          }
          return false;	
        }
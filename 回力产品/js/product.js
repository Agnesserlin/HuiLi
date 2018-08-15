var shoe1={
	name:"WB-7T型篮球鞋",
	type:"篮球鞋",
	size:"35-44码",
	img:["image/WB-7T06_1.png"]
}
var shoe2={
	name:"WD-S003C型慢跑鞋",
	type:"田径鞋",
	size:"11",
	img:["image/WD-2A01.jpg"]
}
var shoe3={
	name:"WF-S001S型足球鞋",
	type:"足球鞋",
	size:"38码-45码",
	img:["image/WF-S001S01.jpg"]
}
var shoe4={
	name:"WL-0003T型运动鞋",
	type:"运动鞋",
	size:"38码-45码",
	img:["image/WL-0003T01.jpg","image/WL-0003T02.jpg","image/WL-0003T03.jpg"]
}
var shoe5={
	name:"WL-0005T型运动鞋",
	type:"运动鞋 ",
	size:"35码-43码",
	img:["image/WL-0005TA01.jpg"]
}
var shoe6={
	name:"WX-115A型休闲鞋",
	type:"休闲运动鞋",
	size:"34码-39码",
	img:["image/WX-115A0101.jpg"]
}
var shoe7={
	name:"WXY-872T型休闲运动鞋",
	type:"休闲运动鞋",
	size:"34码-39码",
	img:["image/WXY-872T01.jpg"]
}
var shoe8={
	name:"WXY-873T型休闲运动鞋",
	type:"休闲运动鞋",
	size:"34码-39码",
	img:["image/WXY-873T01.jpg","image/apc.png"]
}
var shoes=[shoe1,shoe2,shoe3,shoe4,shoe5,shoe6,shoe7,shoe8];

function loadList(){
	for(var i in shoes){
		var listItem=$("#listItem").html();
		listItem=listItem.replace(new RegExp("{index}","g"),i);
		listItem=listItem.replace(new RegExp("{src}","g"),shoes[i].img[0]);
		listItem=listItem.replace(new RegExp("{name}","g"),shoes[i].name);
		listItem=listItem.replace(new RegExp("{type}","g"),shoes[i].type);
		//在每个list元素后加结尾
		$('#list').append(listItem);
		
		$('#item'+i).click(function(){
			var index=($(this).attr("id")).replace(new RegExp("item","g"),"");
			var shoe=shoes[index];
			var link="show.html?"+"_name="+shoe.name+"&type="+shoe.type+"&size="+shoe.size;
			link+="&img=";
			for(var A=0;A<shoe.img.length;++A)
			{
				link+=shoe.img[A];
				if(A+1!=shoe.img.length) link+="~";
			}			
			window.location.href=link;
		});
	}
}

loadList();
/*function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	technicalskills(d.skills);
	careerdevelopment(d.carrier);
	achieve(d.achievements);
	description(d.descriptiond);
})*/
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(CSE){
var i=document.createElement("img");
i.src=CSE.image;
i.alt=("profile photo");
l.appendChild(i);
var nam=document.createElement("h3");
nam.textContent=CSE.name;
l.appendChild(nam);
var pno=document.createElement("h2");
pno.textContent=CSE.phone;
l.appendChild(pno);
var mail=document.createElement("h3");
mail.textContent=CSE.email;
l.appendChild(mail);
var add=document.createElement("h3");
add.textContent=CSE.address;
l.append(add);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="Educational Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for(var i=0;i<e.length;i++){
		var h=document.createElement("h2");
		h.textContent=e[i].course;
		e1.appendChild(h);
		var u=document.createElement("ul");
		e1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=e[i].college;
		u.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=e[i].percentage;
		list.appendChild(list1);
	}
}
function technicalskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0;i<s.length;i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function careerdevelopment(c){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrierdevelopment";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=c.ca;
	c1.appendChild(para);
}
function achieve(a){
	var a1=document.createElement("div");
	r.appendChild(a1);
	var h2=document.createElement("h2");
	h2.textContent="achievements";
	a1.appendChild(h2);
	h2.appendChild(document.createElement("HR"));
	for(i in a){
		var u=document.createElement("ul");
		a1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=a[i];
		u.appendChild(list);
	}
}
	function description(de){
		var d1=document.createElement("div");
		r.appendChild(d1);
		var desp=document.createElement("h2");
		desp.textContent="description";
		d1.appendChild(desp);
		desp.appendChild(document.createElement("HR"));
		var para=document.createElement("h3");
		para.textContent=de.des;
		d1.appendChild(para);
	}
//fetch API
	fetch("data.json")
	.then(function(response){
		return response.json();
	})
	.then(function(d){
		console.log(d);
		edu(d.education);
		basics(d.basicdetails);
	technicalskills(d.skills);
	careerdevelopment(d.carrier);
	achieve(d.achievements);
	description(d.descriptiond);
})



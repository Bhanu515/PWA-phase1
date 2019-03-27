function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
  if(xhr.readyState === 4 && xhr.status=="200")
  {
    callback(xhr.responseText);
  }

}
  xhr.send();
}

loadJson("dynamic.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);

career(data.career);

education(data.education);
skills(data.skills);
})

var child1=document.querySelector(".child1");
function profile(p)
{
  var image=document.createElement("img");
  image.src=p.image;
  child1.append(image);

  var h2=document.createElement("h2");
h2.textContent=p.name;
child1.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.designation;
child1.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.mobile;
child1.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.email;
child1.append(h5);
}



var child2=document.querySelector(".child2");
function career(p1)
{
  var h1=document.createElement("h1");
h1.textContent="Career Objective";
child2.append(h1);


var hr=document.createElement("hr");
child2.append(hr);

var pe=document.createElement("pe");
pe.textContent=p1.info;//wfkhkjkjhbhc  ytgjwgkk
child2.append(pe);
}


function education(edu)
{
  var h1=document.createElement("h1");
h1.textContent="Education Details";
child2.append(h1);


var hr=document.createElement("hr");
child2.append(hr);
var table=document.createElement("table");

var tr1="<tr><th>institution</th><th>qualification</th><th>department</th><th>percentge</th></tr>";
var tr2=" ";
for(i=0;i<edu.length;i++)
{
tr2=tr2+"<tr><td>"+edu[i].institute+"</td><td>"+edu[i].qualification+"</td><td>"+edu[i].department+"</td><td>"+edu[i].percentage+"</td></tr>";
}
table.innerHTML=tr1+tr2;

child2.append(table);
}

function skills(sk)
{
  var r=document.createElement("h2");
  r.textContent="skills";
  child2.append(r);
  var ol=document.createElement("ol");
  for(var i in sk){
    var li=document.createElement("li");
    li.innerHTML=sk[i].name+":"+sk[i].info;
    ol.append(li);
  }
  child2.append(ol);
}

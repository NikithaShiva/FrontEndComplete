/**
 * Created by kalpriya on 6/9/2016.
 */
var personss="";
function sendRequest(){
    var XHR = getXHR()
    if(XHR){
        XHR.open("GET","data/data.json",true);
        XHR.onreadystatechange = function(){handleResponse(XHR);}
        XHR.send();
    }
}

function getXHR(){
    return new XMLHttpRequest();
}

function handleResponse(XHR){
   // console.log("data received... ",XHR.state);
    if(XHR.readyState==4){
       // console.log("data received... ",XHR.responseText);
       personss = JSON.parse(XHR.responseText);
        persons = personss.sort(function(a, b){
            var nameA=a.lastname.toLowerCase(), nameB=b.lastname.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        for(var i=0;i<persons.length;i++){
            var p = persons[i];
            element = document.createElement("input");
            element.type = 'button';
            element.id='b'+i;
            element.value =persons[i].lastname+" "+persons[i].firstname ;

            var foo = document.getElementById("buttons");
            //Append the element in page (in span).
            foo.appendChild(element);
        }
        for(var j=0;j<persons.length;j++){
            element1 = document.getElementById('b'+j);
            element1.onclick = function() { // Note this is a function
                 updateForm(this)
            };
        }

    }
}

function updateForm(pp){
    console.log(pp);
    var i =pp.id.charAt(1)

    document.getElementById('fname').value=persons[i].firstname;
    document.getElementById('lname').value=persons[i].lastname;
    document.getElementById('state').value=persons[i].state;
    document.getElementById('city').value=persons[i].city;
}
 function  updatePersonsArray() {

     var fname=document.getElementById('fname').value;
     var lname=document.getElementById('lname').value;
     var state=document.getElementById('state').value;
     var city=document.getElementById('city').value;

     console.log(persons);
     console.log(fname+"  "+lname+" ");

     for(var i=0;i<persons.length;i++){
        if(fname == persons[i].firstname || lname ==persons[i].lastname){
            persons[i].firstname=fname;
            persons[i].lastname=lname;
            persons[i].state=state;
            persons[i].city=city;
        }
     }
     var elem = document.getElementById("buttons");
     elem.remove();
     var div = document.getElementById("buttonsRefresh");
     var divElement = document.createElement("divElement");
     divElement.id='buttons';
     div.appendChild(divElement);
     persons = personss.sort(function(a, b){
         var nameA=a.lastname.toLowerCase(), nameB=b.lastname.toLowerCase()
         if (nameA < nameB) //sort string ascending
             return -1
         if (nameA > nameB)
             return 1
         return 0
     });
     for(var i=0;i<persons.length;i++){
         var p = persons[i];
         element = document.createElement("input");
         element.type = 'button';
         element.id='b'+i;
         element.value =persons[i].lastname+" "+persons[i].firstname ;

         var foo = document.getElementById("buttons");
         //Append the element in page (in span).
         foo.appendChild(element);
     }
     for(var j=0;j<persons.length;j++){
         element1 = document.getElementById('b'+j);
         element1.onclick = function() { // Note this is a function
             updateForm(this)
         };
     }
 }
var w=$(".is-searchResults").html()
var s=w
var b=
[
    {type:"Dog",name:"killi",type2:"male",age:"27 years old",location:"Denfer",img:"OIP.jpeg"},
    {type:"Cat",name:"Mini",type2:"male",age:"39 years old",location:"Texas",img:"OIP2.jpeg"},
    {type:"Duck",name:"kwili",type2:"male",age:"43 years old",location:"Los anglues",img:"OIP3.jpeg"},
    {type:"Dog",name:"Mustem",type2:"male",age:"32 years old",location:"Makkah",img:"OIP4.jpeg"},
    {type:"Cat",name:"killi",type2:"male",age:"62 years old",location:"Kwait",img:"OIP5.jpeg"},
    {type:"Dog",name:"killi",type2:"male",age:"67 years old",location:"Madinah",img:"OIP6.jpeg"}
]

$(".is-primary").click(function() {
    for(let i=0; i<b.length; i++) {
        Object.keys(b[i]).forEach(x => {
            for(let q=0; q<$("#text").val().toLowerCase().split(" ").length; q++) {
                if(x=="location"&b[i][x].toLowerCase().includes($("#text").val().toLowerCase().split(" ")[q])) {
                    s+=`<div class="widget"><div class="widget__image"><img src="images/${b[i].img}" alt="pet image"></div><div class="widget__desc"><h4>${b[i].name}</h4><p>${b[i].type2} | Young</p><p>${b[i].location}</p></div></div>`
                }
            }
        });
    }
    if(s!=w&$("#text").val()!=""&$("#text").val()!=" ") {
    $(".is-searchResults").html(s)
    } else {
        $(".is-searchResults").html("There are no results")
    }
    s=w

});

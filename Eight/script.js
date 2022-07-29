var mrf = new XMLHttpRequest();
mrf.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
mrf.send();
mrf.onload = function(){
    var n = JSON.parse(mrf.response);
    console.log(n); //normal print
    var a = n.filter((e) => e.region === 'Asia').map((e) => e.name);
    console.log(a.join(',')); // all countries in asian region using filter function
    var b = n.filter((e) => e.population<200000).map((e) => e.name);
    console.log(b.join(",")); // all countries in population less than 2lakhs using filter function 
    n.forEach(element => {
        console.log(`country name : ${element.name}, capital : ${element.capital}, flag : ${element.flag}`);    
    }); // using for each function displayed name, capital and flag of the countiries
    var d = n.map((e) => e.population).reduce(function(u,v){
        return u+v;
    });
    console.log(d); //total population of countires using reduce function*/
    var e = n.filter((e) => e.currencies[0].code === 'USD').map((e) => e.name);
    console.log(e.join(","));
}

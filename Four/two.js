//using rest countries API URL https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json
//displaying all the country flag in the console
var flag = new XMLHttpRequest();
flag.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
flag.send();
flag.onload = function(){
    let n= JSON.parse(flag.response);
    for(let i=0;i<n.length;i++)
    {
        console.log(n[i].flag);
    }
}

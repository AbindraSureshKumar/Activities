//using same restcountries API URL printing all countries name region subregion and population
var nrsrp = new XMLHttpRequest();
nrsrp.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
nrsrp.send();
nrsrp.onload=function(){
    let n = JSON.parse(nrsrp.response);
    for(let i=0;i<n.length;i++)
    {
        console.log(`name:${n[i].name}, region:${n[i].region}, sub-region:${n[i].subregion}, population:${n[i].population}`);
    }
}

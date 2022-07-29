class Movie
{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(rating === undefined)
        this.rating="PG";
    }
    getdetails()
    {
        console.log(`title name:${this.title}
studio name : ${this.studio}
ratings : ${this.rating}
`);
    }
    getPG(arr)
    {
        var res=[];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].rating === 'PG')
            res.push(arr[i]);
        }   
        return res;
    }
}
var film1 = new Movie("Mahamuni","Sony","PG13");
var film2 = new Movie("Mozhi","Reliance");
var film3 = new Movie("Charlie","Big Picture","R");
var film4 = new Movie("Kadaisi Vivasayi","VJP");
var film5 = new Movie("Casino Royale","Eon Productions","PG13");
film1.getdetails();
film2.getdetails();
film3.getdetails();
film4.getdetails();
film5.getdetails();
let arr=[film1,film2,film3,film4];
console.log(film1.getPG(arr));

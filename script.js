// let p;
// let a=6;
// let b=5;
// let c=3;
// p=Math.min(a,b,c);
// console.log(p)
// const letter='salom DD<DDMSD dunyo';
// console.log(letter.toLowerCase())

// let firstName=prompt('Yoshingiz nechada',"");
// console.log(firstName)
//
// console.log(`salom dunyo'' ${firstName}`)

// let x=0;
// while (x<20){
//     console.log(x)
//     x++;
// }
// let x=0;
// do {
//     console.log(x);
//     x++;
// }
// while (x<=30){
// }


const numberOfNews=prompt('Siz qancha yangilik ko`rdingiz?','');
const personalNewsDB = {
    count:numberOfNews,
    news:{},
    actors:{},
    genres:[],
    privat:false,}
for (let i = 0; i < 2; i++) {
    const a = prompt('Oxirgi ko`rgan yangiliklarizdan biri?',''),
        b = +prompt('unga qancha baho bergan bo`lardiz')
     if (a !=null && b!=null && a !=''&& b !=''&& a.length<50 ){
         personalNewsDB.news[a]=b;
         console.log("Tayyor")
     }
else {
         console.log("Eror")
         i--
     }
}
if(personalNewsDB.count<10){
    console.log('Siz juda kam yangilik o`qibsiz')
}
else if(personalNewsDB.count>=10 && personalNewsDB.count <30){
    console.log('Siz o`rtacha yangilik o`qibsiz')
}
else if(personalNewsDB.count >=30){
    console.log("Siz yangiliklar ishqibosiziz")
}
else {
    console.log("Error")
}

console.log(personalNewsDB)

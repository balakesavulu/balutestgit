const circle={
    diameter : 10,draw (){
        console.log('draw a circle')
    }
}
// //for-in
// for(let key in circle)
// console.log(key,circle[key]);
// console.log('--------');
// //for of
// for(let key of Object.keys(circle))
// console.log(key);
// console.log('------')
// for(let entry of Object.entries(circle))
// console.log(entry);
// in operator
if( 'draw' in circle)
console.log('true')
else
console.log('error')

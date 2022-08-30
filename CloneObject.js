const circle={
    radius : 1, draw (){
        console.log('source circle')
    }
}
// const circle2={};
// console.log(circle2);
// // for-in
// for(let key in circle)

//     circle2[key]=circle[key];
//     console.log(circle2);
    // // Object.assign
    // const circle3=Object.assign({},circle);
    // console.log(circle3);
    // const circle4=Object.assign({diameter : 4.5,},circle);
    // console.log(circle4);
    // spread ... operator
    const circle5={...circle};
    console.log(circle5);


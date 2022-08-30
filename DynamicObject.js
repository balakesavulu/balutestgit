const xeroxshop={
minimumprice : 15,
print(){
   console.log('print required data') 
}
};
console.log(xeroxshop);
console.log(xeroxshop.print());
xeroxshop.hourprice=30;
console.log(xeroxshop);
xeroxshop.verify=function(){};
console.log(xeroxshop);
delete xeroxshop.verify;
console.log(xeroxshop);
delete xeroxshop.hourprice;
console.log(xeroxshop);

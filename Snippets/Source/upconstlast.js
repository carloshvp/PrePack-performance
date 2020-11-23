var iterations = 10000000;

console.time('Original');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var b, z, x = 5, a = 9;  
	if (z>2 && z<0){ 	b = 5 - a;	     }
 	else if (x>=5) { 	a = 2; 	         }
 	else           {  a = a+2; b = b-1;}
 	a = a - 6;
  // CODE UNDER TEST END
};
console.timeEnd('Original')

console.time('PrePack');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var b, z, x, a;
  (function () {
    var _$0 = this;
  
    _$0.x = 5;
    _$0.a = 9;
    _$0.a = 2;
    _$0.a = -4;
  }).call(this);
  // CODE UNDER TEST END
};
console.timeEnd('PrePack')

console.time('SPEjs');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var b,
z,
x = 5,
a = 9;
a = 2;
a = -4;
  // CODE UNDER TEST END
};
console.timeEnd('SPEjs')
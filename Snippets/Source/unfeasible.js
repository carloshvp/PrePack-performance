var iterations = 10000000;
console.time('Original');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var a, x;
	if (x<0 && x>2) 		a = 2;
 	else					      a = 5;
  // CODE UNDER TEST END
};
console.timeEnd('Original')


console.time('PrePack');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var a, x;
  (function () {
    var _$0 = this;
  
    _$0.a = 5;
  }).call(this);
  // CODE UNDER TEST END
};
console.timeEnd('PrePack')


console.time('SPEjs');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var a, x;
  a = 5;
  // CODE UNDER TEST END
};
console.timeEnd('SPEjs')
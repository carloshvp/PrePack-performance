var iterations = 10000000;
console.time('Original');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var x, b;
  var a = 3;
b = a+1;
if (x < 0){
a = 2;
}
b = a+1;
  // CODE UNDER TEST END
};
console.timeEnd('Original')


console.time('PrePack');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var a, x, b;
  (function () {
    var _$0 = this;
  
    _$0.a = 3;
    _$0.b = 4;
  }).call(this);
  // CODE UNDER TEST END
};
console.timeEnd('PrePack')


console.time('SPEjs');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var x, b;
  var a = 3;
  b = 4;
  if (x < 0) {
        a = 2;
  }
  b = 4;
  // CODE UNDER TEST END
};
console.timeEnd('SPEjs')
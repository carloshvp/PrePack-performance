var iterations = 10000000;
console.time('Original');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var r, s, z, y = 3;
  y = y * 5;
  q = y - 3;
  if (z < q * y && z > 5*16){ r = true;}
  if (q < 0 || y >0){	s = false;}
  // CODE UNDER TEST END
};
console.timeEnd('Original')


console.time('PrePack');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var r, s, z, y;
  (function () {
    var _$0 = this;
  
    _$0.y = 3;
    _$0.y = 15;
    _$0.q = 12;
    _$0.s = false;
  }).call(this);
  // CODE UNDER TEST END
};
console.timeEnd('PrePack')


console.time('SPEjs');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var r,
  s,
  z,
  y = 3;
y = 15;
q = 12;
if (z < 180 && z > 80) {
r = true;
}
s = false;
  // CODE UNDER TEST END
};
console.timeEnd('SPEjs')
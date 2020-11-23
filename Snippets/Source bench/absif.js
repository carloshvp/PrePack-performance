var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite.add('Original', function(){
  var res, z, y = 3, q = 2;
  y = y * 5;
  q = y - 3;
  if (z < q * y && z > 5*16){
    res = true;
  }
  if (q < 0 || y >0){
    res = false;
  }
})
.add('Prepack', function(){
  var res, z, y, q;
  (function () {
    var _$0 = this;
  
    _$0.y = 3;
    _$0.q = 2;
    _$0.y = 15;
    _$0.q = 12;
    _$0.res = false;
  }).call(this);
})
.add('SPEjs', function() {
  var res,
    z,
    y = 3,
    q = 2;
y = 15;
q = 12;
if (z < 180 && z > 80) {
	res = true;
}

res = false;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
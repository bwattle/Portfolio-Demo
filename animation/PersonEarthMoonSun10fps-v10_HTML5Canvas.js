(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#EAF979"],[0.38,0.576],-25.5,0,25.5,0).s().p("AizC0QhLhKAAhqQAAhoBLhLQBKhLBpAAQBqAABKBLQBLBLAABoQAABqhLBKQhKBLhqAAQhpAAhKhLg");
	this.shape.setTransform(104.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#DBF867"],[0.341,1],-25.5,0,25.5,0).s().p("AizC0QhLhKAAhqQAAhoBLhLQBKhLBpAAQBqAABKBLQBLBLAABoQAABqhLBKQhKBLhqAAQhpAAhKhLg");
	this.shape.setTransform(104.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#400A02","#CFC9FE"],[0.373,0.569],-7,0,7,0).s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAVQgUAUgdAAQgcAAgVgUg");
	this.shape.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Moon, new cjs.Rectangle(0,0,14,14), null);


(lib.Man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAMgIIgXAR");
	this.shape.setTransform(5.325,8.65,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAMgIIgXAR");
	this.shape_1.setTransform(2.725,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAUgWIgnAt");
	this.shape_2.setTransform(5.875,15.1,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAUgWIgnAt");
	this.shape_3.setTransform(1.975,15.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAAgoIAABR");
	this.shape_4.setTransform(3.95,8.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAQAQQgHAHgJAAQgIAAgIgHQgGgHAAgJQAAgJAGgHQAIgGAIAAQAJAAAHAGQAHAHAAAJQAAAJgHAHg");
	this.shape_5.setTransform(4.15,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgQAQQgGgGAAgKQAAgIAGgHQAIgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgIgHg");
	this.shape_6.setTransform(4.15,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Man, new cjs.Rectangle(-1,-1,9.9,19.4), null);


(lib.Moon365 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Moon();
	this.instance.setTransform(4.3,-30.7,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},3649).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-37.8,14.3,14.299999999999997);


(lib.ManRotate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Man();
	this.instance.setTransform(-2.7,-90.7,1,1,0,0,0,3.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-101.2,20.9,20.700000000000003);


(lib.Earth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.setTransform(25.5,25.5,1,1,0,0,0,104.5,89.5);

	this.instance_1 = new lib.Symbol15("synched",0);
	this.instance_1.setTransform(25.5,25.5,1,1,0,0,0,104.5,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3649).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},3649).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,51.400000000000006,51.400000000000006);


(lib.EarthRotate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Man
	this.instance = new lib.ManRotate();
	this.instance.setTransform(-7.2,-39.15,1,1,0,0,0,-2.7,-90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-7.1,-39,-6.4,-39.1,-5.7,-39.1,4.8,-39.1,12.3,-31.6,19.8,-24.1,19.8,-13.7,19.8,-3.1,12.3,4.3,4.8,11.8,-5.7,11.8,-16.2,11.8,-23.7,4.3,-31.1,-3.1,-31.1,-13.7,-31.1,-24.1,-23.7,-31.6,-19.3,-36,-14,-37.8]}},9).wait(1));

	// Earth
	this.instance_1 = new lib.Earth();
	this.instance_1.setTransform(-5.7,-13.7,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-48.3,59.7,69.6);


(lib.EM28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Moon
	this.instance = new lib.Moon365();
	this.instance.setTransform(-93,5.95,1,1,0,0,0,4.3,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-92.9,6.1,-92.6,-31.8,-65.7,-58.7,-38.5,-85.9,-0.2,-85.9,38.2,-85.9,65.4,-58.7,92.6,-31.5,92.6,6.8,92.6,45.2,65.4,72.4,38.1,99.6,-0.3,99.6,-38.6,99.6,-65.7,72.4,-91.1,46.9,-92.7,11.7,-92.7,9.1,-92.8,8.7,-92.8,8.3,-92.8,7.9]}},279).wait(1));

	// Earth
	this.instance_1 = new lib.EarthRotate();
	this.instance_1.setTransform(-0.7,0.05,1,1,0,0,0,-5.7,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(280));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-93,199.5,199.5);


// stage content:
(lib.PersonEarthMoonSun10fpsv10_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(612.925,603.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgZA3QgKgEgHgDIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgIQAAgHgEgEQgDgDgLgCIgJgCIgMgDQgOgEgGgGQgGgHAAgLQAAgHADgFQADgHAFgFQAGgEAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgFgKgDQgKgDgJgBQgJABgHADQgHAEAAAIQAAAGAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgCg");
	this.shape_1.setTransform(604.225,599.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_2.setTransform(593.025,601.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgIAAgJACIgSAFIgBAAIAAgSIAQgEQAKgBAKAAQALAAAIABQAJACAFAFQAHAEADAIQADAHAAAKIAABJIgSAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgHADgFAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_3.setTransform(580.75,599.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgkA+QgLgPAAgaQAAgOAEgKQAEgLAGgIQAIgHAIgDQAJgFAIAAQAJAAAHACQAGACAHAEIAAgvIATAAIAACXIgTAAIAAgMQgHAHgJAEQgJADgIAAQgUABgMgQgAgTgJQgJAJAAAVQAAATAHAKQAGAKAPAAQAGAAAJgDQAIgEAGgFIAAg+QgHgEgGgBQgFgBgHAAQgPAAgIALg");
	this.shape_4.setTransform(568.5,597.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgcBIQgLgDgHgDIAAgVIABAAQAIAFALAEQAKADALAAQAGAAAGgCQAHgCAFgEQAEgFACgFQACgGAAgIQAAgIgCgFQgDgFgEgDQgFgEgIAAQgGgCgJAAIgQABIgOACIAAhKIBWAAIAAARIhDAAIAAAnIAIgBIAIAAQALAAAJACQAIACAIAFQAIAFAEAIQAEAIAAANQAAAKgDAJQgEAKgHAGQgHAHgJAEQgKADgMAAQgMAAgLgCg");
	this.shape_5.setTransform(549.475,597.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_6.setTransform(536.675,597.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_7.setTransform(526.525,603.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgcBIQgLgDgHgDIAAgVIABAAQAIAFALAEQAKADALAAQAGAAAGgCQAHgCAFgEQAEgFACgFQACgGAAgIQAAgIgCgFQgDgFgEgDQgFgEgIAAQgGgCgJAAIgQABIgOACIAAhKIBWAAIAAARIhDAAIAAAnIAIgBIAIAAQALAAAJACQAIACAIAFQAIAFAEAIQAEAIAAANQAAAKgDAJQgEAKgHAGQgHAHgJAEQgKADgMAAQgMAAgLgCg");
	this.shape_8.setTransform(516.775,597.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgSBIQgIgDgHgGQgIgJgFgNQgFgOABgSQAAgTADgOQAFgQAJgLQAJgLANgHQAMgFATgBIAJABIAIACIAAATIgBAAIgIgEQgFgBgHAAQgTAAgNAOQgNAMgBAXQAIgFAIgCQAIgEAJAAQAJAAAIADQAGABAIAFQAIAGAFAIQAFAKgBANQAAAVgOAPQgPAOgVgBQgKAAgJgDgAgQgCQgHACgHADIgBAFIAAAFQAAAQADAIQAEAJAFAFQAEAFAGABQAFACAFAAQAPAAAHgIQAJgJgBgQQAAgJgCgGQgDgGgGgEQgEgCgGgCIgLgBQgHAAgIACg");
	this.shape_9.setTransform(504,597.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgcBJQgLgDgIgDIAAgVIACAAQAIAGALADQALAEALAAQAFAAAHgCQAHgCAEgEQAFgFACgFQACgFAAgIQAAgIgDgFQgCgFgEgDQgFgDgGgBQgGgBgHAAIgIAAIAAgPIAGAAQAOAAAJgGQAJgHAAgMQAAgFgCgEQgCgEgEgCIgJgEIgKgBQgKAAgKAEQgKADgKAGIgBAAIAAgVIATgGQALgDALAAQAKAAAIACQAIACAHAFQAHAEADAHQAEAGAAAJQAAAMgJAKQgIAJgMACIAAABIALAEQAGACAEADQAFAEADAGQADAHAAAKQAAAKgEAIQgDAIgHAGQgHAHgKAEQgKADgLAAQgMAAgMgDg");
	this.shape_10.setTransform(491.225,597.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_11.setTransform(471.875,601.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQALgIAHgEQAIgEAJABIAHAAIAGABIAAATIgBAAIgIgCIgJAAQgJAAgHADQgHAEgHAGIAABNg");
	this.shape_12.setTransform(462.6,599.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_13.setTransform(451.5,599.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgIA3IgshsIAUAAIAgBVIAihVIATAAIgsBsg");
	this.shape_14.setTransform(439.625,599.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AghArQgQgPAAgbQAAgaAPgQQAPgPAWAAQAXAAALANQAMAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAHACQAHACAIAAQALAAALgEQALgFAFgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_15.setTransform(427.8,599.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_16.setTransform(408.475,599);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgjAtQgJgKAAgUIAAhGIASAAIAAA9IABAPQAAAFACAFQAEADAEACQAEADAIAAQAGAAAIgEQAJgEAHgGIAAhQIATAAIAABsIgTAAIAAgMQgJAHgIAEQgJAEgJAAQgSAAgJgLg");
	this.shape_17.setTransform(395.75,599.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgeBIQgMgCgNgGIAAgYIACAAQAKAJAPAFQAOAFANAAQARAAAKgHQAKgHAAgLQAAgKgFgEQgEgFgKgCIgQgEIgRgDQgUgEgIgJQgKgKAAgQQAAgSAPgMQAQgLAXAAQAPAAANADQANADAJAEIAAAXIgBAAQgJgHgNgFQgNgFgOAAQgPAAgJAHQgKAGAAAKQAAAKAFAFQAEAFAMADIARADIATAEQARAEAIAIQAIAJAAAPQAAAJgDAIQgFAIgHAGQgHAGgLAEQgLADgNAAQgQAAgNgDg");
	this.shape_18.setTransform(382.7,597.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_19.setTransform(362.85,599.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_20.setTransform(350.575,597);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_21.setTransform(340.325,597.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgkA+QgLgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAJgDQAJgFAJAAQAIAAAGACQAHACAIAEIAAgvIASAAIAACXIgSAAIAAgMQgIAHgJAEQgIADgJAAQgUABgMgQgAgUgJQgIAJAAAVQAAATAGAKQAIAKAOAAQAHAAAHgDQAJgEAHgFIAAg+QgIgEgGgBQgGgBgGAAQgPAAgJALg");
	this.shape_22.setTransform(322.65,597.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_23.setTransform(310.525,599);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgjAtQgKgKAAgUIAAhGIASAAIAAA9IABAPQABAFADAFQACADAFACQAEADAIAAQAGAAAJgEQAIgEAHgGIAAhQIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgKAAQgQAAgKgLg");
	this.shape_24.setTransform(297.8,599.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPAAAIgKQAIgLAAgUQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_25.setTransform(285.425,599.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AghA3IAAhsIASAAIAAAPQALgIAIgEQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgIAGIAABNg");
	this.shape_26.setTransform(276,599.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQgBgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgDgDgGAAIgKgBQgHAAgJACIgSAFIgBAAIAAgSIAPgEQAKgBAKAAQALAAAIABQAIACAHAFQAGAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_27.setTransform(264.45,599.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKADAKAAQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgGADgHQADgFAFgGQAGgEAIgDQAJgCAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgEgKgEQgKgEgJABQgJgBgHAEQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_28.setTransform(568.125,572.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAOgPAYAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgHgIQgHgIgOAAQgPAAgIAIg");
	this.shape_29.setTransform(556.9,572.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AgIA3IgshtIAUAAIAgBWIAihWIATAAIgsBtg");
	this.shape_30.setTransform(545.025,572.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AgIBMIAAiXIARAAIAACXg");
	this.shape_31.setTransform(536.4,570.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAagNAQQgOAQgXAAQgWAAgOgQgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_32.setTransform(527.575,572.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AgIA3IgshtIAUAAIAgBWIAihWIATAAIgsBtg");
	this.shape_33.setTransform(515.625,572.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAOgPAYAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_34.setTransform(503.8,572.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AghA3IAAhtIATAAIAAAQQAKgIAIgEQAIgEAJAAIAGAAIAHACIAAATIgBAAIgIgCIgJgBQgIABgIAEQgHADgHAGIAABNg");
	this.shape_35.setTransform(494.45,572.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgUAgIARg/IAYAAIgbA/g");
	this.shape_36.setTransform(478.425,578.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgEgFgBQgFgCgHAAQgGAAgJADQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_37.setTransform(468.625,572.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAagNAQQgOAQgXAAQgWAAgOgQgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_38.setTransform(456.175,572.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAagNAQQgOAQgXAAQgWAAgOgQgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_39.setTransform(444.025,572.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AAtBJIAAh9IgoBVIgLAAIgohVIAAB9IgSAAIAAiRIAbAAIAlBQIAmhQIAbAAIAACRg");
	this.shape_40.setTransform(429.525,571.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKADAKAAQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgGADgHQADgFAFgGQAGgEAIgDQAJgCAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgEgKgEQgKgEgJABQgJgBgHAEQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_41.setTransform(408.975,572.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgGAcIgEg3IAVAAIgEA3g");
	this.shape_42.setTransform(400.975,565.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_43.setTransform(394.425,571.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgKg1IAAgTIAUAAIAAATg");
	this.shape_44.setTransform(387.7,570.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgEgFgBQgFgCgHAAQgGAAgJADQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_45.setTransform(371.625,570.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_46.setTransform(361.375,571.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgJg1IAAgTIATAAIAAATg");
	this.shape_47.setTransform(354.65,570.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AAcA3IgchUIgbBUIgRAAIgchtIATAAIATBUIAchUIAOAAIAcBUIAThUIASAAIgcBtg");
	this.shape_48.setTransform(343.75,572.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AgUAgIARg/IAYAAIgbA/g");
	this.shape_49.setTransform(324.725,578.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgEgFgBQgFgCgHAAQgGAAgJADQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_50.setTransform(314.925,570.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_51.setTransform(304.675,571.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0000FF").s().p("AghA3IAAhtIASAAIAAAQQALgIAIgEQAIgEAJAAIAHAAIAGACIAAATIgBAAIgIgCIgJgBQgJABgHAEQgHADgIAGIAABNg");
	this.shape_52.setTransform(297.3,572.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQAAgNAGgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgEgCQgEgDgGAAIgKgBQgIAAgIACIgSAFIgCAAIAAgSIAQgEQAKgBAKAAQAKAAAJABQAJACAFAFQAHAEADAIQAEAHAAAKIAABJIgTAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgIADgFAEQgEAFgBAIQABAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_53.setTransform(285.75,572.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgvBJIAAiRIBfAAIAAASIhLAAIAAAnIBLAAIAAARIhLAAIAAA2IBLAAIAAARg");
	this.shape_54.setTransform(274.2,571.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAPgPAXAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_55.setTransform(254.5,572.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgEgFgBQgFgCgHAAQgGAAgJADQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_56.setTransform(242.225,570.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB6AAIAAASIg0AAIAAB/g");
	this.shape_57.setTransform(229.7,571.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_58.setTransform(478.675,550.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("AgZA2QgKgDgHgDIAAgVIABAAQAJAHALAEQAKADAKABQALAAAHgFQAHgDAAgJQAAgGgEgEQgDgCgLgDIgJgCIgMgCQgOgEgGgHQgGgHAAgLQAAgGADgHQADgGAFgFQAGgEAIgDQAJgCAJAAQAKAAAKACQAKADAGADIAAATIgBAAQgHgEgKgEQgKgEgJABQgJgBgHAEQgHAEAAAHQAAAIAEADQAEADAJACIALACIAKADQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgDg");
	this.shape_59.setTransform(469.975,546.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AgdBLIAUguIgrhnIAUAAIAgBQIAihQIATAAIg/CVg");
	this.shape_60.setTransform(458.775,548.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQAAgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgEgCQgFgDgFAAIgKgBQgIAAgIACIgSAFIgBAAIAAgSIAPgEIAUgBQALAAAIABQAJACAFAFQAHAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgJADgFAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_61.setTransform(446.5,546.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AgkA+QgLgOAAgbQAAgOAEgKQAEgLAHgHQAGgIAJgEQAJgDAJAAQAIgBAGACQAIACAHAEIAAgwIASAAIAACXIgSAAIAAgLQgIAHgJADQgIAFgJAAQgUAAgMgQgAgUgJQgIAKAAATQAAAUAGAKQAIAKAOAAQAGAAAIgEQAJgDAHgGIAAg9QgHgDgHgBQgGgCgGAAQgPAAgJALg");
	this.shape_62.setTransform(434.25,544.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("AgcBJQgLgDgIgDIAAgVIACAAQAIAGALADQALAEALAAQAFAAAHgCQAHgCAEgEQAFgFACgFQACgFAAgIQAAgIgDgFQgCgFgEgDQgFgDgGgBQgGgBgHAAIgIAAIAAgPIAGAAQAOAAAJgGQAJgHAAgMQAAgFgCgEQgCgEgEgCIgJgEIgKgBQgKAAgKAEQgKADgKAGIgBAAIAAgVIATgGQALgDALAAQAKAAAIACQAIACAHAFQAHAEADAHQAEAGAAAJQAAAMgJAKQgIAJgMACIAAABIALAEQAGACAEADQAFAEADAGQADAHAAAKQAAAKgEAIQgDAIgHAGQgHAHgKAEQgKADgLAAQgMAAgMgDg");
	this.shape_63.setTransform(415.075,544.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_64.setTransform(404.975,550.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0000FF").s().p("AgkBJIBFiAIhSAAIAAgRIBjAAIAAAWIhBB7g");
	this.shape_65.setTransform(395.125,544.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_66.setTransform(382.425,544.575);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0000FF").s().p("AgdBLIAUguIgrhnIAUAAIAgBQIAihQIATAAIg/CVg");
	this.shape_67.setTransform(363.025,548.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAARQALgKAIgDQAIgDAJgBIAGAAIAHABIAAATIgBAAIgIgBIgJgBQgIAAgIAFQgHADgIAGIAABMg");
	this.shape_68.setTransform(353.75,546.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgLACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgPAAQgNAAgJAIg");
	this.shape_69.setTransform(342.65,546.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_70.setTransform(330.775,546.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AghArQgQgPABgbQAAgaAOgQQAOgPAYAAQAVAAANANQALAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAGAFAHACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgKACgLAAQgaAAgPgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_71.setTransform(318.95,546.525);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgiArQgPgPAAgbQAAgaAPgQQAPgPAWAAQAXAAAMANQALAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgJADQgLACgKAAQgaAAgQgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_72.setTransform(300,546.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AgLA1QgLgDgGgHQgIgHgDgLQgEgKAAgPQAAgaAPgPQAOgPAXAAQAKAAAIACQAKADAHAEIAAAUIgBAAQgIgGgJgEQgJgDgJAAQgOAAgJALQgJAKAAATQAAAUAIALQAKAKAOAAIAMgBIAKgEIAHgEIAGgFIABAAIAAAVIgRAGQgIADgKAAQgKAAgKgEg");
	this.shape_73.setTransform(289.05,546.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgCQgFgDgHAAQgGAAgJAEQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_74.setTransform(277.325,546.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgaANgPQAOgPAWAAQAXAAAOAPQANAPAAAaQAAAbgNAPQgOAQgXAAQgWAAgOgQgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_75.setTransform(264.875,546.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgEgFgCQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_76.setTransform(544.275,518.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_77.setTransform(534.025,518.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAARQALgKAIgDQAIgDAJgBIAGAAIAHABIAAATIgBAAIgIgBIgJgBQgIAAgIAEQgHAEgIAGIAABMg");
	this.shape_78.setTransform(526.65,520.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQgBgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgDgDgGAAIgKgBQgHAAgJACIgSAFIgBAAIAAgSIAPgEIAUgBQALAAAIABQAIACAHAFQAGAEADAIQADAHAAAKIAABJIgSAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_79.setTransform(515.1,520.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AgvBJIAAiRIBfAAIAAASIhMAAIAAAnIBMAAIAAARIhMAAIAAA2IBMAAIAAARg");
	this.shape_80.setTransform(503.55,518.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000FF").s().p("AgjA/QgMgPAAgbQAAgOAEgKQAEgLAGgIQAIgHAIgEQAJgDAJAAQAIAAAHABQAHACAGAEIAAgwIATAAIAACXIgTAAIAAgLQgHAHgJADQgJAEgJAAQgTAAgLgOgAgTgJQgJAKAAATQAAAUAGAKQAIAKAOAAQAHAAAHgEQAJgDAGgGIAAg9QgGgEgGAAQgGgCgIAAQgOAAgIALg");
	this.shape_81.setTransform(483.15,518.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgEgFgCQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_82.setTransform(471.025,520.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000FF").s().p("AgjAuQgJgLAAgVIAAhFIASAAIAAA9IABAPQAAAFACAEQAEAEAEADQAEACAIAAQAGgBAIgDQAJgEAHgFIAAhRIATAAIAABsIgTAAIAAgMQgJAHgIAEQgJAEgJAAQgSAAgJgKg");
	this.shape_83.setTransform(458.3,520.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_84.setTransform(445.925,520.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000FF").s().p("AghA2IAAhsIATAAIAAARQALgKAHgDQAIgDAJgBIAHAAIAGABIAAATIgBAAIgIgBIgJgBQgJAAgHAEQgHAEgHAGIAABMg");
	this.shape_85.setTransform(436.5,520.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgHADgFAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_86.setTransform(424.95,520.275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000FF").s().p("AgZA2QgKgDgHgDIAAgVIABAAQAJAHALAEQAKAEAKAAQALgBAHgEQAHgDAAgIQAAgHgEgDQgDgDgLgDIgJgCIgMgCQgOgFgGgGQgGgHAAgLQAAgHADgGQADgFAFgFQAGgFAIgDQAJgCAJAAQAKAAAKACQAKADAGADIAAAUIgBAAQgHgFgKgEQgKgEgJAAQgJAAgHAEQgHAEAAAHQAAAIAEADQAEADAJADIALABIAKADQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgDg");
	this.shape_87.setTransform(407.175,520.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0000FF").s().p("AgiArQgPgPAAgbQAAgaAPgQQAPgPAWAAQAWAAAMANQAMAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_88.setTransform(395.95,520.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_89.setTransform(384.075,520.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000FF").s().p("AgIBMIAAiXIARAAIAACXg");
	this.shape_90.setTransform(375.45,518.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_91.setTransform(366.625,520.25);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_92.setTransform(354.675,520.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0000FF").s().p("AgiArQgPgPAAgbQAAgaAPgQQAPgPAWAAQAWAAAMANQAMAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_93.setTransform(342.85,520.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAARQALgKAIgDQAIgDAJgBIAGAAIAHABIAAATIgBAAIgIgBIgJgBQgIAAgIAEQgHAEgIAGIAABMg");
	this.shape_94.setTransform(333.5,520.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgEgFgCQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_95.setTransform(314.975,520.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_96.setTransform(302.525,520.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_97.setTransform(290.375,520.25);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0000FF").s().p("AAtBJIAAh9IgoBVIgLAAIgohVIAAB9IgSAAIAAiRIAbAAIAlBQIAmhQIAbAAIAACRg");
	this.shape_98.setTransform(275.875,518.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAPgPAXAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_99.setTransform(254.5,520.225);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgEgFgCQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_100.setTransform(242.225,518.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB6AAIAAASIg0AAIAAB/g");
	this.shape_101.setTransform(229.7,518.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_102.setTransform(414.275,498);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKADAKAAQALAAAHgEQAHgDAAgIQAAgHgEgDQgDgDgLgDIgJgCIgMgDQgOgEgGgGQgGgHAAgLQAAgHADgFQADgHAFgEQAGgFAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAAUIgBAAQgHgGgKgDQgKgDgJgBQgJABgHADQgHAEAAAIQAAAGAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgCg");
	this.shape_103.setTransform(405.575,493.95);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAQQALgKAHgDQAIgEAJABIAHAAIAGABIAAATIgBAAIgIgCIgJAAQgJAAgHADQgHAEgHAGIAABNg");
	this.shape_104.setTransform(396.9,493.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0000FF").s().p("AgjAuQgKgLAAgVIAAhFIASAAIAAA9IABAPQABAFADAFQADADADADQAFACAIAAQAGgBAIgDQAJgEAHgGIAAhQIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgKAAQgRAAgJgKg");
	this.shape_105.setTransform(385.35,494.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgPAWgBQAXABAOAPQANAPAAAaQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIALAOgBQAPAAAIgKQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_106.setTransform(372.975,493.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgCQgFgBgHAAQgGAAgJADQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_107.setTransform(360.625,491.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0000FF").s().p("AAOBJIAAgpIhEAAIAAgXIBFhRIASAAIAABYIAWAAIAAAQIgWAAIAAApgAgoAQIA2AAIAAhAg");
	this.shape_108.setTransform(340.75,492.125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_109.setTransform(328.275,491.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_110.setTransform(308.875,495.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAQQAKgKAIgDQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_111.setTransform(299.6,493.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAWAAQAWAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_112.setTransform(288.5,493.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0000FF").s().p("AgIA3IgshsIAUAAIAgBVIAihVIATAAIgsBsg");
	this.shape_113.setTransform(276.625,493.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgLACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgPAAQgNAAgJAIg");
	this.shape_114.setTransform(264.8,493.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_115.setTransform(611.275,466.175);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_116.setTransform(600.975,465.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0000FF").s().p("AgTBLQgJgBgHgCIAAgTIABAAIANAFQAKACAKAAQAIAAAHgCQAGgCADgEQAEgEABgGQACgFgBgHIAAgKQgHAHgIADQgIAEgLAAQgTAAgLgOQgMgPAAgYQAAgOAEgLQAEgKAHgHQAGgHAJgEQAJgEAJAAQAJAAAGACQAHACAGAEIACgFIARAAIAABgQAAAcgMANQgNANgaAAQgIAAgIgCgAgTgxQgJAKAAATQAAATAGAIQAHAKAPAAQAHAAAIgDQAIgEAGgFIAAg6QgGgEgHgBQgGgBgHAAQgOAAgIAKg");
	this.shape_117.setTransform(588,469.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgJg1IAAgTIATAAIAAATg");
	this.shape_118.setTransform(579.45,465.775);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_119.setTransform(570.425,467.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0000FF").s().p("AgkA+QgLgPAAgaQAAgOAEgKQAEgLAGgHQAIgIAIgDQAJgFAIAAQAJABAHABQAGACAHAEIAAgvIATAAIAACXIgTAAIAAgMQgHAHgJAEQgJADgJAAQgTAAgMgPgAgTgJQgJAKAAAUQAAATAHAKQAGAKAPAAQAGAAAJgDQAIgEAGgFIAAg+QgHgEgFgBQgHgBgHAAQgOAAgIALg");
	this.shape_120.setTransform(550.4,465.65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_121.setTransform(538.275,467.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQgBgNAGgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgDgDgGAAIgKgBQgHAAgKACIgRAFIgBAAIAAgSIAPgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQADAHAAAKIAABJIgSAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQgBAKAHAFQAFAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_122.setTransform(525.55,467.675);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_123.setTransform(506.975,469.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgHADgFAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_124.setTransform(494.7,467.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0000FF").s().p("AgkA+QgLgPAAgaQAAgOAEgKQAEgLAGgHQAIgIAIgDQAJgFAIAAQAJABAHABQAGACAHAEIAAgvIATAAIAACXIgTAAIAAgMQgHAHgJAEQgJADgJAAQgTAAgMgPgAgTgJQgJAKAAAUQAAATAHAKQAGAKAPAAQAGAAAJgDQAIgEAGgFIAAg+QgHgEgFgBQgHgBgHAAQgOAAgIALg");
	this.shape_125.setTransform(482.45,465.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0000FF").s().p("AgZA3QgKgEgHgDIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgGADgGQADgGAFgGQAGgEAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgFgKgDQgKgDgJAAQgJAAgHADQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_126.setTransform(464.475,467.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQAAgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgEgCQgFgDgFAAIgKgBQgIAAgIACIgSAFIgBAAIAAgSIAPgEIAUgBQALAAAIABQAJACAFAFQAHAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgJADgFAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_127.setTransform(452.8,467.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_128.setTransform(440.875,465.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_129.setTransform(421.175,465.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_130.setTransform(410.925,466.175);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQAKgIAIgEQAIgDAJAAIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_131.setTransform(403.55,467.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQAAgNAFgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgFgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIAAAAIAAgSIAPgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgHAEIgHAFIgLAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgHABQgIADgEAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_132.setTransform(392,467.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgLACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgPAAQgOAAgIAIg");
	this.shape_133.setTransform(380.45,467.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_134.setTransform(361.125,467.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgQAWAAQAXAAAOAQQANAQAAAZQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_135.setTransform(348.675,467.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_136.setTransform(329.275,467.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgQAWAAQAXAAAOAQQANAQAAAZQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_137.setTransform(316.825,467.65);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0000FF").s().p("AgZA3QgKgEgHgDIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgGADgGQADgGAFgGQAGgEAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgFgKgDQgKgDgJAAQgJAAgHADQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_138.setTransform(305.675,467.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQALgIAHgEQAIgDAJAAIAHAAIAGABIAAATIgBAAIgIgCIgJAAQgJAAgHADQgHAEgHAGIAABNg");
	this.shape_139.setTransform(297,467.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_140.setTransform(285.9,467.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0000FF").s().p("AgvBMIAAiUIASAAIAAALQAIgGAJgEQAJgEAJAAQAUAAALAPQALAOAAAbQAAANgEALQgDAKgIAIQgGAHgIAEQgJAEgKAAQgIAAgGgCQgIgBgHgEIAAAtgAgNg2QgIADgIAGIAAA9IAOAEIAMACQAPAAAJgLQAIgKAAgUQAAgTgHgKQgHgJgNAAQgHgBgIAEg");
	this.shape_141.setTransform(274.05,469.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAPgPAXAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_142.setTransform(254.5,467.625);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_143.setTransform(242.225,465.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB6AAIAAASIg0AAIAAB/g");
	this.shape_144.setTransform(229.7,465.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3650));

	// Sun
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgDQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_145.setTransform(413.275,402.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0000FF").s().p("AgjAuQgKgLAAgVIAAhFIASAAIAAA9IABAOQABAGACAEQAEAEADADQAFABAIAAQAGAAAIgDQAJgEAHgFIAAhRIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgJAAQgSAAgJgKg");
	this.shape_146.setTransform(400.55,402.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0000FF").s().p("AgdBIQgNgCgNgGIAAgYIABAAQAMAJAOAFQAOAFANAAQARAAAKgHQAKgHAAgLQAAgKgEgEQgGgFgJgCIgQgEIgRgDQgUgEgJgJQgJgKAAgQQAAgSAQgMQAPgLAXAAQAPAAAMADQANADALAEIAAAXIgCAAQgJgHgNgFQgNgFgOAAQgPAAgKAHQgJAGAAAKQAAAKAFAFQAFAFAMADIAQADIAUAEQAQAEAIAIQAIAJAAAPQAAAJgDAIQgEAIgIAGQgHAGgLAEQgLADgNAAQgQAAgMgDg");
	this.shape_147.setTransform(387.5,400.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFF00").s().p("AlBFBQiFiFAAi8QAAi8CFiFQCFiFC8AAQC9AACECFQCGCFAAC8QAAC8iGCFQiECGi9AAQi8AAiFiGg");
	this.shape_148.setTransform(402.0078,400.9875,1.0989,1.0989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]}).wait(3650));

	// EM28
	this.instance = new lib.EM28();
	this.instance.setTransform(101.75,395.95,1,1,0,0,0,-37.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211.75,y:387.1},3649).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(439.4,751,194.60000000000002,-140.20000000000005);
// library properties:
lib.properties = {
	id: '748E77A8427ACC4E98EED4AF1B2DC07D',
	width: 800,
	height: 800,
	fps: 10,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['748E77A8427ACC4E98EED4AF1B2DC07D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
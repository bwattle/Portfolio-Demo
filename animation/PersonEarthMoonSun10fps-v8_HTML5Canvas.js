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
(lib.PersonEarthMoonSun10fpsv8_HTML5Canvas = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(692.925,586.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKADAKAAQALAAAHgEQAHgDAAgIQAAgHgEgDQgDgEgLgCIgJgCIgMgDQgOgEgGgGQgGgHAAgLQAAgHADgFQADgHAFgEQAGgFAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAAUIgBAAQgHgGgKgDQgKgEgJAAQgJAAgHAEQgHAEAAAIQAAAGAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgCg");
	this.shape_1.setTransform(684.225,582.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_2.setTransform(673.025,584.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgIADgEAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_3.setTransform(660.75,582.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgkA/QgLgQAAgaQAAgOAEgKQAEgLAGgIQAIgHAIgDQAJgEAIgBQAJAAAHACQAGACAHAEIAAgwIATAAIAACYIgTAAIAAgMQgHAHgJAEQgJADgJAAQgTAAgMgOgAgTgJQgJAJAAAVQAAATAHAKQAGAKAPAAQAGAAAJgDQAIgEAGgFIAAg+QgHgEgFgBQgHgBgHAAQgOAAgIALg");
	this.shape_4.setTransform(648.5,580.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgcBIQgLgDgHgDIAAgVIABAAQAIAFALAEQAKADALAAQAGAAAGgCQAHgCAFgEQAEgFACgFQACgGAAgIQAAgIgCgFQgDgFgEgDQgFgEgIAAQgGgCgJAAIgQABIgOACIAAhKIBWAAIAAARIhDAAIAAAnIAIgBIAIAAQALAAAJACQAIACAIAFQAIAFAEAIQAEAIAAANQAAAKgDAJQgEAKgHAGQgHAHgJAEQgKADgMAAQgMAAgLgCg");
	this.shape_5.setTransform(629.475,580.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_6.setTransform(616.675,580.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_7.setTransform(606.525,586.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgcBIQgLgDgHgDIAAgVIABAAQAIAFALAEQAKADALAAQAGAAAGgCQAHgCAFgEQAEgFACgFQACgGAAgIQAAgIgCgFQgDgFgEgDQgFgEgIAAQgGgCgJAAIgQABIgOACIAAhKIBWAAIAAARIhDAAIAAAnIAIgBIAIAAQALAAAJACQAIACAIAFQAIAFAEAIQAEAIAAANQAAAKgDAJQgEAKgHAGQgHAHgJAEQgKADgMAAQgMAAgLgCg");
	this.shape_8.setTransform(596.775,580.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgSBIQgIgDgHgGQgJgJgEgNQgFgOABgSQAAgTADgPQAEgPAKgLQAJgLANgHQAMgFATgBIAJABIAIACIAAATIgBAAIgIgEQgFgBgHAAQgTAAgNAOQgNANgBAWQAIgFAIgCQAHgDAKAAQAJAAAIACQAGABAIAFQAIAGAFAIQAEAKAAANQAAAVgOAPQgPAOgVgBQgKABgJgEgAgQgBQgHABgHADIgBAFIAAAFQAAAQADAIQADAJAGAGQAEAEAGABQAFACAFAAQAOABAIgJQAJgJAAgQQgBgJgCgGQgDgGgGgEQgFgDgFgBIgLgBQgHAAgIADg");
	this.shape_9.setTransform(584,580.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgcBJQgLgDgIgDIAAgVIACAAQAIAGALADQALAEALAAQAFAAAHgCQAHgCAEgEQAFgFACgFQACgFAAgIQAAgIgDgFQgCgFgEgDQgFgDgGgBQgGgBgHAAIgIAAIAAgPIAGAAQAOAAAJgGQAJgHAAgMQAAgFgCgEQgCgEgEgCIgJgEIgKgBQgKAAgKAEQgKADgKAGIgBAAIAAgVIATgGQALgDALAAQAKAAAIACQAIACAHAFQAHAEADAHQAEAGAAAJQAAAMgJAKQgIAJgMACIAAABIALAEQAGACAEADQAFAEADAGQADAHAAAKQAAAKgEAIQgDAIgHAGQgHAHgKAEQgKADgLAAQgMAAgMgDg");
	this.shape_10.setTransform(571.225,580.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_11.setTransform(551.875,584.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAQQAKgKAIgDQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_12.setTransform(542.6,582.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAWAAQAWAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_13.setTransform(531.5,582.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgIA3IgshsIAUAAIAgBVIAihVIATAAIgsBsg");
	this.shape_14.setTransform(519.625,582.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQALAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgLACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgPAAQgNAAgJAIg");
	this.shape_15.setTransform(507.8,582.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_16.setTransform(488.475,582);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgjAuQgKgLABgVIAAhFIASAAIAAA9IABAPQAAAFACAFQADADAFADQAEACAIAAQAGgBAJgDQAIgEAHgGIAAhQIATAAIAABsIgTAAIAAgMQgJAHgIAEQgJAEgJAAQgSAAgJgKg");
	this.shape_17.setTransform(475.75,582.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgeBIQgMgCgNgGIAAgYIACAAQAKAJAPAFQAOAFANAAQARAAAKgHQAKgHAAgLQAAgKgFgEQgEgFgKgCIgQgEIgRgDQgUgEgIgJQgKgKAAgQQAAgSAPgMQAQgLAXAAQAPAAANADQAMADAKAEIAAAXIgBAAQgJgHgNgFQgNgFgOAAQgPAAgJAHQgKAGAAAKQAAAKAFAFQAEAFAMADIARADIATAEQARAEAIAIQAIAJAAAPQAAAJgEAIQgEAIgHAGQgIAGgKAEQgKADgOAAQgQAAgNgDg");
	this.shape_18.setTransform(462.7,580.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAWAAQAWAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_19.setTransform(442.85,582.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_20.setTransform(430.575,580);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_21.setTransform(420.325,580.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgkA/QgLgQAAgaQAAgOAEgKQAEgLAHgIQAGgHAJgDQAJgEAIgBQAJAAAGACQAIACAHAEIAAgwIASAAIAACYIgSAAIAAgMQgIAHgJAEQgIADgJAAQgUAAgMgOgAgUgJQgIAJAAAVQAAATAHAKQAGAKAPAAQAGAAAJgDQAIgEAHgFIAAg+QgHgEgHgBQgGgBgGAAQgPAAgJALg");
	this.shape_22.setTransform(402.65,580.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgCQgFgBgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_23.setTransform(390.525,582);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgjAuQgKgLAAgVIAAhFIASAAIAAA9IABAPQABAFADAFQACADAEADQAFACAIAAQAGgBAJgDQAIgEAHgGIAAhQIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgKAAQgRAAgJgKg");
	this.shape_24.setTransform(377.8,582.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgPAWgBQAXABAOAPQANAPAAAaQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIALAOgBQAPAAAIgKQAIgLAAgUQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_25.setTransform(365.425,582.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AghA3IAAhsIASAAIAAAQQALgKAIgDQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgIAGIAABNg");
	this.shape_26.setTransform(356,582.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgjAwQgLgKABgPQgBgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgDgCQgEgDgGAAIgKgBQgIAAgIACIgSAFIgBAAIAAgSIAPgEIAUgBQALAAAIABQAJACAFAFQAHAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_27.setTransform(344.45,582.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AgZA3QgKgEgHgDIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgHADgFQADgGAFgGQAGgEAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgFgKgDQgKgDgJAAQgJAAgHADQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_28.setTransform(648.125,555.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAGAFQAEAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_29.setTransform(636.9,555.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AgIA3IgshsIAUAAIAgBVIAihVIATAAIgsBsg");
	this.shape_30.setTransform(625.025,555.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AgIBMIAAiXIARAAIAACXg");
	this.shape_31.setTransform(616.4,553.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgQAWAAQAXAAAOAQQANAQAAAZQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_32.setTransform(607.575,555.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AgIA3IgshsIAUAAIAgBVIAihVIATAAIgsBsg");
	this.shape_33.setTransform(595.625,555.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_34.setTransform(583.8,555.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQAKgIAIgEQAIgDAJAAIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_35.setTransform(574.45,555.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgUAgIARg/IAYAAIgbA/g");
	this.shape_36.setTransform(558.425,561.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_37.setTransform(548.625,555.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgQAWAAQAXAAAOAQQANAQAAAZQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_38.setTransform(536.175,555.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgQAWAAQAXAAAOAQQANAQAAAZQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPABAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_39.setTransform(524.025,555.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AAtBJIAAh9IgoBVIgLAAIgohVIAAB9IgSAAIAAiRIAbAAIAlBQIAmhQIAbAAIAACRg");
	this.shape_40.setTransform(509.525,554.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgZA3QgKgEgHgDIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgHADgFQADgGAFgGQAGgEAIgCQAJgDAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgFgKgDQgKgDgJAAQgJAAgHADQgHAEAAAIQAAAGAEAEQAEADAJACIALADIAKACQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgCg");
	this.shape_41.setTransform(488.975,555.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgGAcIgEg3IAVAAIgEA3g");
	this.shape_42.setTransform(480.975,548.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_43.setTransform(474.425,554.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgKg1IAAgTIAUAAIAAATg");
	this.shape_44.setTransform(467.7,553.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_45.setTransform(451.625,553.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_46.setTransform(441.375,554.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgJg1IAAgTIATAAIAAATg");
	this.shape_47.setTransform(434.65,553.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AAcA3IgchUIgbBUIgRAAIgchsIATAAIATBTIAchTIAOAAIAcBTIAThTIATAAIgdBsg");
	this.shape_48.setTransform(423.75,555.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AgUAgIARg/IAYAAIgbA/g");
	this.shape_49.setTransform(404.725,561.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_50.setTransform(394.925,553.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_51.setTransform(384.675,554.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQALgIAHgEQAIgDAJAAIAHAAIAGABIAAATIgBAAIgIgCIgJAAQgJAAgHADQgHAEgHAGIAABNg");
	this.shape_52.setTransform(377.3,555.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgEgCQgFgDgFAAIgKgBQgIAAgJACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAJACAFAFQAHAEADAIQAEAHAAAKIAABJIgTAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgHADgFAEQgGAFAAAIQABAKAGAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_53.setTransform(365.75,555.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgvBJIAAiRIBfAAIAAASIhLAAIAAAnIBLAAIAAARIhLAAIAAA2IBLAAIAAARg");
	this.shape_54.setTransform(354.2,554.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_55.setTransform(334.5,555.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAATIAABHg");
	this.shape_56.setTransform(322.225,553.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB5AAIAAASIgzAAIAAB/g");
	this.shape_57.setTransform(309.7,554.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_58.setTransform(538.675,533.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("AgZA2QgKgDgHgDIAAgVIABAAQAJAHALAEQAKADAKABQALgBAHgDQAHgEAAgJQAAgGgEgEQgDgDgLgCIgJgCIgMgDQgOgDgGgHQgGgHAAgLQAAgGADgHQADgGAFgFQAGgEAIgDQAJgCAJAAQAKAAAKACQAKACAGAEIAAATIgBAAQgHgEgKgEQgKgEgJABQgJgBgHAEQgHAEAAAHQAAAIAEADQAEADAJACIALACIAKADQANADAHAGQAHAHAAAMQAAAPgNAKQgMAJgUAAQgMAAgLgDg");
	this.shape_59.setTransform(529.975,529.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AgdBLIAUguIgrhnIAUAAIAgBQIAihQIATAAIg/CVg");
	this.shape_60.setTransform(518.775,531.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQABgNAFgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgIAAgJACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAJACAGAFQAGAEADAIQADAHAAAKIAABJIgSAAIAAgLIgGAEIgIAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgHADgFAEQgGAFAAAIQAAAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_61.setTransform(506.5,529.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AgkA+QgLgOAAgbQAAgOAEgKQAEgLAGgHQAIgIAIgEQAJgEAIAAQAJABAHABQAGACAHAEIAAgvIATAAIAACWIgTAAIAAgLQgHAHgJADQgJAFgIAAQgUgBgMgPgAgTgJQgJAJAAAUQAAAUAHAKQAGAKAPAAQAGAAAJgEQAIgDAGgGIAAg9QgHgDgGgCQgFgBgHAAQgPAAgIALg");
	this.shape_62.setTransform(494.25,527.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("AglA/QgNgLAAgTQAAgNAGgJQAIgKANgFIAAAAQgNgHgFgIQgFgHgBgLQAAgRAOgLQANgKAUAAQAWAAANAKQANAKAAARQAAAJgGAKQgHAJgLAGIAAABQAOAEAGAJQAIAIgBAOQAAATgOAMQgPANgWAAQgXAAgOgNgAgaANQgFAIAAAKQAAANAJAIQAJAKANgBQAPAAAIgHQAJgIAAgMQAAgJgFgFQgDgGgMgGIgKgDIgNgFQgJAEgGAJgAgTg3QgIAGAAAKQAAAHAEAFQAEAFAIAEIAKAFIANAEQAJgGAEgHQADgHAAgJQAAgKgHgHQgIgGgNAAQgMAAgHAGg");
	this.shape_63.setTransform(475,527.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_64.setTransform(462.425,527.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0000FF").s().p("AgdBLIAUguIgrhnIAUAAIAgBQIAihQIATAAIg/CVg");
	this.shape_65.setTransform(443.025,531.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAAQQALgJAIgDQAIgEAJAAIAHAAIAGABIAAAUIgBAAIgIgCIgJgBQgJAAgHAFQgHADgIAGIAABMg");
	this.shape_66.setTransform(433.75,529.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAYAAQAWAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAFAFQAGAFAHACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgKACgLAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_67.setTransform(422.65,529.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_68.setTransform(410.775,529.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0000FF").s().p("AgiArQgPgPABgbQAAgaAOgQQAOgPAYAAQAWAAALANQAMAMABAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQAAgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_69.setTransform(398.95,529.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgLACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgOAAQgOAAgJAIg");
	this.shape_70.setTransform(380,529.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgLA1QgLgDgGgHQgIgHgDgLQgEgLAAgOQAAgaAPgPQAOgPAXAAQAJAAAJACQAKADAHAEIAAAUIAAAAQgJgGgJgEQgJgDgJAAQgOAAgJALQgJAKAAATQAAAUAIALQAKAKAOAAIAMgBIAKgEIAHgEIAHgFIAAAAIAAAVIgRAGQgIADgKAAQgLAAgJgEg");
	this.shape_71.setTransform(369.05,529.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgCQgFgDgHAAQgGAAgJAEQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_72.setTransform(357.325,529.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAagNAQQgOAQgXAAQgWAAgOgQgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOABQAPAAAIgKQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_73.setTransform(344.875,529.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgDgFgDQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_74.setTransform(624.275,501.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_75.setTransform(614.025,501.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAARQALgKAIgDQAIgDAJgBIAGAAIAHABIAAATIgBAAIgIgBIgJgBQgIAAgIAFQgHADgIAGIAABMg");
	this.shape_76.setTransform(606.65,503.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("AgjAwQgLgKABgPQgBgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgDgCQgEgDgGAAIgKgBQgIAAgIACIgSAFIgBAAIAAgSIAPgEIAUgBQALAAAIABQAJACAFAFQAHAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_77.setTransform(595.1,503.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AgvBJIAAiRIBfAAIAAASIhMAAIAAAnIBMAAIAAARIhMAAIAAA2IBMAAIAAARg");
	this.shape_78.setTransform(583.55,501.425);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("AgjA/QgMgPAAgbQAAgOAEgKQAEgLAGgIQAHgHAJgEQAJgDAJAAQAIgBAGACQAHACAHAEIAAgwIATAAIAACXIgTAAIAAgLQgHAHgJADQgIAEgKABQgTAAgLgPgAgUgJQgIAKAAATQAAAUAGAKQAIAKAOAAQAHAAAHgEQAJgDAGgGIAAg9QgHgDgFgBQgGgCgIAAQgOAAgJALg");
	this.shape_79.setTransform(563.15,501.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgDQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_80.setTransform(551.025,503.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000FF").s().p("AgjAuQgKgLABgVIAAhFIASAAIAAA9IABAOQAAAGADAEQACAFAFACQAEABAIAAQAGAAAJgDQAIgEAHgFIAAhRIATAAIAABsIgTAAIAAgMQgJAHgIAEQgJAEgJAAQgSAAgJgKg");
	this.shape_81.setTransform(538.3,503.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAbgNAPQgOAPgXABQgWgBgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_82.setTransform(525.925,503.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000FF").s().p("AghA2IAAhsIATAAIAAARQAKgKAIgDQAIgDAJgBIAGAAIAHABIAAATIgBAAIgIgBIgJgBQgIAAgIAFQgHADgHAGIAABMg");
	this.shape_83.setTransform(516.5,503.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQAAgNAFgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIgBAAIAAgSIAQgEIAUgBQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgHAEIgHAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgIADgEAEQgGAFABAIQgBAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_84.setTransform(504.95,503.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000FF").s().p("AgZA2QgKgDgHgDIAAgVIABAAQAJAHALAEQAKADAKABQALAAAHgFQAHgDAAgJQAAgGgEgDQgDgDgLgDIgJgCIgMgCQgOgFgGgGQgGgHAAgLQAAgHADgGQADgFAFgFQAGgFAIgDQAJgCAJAAQAKAAAKACQAKADAGADIAAAUIgBAAQgHgFgKgEQgKgDgJAAQgJAAgHADQgHAEAAAHQAAAIAEADQAEADAJADIALABIAKADQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgDg");
	this.shape_85.setTransform(487.175,503.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000FF").s().p("AghArQgQgPAAgbQAAgaAPgQQAOgPAXAAQAXAAALANQAMAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAHACQAHACAIAAQALAAALgEQAMgFAFgEIAAAAIAAAUQgJAEgKADQgKACgKAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_86.setTransform(475.95,503.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_87.setTransform(464.075,503.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0000FF").s().p("AgIBMIAAiXIARAAIAACXg");
	this.shape_88.setTransform(455.45,501.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAbgNAPQgOAPgXABQgWgBgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_89.setTransform(446.625,503.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000FF").s().p("AgIA2IgshsIAUAAIAgBWIAihWIATAAIgsBsg");
	this.shape_90.setTransform(434.675,503.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0000FF").s().p("AgiArQgPgPAAgbQAAgaAPgQQAPgPAWAAQAXAAAMANQALAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAEAFAIACQAGACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_91.setTransform(422.85,503.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000FF").s().p("AghA2IAAhsIASAAIAAARQALgKAIgDQAIgDAJgBIAHAAIAGABIAAATIgBAAIgIgBIgJgBQgJAAgHAFQgHADgIAGIAABMg");
	this.shape_92.setTransform(413.5,503.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgDQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_93.setTransform(394.975,503.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAbgNAPQgOAPgXABQgWgBgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_94.setTransform(382.525,503.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgZANgQQAOgPAWAAQAXAAAOAPQANAQAAAZQAAAbgNAPQgOAPgXABQgWgBgOgPgAgWgeQgIAKAAAUQAAAUAIALQAIALAOAAQAPgBAIgJQAIgMAAgUQAAgUgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_95.setTransform(370.375,503.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0000FF").s().p("AAtBJIAAh9IgoBVIgLAAIgohVIAAB9IgSAAIAAiRIAbAAIAlBQIAmhQIAbAAIAACRg");
	this.shape_96.setTransform(355.875,501.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_97.setTransform(334.5,503.225);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgEQgCgDgFgDQgFgCgHAAQgGABgJADQgIAEgHAGIAABQIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_98.setTransform(322.225,501.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB5AAIAAASIgzAAIAAB/g");
	this.shape_99.setTransform(309.7,501.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0000FF").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_100.setTransform(494.275,481);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0000FF").s().p("AgZA2QgKgCgHgEIAAgVIABAAQAJAHALAEQAKAEAKAAQALgBAHgEQAHgDAAgIQAAgHgEgDQgDgEgLgCIgJgCIgMgCQgOgFgGgGQgGgHAAgLQAAgHADgFQADgHAFgEQAGgFAIgCQAJgDAJAAQAKAAAKACQAKADAGADIAAAUIgBAAQgHgGgKgDQgKgEgJAAQgJAAgHAEQgHAEAAAHQAAAHAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgDg");
	this.shape_101.setTransform(485.575,476.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0000FF").s().p("AghA2IAAhrIATAAIAAAQQAKgKAIgDQAIgDAJAAIAGAAIAHABIAAASIgBAAIgIgBIgJAAQgIAAgIADQgHAEgHAGIAABMg");
	this.shape_102.setTransform(476.9,476.95);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0000FF").s().p("AgjAuQgKgLAAgVIAAhFIATAAIAAA9IAAAPQABAFACAEQAEAFADACQAFACAIAAQAGgBAIgDQAJgEAHgGIAAhQIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgKAAQgRAAgJgKg");
	this.shape_103.setTransform(465.35,477.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0000FF").s().p("AgkAqQgNgQAAgaQAAgaANgPQAOgPAWAAQAXAAAOAPQANAPAAAaQAAAagNAQQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIALAOAAQAPAAAIgLQAIgKAAgVQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_104.setTransform(452.975,476.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgEgFgDQgFgCgHAAQgGABgJADQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_105.setTransform(440.625,474.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0000FF").s().p("AAOBJIAAgpIhEAAIAAgXIBFhRIASAAIAABYIAWAAIAAAQIgWAAIAAApgAgoAQIA2AAIAAhAg");
	this.shape_106.setTransform(420.75,475.125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0000FF").s().p("AgwBKIAAgUIAVgSIATgRQARgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMAAQgJAAgKADQgLADgJAGIgBAAIAAgUQAHgEALgCQAMgDALAAQAVAAANALQAMAKAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgMANIgVAUIgVASIBNAAIAAAQg");
	this.shape_107.setTransform(408.275,474.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_108.setTransform(388.875,478.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0000FF").s().p("AghA2IAAhrIATAAIAAAQQAKgKAIgDQAIgDAJAAIAGAAIAHABIAAASIgBAAIgIgBIgJAAQgIAAgIADQgHAEgHAGIAABMg");
	this.shape_109.setTransform(379.6,476.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0000FF").s().p("AgiArQgPgPAAgbQAAgaAPgQQAPgPAWAAQAWAAAMANQAMAMAAAYIAAAJIhPAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA9AAQAAgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_110.setTransform(368.5,476.925);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0000FF").s().p("AgIA2IgshrIAUAAIAgBVIAihVIATAAIgsBrg");
	this.shape_111.setTransform(356.625,476.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAFAFQAGAFAHACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgKACgLAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_112.setTransform(344.8,476.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_113.setTransform(691.275,449.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_114.setTransform(680.975,448.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AgTBLQgJgBgHgCIAAgTIABAAIANAFQAKACAKAAQAIAAAHgCQAGgCADgEQAEgEABgGQABgFABgHIAAgKQgJAHgHADQgIAEgLAAQgTAAgLgOQgMgPAAgYQAAgOAEgLQAEgKAHgHQAGgHAJgEQAJgEAJAAQAJAAAGACQAGACAIAEIABgFIARAAIAABgQAAAcgMANQgNANgaAAQgIAAgIgCgAgUgxQgIAKAAATQAAATAGAIQAHAKAPAAQAHAAAIgDQAIgEAHgFIAAg6QgIgEgGgBQgGgBgHAAQgNAAgKAKg");
	this.shape_115.setTransform(668,452.575);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0000FF").s().p("AgIBJIAAhsIARAAIAABsgAgJg1IAAgTIAUAAIAAATg");
	this.shape_116.setTransform(659.45,448.775);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_117.setTransform(650.425,450.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0000FF").s().p("AgjA+QgMgPAAgaQAAgOAEgKQAEgLAGgIQAIgHAIgDQAJgFAJAAQAIAAAHACQAHACAGAEIAAgvIATAAIAACXIgTAAIAAgMQgHAHgJAEQgJADgJAAQgTABgLgQgAgTgJQgJAJAAAVQAAATAGAKQAIAKAOAAQAHAAAIgDQAIgEAGgFIAAg+QgGgEgGgBQgHgBgHAAQgOAAgIALg");
	this.shape_118.setTransform(630.4,448.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_119.setTransform(618.275,450.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQgBgNAGgHQAGgHAJgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgDgCQgEgDgGAAIgKgBQgHAAgJACIgSAFIgBAAIAAgSIAPgEQAKgBAKAAQALAAAIABQAIACAHAFQAGAEADAIQADAHABAKIAABJIgTAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgIADgGAEQgEAFAAAIQAAAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_120.setTransform(605.55,450.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0000FF").s().p("AgdBKIAUgtIgrhmIAUAAIAgBQIAihQIATAAIg/CTg");
	this.shape_121.setTransform(586.975,452.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQAAgNAFgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgFgCQgEgDgFAAIgKgBQgHAAgKACIgSAFIgBAAIAAgSIAQgEQAKgBAKAAQAKAAAJABQAIACAHAFQAGAEADAIQAEAHgBAKIAABJIgSAAIAAgLIgHAEIgHAFIgLAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgIADgEAEQgGAFABAIQgBAKAHAFQAFAEAMAAQAIAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_122.setTransform(574.7,450.675);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0000FF").s().p("AgjA+QgMgPAAgaQAAgOAEgKQAEgLAGgIQAIgHAIgDQAJgFAIAAQAJAAAHACQAHACAGAEIAAgvIATAAIAACXIgTAAIAAgMQgHAHgJAEQgJADgJAAQgTABgLgQgAgTgJQgJAJAAAVQAAATAGAKQAHAKAPAAQAHAAAIgDQAIgEAGgFIAAg+QgGgEgGgBQgHgBgHAAQgOAAgIALg");
	this.shape_123.setTransform(562.45,448.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgIQAAgHgEgEQgDgCgLgDIgJgCIgMgDQgOgEgGgGQgGgHAAgLQAAgHADgFQADgHAFgFQAGgEAIgCQAJgDAJAAQAKAAAKACQAKADAGADIAAATIgBAAQgHgFgKgDQgKgDgJgBQgJABgHADQgHAEAAAIQAAAGAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgCg");
	this.shape_124.setTransform(544.475,450.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0000FF").s().p("AgjAwQgLgKAAgPQAAgNAGgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgCgEgEgCQgFgDgFAAIgKgBQgIAAgIACIgSAFIgCAAIAAgSIAQgEQAKgBAKAAQAKAAAJABQAJACAFAFQAHAEADAIQAEAHAAAKIAABJIgTAAIAAgLIgGAEIgJAFIgKAEQgFABgIAAQgPAAgKgJgAAIgBQgKABgHABQgIADgFAEQgEAFgBAIQABAKAFAFQAGAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgUABg");
	this.shape_125.setTransform(532.8,450.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_126.setTransform(520.875,448.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_127.setTransform(501.175,448.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0000FF").s().p("AgMA+QgJgJAAgTIAAg5IgMAAIAAgQIAMAAIAAgfIATAAIAAAfIAkAAIAAAQIgkAAIAAAwIAAAOQAAAFACAEQACAEAEACQADABAIAAIAJgBIAHgCIABAAIAAAQIgLADIgLAAQgPAAgJgJg");
	this.shape_128.setTransform(490.925,449.175);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQAKgIAIgEQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_129.setTransform(483.55,450.65);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0000FF").s().p("AgjAwQgKgKAAgPQgBgNAGgHQAFgHAKgFQAKgEAOgBQANgCAQgBIAAgDQAAgGgCgEQgDgEgEgCQgDgDgGAAIgKgBQgHAAgKACIgSAFIAAAAIAAgSIAPgEQAKgBAKAAQAKAAAJABQAIACAHAFQAGAEADAIQADAHAAAKIAABJIgSAAIAAgLIgHAEIgIAFIgKAEQgFABgIAAQgPAAgKgJgAAJgBQgLABgGABQgJADgFAEQgEAFAAAIQgBAKAHAFQAFAEALAAQAJAAAIgEQAIgDAHgGIAAgdIgTABg");
	this.shape_130.setTransform(472,450.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0000FF").s().p("AghArQgPgPgBgbQAAgaAPgQQAOgPAXAAQAXAAAMANQAMAMgBAYIAAAJIhPAAQAAAKADAIQADAHAFAFQAFAFAIACQAGACAIAAQALAAALgEQALgFAGgEIAAAAIAAAUQgJAEgJADQgKACgLAAQgaAAgPgOgAgUghQgJAJgBANIA9AAQABgOgIgIQgHgIgOAAQgPAAgIAIg");
	this.shape_131.setTransform(460.45,450.625);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_132.setTransform(441.125,450.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPAAAIgKQAIgLAAgUQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_133.setTransform(428.675,450.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAAUIAABGg");
	this.shape_134.setTransform(409.275,450.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0000FF").s().p("AgkAqQgNgPAAgbQAAgaANgPQAOgQAWAAQAXAAAOAQQANAPAAAaQAAAbgNAPQgOAPgXAAQgWAAgOgPgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPAAAIgKQAIgLAAgUQAAgUgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_135.setTransform(396.825,450.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0000FF").s().p("AgZA3QgKgDgHgEIAAgUIABAAQAJAGALAEQAKAEAKgBQALAAAHgDQAHgEAAgIQAAgHgEgEQgDgCgLgDIgJgCIgMgDQgOgEgGgGQgGgHAAgLQAAgHADgFQADgHAFgFQAGgEAIgCQAJgDAJAAQAKAAAKACQAKADAGADIAAATIgBAAQgHgFgKgDQgKgDgJgBQgJABgHADQgHAEAAAIQAAAGAEAEQAEADAJADIALACIAKACQANADAHAGQAHAHAAAMQAAAPgNAJQgMAKgUAAQgMAAgLgCg");
	this.shape_136.setTransform(385.675,450.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0000FF").s().p("AghA3IAAhsIATAAIAAAPQAKgIAIgEQAIgEAJABIAGAAIAHABIAAATIgBAAIgIgCIgJAAQgIAAgIADQgHAEgHAGIAABNg");
	this.shape_137.setTransform(377,450.65);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAWAAQAWAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAGAFQAFAFAGACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgKACgKAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgNAAgJAIg");
	this.shape_138.setTransform(365.9,450.625);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0000FF").s().p("AgvBMIAAiUIASAAIAAALQAIgGAJgEQAJgEAJAAQAUAAALAPQALAPAAAaQAAAOgEAKQgDALgIAHQgGAHgJAEQgIAEgKAAQgIAAgGgCQgHgCgIgDIAAAtgAgNg2QgIADgIAGIAAA8IAOAGIAMABQAPgBAJgJQAIgLAAgUQAAgTgGgKQgIgJgNAAQgHgBgIAEg");
	this.shape_139.setTransform(354.05,452.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0000FF").s().p("AgiArQgOgPAAgbQAAgaAOgQQAPgPAXAAQAVAAAMANQANAMAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIAAQALAAALgEQAMgFAEgEIABAAIAAAUQgJAEgKADQgJACgLAAQgaAAgQgOgAgUghQgJAJgBANIA+AAQgBgOgGgIQgIgIgPAAQgOAAgIAIg");
	this.shape_140.setTransform(334.5,450.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0000FF").s().p("AAbBMIAAg+IgBgOQgBgGgCgDQgCgFgFgBQgFgCgHAAQgGgBgJAEQgIAEgHAFIAABRIgTAAIAAiXIATAAIAAA3QAIgHAJgEQAJgEAJAAQASAAAJAKQAKALAAATIAABHg");
	this.shape_141.setTransform(322.225,448.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0000FF").s().p("AgIBJIAAh/Ig0AAIAAgSIB5AAIAAASIgzAAIAAB/g");
	this.shape_142.setTransform(309.7,448.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3650));

	// Sun
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0000FF").s().p("AAbA4IAAg9IgBgOQgBgHgCgEQgCgDgFgCQgFgDgHAAQgGAAgJAEQgIAEgHAGIAABQIgTAAIAAhsIATAAIAAAMQAIgHAJgEQAJgEAJAAQASAAAJALQAKAKAAAUIAABGg");
	this.shape_143.setTransform(523.275,385.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0000FF").s().p("AgjAtQgKgKAAgUIAAhGIASAAIAAA9IABAOQABAGADAEQACAFAEABQAFACAIAAQAGABAJgEQAIgEAHgFIAAhRIASAAIAABsIgSAAIAAgMQgJAHgJAEQgIAEgKAAQgRAAgJgLg");
	this.shape_144.setTransform(510.55,385.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0000FF").s().p("AgdBIQgNgCgNgGIAAgYIABAAQALAJAPAFQAPAFAMAAQARAAAKgHQAKgHAAgLQAAgKgEgEQgGgFgJgCIgQgEIgRgDQgUgEgJgJQgJgKAAgQQAAgSAQgMQAPgLAXAAQAPAAAMADQANADALAEIAAAXIgCAAQgIgHgOgFQgOgFgNAAQgPAAgKAHQgJAGAAAKQAAAKAFAFQAFAFAMADIAQADIAUAEQAQAEAIAIQAIAJAAAPQAAAJgEAIQgDAIgIAGQgHAGgLAEQgKADgOAAQgQAAgMgDg");
	this.shape_145.setTransform(497.5,383.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFF00").s().p("AlBFBQiFiFAAi8QAAi8CFiFQCFiFC8AAQC9AACECFQCGCFAAC8QAAC8iGCFQiECGi9AAQi8AAiFiGg");
	this.shape_146.setTransform(512.0078,383.9875,1.0989,1.0989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]}).wait(3650));

	// EM28
	this.instance = new lib.EM28();
	this.instance.setTransform(211.75,378.95,1,1,0,0,0,-37.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[212.1,378.9,213.9,258,299.9,171.9,387.8,84.1,511.9,84.1,636.2,84.1,724,171.9,811.9,259.8,811.9,383.9,811.9,508.2,724,596.1,636.2,683.9,511.9,683.9,387.8,683.9,299.9,596.1,213.1,509.3,212.1,387]}},3649).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(661.4,437.5,213,276.6);
// library properties:
lib.properties = {
	id: '748E77A8427ACC4E98EED4AF1B2DC07D',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFFFFF",
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
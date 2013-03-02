https://c9.io/flowerflirt44/jquery/src/sizzle/effectsjs: 51

```javascript
function createFxNow()
```
function name - createFxNow
Aruments - none
return - return ( fxNow = jQuery.now() );
invocations - 86, 113

```javascript
    var currentTime = fxNow || createFxNow(),
    startTime: fxNow || createFxNow(),
```

https://c9.io/flowerflirt44/jquery/src/sizzle/effectsjs: 58

```javascript
function createTweens( animation, props ) 
```

function name - createTweens
argument - animation, props
var - collection
return - return
invocations - 156

```javascript
    createTweens( animation, props );
```

https://c9.io/flowerflirt44/jquery/src/sizzle/effectsjs: 73

```javascript
function Animation( elem, properties, options ) 
```

function name - Animation
arguments - elem, properties, options
var - result, currentTime, tween, index
return - 
return false;
return remaining;
return false;
return tween;
return this;
return this;
invocations - src/effects.js: 95, 159, 171

```javascript
animation.tweens[ index ].run( percent );
animation.opts.start.call( elem, animation );
return animation.progress( animation.opts.progress )
```


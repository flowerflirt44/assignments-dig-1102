# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!

https://c9.io/flowerflirt44/raphael.raphaelcore.js:59
```javascript
 function R(first) {
     /// function: R
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  60
``` javascript
if (R.is(first, "function")) {
/// Boolean: if
/// function: R.is
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  65
``` javascript
            var args = Array.prototype.slice.call(arguments, 0);
            if (R.is(args[args.length - 1], "function")) {
                var f = args.pop();
/// variable: args
/// Array: Array.prototype.slice.call
/// Boolean: if true
/// function: args.length 
/// integer: 1
/// Variable: f
/// function: args.pop
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  473
``` javascript
if (R.is(values, array)) {
            var i = values.length;
/// Boolean: if true
/// function: R.is
/// variable: i
/// function: values.length 
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  48
``` javascript
var rem = value % values;
/// variable: rem
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  523
``` javascript
var toHex = function (color) {
        if (R.vml) {
            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
            var trim = /^\s+|\s+$/g;
            var bod;
/// variable: toHex
/// function: R.vml
/// Boolean: if
/// variable: trim
/// variable: bod
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  580
``` javascript
if (r > 1 || g > 1 || b > 1) {
            r /= 255;
            g /= 255;
            b /= 255;
        }
/// Boolean: if
/// operator: >, =
/// integer: 1, 25
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  831
``` javascript
var preload = R._preload = function (src, f) {
        var img = g.doc.createElement("img");
/// variable: preload
/// function: R._preload
/// variable: img
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  1337
``` javascript
function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
/// function: getTatLen
/// Boolean: if
/// integer: 11, 0
/// operator: <, =
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  1484
``` javascript
 for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
/// variable: i
/// function: path1.length, path1
/// operator: =, <, ++
/// integer 0
```

https://c9.io/flowerflirt44/raphael.raphaelcore.js:  1803
``` javascript
var _13 = 1 / 3,
/// variable: _13
/// operator: =, /
/// integer: 1, 3
```




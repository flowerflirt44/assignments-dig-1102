```javascript

window.Raphael.vml && function (R) {
    var has = "hasOwnProperty",
        Str = String,
        toFloat = parseFloat,
        math = Math,
        round = math.round,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        fillString = "fill",
        separator = /[, ]+/,
        eve = R.eve,
        ms = " progid:DXImageTransform.Microsoft",
        S = " ",
        E = "",
        map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
        bites = /([clmz]),?([^clmz]*)/gi,
        blurregexp = / progid:\S+Blur\([^\)]+\)/g,
        val = /-?[^,\s-]+/g,
        cssDot = "position:absolute;left:0;top:0;width:1px;height:1px",
        zoom = 21600,
        pathTypes = {path: 1, rect: 1, image: 1},
        ovalTypes = {circle: 1, ellipse: 1},
        path2vml = function (path) {
            var total =  /[ahqstv]/ig,
                command = R._pathToAbsolute;
            Str(path).match(total) && (command = R._path2curve);
            total = /[clmz]/g;
            if (command == R._pathToAbsolute && !Str(path).match(total)) {
                var res = Str(path).replace(bites, function (all, command, args) {
                    var vals = [],
                        isMove = command.toLowerCase() == "m",
                        res = map[command];
    ```
    
    * good indention
    * could use more returns for white space in between satements
    * too long or short names that are not descriptive 
    
    ```javascript
                    args.replace(val, function (value) {
                        if (isMove && vals.length == 2) {
                            res += vals + map[command == "m" ? "l" : "L"];
                            vals = [];
                        }
                        vals.push(round(value * zoom));
                    });
                    return res + vals;
                });
                return res;
            }
```

* good indention and white space use with returns and spaces

```javascript
            var pa = command(path), p, r;
            res = [];
            for (var i = 0, ii = pa.length; i < ii; i++) {
                p = pa[i];
                r = pa[i][0].toLowerCase();
                r == "z" && (r = "x");
                for (var j = 1, jj = p.length; j < jj; j++) {
                    r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                }
                res.push(r);
            }
            return res.join(S);
        },
```

* horrible variable names not descriptive

```javascript 

        compensation = function (deg, dx, dy) {
            var m = R.matrix();
            m.rotate(-deg, .5, .5);
            return {
                dx: m.x(dx, dy),
                dy: m.y(dx, dy)
            };
        },
        setCoords = function (p, sx, sy, dx, dy, deg) {
            var _ = p._,
                m = p.matrix,
                fillpos = _.fillpos,
                o = p.node,
                s = o.style,
                y = 1,
                flip = "",
                dxdy,
                kx = zoom / sx,
                ky = zoom / sy;
            s.visibility = "hidden";
            if (!sx || !sy) {
                return;
            }
            o.coordsize = abs(kx) + S + abs(ky);
            s.rotation = deg * (sx * sy < 0 ? -1 : 1);
            if (deg) {
                var c = compensation(deg, dx, dy);
                dx = c.dx;
                dy = c.dy;
            }
            sx < 0 && (flip += "x");
            sy < 0 && (flip += " y") && (y = -1);
            s.flip = flip;
            o.coordorigin = (dx * -kx) + S + (dy * -ky);
            if (fillpos || _.fillsize) {
                var fill = o.getElementsByTagName(fillString);
                fill = fill && fill[0];
                o.removeChild(fill);
```

* needs returns for white space instead of large blocks

```javascript
                if (fillpos) {
                    c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                    fill.position = c.dx * y + S + c.dy * y;
                }
                if (_.fillsize) {
                    fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
                }
                o.appendChild(fill);
            }
            s.visibility = "visible";
        };
```
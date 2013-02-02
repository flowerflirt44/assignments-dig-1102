if ("clip-rect" in params) 
    {
        var rect = Str(params["clip-rect"]).split(separator);
           if (rect.length == 4) 
                {
                    rect[2] = +rect[2] + (+rect[0]);
                    rect[3] = +rect[3] + (+rect[1]);
                    
                    var div = node.clipRect || R._g.doc.createElement("div"),
                    dstyle = div.style;
                    dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                
                if (!node.clipRect) 
                    {
                        dstyle.position = "absolute";
                        dstyle.top = 0;
                        dstyle.left = 0;
                        dstyle.width = o.paper.width + "px";
                        dstyle.height = o.paper.height + "px";
                        node.parentNode.insertBefore(div, node);
                        div.appendChild(node);
                        node.clipRect = div;
                    }
                }
                
            if (!params["clip-rect"]) {
                node.clipRect && (node.clipRect.style.clip = "auto");
        }
    }
    
    if (o.textpath) 
        {
            var textpathStyle = o.textpath.style;
            params.font && (textpathStyle.font = params.font);
            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
            params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
            params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
        }
        
        if ("arrow-start" in params) 
            {
                addArrow(res, params["arrow-start"]);
            }
            
        if ("arrow-end" in params) 
            {
                addArrow(res, params["arrow-end"], 1);
            }
            
        if (params.opacity != null || 
            params["stroke-width"] != null ||
            params.fill != null ||
            params.src != null ||
            params.stroke != null ||
            params["stroke-width"] != null ||
            params["stroke-opacity"] != null ||
            params["fill-opacity"] != null ||
            params["stroke-dasharray"] != null ||
            params["stroke-miterlimit"] != null ||
            params["stroke-linejoin"] != null ||
            params["stroke-linecap"] != null) {
           
           var fill = node.getElementsByTagName(fillString),
                newfill = false;
                fill = fill && fill[0];
            !   fill && (newfill = fill = createNode(fillString));
            
            if (o.type == "image" && params.src) 
                {
                    fill.src = params.src;
                }
                
            params.fill && (fill.on = true);
            if (fill.on == null || params.fill == "none" || params.fill === null) 
                {
                    fill.on = false;
                }
           
           if (fill.on && params.fill) 
                {
                var isURL = Str(params.fill).match(R._ISURL);
                
                if (isURL) 
                    {
                        fill.parentNode == node && node.removeChild(fill);
                        fill.rotate = true;
                        fill.src = isURL[1];
                        fill.type = "tile";
                        
                        var bbox = o.getBBox(1);
                        fill.position = bbox.x + S + bbox.y;
                        o._.fillpos = [bbox.x, bbox.y];

                        R._preload(isURL[1], function () {
                            o._.fillsize = [this.offsetWidth, this.offsetHeight];
                    }
                );
            } 
            
            else 
                {
                    fill.color = R.getRGB(params.fill).hex;
                    fill.src = E;
                    fill.type = "solid";
                    
                    if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                        a.fill = "none";
                        a.gradient = params.fill;
                        fill.rotate = false;
                }
            }
        }
        
        if ("fill-opacity" in params || "opacity" in params) 
            {
                var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
                opacity = mmin(mmax(opacity, 0), 1);
                fill.opacity = opacity;
                
                if (fill.src) 
                {
                    fill.color = "none";
                }
            }
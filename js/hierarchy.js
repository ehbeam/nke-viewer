function loadHierarchy() {

  document.getElementById("intro_container").style.display = "none";
  document.getElementById("domain_container").innerHTML = "";
  document.getElementById("chart").innerHTML = "";

  d3.json("data/hierarchy.json", function(treeData) {
    
    var svg_loc = "#hierarchy";

    var margin = {top: 50, right: 300, bottom: 50, left: -110}
        width = 1220 - margin.right - margin.left,
        height = 680 - margin.top - margin.bottom,
        imsize = 24,
        font = "Avenir",
        suffix = "_viewer";

    var i = 0,
      duration = 750;

    var tree = d3.layout.tree()
      .size([height, width])
      .separation(function(a, b) {
            return a.parent == b.parent ? 1 : 1;
        });

    var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
      this.parentNode.appendChild(this);
      });
    };

    var svg_hier = d3.select(svg_loc).append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0]
    root.x0 = height / 2;
    root.y0 = 0;

    function collapse(d) {
        if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

    function expand(d) {
      if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      if (d.children) {
        d.children.forEach(expand);
      }
    }

    root.children.forEach(collapse);
    update(root);

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        if (d.type == "structure") {
          d._children.forEach(expand);
          d.children = d._children;
          d._children = null;
      } else {
          d.children = d._children;
          d._children = null;
      }
    }
      update(d);
    }

    function collapseAll() {
      root.children.forEach(collapse);
      update(root);
    }

    function expandAll() {
      root.children.forEach(expand);
      update(root);
    }

    function toTitleCase(str) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
    }

    root.children.forEach(expand);
    update(root);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

      // Declare the nodes…
      var node = svg_hier.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter the nodes.
      var nodeEnter = node.enter().append("g")
        .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
          .on("click", click)
          .on("mouseover", function(d) {
            d3.select(this).moveToFront();
          });

      nodeEnter.append("text")
        .attr("x", function(d) { return -1 * imsize / 2 - 20; })
        .attr("y", function(d) { return 4; })
        .attr("dy", "0.2em")
        .attr("text-anchor", "end")
        .attr("font-size", 24)
        .attr("font-weight", "bold")
        .text(function(d) { 
            if (d.parent.depth == 0) {
              return toTitleCase(d.name.replace("_", " ")); } else { return " "; }
            })
        .style("fill-opacity", 1)
        .style("fill", function(d) {return d.color; })
        .style("font-family", function(d) { return font; });

      var words = nodeEnter.append("image")
          .attr("class", "word")
          .attr("xlink:href", function(d) { return d.image + "_words" + suffix + ".png"; })
          .attr("x", imsize / 2)
          .attr("y", -1 * imsize / 1.75)
          .attr("width", imsize * 2.25);

      var brains = nodeEnter.append("image")
          .attr("class", "brain")
          .attr("xlink:href", function(d) { return d.image + "_z.png"; })
          .attr("x", -1 * imsize / 2)
          .attr("y", -1 * imsize / 2)
          .attr("width", imsize);

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

      words.select("image")
          .attr("class", "word")
          .attr("xlink:href", function(d) { return d.image + "_words" + suffix + ".png"; })
          .attr("x", imsize - 15)
          .attr("y", -1 * imsize / 2.5)
          .attr("width", imsize * 2.5);

      brains.select("image")
          .attr("class", "brain")
          .attr("xlink:href", function(d) { return d.image + "_z.png"; })
          .attr("x", -1 * imsize / 2)
          .attr("y", -1 * imsize / 2)
          .attr("width", imsize);

      nodeUpdate.select("text");

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
          .remove();

      nodeExit.select("image")
          .attr("width", 1e-10)
          .attr("height", 1e-10);

      nodeExit.select("text")
          .style("fill-opacity", 1e-6);

      // Update the links
      var link = svg_hier.selectAll("path.link")
          .data(links, function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o})})
          .attr("stroke-width", function(d) {return d.target.weight * 15; })
          .attr("stroke", function(d) {
            if (d.source.depth == 0) { return "white"; } else { return "#dedede"; }
          })
          .attr("stroke-dasharray", function(d) {
            if (d.target.direction == "rev") { return "6,6"; }
          });

      // Transition links to their new position.
      link.transition()
          .duration(duration)
          .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          })

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

    }

  });
}
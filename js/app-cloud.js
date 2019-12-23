// Adapted from https://bl.ocks.org/jyucsiro/767539a876836e920e38bc80d2031ba7

var cloudPalette = ["#7597D0", "#B07EB6", "#CEBE6D", "#77B58A", "#CE7D69", 
                    "#7D74A3", "#AEC87C", "#BA7E39", "#CF7593", "#846B43", 
                    "#6F8099", "#8C4058", "#D8AE54", "#5AA8A7", "#3A3C7C", 
                    "#FF7B5B", "#72662A", "#91E580", "#9AB4E2", "#E291DD",
                    "#8B75EA", "#E0BD84", "#D64F7C", "#8ACEAF", "#C6CE5A"];

var titlePalette = ["rgba(117, 151, 208, 0.5)", "rgba(176, 126, 182, 0.5)", "rgba(206, 190, 109, 0.5)", "rgba(119, 181, 138, 0.5)", "rgba(206, 125, 105, 0.5)", 
                    "rgba(125, 116, 163, 0.5)", "rgba(174, 200, 124, 0.5)", "rgba(186, 126, 57, 0.5)", "rgba(207, 117, 147, 0.5)", "rgba(132, 107, 67, 0.5)", 
                    "rgba(111, 128, 153, 0.5)", "rgba(140, 64, 88, 0.5)", "rgba(216, 174, 84, 0.5)", "rgba(90, 168, 167, 0.5)", "rgba(58, 60, 124, 0.5)", 
                    "rgba(255, 123, 91, 0.5)", "rgba(114, 102, 42, 0.5)", "rgba(145, 229, 128, 0.5)", "rgba(188, 213, 255, 0.5)", "rgba(226, 145, 221, 0.5)",
                    "rgba(139, 117, 234, 0.5)", "rgba(224, 189, 132, 0.5)", "rgba(214, 79, 124, 0.5)", "rgba(164, 234, 202, 0.5)", "rgba(244, 255, 107, 0.5)"];


function pad(number) { return (number < 10 ? "0" : "") + number };

function toTitleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

function loadWordCloud(n_domains) {

    document.getElementById("chart").innerHTML = "";

    var file = "data/k" + pad(n_domains) + "/words_k" + pad(n_domains) + ".csv";

    d3.csv(file, function(data) {

      for (var domain_i = 0; domain_i < n_domains; domain_i++) {

        var domain_words = [];

        for (var row_i = 0; row_i < data.length; row_i++) {
            if (parseInt(data[row_i]["CLUSTER"]) == domain_i + 1) {
              var term = data[row_i]["TOKEN"].replace(/_/g, " ");
              var count = parseFloat(data[row_i]["R"]) * 1000; 
              for (var word_i = 0; word_i < count; word_i++) {
                domain_words.push(term);
              }
              // var name = toTitleCase(data[row_i]["DOMAIN"].replace(/_/g, " "));
              var name = data[row_i]["DOMAIN"].replace(/_/g, " ").toLowerCase();
            }
        };
    
        drawWordCloud(domain_words, name, domain_i);

      };
  });

}

// Function to move select to front
// https://github.com/wbkd/d3-extended
d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

function drawWordCloud(words, name, i){

  var color = cloudPalette[i];
  var titleColor = titlePalette[i];

  var word_count = {};

  if (words.length == 1){
      word_count[words[0]] = 1;
    } else {
      words.forEach(function(word){
        var word = word.toLowerCase();
        if (word != "" && word.length>1){
          if (word_count[word]){
            word_count[word]++;
          } else {
            word_count[word] = 1;
          }
        }
      })
    }

  var svg_location = "#chart";
  var width = 193; 
  var height = 130;

  var word_entries = d3.entries(word_count);

  var xScale = d3.scale.linear()
     .domain([0, d3.max(word_entries, function(d) {
        return d.value;
      })
     ])
     .range([1,14]);

  d3.layout.cloud().size([width, height])
    .timeInterval(25)
    .words(word_entries)
    .fontSize(function(d) { return xScale(+d.value); })
    .text(function(d) { return d.key; })
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Avenir")
    .on("end", draw)
    .start();

  function draw(words) {

    // Define the tooltip
    var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("font-size", "12px")
      .style("color", "white")
      .style("background", "black")
      .style("padding", "2px")
      .style("padding-left", "8px")
      .style("padding-right", "8px")
      .style("border-radius", "5px")
      .style("opacity", "0.65");
      // .style("box-shadow", "2px 2px 3px #757575");

    // Draw the word cloud
    d3.select(svg_location).append("svg")
        .attr("width", width)
        .attr("height", height + 35)
      .append("g")
        .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return xScale(d.value) + "px"; })
        .style("font-family", "Avenir")
        .style("fill", color)
        // .style("text-shadow", "2px 2px 3px #CECECE")
        .style("margin-bottom", "5px")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y + 25] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.key; })
        .on("mouseover", function(d, i) {
          d3.select(this)
              .style("font-size", function(d) { return xScale(d.value) + 3 + "px"; })
              .style("fill", "black")
              .moveToFront();
          tooltip.html("<i>r<sub>pb</sub></i> = " + d.value / 1000)
              .style("left", d3.event.pageX + 10 + "px")
              .style("top", d3.event.pageY + 10 + "px");
          return tooltip.style("visibility", "visible")
        })
        .on("mouseout", function(d, i) {
          d3.select(this)
              .style("font-size", function(d) { return xScale(d.value) + "px"; })
              .style("fill", color);
          return tooltip.style("visibility", "hidden")
        });

    // // Add the plot title
    // d3.select(svg_location).append("text")
    //   .style("font-size", "0px")
    //   .style("font-family", "Avenir")
    //   .style("text-align", "center")
    //   .style("background-color", "none")
    //   .style("padding", "2px")
    //   .style("padding-top", "3px")
    //   .style("border-radius", "3px")
    //   .style("position", "absolute")
    //   .style("width", width - 8 + "px")
    //   .style("margin-left", -1 * (width - 4) + "px")
    //   .text(name);
    }

    d3.layout.cloud().stop();

}
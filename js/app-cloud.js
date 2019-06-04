// Adapted from https://bl.ocks.org/jyucsiro/767539a876836e920e38bc80d2031ba7

var cloudPalette = ["#7597D0", "#B07EB6", "#CEBE6D", "#77B58A", "#CE7D69", 
                    "#7D74A3", "#AEC87C", "#BA7E39", "#CF7593", "#846B43", 
                    "#6F8099", "#8C4058", "#D8AE54", "#5AA8A7", "#3A3C7C", 
                    "#FF7B5B", "#72662A", "#91E580", "#9AB4E2", "#E291DD",
                    "#8B75EA", "#E0BD84", "#D64F7C", "#8ACEAF", "#C6CE5A"];

function pad(number) { return (number < 10 ? '0' : '') + number };

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
            }
        };
    
        drawWordCloud(domain_words, cloudPalette[domain_i]);

      };
  });

}


function drawWordCloud(words, color){

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
  var width = 198; 
  var height = 145; 

  var fill = d3.scale.category20();

  var word_entries = d3.entries(word_count);

  var xScale = d3.scale.linear()
     .domain([0, d3.max(word_entries, function(d) {
        return d.value;
      })
     ])
     .range([1,18]);
  d3.layout.cloud().size([width, height])
    .timeInterval(20)
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
      .style("font-size", "14px")
      .style("background", "white")
      .style("padding", "4px")
      .style("border-radius", "5px")
      .style("border-style", "solid")
      .style("border-color", "black")
      .style("border-width", "1px")
      .style("box-shadow", "2px 2px 3px #757575");

    // Draw the word cloud
    d3.select(svg_location).append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return xScale(d.value) + "px"; })
        .style("font-family", "Avenir")
        .style("fill", color)
        .style("text-shadow", "2px 2px 3px #CECECE")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.key; })
        .on("mouseover", function(d, i) {
          d3.select(this).style("font-size", function(d) { return xScale(d.value) + 3 + "px"; });
          tooltip.html("<i>r<sub>pb</sub></i> = " + d.value / 1000)
              .style("left", d3.event.pageX + 10 + "px")
              .style("top", d3.event.pageY + 10 + "px");
          return tooltip.style("visibility", "visible")
        })
        .on("mouseout", function(d, i) {
          d3.select(this).style("font-size", function(d) { return xScale(d.value) + "px"; });
          return tooltip.style("visibility", "hidden")
        });
    }

    d3.layout.cloud().stop();
}
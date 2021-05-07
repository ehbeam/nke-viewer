// Adapted https://www.d3-graph-gallery.com/graph/wordcloud_basic.html

var cloudPalette = ['#5B81BD', '#C16137', '#DCC447', '#924DA0', '#43A971', '#D19A17', '#48A4A8', '#CA4F52', '#D9DC77', '#D599DD', '#82B858', '#E8B586', '#7275B9', '#AA436A', '#AC835B', '#4268a4', '#a8481e', '#c3ab2e', '#793487', '#2a9058', '#cc9512', '#2f8b8f', '#b13639', '#c0c35e', '#bc80c4', '#699f3f', '#cf9c6d', '#595ca0', '#912a51', '#936a42', '#749ad6', '#da7a50', '#f5dd60', '#ab66b9', '#5cc28a', '#eab330', '#61bdc1', '#e3686b', '#f2f590', '#eeb2f6', '#9bd171', '#ffce9f', '#8b8ed2', '#c35c83', '#c59c74', '#294f8b', '#b7572d', '#aa9215', '#601b6e', '#11773f', '#cc9512', '#167276', '#981d20', '#a7aa45', '#a367ab', '#508626', '#b68354', '#404387', '#781138', '#7a5129'];

var titlePalette = ['rgba(91, 129, 189, 0.5)', 'rgba(193, 97, 55, 0.5)', 'rgba(220, 196, 71, 0.5)', 'rgba(146, 77, 160, 0.5)', 'rgba(67, 169, 113, 0.5)', 'rgba(209, 154, 23, 0.5)', 'rgba(72, 164, 168, 0.5)', 'rgba(202, 79, 82, 0.5)', 'rgba(217, 220, 119, 0.5)', 'rgba(213, 153, 221, 0.5)', 'rgba(130, 184, 88, 0.5)', 'rgba(232, 181, 134, 0.5)', 'rgba(114, 117, 185, 0.5)', 'rgba(170, 67, 106, 0.5)', 'rgba(172, 131, 91, 0.5)', 'rgba(66, 104, 164, 0.5)', 'rgba(168, 72, 30, 0.5)', 'rgba(195, 171, 46, 0.5)', 'rgba(121, 52, 135, 0.5)', 'rgba(42, 144, 88, 0.5)', 'rgba(204, 149, 18, 0.5)', 'rgba(47, 139, 143, 0.5)', 'rgba(177, 54, 57, 0.5)', 'rgba(192, 195, 94, 0.5)', 'rgba(188, 128, 196, 0.5)', 'rgba(105, 159, 63, 0.5)', 'rgba(207, 156, 109, 0.5)', 'rgba(89, 92, 160, 0.5)', 'rgba(145, 42, 81, 0.5)', 'rgba(147, 106, 66, 0.5)', 'rgba(116, 154, 214, 0.5)', 'rgba(218, 122, 80, 0.5)', 'rgba(245, 221, 96, 0.5)', 'rgba(171, 102, 185, 0.5)', 'rgba(92, 194, 138, 0.5)', 'rgba(234, 179, 48, 0.5)', 'rgba(97, 189, 193, 0.5)', 'rgba(227, 104, 107, 0.5)', 'rgba(242, 245, 144, 0.5)', 'rgba(238, 178, 246, 0.5)', 'rgba(155, 209, 113, 0.5)', 'rgba(255, 206, 159, 0.5)', 'rgba(139, 142, 210, 0.5)', 'rgba(195, 92, 131, 0.5)', 'rgba(197, 156, 116, 0.5)', 'rgba(41, 79, 139, 0.5)', 'rgba(183, 87, 45, 0.5)', 'rgba(170, 146, 21, 0.5)', 'rgba(96, 27, 110, 0.5)', 'rgba(17, 119, 63, 0.5)', 'rgba(204, 149, 18, 0.5)', 'rgba(22, 114, 118, 0.5)', 'rgba(152, 29, 32, 0.5)', 'rgba(167, 170, 69, 0.5)', 'rgba(163, 103, 171, 0.5)', 'rgba(80, 134, 38, 0.5)', 'rgba(182, 131, 84, 0.5)', 'rgba(64, 67, 135, 0.5)', 'rgba(120, 17, 56, 0.5)', 'rgba(122, 81, 41, 0.5)'];

function pad(number) { return (number < 10 ? "0" : "") + number };

function toTitleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

function loadWordCloud(n_domains) {

    var subcharts = [
                      "<div id='chart1' class='subchart' style='left:0px;top:0px;display:block;'></div>",
                      "<div id='chart2' class='subchart' style='left:193px;top:0px;display:block;'></div>",
                      "<div id='chart3' class='subchart' style='left:386px;top:0px;display:block;'></div>",
                      "<div id='chart4' class='subchart' style='left:579px;top:0px;display:block;'></div>",
                      "<div id='chart5' class='subchart' style='left:0px;top:165px;display:block;'></div>",
                      "<div id='chart6' class='subchart' style='left:193px;top:165px;display:block;'></div>",
                      "<div id='chart7' class='subchart' style='left:386px;top:165px;display:block;'></div>",
                      "<div id='chart8' class='subchart' style='left:579px;top:165px;display:block;'></div>",
                      "<div id='chart9' class='subchart' style='left:0px;top:330px;display:block;'></div>",
                      "<div id='chart10' class='subchart' style='left:193px;top:330px;display:block;'></div>",
                      "<div id='chart11' class='subchart' style='left:386px;top:330px;display:block;'></div>",
                      "<div id='chart12' class='subchart' style='left:579px;top:330px;display:block;'></div>",
                      "<div id='chart13' class='subchart' style='left:0px;top:495px;display:block;'></div>",
                      "<div id='chart14' class='subchart' style='left:193px;top:495px;display:block;'></div>",
                      "<div id='chart15' class='subchart' style='left:386px;top:495px;display:block;'></div>",
                      "<div id='chart16' class='subchart' style='left:579px;top:495px;display:block;'></div>",
                      "<div id='chart17' class='subchart' style='left:0px;top:660px;display:block;'></div>",
                      "<div id='chart18' class='subchart' style='left:193px;top:660px;display:block;'></div>",
                      "<div id='chart19' class='subchart' style='left:386px;top:660px;display:block;'></div>",
                      "<div id='chart20' class='subchart' style='left:579px;top:660px;display:block;'></div>",
                      "<div id='chart21' class='subchart' style='left:0px;top:825px;display:block;'></div>",
                      "<div id='chart22' class='subchart' style='left:193px;top:825px;display:block;'></div>",
                      "<div id='chart23' class='subchart' style='left:386px;top:825px;display:block;'></div>",
                      "<div id='chart24' class='subchart' style='left:579px;top:825px;display:block;'></div>",
                      "<div id='chart25' class='subchart' style='left:0px;top:990px;display:block;'></div>",
                      "<div id='chart26' class='subchart' style='left:193px;top:990px;display:block;'></div>",
                      "<div id='chart27' class='subchart' style='left:386px;top:990px;display:block;'></div>",
                      "<div id='chart28' class='subchart' style='left:579px;top:990px;display:block;'></div>",
                      "<div id='chart29' class='subchart' style='left:0px;top:1155px;display:block;'></div>",
                      "<div id='chart30' class='subchart' style='left:193px;top:1155px;display:block;'></div>",
                      "<div id='chart31' class='subchart' style='left:386px;top:1155px;display:block;'></div>",
                      "<div id='chart32' class='subchart' style='left:579px;top:1155px;display:block;'></div>",
                      "<div id='chart33' class='subchart' style='left:0px;top:1320px;display:block;'></div>",
                      "<div id='chart34' class='subchart' style='left:193px;top:1320px;display:block;'></div>",
                      "<div id='chart35' class='subchart' style='left:386px;top:1320px;display:block;'></div>",
                      "<div id='chart36' class='subchart' style='left:579px;top:1320px;display:block;'></div>",
                      "<div id='chart37' class='subchart' style='left:0px;top:1485px;display:block;'></div>",
                      "<div id='chart38' class='subchart' style='left:193px;top:1485px;display:block;'></div>",
                      "<div id='chart39' class='subchart' style='left:386px;top:1485px;display:block;'></div>",
                      "<div id='chart40' class='subchart' style='left:579px;top:1485px;display:block;'></div>",
                      "<div id='chart41' class='subchart' style='left:0px;top:1650px;display:block;'></div>",
                      "<div id='chart42' class='subchart' style='left:193px;top:1650px;display:block;'></div>",
                      "<div id='chart43' class='subchart' style='left:386px;top:1650px;display:block;'></div>",
                      "<div id='chart44' class='subchart' style='left:579px;top:1650px;display:block;'></div>",
                      "<div id='chart45' class='subchart' style='left:0px;top:1815px;display:block;'></div>",
                      "<div id='chart46' class='subchart' style='left:193px;top:1815px;display:block;'></div>",
                      "<div id='chart47' class='subchart' style='left:386px;top:1815px;display:block;'></div>",
                      "<div id='chart48' class='subchart' style='left:579px;top:1815px;display:block;'></div>",
                      "<div id='chart49' class='subchart' style='left:0px;top:1980px;display:block;'></div>",
                      "<div id='chart50' class='subchart' style='left:193px;top:1980px;display:block;'></div>"
                    ];

    var subchart_innerHTML = subcharts.slice(0, n_domains).join("");
    document.getElementById("chart").innerHTML = subchart_innerHTML;

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
              var name = data[row_i]["DOMAIN"].replace(/_/g, " ");
            }
        };

        drawWordCloud(domain_words, name, domain_i);

      };
  });
}

function drawWordCloud(domain_words, name, i) {

  var svg_location = "#chart" + (i+1);
  var margin = {top: 25, right: 5, bottom: 25, left: 5};
  var width = 193, height = 130;
  var color = cloudPalette[i];
  var titleColor = titlePalette[i];
  var word_count = {};

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
    .style("opacity", "0.7")

  if (domain_words.length == 1){
      word_count[domain_words[0]] = 1;
    } else {
      domain_words.forEach(function(word){
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
  var word_entries = d3.entries(word_count);
  var unique_words = domain_words.filter((item, j, ar) => ar.indexOf(item) === j);
  const wordScale = d3.scaleLinear()
    .domain([0, d3.max(word_entries, function(d) {
        return d.value;
      })
     ])
    .range([1,14])
  console.log(wordScale)

  var svg_cloud = d3.select(svg_location).append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")

  var layout = d3.layout.cloud()
    .size([width - margin.left, height - margin.top])
    .words(unique_words.map(function(d) { return {text: d}; }))
    .padding(0.5)
    .rotate(0)
    .fontSize(function(d) { return wordScale(word_count[d.text]) })
    .on("end", draw);
  layout.start();

  function draw(words) {
    svg_cloud
      .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + 48 + ")")
        .selectAll("text")
          .data(words)
        .enter().append("text")
          .style("font-size", function(d) { return d.size + "px"; })
          .attr("fill", color)
          .attr("text-anchor", "middle")
          .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d) { return d.text; })
          .on("mouseover", function(d, i) {
            d3.select(this).raise()
                .style("font-size", function(d) { return Math.max(d.size + 3, 12) + "px"; })
                .style("fill", "black")
                .style("font-weight", "bold")
            tooltip.html("<i>r<sub>pb</sub></i> = " + word_count[this.innerHTML] / 1000 )
                .style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY + 20 + "px");
            return tooltip.style("visibility", "visible")
          })
          .on("mouseout", function(d, i) {
            d3.select(this)
                .style("font-size", function(d) { return d.size + "px"; })
                .style("fill", color)
                .style("font-weight", "normal");
            return tooltip.style("visibility", "hidden")
          });
    }

  d3.select(svg_location).insert("text")
      .style("font-size", "12px")
      .style("font-family", "Avenir")
      .style("text-align", "center")
      .style("background-color", color)
      .style("opacity", 0.5)
      .style("padding", "2px")
      .style("padding-top", "3px")
      .style("border-radius", "3px")
      .style("position", "absolute")
      .style("height", "22px")
      .style("width", width - 8 + "px")
      .style("margin-left", -1 * (width - 4) + "px")
      .style("margin-top", -7 + "px")
      .text(" ");

    d3.select(svg_location).insert("text")
      .style("font-size", "12px")
      .style("font-family", "Avenir")
      .style("text-align", "center")
      .style("padding", "2px")
      .style("padding-top", "3px")
      .style("border-radius", "3px")
      .style("position", "absolute")
      .style("width", width - 8 + "px")
      .style("margin-left", -1 * (width - 4) + "px")
      .style("margin-top", -7 + "px")
      .text(name);
}

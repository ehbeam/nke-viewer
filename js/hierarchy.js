function loadHierarchy() {

  document.getElementById("intro_container").style.display = "none";
  document.getElementById("domain_container").innerHTML = "";
  document.getElementById("chart").innerHTML = "";

var margin = {top: 0, right: 300, bottom: 50, left: -90}
    width = 1220 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom,
    imsize = 24,
    font = "Avenir",
    suffix = "";

var i = 0,
  duration = 750;

var svg_loc = "#hierarchy";

var svg_hier = d3.select(svg_loc).append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var nodes = [
  { id: "VISION_k6", group: 1, label: "Vision", level: 1, color: "#924DA0", xfix: 275, yfix: 92, image: "figures/k06/VISION" },
  { id: "MEMORY_k6", group: 1, label: "Memory", level: 1, color: "#5B81BD", xfix: 275, yfix: 247, image: "figures/k06/MEMORY" },
  { id: "REWARD_k6", group: 1, label: "Reward", level: 1, color: "#C16137", xfix: 275, yfix: 383, image: "figures/k06/REWARD" },
  { id: "COGNITION_k6", group: 1, label: "Cognition", level: 1, color: "#DCC447", xfix: 275, yfix: 490, image: "figures/k06/COGNITION" },
  { id: "MANIPULATION_k6", group: 1, label: "Manipulation"    , level: 1, color: "#43A971", xfix: 275, yfix: 572, image: "figures/k06/MANIPULATION" },
  { id: "LANGUAGE_k6", group: 1, label: "Language", level: 1, color: "#D19A17", xfix: 275, yfix: 641, image: "figures/k06/LANGUAGE" },
  { id: "VISION_k8", group: 2, label: "Vision", level: 2, color: "#924DA0", xfix: 675, yfix: 92, image: "figures/k08/VISION"  },
  { id: "MEMORY_k8", group: 2, label: "Memory", level: 2, color: "#5B81BD", xfix: 675, yfix: 194, image: "figures/k08/MEMORY"  },
  { id: "EMOTION_k8", group: 2, label: "Emotion", level: 2, color: "#5B81BD", xfix: 675, yfix: 301, image: "figures/k08/EMOTION" },
  { id: "REWARD_k8", group: 2, label: "Reward", level: 2, color: "#C16137", xfix: 675, yfix: 383, image: "figures/k08/REWARD" },
  { id: "COGNITION_k8", group: 2, label: "Cognition", level: 2, color: "#DCC447", xfix: 675, yfix: 490, image: "figures/k08/COGNITION" },
  { id: "MANIPULATION_k8", group: 2, label: "Manipulation", level: 2, color: "#43A971", xfix: 675, yfix: 560, image: "figures/k08/MANIPULATION" },
  { id: "LANGUAGE_k8", group: 2, label: "Language", level: 2, color: "#D19A17", xfix: 675, yfix: 612, image: "figures/k08/LANGUAGE" },
  { id: "HEARING_k8", group: 2, label: "Hearing", level: 2, color: "#D19A17", xfix: 675, yfix: 654, image: "figures/k08/HEARING" },
  { id: "VISION_k22", group: 3, label: "Vision", level: 3, color: "#924DA0", xfix: 1075, yfix: 80, image: "figures/k22/VISION" },
  { id: "MEANING_k22", group: 3, label: "Meaning", level: 3, color: "#924DA0", xfix: 1075, yfix: 105, image: "figures/k22/MEANING" },
  { id: "RECALL_k22", group: 3, label: "Recall", level: 3, color: "#797ED2", xfix: 1075, yfix: 137, image: "figures/k22/RECALL" },
  { id: "RETRIEVAL_k22", group: 3, label: "Retrieval", level: 3, color: "#797ED2", xfix: 1075, yfix: 162, image: "figures/k22/RETRIEVAL" },
  { id: "ENCODING_k22", group: 3, label: "Encoding", level: 3, color: "#5B81BD", xfix: 1075, yfix: 194, image: "figures/k22/ENCODING" },
  { id: "WORD_k22", group: 3, label: "Word", level: 3, color: "#5B81BD", xfix: 1075, yfix: 219, image: "figures/k22/WORD"  },
  { id: "MEMORY_k22", group: 3, label: "Memory", level: 3, color: "#5B81BD", xfix: 1075, yfix: 244, image: "figures/k22/MEMORY" },
  { id: "EPISODIC_MEMORY_k22", group: 3, label: "Episodic Memory", level: 3, color: "#5B81BD", xfix: 1075, yfix: 269, image: "figures/k22/EPISODIC_MEMORY" },
  { id: "EMOTION_k22", group: 3, label: "Emotion", level: 3, color: "#5B81BD", xfix: 1075, yfix: 301, image: "figures/k22/EMOTION" },
  { id: "ANTICIPATION_k22", group: 3, label: "Anticipation", level: 3, color: "#C16137", xfix: 1075, yfix: 333, image: "figures/k22/ANTICIPATION" },
  { id: "SALIENCE_k22", group: 3, label: "Salience", level: 3, color: "#C16137", xfix: 1075, yfix: 358, image: "figures/k22/SALIENCE" },
  { id: "AROUSAL_k22", group: 3, label: "Arousal", level: 3, color: "#C16137", xfix: 1075, yfix: 383, image: "figures/k22/AROUSAL" },
  { id: "DECISION_MAKING_k22", group: 3, label: "Decision Making", level: 3, color: "#C16137", xfix: 1075, yfix: 408, image: "figures/k22/DECISION_MAKING" },
  { id: "REWARD_k22", group: 3, label: "Reward", level: 3, color: "#C16137", xfix: 1075, yfix: 433, image: "figures/k22/REWARD" },
  { id: "CONTEXT_k22", group: 3, label: "Context", level: 3, color: "#DCC447", xfix: 1075, yfix: 465, image: "figures/k22/CONTEXT" },
  { id: "COGNITION_k22", group: 3, label: "Cognition", level: 3, color: "#DCC447", xfix: 1075, yfix: 490, image: "figures/k22/COGNITION" },
  { id: "REACTION_TIME_k22", group: 3, label: "Reaction Time", level: 3, color: "#DCC447", xfix: 1075, yfix: 515, image: "figures/k22/REACTION_TIME" },
  { id: "MANIPULATION_k22", group: 3, label: "Manipulation", level: 3, color: "#43A971", xfix: 1075, yfix: 547, image: "figures/k22/MANIPULATION" },
  { id: "HAND_k22", group: 3, label: "Hand", level: 3, color: "#43A971", xfix: 1075, yfix: 572, image: "figures/k22/HAND" },
  { id: "EXECUTION_k22", group: 3, label: "Execution", level: 3, color: "#43A971", xfix: 1075, yfix: 597, image: "figures/k22/EXECUTION" },
  { id: "LANGUAGE_k22", group: 3, label: "Language", level: 3, color: "#D19A17", xfix: 1075, yfix: 629, image: "figures/k22/LANGUAGE" },
  { id: "HEARING_k22", group: 3, label: "Hearing", level: 3, color: "#D19A17", xfix: 1075, yfix: 654, image: "figures/k22/HEARING" }
]

var links = [
  { target: "VISION_k8", source: "VISION_k6" , strength: 0.82 },
  { target: "MEMORY_k8", source: "MEMORY_k6" , strength: 0.68 },
  { target: "EMOTION_k8", source: "MEMORY_k6" , strength: 0.59 },
  { target: "REWARD_k8", source: "REWARD_k6" , strength: 0.93 },
  { target: "COGNITION_k8", source: "COGNITION_k6" , strength: 0.87 },
  { target: "MANIPULATION_k8", source: "MANIPULATION_k6" , strength: 0.88 },
  { target: "LANGUAGE_k8"  , source: "LANGUAGE_k6", strength: 0.54 },
  { target: "HEARING_k8"  , source: "LANGUAGE_k6", strength: 0.57 },
  { target: "VISION_k22", source: "VISION_k8" , strength: 0.52 },
  { target: "MEANING_k22", source: "VISION_k8" , strength: 0.28 },
  { target: "RECALL_k22", source: "VISION_k8" , strength: 0.39 },
  { target: "RECALL_k22", source: "MEMORY_k8" , strength: 0.46 },
  { target: "RETRIEVAL_k22", source: "VISION_k8" , strength: 0.29 },
  { target: "RETRIEVAL_k22", source: "MEMORY_k8" , strength: 0.48 },
  { target: "ENCODING_k22"  , source: "MEMORY_k8", strength: 0.79 },
  { target: "WORD_k22"  , source: "MEMORY_k8", strength: 0.45 },
  { target: "MEMORY_k22", source: "MEMORY_k8" , strength: 0.39 },
  { target: "EPISODIC_MEMORY_k22", source: "MEMORY_k8" , strength: 0.79 },
  { target: "EMOTION_k22", source: "EMOTION_k8" , strength: 1.00 },
  { target: "ANTICIPATION_k22", source: "REWARD_k8" , strength: 0.63 },
  { target: "SALIENCE_k22", source: "REWARD_k8" , strength: 0.35 },
  { target: "AROUSAL_k22", source: "REWARD_k8" , strength: 0.36 },
  { target: "DECISION_MAKING_k22"  , source: "REWARD_k8", strength: 0.45 },
  { target: "REWARD_k22"  , source: "REWARD_k8", strength: 0.46 },
  { target: "CONTEXT_k22", source: "COGNITION_k8" , strength: 0.38 },
  { target: "COGNITION_k22", source: "COGNITION_k8" , strength: 0.53 },
  { target: "REACTION_TIME_k22", source: "COGNITION_k8" , strength: 0.42 },
  { target: "MANIPULATION_k22", source: "MANIPULATION_k8" , strength: 0.53 },
  { target: "HAND_k22", source: "MANIPULATION_k8" , strength: 0.39 },
  { target: "EXECUTION_k22", source: "MANIPULATION_k8" , strength: 0.47 },
  { target: "LANGUAGE_k22"  , source: "LANGUAGE_k8", strength: 0.73 },
  { target: "HEARING_k22"  , source: "LANGUAGE_k8", strength: 0.3 },
  { target: "HEARING_k22"  , source: "HEARING_k8", strength: 0.91 }
]

d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
  this.parentNode.appendChild(this);
  });
};

function getNeighbors(node) {
  return links.reduce(function (neighbors, link) {
      if (link.target.id === node.id) {
        neighbors.push(link.source.id)
      } else if (link.source.id === node.id) {
        neighbors.push(link.target.id)
      }
      return neighbors
    },
    [node.id]
  )
}

function isNeighborLink(node, link) {
  return link.target.id === node.id || link.source.id === node.id
}


function getNodeColor(node, neighbors) {
  return node.color
}


function getLinkColor(node, link) {
  if (link.source == "k0") { return "white"} else {
    return "gray"
  }
}

function getTextColor(node, neighbors) {
  return "black"
}

// Simulation setup with all forces
var linkForce = d3
  .forceLink()
  .id(function (link) { return link.id })
  .strength(function (link) { return link.strength })

var simulation = d3
  .forceSimulation()
  .force('link', linkForce)
  .force('charge', d3.forceManyBody().strength(-120))
  .force('center', d3.forceCenter(width / 2, height / 2))

var dragDrop = d3.drag().on('start', function (node) {
  node.fx = node.x
  node.fy = node.y
}).on('drag', function (node) {
  simulation.alphaTarget(0.7).restart()
  node.fx = d3.event.x
  node.fy = d3.event.y
}).on('end', function (node) {
  if (!d3.event.active) {
    simulation.alphaTarget(0)
  }
  node.fx = null
  node.fy = null
})

var linkElements = svg_hier.append("g")
  .attr("class", "links")
  .selectAll("path")
  .data(links)
  .enter().append("path")
    .attr("stroke-width", function(link) { return link.strength * 12 })
    .attr("fill", "none")
    .attr("opacity", 0.85)
    .attr("stroke", function (link) { if (link.source == "k0") { return "white"} else { return "#ededed" } })

var nodeElements = svg_hier.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
    .attr("r", 7)
    .attr("fill", getNodeColor)
    .attr("opacity", 0.5)
    .call(dragDrop);

var nodeBrains = svg_hier.append("g")
  .attr("class", "brain")
  .selectAll("brain")
  .data(nodes)
  .enter().append("image")
    .attr("id", function(d) { return d.id + "_brain" })
    .attr("xlink:href", function(d) { return d.image + "_z.png"; })
    .attr("height", function (d) { return (3-d.level) * 15 + 25; });
           
var nodeWords = svg_hier.append("g")
  .attr("class", "word")
  .selectAll("word")
  .data(nodes)
  .enter().append("image")
    .attr("xlink:href", function(d) { return d.image + "_wordcloud.png"; })
    .attr("height", function (d) { return (3-d.level) * 15 + 25; })
    .attr("opacity", 0.5)

var textElements = svg_hier.append("g")
  .attr("class", "texts")
  .selectAll("text")
  .data(nodes)
  .enter().append("text")
    .text(function (node) { return  node.label })
    .attr("font-famiy", "Avenir")
    .attr("font-size", function (d) { 
          if (d.level == 1) { return 26 }
          if (d.level == 2) { return 21 }
          if (d.level == 3) { return 16 }
        })
    .attr("font-weight", "bold")
    .attr("fill", function (d) { return d.color })
    .attr("dx", -20)
    .attr("dy", "0.3em")
    .attr("text-anchor", "end")

simulation.nodes(nodes).on('tick', () => {
  nodeElements
    .attr('cx', function (d) { return d.xfix })
    .attr('cy', function (d) { return d.yfix })
  textElements
    .attr('x', function (d) { return d.xfix - 5 })
    .attr('y', function (d) { return d.yfix })
  nodeBrains
    .attr('x', function (d) { return d.xfix - ((3-d.level) * 10 + 25)/2 })
    .attr('y', function (d) { return d.yfix - ((3-d.level) * 15 + 25)/2 })
    .on("mouseover", function(d) {
      d3.select(this.parentNode).raise()
      d3.select(this).raise()
      .transition().duration(500)
      .attr("height", 150);
    })
    .on("mouseout", function(d) {
      d3.select(this)
      .transition().duration(500)
      .attr("height", (3-d.level) * 15 + 25)
    })
  nodeWords
    .attr('x', function (d) { return d.xfix + (3-d.level) * 10 + 15 })
    .attr('y', function (d) { return d.yfix - ((3-d.level) * 15 + 25)/2 })
    .on("mouseover", function(d) {
      d3.select(this.parentNode).raise()
      d3.select(this).raise()
      .transition().duration(500)
      .attr("height", 130)
      .attr("opacity", 1);
    })
    .on("mouseout", function(d) {
      d3.select(this)
      .transition().duration(500)
      .attr("height", (3-d.level) * 15 + 25)
      .attr("opacity", 0.5)
    })
  linkElements
    .attr("d", d => {
          return `
            M 
              ${d.source.xfix} ${d.source.yfix} 
            C 
              ${(d.source.xfix + d.target.xfix) / 2} ${d.source.yfix} 
              ${(d.source.xfix + d.target.xfix) / 2} ${d.target.yfix} 
              ${d.target.xfix} ${d.target.yfix}
          `
        })
})

simulation.force("link").links(links)

}

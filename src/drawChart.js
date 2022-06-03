import * as d3 from "d3";

const drawChart = (element, data) => {
  const colors = ["#0CA85D", "#9F43CC", "#2B87E3", "#EBA10F"]; //blue, yellow, green, purple
  const boxSize = 500;

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "130%")
    .attr("width", "130%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().innerRadius(150).outerRadius(220);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();

  //recipe label 
  const recipe = svg
    .append('g')
    .attr('class', 'bar-header')
    .attr('transform', `translate(-80, 2)`)
    .attr('font-weight', 900)
    .style('font-size', '2.5em')
    .append('text');

  recipe.append('tspan').text('Recipe A');

  //Sub label (time taken)
  recipe
    .append('tspan')
    .attr('x', 35)
    .attr('dy', '1.8em')
    .style('font-size', '0.6em')
    .style('fill', '#555')
    .attr('font-weight', 400)
    .text('2 Hours');
    
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);
    
};

export default drawChart;
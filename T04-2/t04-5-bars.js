//Chart Function
const createBarChart = (data) => {
    //Sizes - logical vs display
    const viewW = 500; 
    const viewH = Math.max(220, data.length * 28);//width and height available for chart
    const displayW = 640; 
    const displayH = Math.min(480, data.length * 24 + 40); //visible width and height of SVG
    //Create SVG and bind rows
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${viewW} ${viewH}`)
        .attr("width", displayW)
        .attr("height", displayH)
        .style("border", "1px solid #ccc");
    //Scale - T04-6
    const xMax = d3.max(data, d => d.count);//find max value in data
    const xScale = d3.scaleLinear()//create linear scale for x-axis
        .domain([0, xMax])//input domain
        .range([0, viewW]);
    const yScale = d3.scaleBand()//create band scale for y-axis
        .domain(data.map(d => d.screenSize))//input domain
        .range([0, viewH])//output range
        .paddingInner(0.2)
        .paddingOuter(0.1);
    //Old rect drawing code - T04-6 -- Replaced in T04-7
    /*
    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", d => yScale(d.screenSize))
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "steelblue");
    */

   //New code for bars
   const labelX = 100;
   const barAndLabel = svg
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(0, ${yScale(d.screenSize)})`);
    //y is 0 because the group sets vertical position via transform
    barAndLabel.append("rect")
        .attr("x", labelX)//bar starts at x = 100
        .attr("y", 0)
        .attr("width", d => xScale(d.count))// scale width fits the viewbox
        .attr("height", yScale.bandwidth())//bar thickness based on band scale
        .attr("fill", "steelblue");
    barAndLabel.append("text")
        .text(d => d.screenSize)
        .attr("x", labelX)
        .attr("y", 15)//adjusted to center text vertically in bar
        .attr("text-anchor", "end")
        .attr("font-size", "13px")
    //Category text (right-aligned at x = 100 at the left of bar)
    barAndLabel.append("text")
        .text(d => d.count)//numeric label
        .attr("x", d => labelX + xScale(d.count) + 4)
        .attr("y", 12) // Change this value based on design
        .style("font-family", "sans-serif")
        .style("font-size", "13px");
    
};


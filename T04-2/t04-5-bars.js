//Chart Function
const createBarChart = (data) => {
    const viewW = 500, viewH = 1600;//width and height available for chart
    //SVG rendered size on screen
    const displayW = 640, displayH = 420; //visible width and height of SVG
    //Create SVG and bind rows
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${viewW} ${viewH}`)
        .attr("width", displayW)
        .attr("height", displayH)
        .style("border", "1px solid black")
    const xMax = d3.max(data, d => d.count);//find max value in data
    const xScale = d3.scaleLinear()//create linear scale for x-axis
        .domain([0, xMax])//input domain
        .range([0, viewW]);
    const yScale = d3.scaleBand()//create band scale for y-axis
        .domain(data.map(d => d.screenSize))//input domain
        .range([0, viewH])//output range
        .paddingInner(0.2)
        .paddingOuter(0.1);
    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", d => yScale(d.screenSize))
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "steelblue");
};


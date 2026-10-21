//Chart Function
const createBarChart = (data) => {
    //Create SVG and bind rows
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
            .attr("viewBox","0 0 1200 400")
            .style("border", "1px solid black")
        .selectAll("rect")
        .data(data)
        .join("rect")
        //give each bar a class tied to data value for styling
            .attr("class", d => {
                console.log(d);//inspect each row in the console
                return `bar bar-${d.count}`;
            })
            .attr("width", d => d.count)//uses numeric column
            .attr("height", 16)//fixed bar height
};


d3.csv("data/screensize_count.csv", d => {console.log(d);});
d3.csv("data/screensize_count.csv", d => {
  return {
    screenSize: +d.screensize_inch,// convert string to number with +
    count: +d.count
  };
}).then(data => {
    console.log(data);
    console.log("rows: " + data.length);
    console.log("max: " + d3.max(data, d => d.count));
    console.log("min: " + d3.min(data, d => d.count));
    console.log("extent: " + d3.extent(data, d => d.count)); //[min, max]
    //Optional: sort data by count
    data.sort((a, b) => d3.descending(a.count, b.count));
    //Hand off data to chart builder
    createBarChart(data);
});

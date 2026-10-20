d3.csv("data/screensize_count.csv", d => {console.log(d);});
d3.csv("data/screensize_count.csv", d => {
  return {
    screenSize: +d.screensize_inch,
    count: +d.count
  };
}).then(data => {
    console.log(data);
});
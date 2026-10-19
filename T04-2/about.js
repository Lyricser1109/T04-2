// Render the About Us page into its container in index.html.
(() => {
  const page = document.querySelector('#about');

  const template = `
      <div class="container interior-page">
        <p class="eyebrow">ABOUT POWERWISE</p>
        <div class="about-hero"><div><h1 id="about-heading" tabindex="-1">Good questions.<br><span>Brighter habits.</span></h1><p class="page-intro">Understanding your home’s energy use starts with a little curiosity. We’re here to make that first step feel simple.</p></div></div>
        <div class="about-grid"><article><p class="eyebrow">WHY WE’RE HERE</p><h2>Energy information,<br>made approachable.</h2><p>Powerwise is an educational website about appliance energy consumption in Australian homes. It brings familiar appliances and simple explanations together, helping you explore what energy use can look like.</p><p>Our first stop is the television: a familiar part of the living room, and a useful way to see the relationship between power, time and energy.</p></article><article class="about-note"><span class="icon-box"><svg class="icon"><use href="#icon-leaf"/></svg></span><h2>A starting point for learning</h2><p>This learning project uses graphs exported from KNIME to explore television models and energy use. Findings reflect the supplied dataset and the groupings shown in each chart.</p><p>For a real purchase, check the specific model’s Australian Energy Rating Label and manufacturer information.</p><a href="#televisions" class="text-link">Explore television energy use <svg class="icon"><use href="#icon-arrow"/></svg></a></article></div>
        <div class="about-bottom"><span class="tiny-sun">✳</span><p>A little more informed.<br><strong>A little more powerwise.</strong></p></div>
      </div>`;

  // Convert the template markup into DOM nodes and display the page.
  const content = document.createRange().createContextualFragment(template);
  page.replaceChildren(content);
})();

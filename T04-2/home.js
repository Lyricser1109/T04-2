// Render the Home page into its container in index.html.
(() => {
  const page = document.querySelector('#home');

  const template = `
      <div class="container hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="tiny-sun">✳</span> EVERYDAY ENERGY, UNDERSTOOD</p>
          <h1 id="home-heading" tabindex="-1">Small choices. Less energy.<br><span>Better living.</span></h1>
          <p class="hero-description">Get to know the energy behind your everyday appliances. A brighter starting point for energy-aware Australian homes.</p>
          <a class="button button-primary" href="#televisions">Explore televisions <svg class="icon"><use href="#icon-arrow"/></svg></a>
          <div class="hero-footnote"><span class="small-line"></span> Made for curious minds. And Australian homes.</div>
        </div>
      </div>

      <div class="container"><div class="principles-strip">
        <div><span class="strip-number">01</span><p><strong>Understand your usage</strong><span>Make sense of watts and kilowatt-hours.</span></p></div>
        <div><span class="strip-number">02</span><p><strong>Know what to look for</strong><span>Consider power, viewing time and settings.</span></p></div>
        <div><span class="strip-number">03</span><p><strong>Think beyond the price tag</strong><span>Consider energy over the long run.</span></p></div>
      </div></div>

      <section class="container explore-section" aria-labelledby="explore-heading">
        <div class="section-heading"><div><p class="eyebrow">A GOOD PLACE TO START</p><h2 id="explore-heading">Your home. Your energy.</h2></div><p>Every appliance has a story.<br>Let’s start with what powers yours.</p></div>
        <div class="topic-grid">
          <a href="#televisions" class="topic-card featured"><span class="icon-box"><svg class="icon"><use href="#icon-tv"/></svg></span><span class="card-kicker">THE LIVING ROOM</span><h3>Televisions</h3><p>Big screens, little details. Explore how screen size and viewing time shape energy use.</p><span class="card-link">Find your perspective <svg class="icon"><use href="#icon-arrow"/></svg></span></a>
          <article class="topic-card"><span class="icon-box"><svg class="icon"><use href="#icon-bolt"/></svg></span><span class="card-kicker">THE BASICS</span><h3>What’s a kilowatt-hour?</h3><p>A kilowatt-hour (kWh) measures energy. A 100-watt appliance running for 10 hours uses 1 kWh.</p><span class="card-note">Small unit. Useful insight.</span></article>
          <a href="#about" class="topic-card"><span class="icon-box"><svg class="icon"><use href="#icon-home"/></svg></span><span class="card-kicker">OUR PURPOSE</span><h3>A more aware Australia</h3><p>We’re making appliance energy easier to explore, one everyday question at a time.</p><span class="card-link">Get to know Powerwise <svg class="icon"><use href="#icon-arrow"/></svg></span></a>
        </div>
      </section>`;

  // Convert the template markup into DOM nodes and display the page.
  const content = document.createRange().createContextualFragment(template);
  page.replaceChildren(content);
})();

// Render the Televisions page into its container in index.html.
(() => {
  const page = document.querySelector('#televisions');

  // Each question owns its graph filenames, captions and accessible descriptions.
  // Files are stored in public/graphs inside the T01 folder.
  const questions = [
    {
      title: 'What type of TV screen technologies are currently available in Australia and which are the most frequent?',
      observation: 'The supplied chart includes LCD (LED), LCD and OLED. LCD (LED) accounts for the largest share of the records shown.',
      graphs: [
        {
          file: 'Question 1.png',
          caption: 'Distribution of screen technologies',
          alt: 'Pie chart showing LCD (LED) as the largest category, followed by LCD, with OLED the smallest category.',
        },
      ],
    },
    {
      title: 'What screen sizes are available and which are most frequent?',
      observation: 'The exports show a range of screen sizes, with 65-inch and 55-inch screens among the most frequent categories. Both the overall distribution and the ranked comparison are included below.',
      graphs: [
        {
          file: 'Question 2.png',
          caption: 'Screen-size frequency distribution',
          alt: 'Bar chart of occurrence counts for screen sizes in inches, with 65-inch and 55-inch categories having the tallest bars.',
        },
        {
          file: 'Question 2 - 1.png',
          caption: 'Ranked screen-size comparison',
          alt: 'Ranked bar chart showing 65-inch screens first, followed by 55-inch, 75-inch, 85-inch, 43-inch, 49-inch, 32-inch, 24-inch, 50-inch and 42-inch screens.',
        },
      ],
    },
    {
      title: 'Which brands have the largest number of models?',
      observation: 'KOGAN has the highest model count among the labels shown, followed by LG and SAMSUNG ELECTRONICS. The export treats SAMSUNG and SAMSUNG ELECTRONICS as separate labels.',
      graphs: [
        {
          file: 'Question 3.png',
          caption: 'Model counts by brand',
          alt: 'Bar chart of model counts by brand. KOGAN is highest, followed by LG, SAMSUNG ELECTRONICS, SAMSUNG and HISENSE.',
        },
      ],
    },
    {
      title: 'Which type of screen technology consumes the least amount of power?',
      observation: 'LCD has the lowest median Avg_mode_power in this chart, followed by LCD (LED) and OLED. Screen size should also be considered when comparing technologies.',
      graphs: [
        {
          file: 'Question 4.png',
          caption: 'Median power metric by screen technology',
          alt: 'Bar chart of median Avg_mode_power by technology, showing LCD lowest, LCD (LED) higher and OLED highest.',
        },
      ],
    },
    {
      title: 'What is the relationship between screen size and power use?',
      observation: 'The scatter plot shows an overall increase in power use as screen size increases, with variation between models at the same screen size.',
      graphs: [
        {
          file: 'Question 5.png',
          caption: 'Screen size and power use',
          alt: 'Scatter plot of screen size in inches against Avg_mode_power. Larger screens generally have higher values, with a wide spread among larger models.',
        },
      ],
    },
    {
      title: 'What is the relationship between star rating and screen size?',
      observation: 'Star Rating Index values vary widely within many screen sizes. The plot does not show a clear, consistent rise or fall in rating as screen size increases.',
      graphs: [
        {
          file: 'Question 6.png',
          caption: 'Screen size and Star Rating Index',
          alt: 'Scatter plot of screen size in inches against Star Rating Index, showing a broad range of ratings at many screen sizes without a clear linear pattern.',
        },
      ],
    },
    {
      title: 'Are there differences in power consumption between brands?',
      observation: 'The displayed power values differ between brands, with SPARK ELECTRONICS highest in this export. Differences may also reflect the models and screen sizes included for each brand.',
      graphs: [
        {
          file: 'Question 7.png',
          caption: 'Power metric by brand',
          alt: 'Bar chart of Avg_mode_power across selected brands. SPARK ELECTRONICS has the highest displayed value, followed by EMETE.',
        },
      ],
    },
  ];

  const questionSections = questions.map((question, index) => {
    const questionNumber = index + 1;
    const figures = question.graphs.map(graph => {
      const imagePath = `public/graphs/${encodeURIComponent(graph.file)}`;

      return `
        <figure class="research-figure">
          <img
            src="${imagePath}"
            alt="${graph.alt}"
            width="1482"
            height="386"
            loading="lazy"
            decoding="async"
          >
          <figcaption>
            <span>${graph.caption}</span>
            <a href="${imagePath}" target="_blank" rel="noopener"
              aria-label="Open full-size graph: ${graph.caption} (new tab)">
              Open full-size graph <span aria-hidden="true">↗</span>
            </a>
          </figcaption>
        </figure>`;
    }).join('');

    return `
      <section class="research-question" aria-labelledby="question-${questionNumber}-heading">
        <p class="eyebrow">QUESTION ${String(questionNumber).padStart(2, '0')}</p>
        <h2 id="question-${questionNumber}-heading">${question.title}</h2>
        <p class="research-observation">${question.observation}</p>
        ${figures}
      </section>`;
  }).join('');

  const template = `
      <div class="container interior-page">
        <p class="eyebrow">THE LIVING ROOM / TELEVISIONS</p>
        <div class="page-heading-row">
          <div>
            <h1 id="televisions-heading" tabindex="-1">The bigger picture<br>on <span>screen energy.</span></h1>
            <p class="page-intro">Seven questions about television technologies, screen sizes, brands and energy use, explored through graphs from KNIME.</p>
          </div>
          <span class="large-icon" aria-hidden="true"><svg class="icon"><use href="#icon-tv"/></svg></span>
        </div>
        <p class="research-context">These observations describe the supplied dataset. Its source and collection date have not been specified, so the charts do not establish current Australian market availability. Open any graph at full size to read its labels in more detail.</p>
        <div class="research-questions">
          ${questionSections}
        </div>
      </div>`;

  // Convert the template markup into DOM nodes and display the page.
  const content = document.createRange().createContextualFragment(template);
  page.replaceChildren(content);
})();

(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();document.querySelector("#app").innerHTML=`
  <div class="site-shell">
    <header class="topbar" aria-label="Primary navigation">
      <a class="wordmark" href="#top" aria-label="Nursema home"><span class="wordmark-mark">N</span><span>Nursema</span></a>
      <nav class="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="status-pill" href="https://github.com/nursemasdev" target="_blank" rel="noreferrer"><span class="status-dot"></span>Open to ideas</a>
    </header>

    <main id="top">
      <section class="hero section-pad" aria-labelledby="hero-title">
        <div class="hero-kicker"><span class="eyebrow-line"></span>Independent developer · GitHub / nursemasdev</div>
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="hero-index">01 / 04</p>
            <h1 id="hero-title">Useful software,<br /><em>built with intent.</em></h1>
            <p class="hero-lede">I’m Nursema — an aspiring developer turning practical needs into focused tools that are simple to use, thoughtful by design, and useful beyond the first release.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#work">Explore the work <span>↓</span></a>
              <a class="text-link" href="https://github.com/nursemasdev" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
            </div>
          </div>
          <div class="hero-note" aria-label="Portfolio statement">
            <div class="note-symbol">✳</div>
            <p>Small experiments.<br /><strong>Real utility.</strong><br />Room to grow.</p>
            <span class="note-caption">A living portfolio of things I’m learning by making.</span>
          </div>
        </div>
        <div class="hero-footer"><span>Based in the open web</span><span>Scroll to discover <span class="scroll-arrow">↓</span></span></div>
      </section>

      <section class="intro section-pad" id="about" aria-labelledby="about-title">
        <div class="section-label"><span>02</span><span>About the maker</span></div>
        <div class="intro-grid">
          <h2 id="about-title">Curious enough<br />to ask <span>why.</span></h2>
          <div class="intro-copy">
            <p>I’m an amateur developer with a simple ambition: build projects that solve problems I actually understand, then make them useful to other people too.</p>
            <p>My work sits between product curiosity and hands-on engineering. I care about privacy, clear interfaces, and the small decisions that make software feel dependable.</p>
            <div class="about-meta"><span>Currently learning</span><strong>TypeScript · JavaScript · Android</strong></div>
          </div>
        </div>
      </section>

      <section class="skills-band section-pad" aria-labelledby="skills-title">
        <div class="section-label"><span>03</span><span>Tools & approach</span></div>
        <div class="skills-layout">
          <h2 id="skills-title">The toolkit<br /><span>in progress.</span></h2>
          <div class="skill-list">
            <div class="skill-item"><span>01</span><strong>TypeScript / JavaScript</strong><p>Building with the languages behind the projects I’m actively developing.</p></div>
            <div class="skill-item"><span>02</span><strong>Local-first thinking</strong><p>Designing around privacy, ownership, and useful offline-friendly experiences.</p></div>
            <div class="skill-item"><span>03</span><strong>Practical product sense</strong><p>Starting with a real need, then keeping the solution focused and understandable.</p></div>
          </div>
        </div>
      </section>

      <section class="work section-pad" id="work" aria-labelledby="work-title">
        <div class="section-label"><span>04</span><span>Selected work</span></div>
        <div class="work-heading"><h2 id="work-title">Projects with<br /><span>a purpose.</span></h2><p>Two practical builds from an evolving developer journey. Click through to explore the source.</p></div>
        <div class="project-list">
          <article class="project-card project-primary">
            <div class="project-topline"><span class="project-number">01</span><span class="project-type">Android · Privacy</span></div>
            <div class="project-body"><div><h3>AccountVault</h3><p class="project-subtitle">A local-first credential organizer.</p></div><span class="project-glyph">AV</span></div>
            <p class="project-description">A practical Android tool for organizing credentials locally, with encrypted manual backups to Google Drive. Built around the idea that personal data should stay understandable and under the owner’s control.</p>
            <div class="project-footer"><div class="tag-row"><span>TypeScript</span><span>Android</span><span>Local-first</span></div><a class="arrow-link" href="https://github.com/nursemasdev/AccountVault" target="_blank" rel="noreferrer" aria-label="View AccountVault on GitHub">View repository <span>↗</span></a></div>
          </article>
          <article class="project-card project-secondary">
            <div class="project-topline"><span class="project-number">02</span><span class="project-type">Cloudflare · Open source</span></div>
            <div class="project-body"><div><h3>Cloud Mail</h3><p class="project-subtitle">A personal email-management deployment.</p></div><span class="project-glyph cloud-glyph">CM</span></div>
            <p class="project-description">A private, non-commercial deployment based on the open-source Cloud Mail project, used to organize authorized email addresses for personal and family use. Not a public disposable-email service.</p>
            <div class="project-footer"><div class="tag-row"><span>Cloudflare</span><span>Open source</span><span>Private use</span></div><div class="project-links"><a class="arrow-link" href="https://github.com/maillab/cloud-mail" target="_blank" rel="noreferrer">Source <span>↗</span></a><a class="arrow-link" href="https://cloud-mail.cfr223azz.workers.dev/" target="_blank" rel="noreferrer">Live page <span>↗</span></a></div></div>
          </article>
        </div>
      </section>

      <section class="contact section-pad" id="contact" aria-labelledby="contact-title">
        <div class="contact-mark" aria-hidden="true">↗</div>
        <div class="contact-content"><p class="eyebrow">Have a useful idea?</p><h2 id="contact-title">Let’s make<br /><em>something clear.</em></h2><p class="contact-copy">I’m always interested in practical problems, thoughtful feedback, and conversations about building on the open web.</p><div class="contact-links"><a class="button button-light" href="https://github.com/nursemasdev" target="_blank" rel="noreferrer">GitHub profile <span>↗</span></a><a class="contact-text-link" href="https://t.me/vv2x5" target="_blank" rel="noreferrer">Telegram <span>↗</span></a></div></div>
      </section>
    </main>

    <footer class="footer"><div><span class="wordmark-mark small">N</span> Nursema</div><span>© 2026 · Built in public, one useful idea at a time.</span><a href="#top">Back to top ↑</a></footer>
  </div>
`;const l=document.querySelectorAll(".project-card, .skill-item, .intro-copy"),i=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),i.unobserve(s.target))})},{threshold:.12});l.forEach(t=>i.observe(t));

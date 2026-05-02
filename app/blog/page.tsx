const featuredPosts = [
  {
    title: "Jak napisać część teoretyczną pracy dyplomowej?",
    category: "Pisanie prac",
    date: "Poradnik",
    readTime: "6 min",
    text: "Praktyczne wskazówki dotyczące struktury teorii, doboru źródeł, podrozdziałów i logicznego prowadzenia tekstu.",
  },
  {
    title: "Jak przygotować metodologię badań do pracy dyplomowej?",
    category: "Metodologia i badania",
    date: "Poradnik",
    readTime: "7 min",
    text: "Wyjaśnienie, jak uporządkować cel badań, pytania badawcze, hipotezy, metody i narzędzia badawcze.",
  },
  {
    title: "Jak opisać wyniki ankiety w pracy dyplomowej?",
    category: "Metodologia i badania",
    date: "Poradnik",
    readTime: "8 min",
    text: "Jak przedstawić wyniki, tabele, wykresy i wnioski w sposób czytelny oraz zgodny ze strukturą pracy.",
  },
];

const posts = [
  {
    title: "Jak przygotować bibliografię w pracy dyplomowej?",
    category: "Bibliografia i przypisy",
    readTime: "5 min",
  },
  {
    title: "Jak poprawnie robić przypisy w pracy?",
    category: "Bibliografia i przypisy",
    readTime: "5 min",
  },
  {
    title: "Jak sformatować pracę zgodnie z wymaganiami uczelni?",
    category: "Formatowanie",
    readTime: "6 min",
  },
  {
    title: "Checklist przed oddaniem pracy dyplomowej",
    category: "Porady dla studentów",
    readTime: "4 min",
  },
  {
    title: "Jak przygotować prezentację na obronę pracy?",
    category: "Prezentacja i obrona",
    readTime: "6 min",
  },
  {
    title: "Na czym polega korekta pracy dyplomowej?",
    category: "Korekta i redakcja",
    readTime: "5 min",
  },
  {
    title: "Czym różni się korekta od redakcji tekstu?",
    category: "Korekta i redakcja",
    readTime: "5 min",
  },
  {
    title: "Jak przygotować plan pracy dyplomowej?",
    category: "Prace dyplomowe",
    readTime: "6 min",
  },
  {
    title: "Excel czy SPSS — co wybrać do analizy danych?",
    category: "Metodologia i badania",
    readTime: "7 min",
  },
];

const categories = [
  "Wszystkie",
  "Pisanie prac",
  "Prace dyplomowe",
  "Metodologia i badania",
  "Bibliografia i przypisy",
  "Formatowanie",
  "Prezentacja i obrona",
  "Korekta i redakcja",
  "Porady dla studentów",
];

export default function BlogPage() {
  return (
    <main>
      <section className="blog-hero">
        <div className="container blog-hero-grid">
          <div>
            <h1>Blog dla studentów</h1>
            <p>
              Praktyczne poradniki o pisaniu prac, metodologii, bibliografii,
              formatowaniu, korekcie, prezentacji i przygotowaniu materiałów
              akademickich.
            </p>

            <div className="hero-actions">
              <a href="#artykuly" className="primary-button">
                Zobacz artykuły <span>→</span>
              </a>
              <a href="/kalkulator" className="secondary-button">
                Wyceń zlecenie <span>→</span>
              </a>
            </div>
          </div>

          <div className="blog-side-card">
            <strong>Poradniki + SEO</strong>
            <p>
              Blog pomaga użytkownikom znaleźć odpowiedzi na najczęstsze pytania,
              a jednocześnie wspiera widoczność strony w Google.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Najważniejsze poradniki</h2>
            <a href="/kontakt">Zaproponuj temat →</a>
          </div>

          <div className="featured-posts-grid">
            {featuredPosts.map((post) => (
              <article className="featured-post-card" key={post.title}>
                <div className="featured-post-image">📚</div>
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a href="/blog">Czytaj więcej →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="artykuly">
        <div className="container">
          <div className="section-heading">
            <h2>Wszystkie artykuły</h2>
          </div>

          <div className="blog-category-tabs">
            {categories.map((category, index) => (
              <button className={index === 0 ? "active" : ""} key={category}>
                {category}
              </button>
            ))}
          </div>

          <div className="blog-list-grid">
            {posts.map((post) => (
              <article className="blog-list-card" key={post.title}>
                <div className="blog-list-icon">✦</div>
                <div>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <a href="/blog">Czytaj więcej →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container blog-info-grid">
          <div className="blog-info-card">
            <h2>O czym piszemy?</h2>
            <p>
              Na blogu pojawiają się treści dotyczące organizacji pracy,
              przygotowania planu, metodologii, wyników badań, bibliografii,
              formatowania, korekty oraz przygotowania do obrony.
            </p>
          </div>

          <div className="blog-info-card">
            <h2>Potrzebują Państwo konkretnej pomocy?</h2>
            <p>
              Jeśli poradnik nie odpowiada na konkretne pytanie, można przesłać
              zapytanie z opisem sytuacji i materiałami do wyceny.
            </p>
            <a href="/kontakt" className="primary-button">
              Wyślij zapytanie <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo przejść od poradnika do konkretnej wyceny?</h2>
            <p>
              Kalkulator pozwala szybko sprawdzić orientacyjny koszt usługi i
              możliwe opcje płatności.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/kalkulator" className="primary-button">
              Wyceń zlecenie <span>→</span>
            </a>
            <a href="/oferta" className="secondary-button dark-secondary">
              Oferta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
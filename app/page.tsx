const services = [
  {
    title: "Prace dyplomowe",
    text: "Licencjackie, magisterskie i inżynierskie",
    price: "od 40 zł / strona",
    icon: "🎓",
  },
  {
    title: "Korekta i redakcja",
    text: "Poprawa języka, stylu i struktury tekstu",
    price: "od 10 zł / strona",
    icon: "✍️",
  },
  {
    title: "Bibliografia i przypisy",
    text: "Źródła, przypisy, cytowania i bibliografia",
    price: "od 49 zł",
    icon: "📚",
  },
  {
    title: "Część badawcza",
    text: "Metodologia, ankiety i opracowanie wyników",
    price: "od 40 zł / strona",
    icon: "📊",
  },
  {
    title: "Prezentacje",
    text: "Prezentacje PowerPoint i materiały na obronę",
    price: "od 15 zł / slajd",
    icon: "🖥️",
  },
  {
    title: "Projekty i case study",
    text: "Raporty, sprawozdania, case study i projekty",
    price: "od 99 zł",
    icon: "🧩",
  },
];

const steps = [
  "Wybierają Państwo usługę lub opisują zlecenie",
  "Kalkulator pokazuje orientacyjną wycenę",
  "Konsultant potwierdza cenę i termin",
  "Rozpoczynamy realizację po ustaleniu zasad",
  "Przekazujemy ustalony zakres materiałów",
];

const products = [
  ["Szablon pracy licencjackiej Word", "39 zł"],
  ["Checklist przed oddaniem pracy", "19 zł"],
  ["Jak napisać część teoretyczną pracy", "39 zł"],
  ["Prezentacja na obronę — szablon PPTX", "49 zł"],
];

const posts = [
  "Jak napisać część teoretyczną pracy dyplomowej?",
  "Jak przygotować metodologię badań do pracy dyplomowej?",
  "Jak opisać wyniki ankiety w pracy dyplomowej?",
  "Jak przygotować bibliografię w pracy dyplomowej?",
];

const faqs = [
  {
    question: "Czy cena z kalkulatora jest ostateczna?",
    answer:
      "Cena z kalkulatora ma charakter orientacyjny. Ostateczną cenę potwierdza konsultant po analizie opisu, wymagań oraz przesłanych materiałów.",
  },
  {
    question: "Jak działa płatność 50/50?",
    answer:
      "Standardowo pierwsza część płatności wynosi 50% przed rozpoczęciem realizacji, a druga część 50% po przygotowaniu ustalonego zakresu materiałów.",
  },
  {
    question: "Czy mogę wysłać pliki do wyceny?",
    answer:
      "Tak. Można dodać wytyczne z uczelni, temat, plan pracy, fragment tekstu, ankietę, wyniki badań lub inne materiały pomocne w wycenie.",
  },
  {
    question: "Co jeśli nie wiem, jaki zakres wybrać?",
    answer:
      "W kalkulatorze można wybrać opcję indywidualnej wyceny albo opisać zlecenie w formularzu. Konsultant pomoże dobrać właściwy zakres.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="hero-content">
            <h1>
              Pomoc w pisaniu prac na zamówienie, redakcji i przygotowaniu
              materiałów akademickich
            </h1>
            <p>
              Oferujemy kompleksowe wsparcie dla studentów w zakresie
              przygotowania prac licencjackich, magisterskich, inżynierskich,
              zaliczeniowych, referatów, esejów, prezentacji oraz innych
              materiałów akademickich.
            </p>

            <div className="hero-actions">
              <a href="/kalkulator" className="primary-button">
                Wyceń zlecenie <span>→</span>
              </a>
              <a href="/oferta" className="secondary-button">
                Sprawdź ofertę <span>→</span>
              </a>
            </div>
          </div>

          <div className="home-calculator-card">
            <div className="home-calculator-badge">Kalkulator online</div>
            <h2>Kalkulator wyceny zlecenia</h2>
            <p>
              Wybierz rodzaj usługi, zakres, termin realizacji i sprawdź
              orientacyjną cenę. Kalkulator obsługuje także projekty, case study,
              raporty oraz wycenę indywidualną.
            </p>

            <div className="home-calculator-list">
              <div>
                <span>✓</span>
                <strong>Prace dyplomowe i akademickie</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Projekty, raporty i case study</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Korekta, bibliografia i prezentacje</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Zaliczka 50% lub płatność całości</strong>
              </div>
            </div>

            <div className="home-calculator-note">
              Cena z kalkulatora jest orientacyjna. Ostateczne warunki
              potwierdza konsultant po analizie materiałów.
            </div>

            <a href="/kalkulator" className="primary-button full-button">
              Przejdź do kalkulatora <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <strong>Dyskrecja i poufność</strong>
            <span>Państwa dane są bezpieczne</span>
          </div>
          <div>
            <strong>Terminowość</strong>
            <span>Realizacja zgodnie z ustaleniami</span>
          </div>
          <div>
            <strong>Indywidualne podejście</strong>
            <span>Każde zlecenie analizujemy osobno</span>
          </div>
          <div>
            <strong>Płatność 50/50</strong>
            <span>Jasne zasady współpracy</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Najpopularniejsze usługi</h2>
            <a href="/oferta">Zobacz pełną ofertę →</a>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <strong>{service.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container price-process-grid">
          <div className="price-box">
            <h2>Przykładowe ceny</h2>
            <ul>
              <li>
                <span>Praca licencjacka</span>
                <strong>od 40 zł / strona</strong>
              </li>
              <li>
                <span>Praca magisterska</span>
                <strong>od 45 zł / strona</strong>
              </li>
              <li>
                <span>Praca inżynierska</span>
                <strong>od 45 zł / strona</strong>
              </li>
              <li>
                <span>Projekt / case study / raport</span>
                <strong>od 99 zł</strong>
              </li>
            </ul>
            <a href="/cennik" className="secondary-button">
              Zobacz cennik
            </a>
          </div>

          <div className="payment-box">
            <h2>Płatność 50/50</h2>
            <p>
              Standardowo pracujemy w systemie płatności etapowej: 50% przed
              rozpoczęciem realizacji oraz 50% po przygotowaniu ustalonego
              zakresu materiałów.
            </p>
            <a href="/kalkulator" className="primary-button">
              Wyceń zlecenie <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Jak działamy?</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <h2>Opinie klientów</h2>
            <a href="/opinie">Zobacz wszystkie opinie →</a>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                Bardzo dobry kontakt i szybka pomoc. Wszystko zostało
                przygotowane zgodnie z wymaganiami.
              </p>
              <strong>Marta, Poznań</strong>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                Korekta wykonana dokładnie i terminowo. Polecam za profesjonalne
                podejście.
              </p>
              <strong>Karolina, Kraków</strong>
            </div>
            <div className="rating-card">
              <strong>4.9 / 5</strong>
              <span>na podstawie opinii klientów</span>
              <a href="/opinie">Dodaj opinię</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Sklep dla studentów</h2>
            <a href="/sklep">Przejdź do sklepu →</a>
          </div>

          <div className="products-grid">
            {products.map(([name, price]) => (
              <div className="product-card" key={name}>
                <div className="product-thumb">📄</div>
                <h3>{name}</h3>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <h2>Najnowsze artykuły na blogu</h2>
            <a href="/blog">Zobacz blog →</a>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post}>
                <div className="blog-image">📚</div>
                <h3>{post}</h3>
                <a href="/blog">Czytaj więcej →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Najczęściej zadawane pytania</h2>
            <a href="/faq">Zobacz wszystkie FAQ →</a>
          </div>

          <div className="home-faq-grid">
            {faqs.map((item) => (
              <details className="home-faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container final-cta">
          <div>
            <h2>Potrzebują Państwo pomocy akademickiej?</h2>
            <p>
              Proszę skorzystać z kalkulatora online albo przesłać zapytanie z
              opisem zlecenia.
            </p>
          </div>
          <div className="hero-actions">
            <a href="/kalkulator" className="primary-button">
              Wyceń zlecenie <span>→</span>
            </a>
            <a href="/kontakt" className="secondary-button dark-secondary">
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
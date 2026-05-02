const offerCategories = [
  {
    icon: "🎓",
    title: "Prace dyplomowe",
    price: "od 40 zł / strona",
    text: "Wsparcie przy pracach licencjackich, magisterskich i inżynierskich.",
    items: ["Prace licencjackie", "Prace magisterskie", "Prace inżynierskie"],
  },
  {
    icon: "📝",
    title: "Pozostałe prace akademickie",
    price: "od 30 zł / strona",
    text: "Pomoc przy krótszych pracach, projektach, raportach i materiałach zaliczeniowych.",
    items: ["Prace zaliczeniowe", "Referaty", "Eseje", "Raporty", "Case study", "Projekty"],
  },
  {
    icon: "✍️",
    title: "Korekta, redakcja i formatowanie",
    price: "od 10 zł / strona",
    text: "Poprawa języka, stylu, struktury, układu dokumentu oraz przygotowanie tekstu do oddania.",
    items: ["Korekta tekstu", "Redakcja", "Formatowanie", "Poprawa struktury"],
  },
  {
    icon: "📚",
    title: "Bibliografia, przypisy i źródła",
    price: "od 49 zł",
    text: "Pomoc w przygotowaniu bibliografii, przypisów, doborze źródeł oraz uporządkowaniu literatury.",
    items: ["Bibliografia", "Przypisy", "Dobór źródeł", "Wyszukiwanie literatury"],
  },
  {
    icon: "🧩",
    title: "Plan pracy i konspekt",
    price: "od 79 zł",
    text: "Wsparcie przy ustaleniu tematu, planu, spisu treści, celu i założeń pracy.",
    items: ["Plan pracy", "Konspekt", "Spis treści", "Dobór tematu"],
  },
  {
    icon: "📊",
    title: "Część badawcza i analiza danych",
    price: "od 40 zł / strona",
    text: "Pomoc przy metodologii, ankietach, opracowaniu wyników oraz analizie danych.",
    items: ["Metodologia", "Ankiety", "Excel", "SPSS", "Tabele i wykresy"],
  },
  {
    icon: "🖥️",
    title: "Prezentacje multimedialne",
    price: "od 15 zł / slajd",
    text: "Przygotowanie prezentacji PowerPoint, prezentacji na obronę i materiałów do wystąpienia.",
    items: ["PowerPoint", "Prezentacja na obronę", "Notatki", "Konspekt wystąpienia"],
  },
  {
    icon: "🌍",
    title: "Tłumaczenia i korekta językowa",
    price: "od 40 zł / strona",
    text: "Tłumaczenia tekstów akademickich, streszczeń, prezentacji oraz dokumentów aplikacyjnych.",
    items: ["Tłumaczenie tekstu", "Tłumaczenie CV", "Korekta tłumaczenia"],
  },
  {
    icon: "💼",
    title: "Kariera i dokumenty aplikacyjne",
    price: "od 69 zł",
    text: "Pomoc w przygotowaniu CV, listów motywacyjnych, profilu LinkedIn i dokumentów na praktyki.",
    items: ["CV", "List motywacyjny", "LinkedIn", "Dokumenty na staż"],
  },
];

const steps = [
  {
    title: "Wysyłają Państwo zapytanie",
    text: "Można skorzystać z kalkulatora albo przesłać opis zlecenia przez formularz.",
  },
  {
    title: "Analizujemy wymagania",
    text: "Sprawdzamy zakres, temat, termin, materiały oraz wymagania uczelni.",
  },
  {
    title: "Potwierdzamy cenę i termin",
    text: "Cena z kalkulatora jest orientacyjna, a finalne warunki potwierdza konsultant.",
  },
  {
    title: "Rozpoczynamy realizację",
    text: "Standardowo po opłaceniu pierwszej części płatności.",
  },
];

const benefits = [
  "Przejrzysty cennik",
  "Kalkulator wyceny online",
  "Płatność 50/50",
  "Poufność materiałów",
  "Obsługa wielu typów prac",
  "Możliwość dodania plików",
];

export default function OfertaPage() {
  return (
    <main>
      <section className="oferta-hero">
        <div className="container oferta-hero-grid">
          <div>
            <h1>Oferta usług akademickich</h1>
            <p>
              Oferujemy wsparcie w przygotowaniu, redakcji, korekcie,
              formatowaniu oraz opracowaniu różnego rodzaju prac i materiałów
              akademickich. Pomagamy na różnych etapach pracy — od planu i
              struktury, przez część teoretyczną i badawczą, aż po prezentację,
              tłumaczenie oraz dokumenty aplikacyjne.
            </p>

            <div className="hero-actions">
              <a href="/kalkulator" className="primary-button">
                Wyceń zlecenie <span>→</span>
              </a>
              <a href="/cennik" className="secondary-button">
                Sprawdź cennik <span>→</span>
              </a>
            </div>
          </div>

          <div className="oferta-side-card">
            <strong>Nie wiedzą Państwo, którą usługę wybrać?</strong>
            <p>
              Proszę opisać temat, wymagania i aktualny etap pracy. Pomożemy
              dobrać odpowiedni zakres usługi oraz przygotować wycenę.
            </p>
            <a href="/kontakt" className="primary-button full-button">
              Wyślij zapytanie <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Główne kategorie usług</h2>
            <a href="/kalkulator">Oblicz cenę →</a>
          </div>

          <div className="oferta-grid">
            {offerCategories.map((category) => (
              <article className="oferta-card" key={category.title}>
                <div className="service-icon">{category.icon}</div>
                <div className="oferta-card-head">
                  <h3>{category.title}</h3>
                  <strong>{category.price}</strong>
                </div>
                <p>{category.text}</p>

                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="/kalkulator">Wyceń tę usługę →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container oferta-info-grid">
          <div>
            <h2>Co obejmuje przygotowanie pracy?</h2>
            <p>
              Przy zamówieniu przygotowania pracy cena za stronę obejmuje
              podstawową redakcję, formatowanie, przypisy oraz bibliografię w
              zakresie ustalonej pracy. Te elementy są liczone osobno tylko
              wtedy, gdy zamawiane są jako oddzielna usługa do gotowego tekstu.
            </p>
          </div>

          <div className="oferta-check-list">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <span>✓</span>
                <strong>{benefit}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Jak wygląda współpraca?</h2>
          </div>

          <div className="oferta-steps-grid">
            {steps.map((step, index) => (
              <div className="oferta-step-card" key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="oferta-specializations">
            <h2>Obsługiwane dziedziny</h2>
            <p>
              Zakres dostępnych specjalizacji zależy od tematu, terminu oraz
              aktualnej dostępności osób zajmujących się daną dziedziną.
            </p>

            <div className="specialization-tags">
              {[
                "Pedagogika",
                "Psychologia",
                "Zarządzanie",
                "Ekonomia",
                "Finanse i rachunkowość",
                "Administracja",
                "Prawo",
                "Logistyka",
                "Marketing",
                "Socjologia",
                "Pielęgniarstwo",
                "Informatyka",
                "Inżynieria",
                "Budownictwo",
                "Transport",
                "Ochrona środowiska",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo sprawdzić koszt konkretnej usługi?</h2>
            <p>
              Proszę skorzystać z kalkulatora online lub wysłać zapytanie z
              opisem zlecenia i plikami.
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
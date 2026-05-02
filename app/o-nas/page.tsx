const values = [
  {
    title: "Poufność",
    text: "Dane, pliki i szczegóły zlecenia traktujemy jako materiały poufne.",
    icon: "🔒",
  },
  {
    title: "Jasne zasady",
    text: "Przed rozpoczęciem realizacji potwierdzamy zakres, cenę i termin.",
    icon: "📋",
  },
  {
    title: "Terminowość",
    text: "Realizacja odbywa się zgodnie z ustaleniami i wybranym terminem.",
    icon: "⏱️",
  },
  {
    title: "Indywidualne podejście",
    text: "Każde zlecenie analizujemy osobno, zgodnie z wymaganiami i etapem pracy.",
    icon: "🎯",
  },
];

const helpAreas = [
  "prace licencjackie, magisterskie i inżynierskie",
  "korekta, redakcja i formatowanie tekstu",
  "bibliografia, przypisy i dobór źródeł",
  "metodologia, ankiety i opracowanie wyników",
  "prezentacje na obronę i prezentacje multimedialne",
  "tłumaczenia, CV i dokumenty aplikacyjne",
];

const specializations = [
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
  "Informatyka",
  "Inżynieria",
];

const process = [
  {
    title: "Analiza zlecenia",
    text: "Sprawdzamy temat, wymagania, termin, materiały oraz oczekiwany zakres pomocy.",
  },
  {
    title: "Potwierdzenie warunków",
    text: "Przed rozpoczęciem realizacji potwierdzamy cenę, termin i zasady współpracy.",
  },
  {
    title: "Realizacja ustalonego zakresu",
    text: "Przygotowujemy, poprawiamy lub porządkujemy materiały zgodnie z ustaleniami.",
  },
  {
    title: "Kontakt i doprecyzowanie",
    text: "W razie potrzeby prosimy o dodatkowe informacje albo doprecyzowanie wymagań.",
  },
];

export default function ONasPage() {
  return (
    <main>
      <section className="onas-hero">
        <div className="container onas-hero-grid">
          <div>
            <h1>O nas</h1>
            <p>
              Jesteśmy zespołem wspierającym studentów w przygotowaniu, redakcji,
              korekcie i uporządkowaniu materiałów akademickich. Pomagamy na
              różnych etapach pracy — od wyboru tematu i planu, przez część
              teoretyczną i badawczą, aż po formatowanie, bibliografię,
              prezentację oraz dokumenty aplikacyjne.
            </p>

            <div className="hero-actions">
              <a href="/kalkulator" className="primary-button">
                Wyceń zlecenie <span>→</span>
              </a>
              <a href="/kontakt" className="secondary-button">
                Skontaktuj się z nami <span>→</span>
              </a>
            </div>
          </div>

          <div className="onas-side-card">
            <strong>Profesjonalna pomoc akademicka</strong>
            <p>
              Stawiamy na jasne zasady, poufność, indywidualną analizę zlecenia
              oraz dopasowanie zakresu pomocy do potrzeb klienta.
            </p>

            <div className="onas-mini-stats">
              <div>
                <strong>50/50</strong>
                <span>model płatności</span>
              </div>
              <div>
                <strong>PL</strong>
                <span>język główny</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container onas-intro-grid">
          <div>
            <h2>Kim jesteśmy?</h2>
            <p>
              Prace na Zamówienie to serwis przygotowany z myślą o osobach, które
              potrzebują wsparcia w organizacji, redakcji, formatowaniu lub
              uporządkowaniu materiałów akademickich. Pomagamy tam, gdzie
              potrzebna jest struktura, jasny plan, poprawność tekstu i
              dopasowanie materiału do wymagań.
            </p>
          </div>

          <div>
            <h2>Jak rozumiemy pomoc?</h2>
            <p>
              Naszym celem jest uporządkowanie procesu i ułatwienie klientowi
              przejścia przez kolejne etapy pracy. Dlatego przed realizacją
              analizujemy zakres, wymagania, dostępne materiały i termin, a cena
              końcowa jest potwierdzana po sprawdzeniu szczegółów.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <h2>W czym pomagamy?</h2>
            <a href="/oferta">Zobacz ofertę →</a>
          </div>

          <div className="onas-help-grid">
            {helpAreas.map((area) => (
              <div className="onas-help-card" key={area}>
                <span>✓</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Nasze podejście</h2>
          </div>

          <div className="onas-values-grid">
            {values.map((value) => (
              <article className="onas-value-card" key={value.title}>
                <div>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container onas-process-grid">
          <div>
            <h2>Jak pracujemy?</h2>
            <p>
              Każde zapytanie traktujemy indywidualnie. Nawet jeśli klient
              skorzysta z kalkulatora, ostateczna cena i termin mogą zostać
              potwierdzone dopiero po analizie opisu, wymagań i plików.
            </p>

            <a href="/kalkulator" className="primary-button">
              Sprawdź kalkulator <span>→</span>
            </a>
          </div>

          <div className="onas-process-list">
            {process.map((item, index) => (
              <div className="onas-process-item" key={item.title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container onas-specializations">
          <h2>Wybrane dziedziny</h2>
          <p>
            Obsługiwany zakres zależy od tematu, terminu, rodzaju materiału oraz
            dostępności osób zajmujących się daną specjalizacją.
          </p>

          <div className="specialization-tags">
            {specializations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container onas-confidentiality">
          <div>
            <h2>Poufność i bezpieczeństwo</h2>
            <p>
              Przesłane materiały, opisy zleceń, pliki oraz dane kontaktowe są
              wykorzystywane wyłącznie w celu przygotowania wyceny i realizacji
              ustalonego zakresu współpracy.
            </p>
          </div>

          <div className="onas-confidentiality-card">
            <strong>Publicznie nie pokazujemy:</strong>
            <ul>
              <li>danych osobowych klientów;</li>
              <li>adresów e-mail;</li>
              <li>przesłanych plików;</li>
              <li>szczegółów prywatnych zleceń.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo rozpocząć współpracę?</h2>
            <p>
              Proszę skorzystać z kalkulatora albo przesłać zapytanie z opisem
              zlecenia i plikami.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/kalkulator" className="primary-button">
              Wyceń zlecenie <span>→</span>
            </a>
            <a href="/kontakt" className="secondary-button dark-secondary">
              Kontakt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
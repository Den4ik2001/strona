const mainPrices = [
  ["Praca licencjacka", "od 40 zł / strona"],
  ["Praca magisterska", "od 45 zł / strona"],
  ["Praca inżynierska", "od 45 zł / strona"],
  ["Pozostałe prace akademickie", "od 30 zł / strona"],
];

const editingPrices = [
  ["Korekta tekstu", "od 10 zł / strona"],
  ["Redakcja tekstu", "od 10 zł / strona"],
  ["Formatowanie pracy", "od 10 zł / strona"],
  ["Przypisy", "od 10 zł / strona"],
  ["Korekta + formatowanie", "od 15 zł / strona"],
  ["Redakcja + formatowanie", "od 15 zł / strona"],
  ["Korekta + redakcja", "od 15 zł / strona"],
  ["Korekta + redakcja + formatowanie", "od 20 zł / strona"],
  ["Korekta + redakcja + formatowanie + przypisy", "od 25 zł / strona"],
];

const bibliographyPrices = [
  ["Bibliografia", "od 49 zł"],
  ["Bibliografia + przypisy", "od 15 zł / strona"],
  ["Dobór źródeł", "od 99 zł"],
  ["Wyszukiwanie literatury", "od 10 zł / źródło"],
  ["Przygotowanie bibliografii od zera", "od 149 zł"],
  ["Bibliografia + dobór źródeł + przypisy", "wycena indywidualna"],
];

const planPrices = [
  ["Wstępna propozycja tematu", "gratis"],
  ["Samodzielny dobór 3–5 tematów", "od 49 zł"],
  ["Plan pracy", "od 99 zł"],
  ["Konspekt pracy", "od 129 zł"],
  ["Spis treści", "od 79 zł"],
  ["Cel, zakres i założenia pracy", "od 129 zł"],
  ["Dobór tematu + plan pracy", "od 129 zł"],
];

const presentationPrices = [
  ["Prezentacja PowerPoint", "od 15 zł / slajd"],
  ["Prezentacja na obronę", "od 149 zł"],
  ["Notatki do prezentacji", "od 49 zł"],
  ["Konspekt wystąpienia", "od 69 zł"],
];

const researchPrices = [
  ["Przygotowanie ankiety", "od 99 zł"],
  ["Metodologia badań", "od 40 zł / strona"],
  ["Opracowanie wyników badań / ankiety", "od 40 zł / strona"],
  ["Analiza danych Excel", "od 199 zł"],
  ["Analiza danych SPSS", "od 299 zł"],
  ["Cel, pytania i hipotezy badawcze", "od 149 zł"],
  ["Pełna część badawcza", "wycena indywidualna"],
];

const translationPrices = [
  ["Tłumaczenie tekstu", "od 40 zł / strona"],
  ["Tłumaczenie streszczenia pracy", "od 69 zł"],
  ["Tłumaczenie CV", "od 89 zł"],
  ["Tłumaczenie listu motywacyjnego", "od 79 zł"],
  ["Korekta tłumaczenia", "od 12 zł / strona"],
  ["Redakcja tekstu po tłumaczeniu", "od 18 zł / strona"],
  ["Tłumaczenie prezentacji", "od 15 zł / slajd"],
];

const careerPrices = [
  ["CV", "od 79 zł"],
  ["List motywacyjny", "od 69 zł"],
  ["CV + list motywacyjny", "od 129 zł"],
  ["Profil LinkedIn", "od 149 zł"],
  ["Tłumaczenie CV", "od 89 zł"],
  ["Korekta CV", "od 49 zł"],
  ["Dokumenty na praktyki / staż", "od 99 zł"],
];

const projectPrices = [
  ["Mały zakres", "od 99 zł"],
  ["Średni zakres", "od 199 zł"],
  ["Duży zakres", "od 299 zł"],
  ["Nie wiem / potrzebuję pomocy", "wycena indywidualna"],
];

const deadlineRows = [
  ["Krótka usługa", "Standardowy", "ustalany indywidualnie", "0%"],
  ["Krótka usługa", "Ekspresowy / na dziś", "tego samego dnia lub do 24 godzin", "+30%"],
  ["Jeden rozdział / jedna część pracy", "Standardowy", "3–5 dni roboczych", "0%"],
  ["Jeden rozdział / jedna część pracy", "Pilny", "2 dni robocze", "+30%"],
  ["Jeden rozdział / jedna część pracy", "Ekspresowy", "24 godziny", "+60%"],
  ["Kilka rozdziałów / większa część pracy", "Standardowy", "5–10 dni roboczych", "0%"],
  ["Kilka rozdziałów / większa część pracy", "Pilny", "3–4 dni robocze", "+30%"],
  ["Kilka rozdziałów / większa część pracy", "Ekspresowy", "1–2 dni robocze", "+70%"],
  ["Cała praca", "Standardowy", "14–30 dni roboczych", "0%"],
  ["Cała praca", "Pilny", "7–13 dni roboczych", "+30%"],
  ["Cała praca", "Ekspresowy", "3–6 dni roboczych", "+80%"],
];

function PriceTable({
  title,
  rows,
  note,
}: {
  title: string;
  rows: string[][];
  note?: string;
}) {
  return (
    <div className="price-table-card">
      <h2>{title}</h2>
      <div className="price-table">
        {rows.map(([name, price]) => (
          <div className="price-table-row" key={name}>
            <span>{name}</span>
            <strong>{price}</strong>
          </div>
        ))}
      </div>
      {note && <p className="price-note">{note}</p>}
    </div>
  );
}

export default function CennikPage() {
  return (
    <main>
      <section className="cennik-hero">
        <div className="container cennik-hero-grid">
          <div>
            <h1>Cennik usług</h1>
            <p>
              Poniższe ceny mają charakter orientacyjny. Ostateczna wycena zależy
              od zakresu, terminu, liczby stron, rodzaju usługi oraz przesłanych
              wymagań.
            </p>
            <div className="hero-actions">
              <a href="/kalkulator" className="primary-button">
                Oblicz cenę w kalkulatorze <span>→</span>
              </a>
              <a href="/kontakt" className="secondary-button">
                Wyślij zapytanie <span>→</span>
              </a>
            </div>
          </div>

          <div className="cennik-highlight-card">
            <strong>Najważniejsza zasada</strong>
            <p>
              Przy zamówieniu pracy cena obejmuje podstawową redakcję,
              formatowanie, przypisy oraz bibliografię w zakresie ustalonej
              pracy.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Główne ceny</h2>
            <a href="/kalkulator">Przejdź do kalkulatora →</a>
          </div>

          <div className="main-price-grid">
            {mainPrices.map(([name, price]) => (
              <div className="main-price-card" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>

          <p className="cennik-info-text">
            Pozostałe prace akademickie obejmują m.in. prace zaliczeniowe,
            semestralne, roczne, referaty, eseje, raporty, sprawozdania, case
            study oraz projekty.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <h2>Szczegółowy cennik</h2>
          </div>

          <div className="price-tables-grid">
            <PriceTable title="Korekta, redakcja i formatowanie" rows={editingPrices} />
            <PriceTable title="Bibliografia, przypisy i źródła" rows={bibliographyPrices} />
            <PriceTable title="Dobór tematu, plan i konspekt" rows={planPrices} />
            <PriceTable title="Prezentacje" rows={presentationPrices} />
            <PriceTable title="Część badawcza i analiza danych" rows={researchPrices} />
            <PriceTable title="Tłumaczenia" rows={translationPrices} />
            <PriceTable title="CV i dokumenty aplikacyjne" rows={careerPrices} />
            <PriceTable
              title="Projekt, case study, raport, sprawozdanie"
              rows={projectPrices}
              note="W przypadku projektów i zadań problemowych cena zależy od zakresu materiału, liczby elementów, danych, tabel, obliczeń oraz wymaganej analizy."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Terminy i dopłaty</h2>
          </div>

          <div className="deadline-table-card">
            <div className="deadline-table">
              <div className="deadline-table-head">
                <span>Zakres</span>
                <span>Termin</span>
                <span>Czas realizacji</span>
                <span>Dopłata</span>
              </div>

              {deadlineRows.map(([scope, term, time, extra], index) => (
                <div className="deadline-table-row" key={`${scope}-${term}-${index}`}>
                  <span>{scope}</span>
                  <span>{term}</span>
                  <span>{time}</span>
                  <strong>{extra}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="cennik-warning">
            <strong>Ceny są orientacyjne</strong>
            <span>
              Ostateczna cena zostanie potwierdzona przez konsultanta po analizie
              opisu zlecenia, wymagań oraz przesłanych materiałów. Jeśli zakres
              pracy okaże się większy, bardziej specjalistyczny lub klient wybierze
              niewłaściwą kategorię, cena może zostać skorygowana przed
              rozpoczęciem realizacji.
            </span>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container payment-cennik-grid">
          <div className="payment-cennik-card">
            <h2>Płatność 50/50</h2>
            <p>
              Standardowo pracujemy w systemie płatności etapowej: 50% przed
              rozpoczęciem realizacji oraz 50% po przygotowaniu ustalonego zakresu
              materiałów.
            </p>
          </div>

          <div className="payment-cennik-card">
            <h2>Możliwość płatności online</h2>
            <p>
              Po obliczeniu orientacyjnej ceny można opłacić zaliczkę lub całość
              online. Ostateczne warunki zostaną potwierdzone po analizie
              zlecenia.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2>Nie wiedzą Państwo, ile wyniesie zlecenie?</h2>
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
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
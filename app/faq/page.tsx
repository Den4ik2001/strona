const faqGroups = [
  {
    title: "Wycena i ceny",
    items: [
      {
        question: "Jak szybko otrzymam wycenę?",
        answer:
          "Wycena może zostać przygotowana po analizie opisu zlecenia, wymagań oraz przesłanych materiałów. Kalkulator pokazuje orientacyjną cenę od razu, a ostateczne warunki potwierdza konsultant.",
      },
      {
        question: "Czy cena z kalkulatora jest ostateczna?",
        answer:
          "Nie. Cena z kalkulatora ma charakter orientacyjny. Ostateczna cena może zostać potwierdzona po sprawdzeniu zakresu pracy, wymagań, terminu oraz przesłanych plików.",
      },
      {
        question: "Czy cena może się zmienić po wysłaniu zapytania?",
        answer:
          "Tak, jeśli zakres pracy okaże się większy, bardziej złożony, specjalistyczny albo wybrana opcja w kalkulatorze będzie nieprawidłowa. W takim przypadku konsultant skontaktuje się przed rozpoczęciem realizacji.",
      },
      {
        question: "Co oznacza wycena indywidualna?",
        answer:
          "Wycena indywidualna dotyczy zleceń, których nie da się dokładnie policzyć automatycznie, np. większych projektów, złożonych analiz, case study, pełnej części badawczej lub nietypowych materiałów.",
      },
    ],
  },
  {
    title: "Płatności",
    items: [
      {
        question: "Jak działa płatność 50/50?",
        answer:
          "Standardowo pierwsza część płatności wynosi 50% przed rozpoczęciem realizacji, a druga część 50% po przygotowaniu ustalonego zakresu materiałów.",
      },
      {
        question: "Czy mogę opłacić całość online?",
        answer:
          "Tak, w kalkulatorze można wybrać opłatę całości online. Należy jednak pamiętać, że cena z kalkulatora jest orientacyjna i może zostać potwierdzona przez konsultanta.",
      },
      {
        question: "Czy mogę opłacić tylko zaliczkę?",
        answer:
          "Tak. Można wybrać opcję opłaty zaliczki 50%. Kalkulator pokaże kwotę do zapłaty teraz oraz kwotę pozostałą po realizacji.",
      },
      {
        question: "Co jeśli po analizie cena będzie inna?",
        answer:
          "Jeśli po analizie materiałów okaże się, że zakres jest większy lub bardziej złożony, konsultant skontaktuje się w celu potwierdzenia zmiany ceny przed rozpoczęciem realizacji.",
      },
    ],
  },
  {
    title: "Pliki i kontakt",
    items: [
      {
        question: "Czy mogę wysłać pliki do wyceny?",
        answer:
          "Tak. Można dodać wytyczne z uczelni, temat, plan pracy, fragment tekstu, materiały źródłowe, ankietę, wyniki badań lub inne pliki pomocne w przygotowaniu wyceny.",
      },
      {
        question: "Jakie pliki mogę przesłać?",
        answer:
          "Można przesłać pliki PDF, DOC, DOCX, JPG, PNG, XLS oraz XLSX. W przyszłym etapie zostanie podłączona pełna obsługa przesyłania plików przez formularz.",
      },
      {
        question: "Czy moje dane i pliki są bezpieczne?",
        answer:
          "Przesłane dane i materiały są wykorzystywane wyłącznie w celu przygotowania wyceny oraz realizacji ustalonego zakresu współpracy.",
      },
      {
        question: "Czy mogę skontaktować się bez kalkulatora?",
        answer:
          "Tak. Można przejść na stronę Kontakt i wysłać zapytanie z opisem zlecenia. Można też napisać na adres e-mail: prace.na.zamowienie.pro@gmail.com.",
      },
    ],
  },
  {
    title: "Terminy i zakres usług",
    items: [
      {
        question: "Czy realizują Państwo pilne zlecenia?",
        answer:
          "Tak, w wielu przypadkach możliwa jest realizacja pilna lub ekspresowa. Dostępność zależy od rodzaju usługi, zakresu materiału oraz aktualnego obciążenia.",
      },
      {
        question: "Jakie są terminy realizacji?",
        answer:
          "Terminy zależą od zakresu zlecenia. Jeden rozdział może być realizowany szybciej niż cała praca. W przypadku krótkich usług dostępna jest opcja ekspresowa lub realizacja na dziś.",
      },
      {
        question: "Czy mogę zamówić tylko korektę lub formatowanie?",
        answer:
          "Tak. Korekta, redakcja i formatowanie mogą być zamawiane jako oddzielne usługi do gotowego tekstu.",
      },
      {
        question: "Czy bibliografia i przypisy są w cenie pracy?",
        answer:
          "Przy zamówieniu przygotowania pracy podstawowe przypisy i bibliografia w ustalonym zakresie są zawarte w cenie. Są liczone osobno tylko wtedy, gdy klient zamawia je jako oddzielną usługę do gotowego tekstu.",
      },
    ],
  },
  {
    title: "Badania, prezentacje i sklep",
    items: [
      {
        question: "Czy pomagają Państwo przy części badawczej?",
        answer:
          "Tak. Możliwa jest pomoc przy metodologii, przygotowaniu ankiety, opracowaniu wyników, tabelach, wykresach oraz analizie danych.",
      },
      {
        question: "Czy wykonują Państwo analizę danych w Excel lub SPSS?",
        answer:
          "Tak. W kalkulatorze dostępne są opcje analizy danych Excel oraz SPSS. W bardziej złożonych przypadkach cena może wymagać indywidualnego potwierdzenia.",
      },
      {
        question: "Czy mogę zamówić prezentację na obronę?",
        answer:
          "Tak. Można zamówić prezentację PowerPoint, prezentację na obronę, notatki do prezentacji albo konspekt wystąpienia.",
      },
      {
        question: "Czym są materiały w sklepie?",
        answer:
          "Materiały w sklepie to e-booki, szablony, checklisty i pakiety edukacyjne. Mają charakter pomocniczy i służą do samodzielnego uporządkowania pracy oraz przygotowania materiałów.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="faq-hero">
        <div className="container faq-hero-grid">
          <div>
            <h1>Najczęściej zadawane pytania</h1>
            <p>
              Zebraliśmy odpowiedzi na najważniejsze pytania dotyczące wyceny,
              płatności, terminów, przesyłania plików, poufności oraz zakresu
              usług.
            </p>

            <div className="hero-actions">
              <a href="/kalkulator" className="primary-button">
                Wyceń zlecenie <span>→</span>
              </a>
              <a href="/kontakt" className="secondary-button">
                Zadaj pytanie <span>→</span>
              </a>
            </div>
          </div>

          <div className="faq-side-card">
            <strong>Nie znaleźli Państwo odpowiedzi?</strong>
            <p>
              Proszę wysłać zapytanie przez formularz kontaktowy albo skorzystać
              z kalkulatora wyceny. Konsultant pomoże dobrać odpowiedni zakres
              usługi.
            </p>
            <a href="/kontakt" className="primary-button full-button">
              Kontakt <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          {faqGroups.map((group) => (
            <div className="faq-group" key={group.title}>
              <h2>{group.title}</h2>

              <div className="faq-list">
                {group.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <div className="container faq-info-grid">
          <div className="faq-info-card">
            <h2>Cena z kalkulatora jest orientacyjna</h2>
            <p>
              Kalkulator pomaga szybko oszacować koszt, ale nie zastępuje
              indywidualnej analizy zlecenia. Ostateczna cena zależy od zakresu,
              wymagań, plików, terminu i poziomu złożoności materiału.
            </p>
          </div>

          <div className="faq-info-card">
            <h2>Wycena indywidualna</h2>
            <p>
              Jeśli klient nie wie, jaki zakres wybrać, albo zlecenie jest
              nietypowe, można wybrać opcję indywidualnej wyceny i przesłać opis
              wraz z materiałami.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2>Potrzebują Państwo dokładnej odpowiedzi?</h2>
            <p>
              Proszę wysłać opis zlecenia lub skorzystać z kalkulatora. Po
              analizie materiałów potwierdzimy cenę i możliwy termin.
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
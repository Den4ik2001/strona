const reviews = [
  {
    name: "Marta",
    city: "Poznań",
    service: "Korekta pracy",
    rating: 5,
    text: "Bardzo dobry kontakt i szybka pomoc. Wszystko zostało przygotowane zgodnie z wymaganiami. Polecam.",
  },
  {
    name: "Karolina",
    city: "Kraków",
    service: "Formatowanie",
    rating: 5,
    text: "Formatowanie wykonane dokładnie i terminowo. Było kilka rzeczy do poprawy i wszystko zostało szybko ogarnięte.",
  },
  {
    name: "Paweł",
    city: "Warszawa",
    service: "Bibliografia i przypisy",
    rating: 5,
    text: "Pomoc przy bibliografii bardzo mi się przydała. Miałem chaos w źródłach, a po poprawkach wszystko wyglądało normalnie.",
  },
  {
    name: "Ania",
    city: "Wrocław",
    service: "Prezentacja na obronę",
    rating: 5,
    text: "Prezentacja była czytelna i dobrze poukładana. Nie było przesadzonego designu, tylko konkretnie pod obronę.",
  },
  {
    name: "studentka23",
    city: "Gdańsk",
    service: "Część badawcza",
    rating: 4,
    text: "Dobra pomoc przy wynikach ankiety. Kontakt okej, trochę stresowałam się terminem, ale finalnie wszystko było na czas.",
  },
  {
    name: "Michał",
    city: "Łódź",
    service: "Konspekt pracy",
    rating: 5,
    text: "Dostałem sensowny plan i konspekt. Dzięki temu łatwiej było mi ruszyć z pracą, bo wcześniej kompletnie nie wiedziałem od czego zacząć.",
  },
];

const filters = [
  "Wszystkie",
  "Prace dyplomowe",
  "Korekta",
  "Formatowanie",
  "Bibliografia",
  "Część badawcza",
  "Prezentacje",
];

const reviewStats = [
  ["4.9 / 5", "średnia ocena"],
  ["120+", "zrealizowanych zapytań"],
  ["50+", "opinii klientów"],
  ["PL / EN / UA / RU / DE", "obsługiwane języki"],
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-stars">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

export default function OpiniePage() {
  return (
    <main>
      <section className="opinie-hero">
        <div className="container opinie-hero-grid">
          <div>
            <h1>Opinie klientów</h1>
            <p>
              Opinie pomagają nowym klientom lepiej ocenić jakość kontaktu,
              terminowość oraz sposób realizacji usług. Publikujemy je w
              naturalnym brzmieniu, zachowując prywatność autorów.
            </p>

            <div className="hero-actions">
              <a href="#dodaj-opinie" className="primary-button">
                Dodaj opinię <span>→</span>
              </a>
              <a href="/kalkulator" className="secondary-button">
                Wyceń zlecenie <span>→</span>
              </a>
            </div>
          </div>

          <div className="opinie-rating-card">
            <span>Średnia ocena</span>
            <strong>4.9 / 5</strong>
            <div className="review-stars big-stars">★★★★★</div>
            <p>na podstawie opinii klientów</p>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {reviewStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Najnowsze opinie</h2>
            <a href="#dodaj-opinie">Dodaj własną opinię →</a>
          </div>

          <div className="opinion-filters">
            {filters.map((filter, index) => (
              <button className={index === 0 ? "active" : ""} key={filter}>
                {filter}
              </button>
            ))}
          </div>

          <div className="opinie-grid">
            {reviews.map((review) => (
              <article className="opinia-card" key={`${review.name}-${review.service}`}>
                <div className="opinia-head">
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.city}</span>
                  </div>
                  <Stars rating={review.rating} />
                </div>

                <div className="opinia-service">{review.service}</div>

                <p>{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container opinie-rules-grid">
          <div>
            <h2>Jak publikujemy opinie?</h2>
            <p>
              Publikujemy opinie klientów w ich naturalnym brzmieniu, zachowując
              prywatność autorów. Przed dodaniem opinii na stronę sprawdzamy
              jedynie, czy nie zawiera ona danych osobowych, spamu lub treści
              naruszających prywatność.
            </p>
          </div>

          <div className="opinie-rules-card">
            <strong>Nie pokazujemy publicznie:</strong>
            <ul>
              <li>adresu e-mail autora opinii;</li>
              <li>przesłanych plików;</li>
              <li>szczegółów prywatnego zlecenia;</li>
              <li>danych osobowych osób trzecich.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="dodaj-opinie">
        <div className="container opinie-form-grid">
          <div className="opinion-form-intro">
            <h2>Dodaj opinię</h2>
            <p>
              Jeśli korzystali Państwo z usługi lub materiałów, można zostawić
              krótką opinię. E-mail nie będzie publikowany publicznie.
            </p>

            <div className="opinion-privacy-box">
              <strong>Prywatność</strong>
              <span>
                Opinia może zostać opublikowana z imieniem lub pseudonimem.
                Adres e-mail służy wyłącznie do weryfikacji i kontaktu.
              </span>
            </div>
          </div>

          <form className="opinion-form">
            <div className="kontakt-form-row">
              <div>
                <label>Imię lub pseudonim</label>
                <input placeholder="np. Anna, studentka123" />
              </div>

              <div>
                <label>Miasto</label>
                <input placeholder="np. Kraków" />
              </div>
            </div>

            <div className="kontakt-form-row">
              <div>
                <label>E-mail — niepublikowany</label>
                <input type="email" placeholder="adres e-mail" />
              </div>

              <div>
                <label>Rodzaj usługi</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Wybierz usługę
                  </option>
                  <option>Praca dyplomowa</option>
                  <option>Korekta / redakcja</option>
                  <option>Formatowanie</option>
                  <option>Bibliografia</option>
                  <option>Część badawcza</option>
                  <option>Prezentacja</option>
                  <option>Sklep</option>
                  <option>Inne</option>
                </select>
              </div>
            </div>

            <div>
              <label>Ocena</label>
              <select defaultValue="">
                <option value="" disabled>
                  Wybierz ocenę
                </option>
                <option>5 — bardzo dobrze</option>
                <option>4 — dobrze</option>
                <option>3 — średnio</option>
                <option>2 — słabo</option>
                <option>1 — bardzo słabo</option>
              </select>
            </div>

            <div>
              <label>Treść opinii</label>
              <textarea placeholder="Proszę napisać kilka zdań o kontakcie, terminowości i jakości usługi." />
            </div>

            <label className="opinion-checkbox">
              <input type="checkbox" />
              <span>Wyrażam zgodę na publikację opinii na stronie.</span>
            </label>

            <button className="primary-button kontakt-submit" type="button">
              Wyślij opinię <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo sprawdzić koszt usługi?</h2>
            <p>
              Kalkulator pozwala szybko obliczyć orientacyjną cenę i sprawdzić
              możliwe opcje płatności.
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
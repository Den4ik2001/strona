const products = [
  {
    title: "Szablon pracy licencjackiej Word",
    price: "39 zł",
    format: "DOCX",
    icon: "📄",
    text: "Gotowy szablon dokumentu z układem pracy, nagłówkami, spisem treści i miejscem na bibliografię.",
  },
  {
    title: "Szablon pracy magisterskiej Word",
    price: "49 zł",
    format: "DOCX",
    icon: "📄",
    text: "Szablon pracy magisterskiej z uporządkowaną strukturą, miejscem na rozdziały, przypisy i zakończenie.",
  },
  {
    title: "Szablon pracy inżynierskiej Word",
    price: "49 zł",
    format: "DOCX",
    icon: "📄",
    text: "Szablon dla pracy inżynierskiej z miejscem na część projektową, tabele, rysunki i bibliografię.",
  },
  {
    title: "Checklist przed oddaniem pracy",
    price: "19 zł",
    format: "PDF",
    icon: "✅",
    text: "Lista kontrolna do sprawdzenia pracy przed wysłaniem, oddaniem lub przygotowaniem do obrony.",
  },
  {
    title: "Jak napisać część teoretyczną pracy",
    price: "39 zł",
    format: "PDF",
    icon: "📘",
    text: "Poradnik pomagający uporządkować teorię, źródła, podrozdziały i logiczną strukturę tekstu.",
  },
  {
    title: "Jak przygotować część badawczą pracy",
    price: "39 zł",
    format: "PDF",
    icon: "📊",
    text: "Materiał o metodologii, ankiecie, wynikach, tabelach, wykresach i opisie wniosków.",
  },
  {
    title: "Jak przygotować bibliografię i przypisy",
    price: "29 zł",
    format: "PDF",
    icon: "📚",
    text: "Krótki poradnik pokazujący, jak uporządkować źródła, przypisy i bibliografię.",
  },
  {
    title: "Prezentacja na obronę — szablon PPTX",
    price: "49 zł",
    format: "PPTX",
    icon: "🖥️",
    text: "Szablon prezentacji do uzupełnienia treścią pracy i wykorzystania podczas obrony.",
  },
  {
    title: "Jak przygotować się do obrony",
    price: "39 zł",
    format: "PDF",
    icon: "🎓",
    text: "Poradnik z praktycznymi wskazówkami dotyczącymi prezentacji, wystąpienia i odpowiedzi na pytania.",
  },
];

const packages = [
  {
    title: "Pakiet Licencjat",
    price: "119 zł",
    oldPrice: "165 zł",
    save: "Oszczędzasz 46 zł",
    badge: "Popularny",
    items: [
      "Szablon pracy licencjackiej Word",
      "Jak napisać część teoretyczną pracy",
      "Jak przygotować część badawczą pracy",
      "Jak przygotować bibliografię i przypisy",
      "Checklist przed oddaniem pracy",
    ],
  },
  {
    title: "Pakiet Magisterka",
    price: "129 zł",
    oldPrice: "175 zł",
    save: "Oszczędzasz 46 zł",
    badge: "Najlepsza wartość",
    items: [
      "Szablon pracy magisterskiej Word",
      "Jak napisać część teoretyczną pracy",
      "Jak przygotować część badawczą pracy",
      "Jak przygotować bibliografię i przypisy",
      "Checklist przed oddaniem pracy",
    ],
  },
  {
    title: "Pakiet Inżynierski",
    price: "129 zł",
    oldPrice: "175 zł",
    save: "Oszczędzasz 46 zł",
    badge: "Dla projektów",
    items: [
      "Szablon pracy inżynierskiej Word",
      "Jak napisać część teoretyczną pracy",
      "Jak przygotować część badawczą lub projektową pracy",
      "Jak przygotować bibliografię i przypisy",
      "Checklist przed oddaniem pracy",
    ],
  },
  {
    title: "Pakiet Obrona pracy",
    price: "89 zł",
    oldPrice: "107 zł + bonus",
    save: "Oszczędzasz 18 zł + bonus",
    badge: "Przed obroną",
    items: [
      "Prezentacja na obronę — szablon PPTX",
      "Jak przygotować się do obrony",
      "Checklist przed oddaniem pracy",
      "Bonus: Mini-checklist — pytania przed obroną",
    ],
  },
];

const benefits = [
  "Materiały edukacyjne i pomocnicze",
  "Formaty PDF / DOCX / PPTX",
  "Praktyczne checklisty i szablony",
  "Zakup po kontakcie z konsultantem",
];

function getProductContactLink(title: string) {
  return `/kontakt?produkt=${encodeURIComponent(title)}`;
}

export default function SklepPage() {
  return (
    <main>
      <section className="sklep-hero">
        <div className="container sklep-hero-grid">
          <div>
            <h1>Sklep z materiałami dla studentów</h1>
            <p>
              Praktyczne e-booki, szablony Word, checklisty i materiały do
              obrony, które pomagają uporządkować pracę, przygotować dokument i
              lepiej zaplanować kolejne etapy.
            </p>

            <div className="hero-actions">
              <a href="#produkty" className="primary-button">
                Zobacz produkty <span>→</span>
              </a>
              <a href="#pakiety" className="secondary-button">
                Zobacz pakiety <span>→</span>
              </a>
            </div>
          </div>

          <div className="sklep-side-card">
            <strong>Materiały pomocnicze, nie gotowe prace</strong>
            <p>
              Produkty dostępne w sklepie mają charakter edukacyjny i
              pomocniczy. Pomagają samodzielnie uporządkować strukturę, tekst,
              bibliografię, formatowanie oraz przygotowanie do obrony.
            </p>
          </div>
        </div>
      </section>

      <section className="shop-launch-notice-section">
        <div className="container">
          <div className="shop-launch-notice">
            <div>
              <strong>Sprzedaż online zostanie uruchomiona po podłączeniu płatności</strong>
              <p>
                Obecnie sklep działa jako katalog materiałów. W celu zakupu
                konkretnego produktu lub pakietu prosimy wysłać zapytanie przez
                formularz kontaktowy.
              </p>
            </div>
            <a href="/kontakt" className="primary-button">
              Zapytaj o materiały <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {benefits.map((benefit) => (
            <div key={benefit}>
              <strong>{benefit}</strong>
              <span>Przydatne wsparcie dla studentów</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="produkty">
        <div className="container">
          <div className="section-heading">
            <h2>Produkty cyfrowe</h2>
            <a href="#pakiety">Zobacz pakiety materiałów →</a>
          </div>

          <div className="shop-products-grid">
            {products.map((product) => (
              <article className="shop-product-card" key={product.title}>
                <div className="shop-product-image">{product.icon}</div>
                <div className="shop-product-meta">
                  <span>{product.format}</span>
                  <strong>{product.price}</strong>
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>

                <div className="shop-product-actions">
                  <a className="shop-primary-link" href={getProductContactLink(product.title)}>
                    Zapytaj o produkt
                  </a>
                  <a href="/kontakt">Kontakt</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="pakiety">
        <div className="container">
          <div className="section-heading">
            <h2>Pakiety materiałów</h2>
            <a href="/kontakt">Potrzebują Państwo pomocy? →</a>
          </div>

          <div className="shop-packages-grid">
            {packages.map((pack) => (
              <article className="package-card" key={pack.title}>
                <div className="package-badge">{pack.badge}</div>
                <h3>{pack.title}</h3>

                <div className="package-price-row">
                  <strong>{pack.price}</strong>
                  <span>Cena osobno: {pack.oldPrice}</span>
                </div>

                <div className="package-save">{pack.save}</div>

                <h4>W pakiecie:</h4>
                <ul>
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a className="package-contact-button" href={getProductContactLink(pack.title)}>
                  Zapytaj o pakiet
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container shop-info-grid">
          <div className="shop-info-card">
            <h2>Jak działa zakup teraz?</h2>
            <p>
              Do czasu podłączenia płatności online produkty i pakiety można
              zamówić przez formularz kontaktowy. W wiadomości prosimy wskazać
              nazwę materiału lub pakietu, a konsultant odpowie mailowo z
              dalszymi informacjami.
            </p>
          </div>

          <div className="shop-info-card">
            <h2>Potrzebują Państwo indywidualnej pomocy?</h2>
            <p>
              Materiały ze sklepu pomagają samodzielnie uporządkować pracę, ale
              jeśli potrzebują Państwo redakcji, korekty, formatowania lub
              wyceny, można przesłać zapytanie do konsultanta.
            </p>
            <a href="/kalkulator" className="primary-button">
              Wyceń usługę <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container shop-disclaimer">
          <h2>Informacja o materiałach</h2>
          <p>
            Materiały dostępne w sklepie mają charakter edukacyjny i pomocniczy.
            Mogą służyć jako wsparcie przy samodzielnym przygotowaniu pracy,
            uporządkowaniu treści, formatowaniu oraz organizacji materiałów.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo zamówić materiał albo indywidualną pomoc?</h2>
            <p>
              Można wysłać zapytanie o produkt ze sklepu, pakiet materiałów albo
              przejść do kalkulatora wyceny indywidualnej usługi.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/kontakt" className="primary-button">
              Zapytaj o produkt <span>→</span>
            </a>
            <a href="/kalkulator" className="secondary-button dark-secondary">
              Wyceń usługę
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
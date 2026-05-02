import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">🎓</div>
            <div>
              <strong>Prace na Zamówienie</strong>
              <span>Profesjonalna pomoc akademicka</span>
            </div>
          </div>

          <p>
            Pomagamy studentom na każdym etapie pracy — od planu, przez pisanie,
            redakcję, analizę, aż po prezentację i obronę.
          </p>

          <a href="mailto:prace.na.zamowienie.pro@gmail.com" className="footer-email">
            prace.na.zamowienie.pro@gmail.com
          </a>
        </div>

        <div>
          <h4>Menu</h4>
          <ul>
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/oferta">Oferta</Link></li>
            <li><Link href="/cennik">Cennik</Link></li>
            <li><Link href="/kalkulator">Kalkulator</Link></li>
            <li><Link href="/sklep">Sklep</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/opinie">Opinie</Link></li>
            <li><Link href="/o-nas">O nas</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4>Oferta</h4>
          <ul>
            <li>Prace dyplomowe</li>
            <li>Korekta i redakcja</li>
            <li>Bibliografia i przypisy</li>
            <li>Część badawcza</li>
            <li>Prezentacje</li>
            <li>Tłumaczenia</li>
          </ul>
        </div>

        <div>
          <h4>Informacje</h4>
          <ul>
            <li>Jak to działa?</li>
            <li>FAQ</li>
            <li>Regulamin</li>
            <li>Polityka prywatności</li>
            <li>Płatności i zwroty</li>
          </ul>

          <h4 className="footer-languages-title">Języki</h4>
          <div className="footer-languages">
            <span>PL</span>
            <span>EN</span>
            <span>UA</span>
            <span>RU</span>
            <span>DE</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Prace na Zamówienie</span>
          <span>Dyskrecja • Terminowość • Indywidualne podejście</span>
        </div>
      </div>
    </footer>
  );
}
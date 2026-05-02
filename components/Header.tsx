import Link from "next/link";

const navItems = [
  { label: "Strona główna", href: "/" },
  { label: "Oferta", href: "/oferta" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kalkulator", href: "/kalkulator" },
  { label: "Sklep", href: "/sklep" },
  { label: "Blog", href: "/blog" },
  { label: "Opinie", href: "/opinie" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>Pomoc dla studentów na każdym etapie pracy akademickiej</span>
          <div className="top-bar-points">
            <span>Dyskrecja</span>
            <span>Terminowość</span>
            <span>Indywidualne podejście</span>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container nav-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">🎓</div>
            <div>
              <strong>Prace na Zamówienie</strong>
              <span>Profesjonalna pomoc akademicka</span>
            </div>
          </Link>

          <nav className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="languages">
              <span>PL</span>
              <span>EN</span>
              <span>UA</span>
              <span>RU</span>
              <span>DE</span>
            </div>

            <Link href="/kalkulator" className="primary-button">
              Wyceń zlecenie
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
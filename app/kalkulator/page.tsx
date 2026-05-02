"use client";

import { useMemo, useState } from "react";

type CategoryType =
  | ""
  | "licencjacka"
  | "magisterska"
  | "inzynierska"
  | "pozostala"
  | "korekta"
  | "bibliografia"
  | "plan"
  | "prezentacja"
  | "badawcza"
  | "tlumaczenie"
  | "cv";

type ScopeType = "" | "rozdzial" | "kilka" | "cala";
type DeadlineType = "" | "standardowy" | "pilny" | "ekspresowy";
type UnitType = "strona" | "slajd" | "zrodlo" | "fixed" | "individual";

type OptionItem = {
  value: string;
  label: string;
  price: number;
  unit: UnitType;
  description?: string;
};

const mainCategories: { value: CategoryType; label: string }[] = [
  { value: "", label: "Wybierz usługę" },
  { value: "licencjacka", label: "Praca licencjacka" },
  { value: "magisterska", label: "Praca magisterska" },
  { value: "inzynierska", label: "Praca inżynierska" },
  { value: "pozostala", label: "Pozostała praca akademicka" },
  { value: "korekta", label: "Korekta / redakcja / formatowanie" },
  { value: "bibliografia", label: "Bibliografia / przypisy / źródła" },
  { value: "plan", label: "Plan pracy / konspekt" },
  { value: "prezentacja", label: "Prezentacja" },
  { value: "badawcza", label: "Część badawcza / analiza danych" },
  { value: "tlumaczenie", label: "Tłumaczenie" },
  { value: "cv", label: "CV / dokumenty aplikacyjne" },
];

const fields = [
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
  "Bezpieczeństwo wewnętrzne",
  "Pielęgniarstwo",
  "Informatyka",
  "Inżynieria",
  "Budownictwo",
  "Transport",
  "Ochrona środowiska",
  "Inne",
];

const thesisPrices: Record<string, OptionItem> = {
  licencjacka: {
    value: "licencjacka",
    label: "Praca licencjacka",
    price: 40,
    unit: "strona",
  },
  magisterska: {
    value: "magisterska",
    label: "Praca magisterska",
    price: 45,
    unit: "strona",
  },
  inzynierska: {
    value: "inzynierska",
    label: "Praca inżynierska",
    price: 45,
    unit: "strona",
  },
};

const subOptions: Partial<Record<CategoryType, OptionItem[]>> = {
  pozostala: [
    { value: "zaliczeniowa", label: "Praca zaliczeniowa", price: 30, unit: "strona" },
    { value: "semestralna", label: "Praca semestralna", price: 30, unit: "strona" },
    { value: "roczna", label: "Praca roczna", price: 30, unit: "strona" },
    { value: "referat", label: "Referat", price: 30, unit: "strona" },
    { value: "esej", label: "Esej", price: 30, unit: "strona" },
    {
      value: "raport",
      label: "Raport",
      price: 0,
      unit: "individual",
      description: "Zakres materiału zostanie wybrany w kolejnym kroku.",
    },
    {
      value: "sprawozdanie",
      label: "Sprawozdanie",
      price: 0,
      unit: "individual",
      description: "Zakres materiału zostanie wybrany w kolejnym kroku.",
    },
    {
      value: "case-study",
      label: "Case study",
      price: 0,
      unit: "individual",
      description: "Zakres materiału zostanie wybrany w kolejnym kroku.",
    },
    {
      value: "projekt",
      label: "Projekt",
      price: 0,
      unit: "individual",
      description: "Zakres materiału zostanie wybrany w kolejnym kroku.",
    },
    {
      value: "inne",
      label: "Inna krótka praca akademicka",
      price: 0,
      unit: "individual",
      description: "Zakres materiału zostanie wybrany w kolejnym kroku.",
    },
  ],
  korekta: [
    { value: "korekta", label: "Korekta tekstu", price: 10, unit: "strona" },
    { value: "redakcja", label: "Redakcja tekstu", price: 10, unit: "strona" },
    { value: "formatowanie", label: "Formatowanie pracy", price: 10, unit: "strona" },
    { value: "korekta-formatowanie", label: "Korekta + formatowanie", price: 15, unit: "strona" },
    { value: "redakcja-formatowanie", label: "Redakcja + formatowanie", price: 15, unit: "strona" },
    { value: "korekta-redakcja", label: "Korekta + redakcja", price: 15, unit: "strona" },
    { value: "pelny-pakiet", label: "Korekta + redakcja + formatowanie", price: 20, unit: "strona" },
    { value: "pelny-pakiet-przypisy", label: "Korekta + redakcja + formatowanie + przypisy", price: 25, unit: "strona" },
  ],
  bibliografia: [
    { value: "bibliografia", label: "Bibliografia", price: 49, unit: "fixed" },
    { value: "bibliografia-przypisy", label: "Bibliografia + przypisy", price: 15, unit: "strona" },
    { value: "dobor-zrodel", label: "Dobór źródeł", price: 99, unit: "fixed" },
    { value: "wyszukiwanie-literatury", label: "Wyszukiwanie literatury", price: 10, unit: "zrodlo" },
    { value: "bibliografia-od-zera", label: "Przygotowanie bibliografii od zera", price: 149, unit: "fixed" },
    { value: "indywidualna", label: "Bibliografia + dobór źródeł + przypisy", price: 0, unit: "individual" },
  ],
  plan: [
    { value: "propozycja-tematu", label: "Wstępna propozycja tematu", price: 0, unit: "fixed" },
    { value: "dobor-tematow", label: "Samodzielny dobór 3–5 tematów", price: 49, unit: "fixed" },
    { value: "plan-pracy", label: "Plan pracy", price: 99, unit: "fixed" },
    { value: "konspekt", label: "Konspekt pracy", price: 129, unit: "fixed" },
    { value: "spis-tresci", label: "Spis treści", price: 79, unit: "fixed" },
    { value: "cel-zakres", label: "Cel, zakres i założenia pracy", price: 129, unit: "fixed" },
    { value: "temat-plan", label: "Dobór tematu + plan pracy", price: 129, unit: "fixed" },
  ],
  prezentacja: [
    { value: "powerpoint", label: "Prezentacja PowerPoint", price: 15, unit: "slajd" },
    { value: "obrona", label: "Prezentacja na obronę", price: 149, unit: "fixed" },
    { value: "notatki", label: "Notatki do prezentacji", price: 49, unit: "fixed" },
    { value: "konspekt-wystapienia", label: "Konspekt wystąpienia", price: 69, unit: "fixed" },
  ],
  badawcza: [
    { value: "ankieta", label: "Przygotowanie ankiety", price: 99, unit: "fixed" },
    { value: "metodologia", label: "Metodologia badań", price: 40, unit: "strona" },
    { value: "wyniki", label: "Opracowanie wyników badań / ankiety", price: 40, unit: "strona" },
    { value: "excel", label: "Analiza danych Excel", price: 199, unit: "fixed" },
    { value: "spss", label: "Analiza danych SPSS", price: 299, unit: "fixed" },
    { value: "hipotezy", label: "Cel, pytania i hipotezy badawcze", price: 149, unit: "fixed" },
    { value: "pelna-czesc", label: "Pełna część badawcza", price: 0, unit: "individual" },
  ],
  tlumaczenie: [
    { value: "tekst", label: "Tłumaczenie tekstu", price: 35, unit: "strona" },
    { value: "streszczenie", label: "Tłumaczenie streszczenia pracy", price: 69, unit: "fixed" },
    { value: "cv", label: "Tłumaczenie CV", price: 89, unit: "fixed" },
    { value: "list", label: "Tłumaczenie listu motywacyjnego", price: 79, unit: "fixed" },
    { value: "korekta", label: "Korekta tłumaczenia", price: 12, unit: "strona" },
    { value: "redakcja", label: "Redakcja tekstu po tłumaczeniu", price: 18, unit: "strona" },
    { value: "prezentacja", label: "Tłumaczenie prezentacji", price: 15, unit: "slajd" },
  ],
  cv: [
    { value: "cv", label: "CV", price: 79, unit: "fixed" },
    { value: "list", label: "List motywacyjny", price: 69, unit: "fixed" },
    { value: "cv-list", label: "CV + list motywacyjny", price: 129, unit: "fixed" },
    { value: "linkedin", label: "Profil LinkedIn", price: 149, unit: "fixed" },
    { value: "tlumaczenie-cv", label: "Tłumaczenie CV", price: 89, unit: "fixed" },
    { value: "korekta-cv", label: "Korekta CV", price: 49, unit: "fixed" },
    { value: "staz", label: "Dokumenty na praktyki / staż", price: 99, unit: "fixed" },
  ],
};

const projectRangeOptions: OptionItem[] = [
  {
    value: "maly",
    label: "Mały zakres",
    price: 99,
    unit: "fixed",
    description: "Krótkie opracowanie, proste odpowiedzi, podstawowa analiza lub niewielki materiał.",
  },
  {
    value: "sredni",
    label: "Średni zakres",
    price: 199,
    unit: "fixed",
    description: "Rozbudowane opracowanie, kilka punktów, analiza, porównanie, wnioski lub bardziej szczegółowy opis.",
  },
  {
    value: "duzy",
    label: "Duży zakres",
    price: 299,
    unit: "fixed",
    description: "Złożony projekt, większa liczba elementów, tabele, obliczenia, analiza, wnioski lub bardziej wymagający materiał.",
  },
  {
    value: "nie-wiem",
    label: "Nie wiem / potrzebuję pomocy",
    price: 0,
    unit: "individual",
    description: "Konsultant pomoże określić zakres oraz przygotuje indywidualną wycenę.",
  },
];

const projectBasedWorkTypes = ["projekt", "case-study", "raport", "sprawozdanie", "inne"];

const scopeOptions: { value: ScopeType; label: string; description: string }[] = [
  {
    value: "rozdzial",
    label: "Jeden rozdział / jedna część pracy",
    description: "Np. teoria, metodologia, część badawcza lub inny ustalony fragment.",
  },
  {
    value: "kilka",
    label: "Kilka rozdziałów / większa część pracy",
    description: "Kilka powiązanych rozdziałów albo większy zakres materiału.",
  },
  {
    value: "cala",
    label: "Cała praca",
    description: "Kompletna praca od początku do końca.",
  },
];

const deadlineLabels: Record<DeadlineType, string> = {
  "": "—",
  standardowy: "Standardowy",
  pilny: "Pilny",
  ekspresowy: "Ekspresowy",
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  }).format(value);
}

function isThesis(category: CategoryType) {
  return ["licencjacka", "magisterska", "inzynierska"].includes(category);
}

function needsField(category: CategoryType) {
  return ["licencjacka", "magisterska", "inzynierska", "pozostala", "badawcza"].includes(category);
}

function needsSubService(category: CategoryType) {
  return Boolean(category && subOptions[category]?.length);
}

function getBigWorkMultiplier(scope: ScopeType, deadline: DeadlineType) {
  if (!scope || !deadline || deadline === "standardowy") return 1;
  if (scope === "rozdzial") return deadline === "pilny" ? 1.3 : 1.6;
  if (scope === "kilka") return deadline === "pilny" ? 1.3 : 1.7;
  return deadline === "pilny" ? 1.3 : 1.8;
}

function getSimpleMultiplier(deadline: DeadlineType) {
  if (!deadline || deadline === "standardowy") return 1;
  return 1.3;
}

function getDeadlineText(category: CategoryType, scope: ScopeType, deadline: DeadlineType) {
  if (!deadline) return "";

  if (isThesis(category)) {
    if (scope === "rozdzial") {
      if (deadline === "standardowy") return "3–5 dni roboczych";
      if (deadline === "pilny") return "2 dni robocze";
      return "24 godziny";
    }

    if (scope === "kilka") {
      if (deadline === "standardowy") return "5–10 dni roboczych";
      if (deadline === "pilny") return "3–4 dni robocze";
      return "1–2 dni robocze";
    }

    if (scope === "cala") {
      if (deadline === "standardowy") return "14–30 dni roboczych";
      if (deadline === "pilny") return "7–13 dni roboczych";
      return "3–6 dni roboczych";
    }

    if (deadline === "standardowy") return "Termin standardowy";
    if (deadline === "pilny") return "Termin pilny";
    return "Termin ekspresowy";
  }

  if (deadline === "standardowy") return "Ustalany indywidualnie";
  return "Na dziś / do 24 godzin";
}

function getDeadlineOptions(category: CategoryType): DeadlineType[] {
  if (isThesis(category)) return ["standardowy", "pilny", "ekspresowy"];
  return ["standardowy", "ekspresowy"];
}

function getUnitLabel(unit: UnitType) {
  if (unit === "strona") return "strona";
  if (unit === "slajd") return "slajd";
  if (unit === "zrodlo") return "źródło";
  if (unit === "fixed") return "usługa";
  return "wycena";
}

export default function KalkulatorPage() {
  const [category, setCategory] = useState<CategoryType>("");
  const [subService, setSubService] = useState("");
  const [rangeService, setRangeService] = useState("");
  const [field, setField] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [scope, setScope] = useState<ScopeType>("");
  const [deadline, setDeadline] = useState<DeadlineType>("");
  const [paymentType, setPaymentType] = useState<"deposit" | "full">("deposit");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const selectedMainService = isThesis(category) ? thesisPrices[category] : undefined;
  const selectedSubService = subOptions[category]?.find((item) => item.value === subService);
  const isProjectBasedWork = category === "pozostala" && projectBasedWorkTypes.includes(subService);
  const selectedRangeService = projectRangeOptions.find((item) => item.value === rangeService);
  const selectedService = selectedMainService || selectedRangeService || selectedSubService;

  const hasSubServices = needsSubService(category);
  const hasField = needsField(category);
  const hasScope = isThesis(category);
  const isIndividual = selectedService?.unit === "individual";
  const isFixed = selectedService?.unit === "fixed";
  const hasQuantity = selectedService
    ? ["strona", "slajd", "zrodlo"].includes(selectedService.unit)
    : false;

  const multiplier = isThesis(category)
    ? getBigWorkMultiplier(scope, deadline)
    : getSimpleMultiplier(deadline);

  const hasRequiredData = Boolean(
    category &&
      selectedService &&
      deadline &&
      (!hasSubServices || subService) &&
      (!isProjectBasedWork || rangeService) &&
      (!hasScope || scope) &&
      (!hasQuantity || quantity)
  );

  const total = useMemo(() => {
    if (!selectedService || !hasRequiredData || isIndividual) return 0;
    if (isFixed) return selectedService.price * multiplier;

    const safeQuantity = Number(quantity) || 0;
    return selectedService.price * safeQuantity * multiplier;
  }, [selectedService, hasRequiredData, isIndividual, isFixed, multiplier, quantity]);

  const deposit = total / 2;
  const payNow = paymentType === "deposit" ? deposit : total;
  const remaining = paymentType === "deposit" ? deposit : 0;

  const resetAfterCategoryChange = (value: CategoryType) => {
    setCategory(value);
    setSubService("");
    setRangeService("");
    setField("");
    setQuantity("");
    setScope(isThesis(value) ? "cala" : "");
    setDeadline(value ? "standardowy" : "");
    setPaymentType("deposit");
    setStatus("idle");
    setStatusMessage("");
  };

  async function handleCalculatorSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.delete("files");

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const selectedCategoryLabel =
      mainCategories.find((item) => item.value === category)?.label || "";

    const selectedScopeLabel =
      scopeOptions.find((item) => item.value === scope)?.label || "";

    const basePriceLabel = selectedService
      ? selectedService.unit === "individual"
        ? "Wycena indywidualna"
        : `${selectedService.price} zł / ${getUnitLabel(selectedService.unit)}`
      : "";

    const estimatedPriceLabel = isIndividual
      ? "Wycena indywidualna po analizie materiałów"
      : hasRequiredData
      ? formatMoney(total)
      : "";

    const paymentChoiceLabel =
      paymentType === "deposit" ? "Zaliczka 50%" : "Całość online";

    const paymentStatusLabel =
      "Nieopłacone — klient wysłał zapytanie do konsultanta";

    formData.set("source", "Kalkulator wyceny");
    formData.set("service", selectedCategoryLabel);
    formData.set("subject", `Zapytanie z kalkulatora — ${selectedCategoryLabel}`);
    formData.set("deadline", deadline ? deadlineLabels[deadline] : "");
    formData.set("categoryDetails", selectedSubService?.label || "");
    formData.set("rangeDetails", selectedRangeService?.label || "");
    formData.set("field", field || "");
    formData.set("quantity", quantity ? String(quantity) : "");
    formData.set("scope", selectedScopeLabel);
    formData.set("basePrice", basePriceLabel);
    formData.set("multiplier", hasRequiredData && !isIndividual ? `x ${multiplier.toFixed(2)}` : "");
    formData.set("estimatedPrice", estimatedPriceLabel);
    formData.set("paymentChoice", paymentChoiceLabel);
    formData.set("paymentStatus", paymentStatusLabel);
    formData.set("payNow", hasRequiredData && !isIndividual ? formatMoney(payNow) : "");
    formData.set("remaining", hasRequiredData && !isIndividual ? formatMoney(remaining) : "");

    setStatus("sending");
    setStatusMessage("Wysyłanie zapytania...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Nie udało się wysłać zapytania.");
      }

      setStatus("success");
      setStatusMessage(
        "Dziękujemy. Zapytanie z kalkulatora zostało wysłane. Odpowiemy na podany adres e-mail."
      );
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage(
        "Nie udało się wysłać zapytania. Proszę spróbować ponownie lub napisać e-mail."
      );
    }
  }

  return (
    <main>
      <section className="calculator-hero calculator-hero-pro">
        <div className="container calculator-hero-pro-grid">
          <div>
            <span className="calculator-eyebrow">Kalkulator online</span>
            <h1>Kalkulator wyceny zlecenia</h1>
            <p>
              Wybierz rodzaj usługi, zakres, termin realizacji i sprawdź
              orientacyjną cenę. Po uzupełnieniu formularza możesz wysłać
              zapytanie do konsultanta wraz z opisem oraz plikami.
            </p>

            <div className="calculator-hero-points">
              <div>
                <strong>Prace dyplomowe</strong>
                <span>licencjackie, magisterskie i inżynierskie</span>
              </div>
              <div>
                <strong>Projekty i case study</strong>
                <span>wycena według zakresu materiału</span>
              </div>
              <div>
                <strong>Płatność 50/50</strong>
                <span>opcja zaliczki lub całości po podłączeniu płatności</span>
              </div>
            </div>
          </div>

          <div className="calculator-hero-notice">
            <strong>Ważna informacja</strong>
            <p>
              Cena przygotowania pracy obejmuje podstawową redakcję,
              formatowanie, przypisy oraz bibliografię w zakresie ustalonej
              pracy. Korekta, redakcja, formatowanie czy bibliografia są liczone
              osobno tylko wtedy, gdy zamawiane są jako oddzielna usługa do
              gotowego tekstu.
            </p>
            <span>
              Cena z kalkulatora ma charakter orientacyjny. Ostateczne warunki
              potwierdza konsultant po analizie opisu, wymagań oraz materiałów.
            </span>
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container calculator-grid">
          <form className="calculator-form-card" onSubmit={handleCalculatorSubmit}>
            <div className="form-block">
              <div className="form-step">1</div>
              <div className="form-content">
                <label>Rodzaj usługi</label>
                <select
                  value={category}
                  autoComplete="off"
                  onChange={(event) => resetAfterCategoryChange(event.target.value as CategoryType)}
                >
                  {mainCategories.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasSubServices && (
              <div className="form-block">
                <div className="form-step">2</div>
                <div className="form-content">
                  <label>
                    {category === "pozostala"
                      ? "Rodzaj pracy"
                      : category === "prezentacja"
                      ? "Rodzaj prezentacji"
                      : "Wybierz konkretną usługę"}
                  </label>
                  <select
                    value={subService}
                    onChange={(event) => {
                      setSubService(event.target.value);
                      setRangeService("");
                      setQuantity("");
                      setDeadline(event.target.value ? "standardowy" : "");
                    }}
                  >
                    <option value="">Wybierz opcję</option>
                    {subOptions[category]?.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>

                  {selectedSubService?.description && (
                    <p className="form-hint">{selectedSubService.description}</p>
                  )}
                </div>
              </div>
            )}

            {isProjectBasedWork && (
              <div className="form-block">
                <div className="form-step">3</div>
                <div className="form-content">
                  <label>Zakres materiału</label>
                  <div className="scope-grid">
                    {projectRangeOptions.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => {
                          setRangeService(option.value);
                          setDeadline("standardowy");
                        }}
                        className={rangeService === option.value ? "scope-card active" : "scope-card"}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.description}</span>
                        {option.unit === "individual" ? (
                          <em>Wycena indywidualna</em>
                        ) : (
                          <em>od {option.price} zł</em>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {category && hasField && (
              <div className="form-block">
                <div className="form-step">{hasSubServices ? "4" : "2"}</div>
                <div className="form-content">
                  <label>Dziedzina pracy</label>
                  <select value={field} onChange={(event) => setField(event.target.value)}>
                    <option value="">Wybierz dziedzinę</option>
                    {fields.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <p className="form-hint">Pole informacyjne — nie wpływa na cenę.</p>
                </div>
              </div>
            )}

            {selectedService && hasQuantity && !isProjectBasedWork && (
              <div className="form-block">
                <div className="form-step">4</div>
                <div className="form-content">
                  <label>
                    {selectedService.unit === "strona"
                      ? "Liczba stron"
                      : selectedService.unit === "slajd"
                      ? "Liczba slajdów"
                      : "Liczba źródeł"}
                  </label>
                  <div className="number-input">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) => Math.max(1, Number(value || 1) - 1))
                      }
                    >
                      -
                    </button>
                    <input
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(event.target.value === "" ? "" : Number(event.target.value))
                      }
                      type="number"
                      min={1}
                      placeholder={
                        selectedService.unit === "strona"
                          ? "np. 30"
                          : selectedService.unit === "slajd"
                          ? "np. 12"
                          : "np. 10"
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Number(value || 0) + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}

            {hasScope && (
              <div className="form-block">
                <div className="form-step">5</div>
                <div className="form-content">
                  <label>Zakres zlecenia</label>
                  <div className="scope-grid">
                    {scopeOptions.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => {
                          setScope(option.value);
                          setDeadline("standardowy");
                        }}
                        className={scope === option.value ? "scope-card active" : "scope-card"}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedService && !isIndividual && (
              <div className="form-block">
                <div className="form-step">6</div>
                <div className="form-content">
                  <label>Termin realizacji</label>
                  <div className="deadline-grid">
                    {getDeadlineOptions(category).map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setDeadline(item)}
                        className={deadline === item ? "deadline-card active" : "deadline-card"}
                      >
                        <strong>{deadlineLabels[item]}</strong>
                        <span>{getDeadlineText(category, scope, item)}</span>
                        <em>
                          x{" "}
                          {isThesis(category)
                            ? scope
                              ? getBigWorkMultiplier(scope, item).toFixed(2)
                              : item === "standardowy"
                              ? "1.00"
                              : item === "pilny"
                              ? "1.30"
                              : "1.60+"
                            : getSimpleMultiplier(item).toFixed(2)}
                        </em>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="form-block">
              <div className="form-step">7</div>
              <div className="form-content">
                <label>Opis zlecenia</label>
                <textarea
                  name="message"
                  required
                  placeholder="Proszę wpisać temat pracy, wymagania uczelni, szczegółowy zakres, dodatkowe informacje, które pomogą przygotować dokładną wycenę..."
                />
                <div className="calculator-note">
                  Jeśli potrzebują Państwo dodatkowych elementów, takich jak
                  prezentacja, tłumaczenie streszczenia, ankieta, analiza danych lub
                  dodatkowy dobór źródeł, prosimy opisać to w polu „Opis zlecenia”.
                </div>
              </div>
            </div>

            <div className="form-block">
              <div className="form-step">8</div>
              <div className="form-content">
                <label>Dodaj pliki do wyceny</label>
                <label className="file-box file-upload-box">
                  <input
                    type="file"
                    name="files"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx"
                    onChange={(event) => {
                      const newFiles = Array.from(event.target.files || []);

                      setSelectedFiles((currentFiles) => {
                        const mergedFiles = [...currentFiles];

                        newFiles.forEach((newFile) => {
                          const alreadyExists = mergedFiles.some(
                            (file) =>
                              file.name === newFile.name &&
                              file.size === newFile.size &&
                              file.lastModified === newFile.lastModified
                          );

                          if (!alreadyExists) {
                            mergedFiles.push(newFile);
                          }
                        });

                        return mergedFiles;
                      });

                      event.target.value = "";
                    }}
                  />
                  <strong>Przeciągnij pliki tutaj lub kliknij, aby dodać</strong>
                  <span>PDF, DOC, DOCX, JPG, PNG, XLS, XLSX</span>
                </label>

                {selectedFiles.length > 0 && (
                  <div className="selected-files-list">
                    {selectedFiles.map((file) => (
                      <div key={`${file.name}-${file.size}-${file.lastModified}`}>
                        <span>{file.name}</span>

                        <div className="selected-file-actions">
                          <strong>{Math.round(file.size / 1024)} KB</strong>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedFiles((currentFiles) =>
                                currentFiles.filter(
                                  (currentFile) =>
                                    !(
                                      currentFile.name === file.name &&
                                      currentFile.size === file.size &&
                                      currentFile.lastModified === file.lastModified
                                    )
                                )
                              )
                            }
                          >
                            Usuń
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-block">
              <div className="form-step">9</div>
              <div className="form-content">
                <label>Dane kontaktowe</label>
                <div className="contact-row">
                  <input name="name" placeholder="Imię lub pseudonim" />
                  <input name="email" placeholder="E-mail" type="email" required />
                </div>
              </div>
            </div>
          </form>

          <aside className="summary-card">
            <div className="summary-header">
              <h2>Podsumowanie wyceny</h2>
            </div>

            <div className="summary-body">
              <div className="summary-list">
                <div>
                  <span>Usługa:</span>
                  <strong>
                    {category
                      ? mainCategories.find((item) => item.value === category)?.label
                      : "—"}
                  </strong>
                </div>

                {hasSubServices && selectedSubService && (
                  <div>
                    <span>Szczegóły:</span>
                    <strong>{selectedSubService.label}</strong>
                  </div>
                )}

                {isProjectBasedWork && selectedRangeService && (
                  <div>
                    <span>Zakres materiału:</span>
                    <strong>{selectedRangeService.label}</strong>
                  </div>
                )}

                {hasField && field && (
                  <div>
                    <span>Dziedzina:</span>
                    <strong>{field}</strong>
                  </div>
                )}

                {selectedService && hasQuantity && !isProjectBasedWork && (
                  <div>
                    <span>
                      {selectedService.unit === "strona"
                        ? "Liczba stron:"
                        : selectedService.unit === "slajd"
                        ? "Liczba slajdów:"
                        : "Liczba źródeł:"}
                    </span>
                    <strong>{quantity || "—"}</strong>
                  </div>
                )}

                {hasScope && scope && (
                  <div>
                    <span>Zakres:</span>
                    <strong>{scopeOptions.find((item) => item.value === scope)?.label}</strong>
                  </div>
                )}

                <div>
                  <span>Termin:</span>
                  <strong>{deadline ? deadlineLabels[deadline] : "—"}</strong>
                </div>
              </div>

              <div className="summary-divider" />

              <div className="summary-list">
                <div>
                  <span>Cena bazowa:</span>
                  <strong>
                    {selectedService
                      ? selectedService.unit === "individual"
                        ? "Wycena indywidualna"
                        : `${selectedService.price} zł / ${getUnitLabel(selectedService.unit)}`
                      : "—"}
                  </strong>
                </div>

                <div>
                  <span>Mnożnik terminu:</span>
                  <strong>{hasRequiredData && !isIndividual ? `x ${multiplier.toFixed(2)}` : "—"}</strong>
                </div>
              </div>

              <div className="total-box">
                {isIndividual ? (
                  <>
                    <span>Wycena indywidualna</span>
                    <strong className="empty-price">Po analizie materiałów</strong>
                  </>
                ) : hasRequiredData ? (
                  <>
                    <span>Orientacyjna cena brutto</span>
                    <strong>{formatMoney(total)}</strong>
                  </>
                ) : (
                  <>
                    <span>Orientacyjna wycena</span>
                    <strong className="empty-price">Uzupełnij dane</strong>
                  </>
                )}
              </div>

              <div className="included-box">
                <strong>Bez ukrytych kosztów</strong>
                <span>
                  Przy zamówieniu pracy cena obejmuje redakcję, formatowanie,
                  przypisy i bibliografię w zakresie ustalonej pracy.
                </span>
              </div>

              <div className="price-warning-box">
                <strong>Ważne przed płatnością</strong>
                <span>
                  Cena z kalkulatora jest orientacyjna. Konsultant potwierdzi
                  ostateczną cenę po sprawdzeniu opisu, wymagań i przesłanych
                  plików. Jeśli zakres pracy okaże się większy, bardziej złożony
                  albo wybrana opcja będzie nieprawidłowa, cena może zostać
                  skorygowana przed rozpoczęciem realizacji.
                </span>
              </div>

              {!hasRequiredData && !isIndividual && (
                <div className="payment-empty-box">
                  <strong>Płatność pojawi się po obliczeniu wyceny</strong>
                  <span>
                    Po uzupełnieniu danych kalkulator pokaże orientacyjną cenę,
                    wysokość zaliczki 50% oraz kwotę pozostałą do zapłaty.
                  </span>
                </div>
              )}

              {isIndividual && (
                <div className="payment-empty-box">
                  <strong>Ta usługa wymaga indywidualnej wyceny</strong>
                  <span>
                    Prosimy opisać zlecenie i przesłać materiały. Po analizie
                    potwierdzimy cenę oraz termin realizacji.
                  </span>
                </div>
              )}

              {hasRequiredData && !isIndividual && total > 0 && (
                <div className="payment-ready-box">
                  <h3>Wybierz sposób płatności</h3>

                  <label>
                    <input
                      type="radio"
                      checked={paymentType === "deposit"}
                      onChange={() => setPaymentType("deposit")}
                    />
                    Zaliczka 50%
                  </label>

                  <label>
                    <input
                      type="radio"
                      checked={paymentType === "full"}
                      onChange={() => setPaymentType("full")}
                    />
                    Całość online
                  </label>

                  <div className="payment-result">
                    <div>
                      <span>Kwota do zapłaty po podłączeniu płatności</span>
                      <strong>{formatMoney(payNow)}</strong>
                    </div>
                    <div>
                      <span>Pozostało po realizacji</span>
                      <strong>{formatMoney(remaining)}</strong>
                    </div>
                  </div>

                  <p className="payment-legal-note">
                    Płatność online zostanie podłączona w kolejnym etapie.
                    Obecnie przycisk wysyła zapytanie do konsultanta, a status
                    płatności w wiadomości będzie oznaczony jako nieopłacony.
                  </p>

                  <button className="primary-button full-button" type="button" disabled>
                    Płatność online wkrótce
                  </button>
                </div>
              )}

              <button
                className="outline-full-button"
                type="button"
                disabled={status === "sending"}
                onClick={() => {
                  const form = document.querySelector(".calculator-form-card") as HTMLFormElement | null;
                  form?.requestSubmit();
                }}
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij zapytanie do konsultanta"}
              </button>

              {statusMessage && (
                <p className={`kontakt-status kontakt-status-${status}`}>
                  {statusMessage}
                </p>
              )}

              <p className="summary-note">
                Cena ma charakter orientacyjny. Ostateczna wycena może zostać
                potwierdzona po analizie tematu, wymagań oraz przesłanych
                materiałów.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
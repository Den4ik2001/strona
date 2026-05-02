"use client";

import { useState } from "react";

const serviceOptions = [
  "Praca licencjacka",
  "Praca magisterska",
  "Praca inżynierska",
  "Pozostała praca akademicka",
  "Korekta / redakcja / formatowanie",
  "Bibliografia / przypisy / źródła",
  "Plan pracy / konspekt",
  "Prezentacja",
  "Część badawcza / analiza danych",
  "Tłumaczenie",
  "CV / dokumenty aplikacyjne",
  "Inne",
];

const contactSteps = [
  {
    title: "Opisują Państwo zlecenie",
    text: "Proszę podać temat, rodzaj usługi, termin oraz najważniejsze wymagania.",
  },
  {
    title: "Analizujemy szczegóły",
    text: "Sprawdzamy zakres, materiały, wymagania uczelni oraz możliwy termin realizacji.",
  },
  {
    title: "Potwierdzamy cenę",
    text: "Konsultant potwierdzi ostateczną cenę i zasady współpracy przed rozpoczęciem realizacji.",
  },
];

export default function KontaktPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.delete("files");

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.set("source", "Formularz Kontakt");
    formData.set("paymentStatus", "Nieopłacone — klient wysłał zapytanie do konsultanta");

    setStatus("sending");
    setStatusMessage("Wysyłanie wiadomości...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Nie udało się wysłać wiadomości.");
      }

      setStatus("success");
      setStatusMessage(
        "Dziękujemy. Zapytanie zostało wysłane. Odpowiemy na podany adres e-mail."
      );
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage(
        "Nie udało się wysłać wiadomości. Proszę spróbować ponownie lub napisać e-mail."
      );
    }
  }

  return (
    <main>
      <section className="kontakt-hero">
        <div className="container kontakt-hero-grid">
          <div>
            <h1>Kontakt i bezpłatna wycena</h1>
            <p>
              Mogą Państwo przesłać opis zlecenia, wymagania oraz pliki do
              wyceny. Odpowiemy na wiadomość mailowo i pomożemy dobrać
              odpowiedni zakres usługi.
            </p>

            <div className="kontakt-email-card">
              <span>Kontakt e-mail</span>
              <a href="mailto:prace.na.zamowienie.pro@gmail.com">
                prace.na.zamowienie.pro@gmail.com
              </a>
            </div>
          </div>

          <div className="kontakt-side-card">
            <strong>Wolą Państwo szybką wycenę?</strong>
            <p>
              Kalkulator pozwala sprawdzić orientacyjną cenę, wysokość zaliczki
              50% oraz kwotę pozostałą po realizacji.
            </p>
            <a href="/kalkulator" className="primary-button full-button">
              Przejdź do kalkulatora <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container kontakt-grid">
          <form className="kontakt-form" onSubmit={handleSubmit}>
            <h2>Wyślij zapytanie</h2>
            <p>
              Im więcej szczegółów zostanie podanych w formularzu, tym
              dokładniejszą wycenę można przygotować.
            </p>

            <div className="kontakt-form-row">
              <div>
                <label>Imię lub pseudonim</label>
                <input name="name" placeholder="np. Anna, Michał, studentka123" />
              </div>

              <div>
                <label>E-mail</label>
                <input name="email" placeholder="adres e-mail" type="email" required />
              </div>
            </div>

            <div className="kontakt-form-row">
              <div>
                <label>Rodzaj usługi</label>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Wybierz usługę
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label>Termin realizacji</label>
                <input name="deadline" placeholder="np. 7 dni, do piątku, pilne" />
              </div>
            </div>

            <div>
              <label>Temat / tytuł zlecenia</label>
              <input name="subject" placeholder="np. Praca licencjacka z pedagogiki" />
            </div>

            <div>
              <label>Opis zlecenia</label>
              <textarea
                name="message"
                required
                placeholder="Proszę opisać temat, wymagania uczelni, liczbę stron, zakres, termin, materiały, dodatkowe informacje oraz wszystko, co może pomóc w przygotowaniu dokładnej wyceny."
              />
            </div>

            <div>
              <label>Dodaj pliki</label>
              <label className="kontakt-file-box file-upload-box">
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

            <button
              className="primary-button kontakt-submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Wysyłanie..." : "Wyślij zapytanie"} <span>→</span>
            </button>

            {statusMessage && (
              <p className={`kontakt-status kontakt-status-${status}`}>
                {statusMessage}
              </p>
            )}
          </form>

          <aside className="kontakt-info">
            <div className="kontakt-info-card">
              <h2>Poufność materiałów</h2>
              <p>
                Przesłane informacje i pliki są wykorzystywane wyłącznie w celu
                przygotowania wyceny oraz ustalenia zakresu współpracy.
              </p>
            </div>

            <div className="kontakt-info-card">
              <h2>Jak wygląda kontakt?</h2>
              <div className="kontakt-steps">
                {contactSteps.map((step, index) => (
                  <div key={step.title}>
                    <span>{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kontakt-info-card kontakt-green-card">
              <h2>Nie wiedzą Państwo, co wybrać?</h2>
              <p>
                Wystarczy opisać sytuację i dodać dostępne pliki. Konsultant
                pomoże dobrać właściwą kategorię oraz zakres usługi.
              </p>
              <a href="/kalkulator" className="primary-button full-button">
                Oblicz orientacyjną cenę
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container final-cta">
          <div>
            <h2>Chcą Państwo sprawdzić koszt przed wysłaniem wiadomości?</h2>
            <p>
              Kalkulator pomoże szybko sprawdzić orientacyjną cenę i opcje
              płatności.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/kalkulator" className="primary-button">
              Wyceń zlecenie <span>→</span>
            </a>
            <a href="/cennik" className="secondary-button dark-secondary">
              Sprawdź cennik
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function safeText(value: FormDataEntryValue | null | unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function tableRows(rows: { label: string; value: string }[]) {
  return rows
    .filter((row) => row.value && row.value !== "—")
    .map(
      (row) => `
        <tr>
          <td style="padding:12px 14px;border:1px solid #e1e8f0;background:#f7fafc;font-weight:700;color:#0b2545;width:38%;">
            ${row.label}
          </td>
          <td style="padding:12px 14px;border:1px solid #e1e8f0;color:#0b2545;">
            ${row.value}
          </td>
        </tr>
      `
    )
    .join("");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Brak RESEND_API_KEY w .env.local" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Brak CONTACT_EMAIL w .env.local" },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let service = "";
    let subject = "";
    let deadline = "";
    let message = "";
    let source = "";
    let categoryDetails = "";
    let rangeDetails = "";
    let field = "";
    let quantity = "";
    let scope = "";
    let basePrice = "";
    let multiplier = "";
    let estimatedPrice = "";
    let paymentChoice = "";
    let paymentStatus = "";
    let payNow = "";
    let remaining = "";
    let files: File[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      name = safeText(formData.get("name"));
      email = safeText(formData.get("email"));
      service = safeText(formData.get("service"));
      subject = safeText(formData.get("subject"));
      deadline = safeText(formData.get("deadline"));
      message = safeText(formData.get("message"));
      source = safeText(formData.get("source"));

      categoryDetails = safeText(formData.get("categoryDetails"));
      rangeDetails = safeText(formData.get("rangeDetails"));
      field = safeText(formData.get("field"));
      quantity = safeText(formData.get("quantity"));
      scope = safeText(formData.get("scope"));
      basePrice = safeText(formData.get("basePrice"));
      multiplier = safeText(formData.get("multiplier"));
      estimatedPrice = safeText(formData.get("estimatedPrice"));
      paymentChoice = safeText(formData.get("paymentChoice"));
      paymentStatus = safeText(formData.get("paymentStatus"));
      payNow = safeText(formData.get("payNow"));
      remaining = safeText(formData.get("remaining"));

      files = formData
        .getAll("files")
        .filter((file): file is File => file instanceof File && file.size > 0);
    } else {
      const body = await request.json();

      name = typeof body.name === "string" ? body.name.trim() : "";
      email = typeof body.email === "string" ? body.email.trim() : "";
      service = typeof body.service === "string" ? body.service.trim() : "";
      subject = typeof body.subject === "string" ? body.subject.trim() : "";
      deadline = typeof body.deadline === "string" ? body.deadline.trim() : "";
      message = typeof body.message === "string" ? body.message.trim() : "";
      source = typeof body.source === "string" ? body.source.trim() : "";

      categoryDetails =
        typeof body.categoryDetails === "string" ? body.categoryDetails.trim() : "";
      rangeDetails =
        typeof body.rangeDetails === "string" ? body.rangeDetails.trim() : "";
      field = typeof body.field === "string" ? body.field.trim() : "";
      quantity = typeof body.quantity === "string" ? body.quantity.trim() : "";
      scope = typeof body.scope === "string" ? body.scope.trim() : "";
      basePrice = typeof body.basePrice === "string" ? body.basePrice.trim() : "";
      multiplier = typeof body.multiplier === "string" ? body.multiplier.trim() : "";
      estimatedPrice =
        typeof body.estimatedPrice === "string" ? body.estimatedPrice.trim() : "";
      paymentChoice =
        typeof body.paymentChoice === "string" ? body.paymentChoice.trim() : "";
      paymentStatus =
        typeof body.paymentStatus === "string" ? body.paymentStatus.trim() : "";
      payNow = typeof body.payNow === "string" ? body.payNow.trim() : "";
      remaining = typeof body.remaining === "string" ? body.remaining.trim() : "";
    }

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "E-mail i opis zlecenia są wymagane." },
        { status: 400 }
      );
    }

    const attachments = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    const filesText =
      files.length > 0
        ? files.map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("<br />")
        : "Brak załączników";

    const html = `
      <div style="font-family:Arial,sans-serif;background:#f5f8fb;padding:28px;color:#0b2545;">
        <div style="max-width:820px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e1e8f0;">
          <div style="background:#06284a;color:#ffffff;padding:26px 30px;">
            <h1 style="margin:0;font-size:28px;line-height:1.2;">Nowe zapytanie ze strony</h1>
            <p style="margin:8px 0 0;color:#dce8f5;">${source || "Formularz strony"}</p>
          </div>

          <div style="padding:28px 30px;">
            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Kontakt klienta</h2>
            <table style="border-collapse:collapse;width:100%;margin-bottom:26px;">
              ${tableRows([
                { label: "Imię lub pseudonim", value: name || "—" },
                { label: "E-mail klienta", value: email || "—" },
              ])}
            </table>

            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Usługa i zakres</h2>
            <table style="border-collapse:collapse;width:100%;margin-bottom:26px;">
              ${tableRows([
                { label: "Rodzaj usługi", value: service || "—" },
                { label: "Szczegóły", value: categoryDetails || "—" },
                { label: "Zakres materiału", value: rangeDetails || "—" },
                { label: "Dziedzina", value: field || "—" },
                { label: "Ilość", value: quantity || "—" },
                { label: "Zakres zlecenia", value: scope || "—" },
                { label: "Termin", value: deadline || "—" },
                { label: "Temat / tytuł", value: subject || "—" },
              ])}
            </table>

            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Wycena</h2>
            <table style="border-collapse:collapse;width:100%;margin-bottom:26px;">
              ${tableRows([
                { label: "Cena bazowa", value: basePrice || "—" },
                { label: "Mnożnik terminu", value: multiplier || "—" },
                { label: "Orientacyjna cena", value: estimatedPrice || "—" },
              ])}
            </table>

            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Płatność</h2>
            <table style="border-collapse:collapse;width:100%;margin-bottom:26px;">
              ${tableRows([
                { label: "Wybrana forma płatności", value: paymentChoice || "—" },
                { label: "Status płatności", value: paymentStatus || "—" },
                { label: "Do zapłaty teraz", value: payNow || "—" },
                { label: "Pozostało po realizacji", value: remaining || "—" },
              ])}
            </table>

            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Opis zlecenia</h2>
            <div style="white-space:pre-wrap;background:#f7fafc;border:1px solid #e1e8f0;border-radius:14px;padding:18px;margin-bottom:26px;color:#0b2545;line-height:1.6;">
${message}
            </div>

            <h2 style="margin:0 0 14px;font-size:21px;color:#0b2545;">Pliki</h2>
            <div style="background:#f0fbf5;border:1px solid #cceedd;border-radius:14px;padding:18px;color:#0b2545;line-height:1.6;">
              ${filesText}
            </div>

            <p style="margin:28px 0 0;color:#607089;font-size:14px;line-height:1.6;">
              Cena ma charakter orientacyjny. Ostateczne warunki mogą zostać potwierdzone po analizie opisu, wymagań oraz przesłanych materiałów.
            </p>
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Prace na Zamówienie <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Nowe zapytanie: ${service || "formularz strony"}`,
      html,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Nie udało się wysłać wiadomości.",
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Wiadomość została wysłana.",
    });
  } catch (error) {
    console.error("API contact error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Wystąpił błąd serwera.",
      },
      { status: 500 }
    );
  }
}
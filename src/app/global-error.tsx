"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{
          background: "#0b1727",
          color: "#f5f7fa",
          fontFamily: "Tahoma, sans-serif",
          margin: 0,
          minHeight: "100vh",
          padding: "2.5rem 1.25rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 500 }}>سایت الان باز نشد</h1>
        <p style={{ color: "#b7c4d4", lineHeight: 1.8 }}>یک بار دیگر تلاش کنید.</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            background: "#9ddde5",
            color: "#0b1727",
            border: 0,
            borderRadius: "0.6rem",
            minHeight: "2.75rem",
            padding: "0 1.25rem",
            font: "inherit",
          }}
        >
          تلاش دوباره
        </button>
      </body>
    </html>
  );
}

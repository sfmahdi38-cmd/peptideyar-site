import { streamerNames } from "@/lib/site";

const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function faIndex(index: number) {
  return String(index + 1)
    .padStart(2, "0")
    .replace(/\d/g, (digit) => digits[Number(digit)] ?? digit);
}

export function StreamerGrid({ names = streamerNames }: { names?: readonly string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {names.map((name, index) => (
        <li key={name} className={index % 3 === 2 ? "stream-tile stream-tile-warm" : "stream-tile"}>
          <span className="stream-index" aria-hidden="true">
            {faIndex(index)}
          </span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

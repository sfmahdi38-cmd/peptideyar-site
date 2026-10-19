import { streamerNames } from "@/lib/site";

export function StreamerGrid({ names = streamerNames }: { names?: readonly string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {names.map((name, index) => (
        <li key={name} className={index % 3 === 2 ? "stream-tile stream-tile-warm" : "stream-tile"}>
          {name}
        </li>
      ))}
    </ul>
  );
}

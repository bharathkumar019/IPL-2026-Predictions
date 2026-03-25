import { useState, useMemo } from "react";
import { allPlayers } from "@/data/players";
import { teams } from "@/data/teams";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface MvpSearchProps {
  selected: string | null;
  onSelect: (name: string) => void;
}

const roleBadgeColor: Record<string, string> = {
  "Batter":      "bg-blue-500/20 text-blue-400",
  "Bowler":      "bg-green-500/20 text-green-400",
  "All-rounder": "bg-purple-500/20 text-purple-400",
  "WK-Batter":   "bg-amber-500/20 text-amber-400",
};

const MvpSearch = ({ selected, onSelect }: MvpSearchProps) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allPlayers.filter(p => p.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search players..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="max-h-[50vh] overflow-y-auto space-y-1 pr-1">
        {filtered.map(player => {
          const team = teams.find(t => t.id === player.teamId);
          return (
            <motion.button
              key={`${player.teamId}-${player.name}`}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(player.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                selected === player.name
                  ? "bg-primary/20 text-primary font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {/* Player image */}
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-muted">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=64`;
                  }}
                />
              </div>

              {/* Name + team */}
              <div className="flex-1 text-left">
                <div>{player.name}</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <img
                    src={team?.logo}
                    alt={team?.shortName}
                    className="w-3.5 h-3.5 object-contain"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="text-[10px] text-muted-foreground">{team?.shortName}</span>
                </div>
              </div>

              {/* Role badge */}
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${roleBadgeColor[player.role]}`}>
                {player.role}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default MvpSearch;
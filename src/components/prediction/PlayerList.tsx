import { Player } from "@/data/players";
import { teams } from "@/data/teams";
import { motion } from "framer-motion";

interface PlayerListProps {
  playersByTeam: Record<string, Player[]>;
  selected: string | null;
  onSelect: (name: string) => void;
}

const roleBadgeColor: Record<string, string> = {
  "Batter":      "bg-blue-500/20 text-blue-400",
  "Bowler":      "bg-green-500/20 text-green-400",
  "All-rounder": "bg-purple-500/20 text-purple-400",
  "WK-Batter":   "bg-amber-500/20 text-amber-400",
};

const PlayerList = ({ playersByTeam, selected, onSelect }: PlayerListProps) => {
  return (
    <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
      {Object.entries(playersByTeam).map(([teamId, players]) => {
        const team = teams.find(t => t.id === teamId);
        if (!team) return null;
        return (
          <div key={teamId}>
            {/* Team header bar with logo */}
            <div
              className="sticky top-0 z-10 flex items-center gap-2 px-3 py-1.5 rounded-t-lg mb-2"
              style={{ backgroundColor: team.color }}
            >
              <img
                src={team.logo}
                alt={team.shortName}
                className="w-6 h-6 object-contain"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span
                className="text-sm font-bold font-display tracking-wider"
                style={{ color: team.textColor }}
              >
                {team.shortName}
              </span>
            </div>

            {/* Player cards grid */}
            <div className="grid grid-cols-3 gap-2">
              {players.map(player => (
                <motion.button
                  key={player.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(player.name)}
                  className={`flex flex-col items-center rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selected === player.name
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary hover:border-muted-foreground"
                  }`}
                >
                  {/* Player image */}
                  <div className="w-full aspect-square bg-muted">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover object-top"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=128`;
                      }}
                    />
                  </div>

                  {/* Name + role */}
                  <div className="w-full px-1.5 py-2 flex flex-col items-center gap-1">
                    <span
                      className={`text-[11px] font-semibold text-center leading-tight ${
                        selected === player.name ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {player.name}
                    </span>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${roleBadgeColor[player.role]}`}>
                      {player.role}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
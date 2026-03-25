import { Team } from "@/data/teams";
import { motion } from "framer-motion";

interface TeamCardProps {
  team: Team;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

const TeamCard = ({ team, selected, onSelect, disabled }: TeamCardProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      disabled={disabled && !selected}
      className={`relative flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-200 border-2 ${
        selected
          ? "team-card-selected border-primary"
          : disabled
          ? "border-border opacity-40 cursor-not-allowed"
          : "border-border hover:border-muted-foreground"
      }`}
      style={{ backgroundColor: selected ? team.color + "22" : undefined }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-2 overflow-hidden"
        style={{ backgroundColor: team.color + "33" }}
      >
        <img
          src={team.logo}
          alt={team.shortName}
          className="w-12 h-12 object-contain"
          onError={e => {
            // fallback to shortName text if image missing
            (e.currentTarget as HTMLImageElement).style.display = "none";
            (e.currentTarget.parentElement as HTMLElement).innerHTML = `<span style="color:${team.textColor};background:${team.color}" class="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold font-display">${team.shortName}</span>`;
          }}
        />
      </div>
      <span className="text-xs font-medium text-center leading-tight text-foreground">
        {team.name}
      </span>
    </motion.button>
  );
};

export default TeamCard;
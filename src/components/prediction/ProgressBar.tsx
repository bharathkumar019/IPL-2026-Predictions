interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const pct = (current / total) * 100;

  return (
    <div className="w-full px-4 pt-4 pb-2">
      <div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
        <span>Step {current} of {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full gold-gradient transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

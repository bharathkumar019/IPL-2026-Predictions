import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, Copy, Share2 } from "lucide-react";

const APP_URL = "https://ipl-2026-predictions.vercel.app";
const SHARE_TEXT = "🏏 IPL 2026 Predictions is LIVE! Pick your Winner, Top 4, MVP & more! Submit your predictions now!";

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + "\n👉 " + APP_URL)}`, "_blank");
  };

  const shareInstagram = () => {
    navigator.clipboard.writeText(SHARE_TEXT + "\n👉 " + APP_URL);
    window.open("https://www.instagram.com/", "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(APP_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6">
      <p className="text-center text-sm text-muted-foreground mb-3 flex items-center justify-center gap-2">
        <Share2 className="w-4 h-4" /> Share with friends
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={shareWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.855L.057 23.943l6.244-1.638A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.714.974.99-3.614-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
          WhatsApp
        </button>
        <button
          onClick={shareInstagram}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm"
          style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Instagram
        </button>
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm border border-border text-foreground"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied! ✅" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};
import confetti from "canvas-confetti";
import { supabase } from "@/integrations/supabase/client";
import { teams, getTeam } from "@/data/teams";
import { batters, bowlers } from "@/data/players";
import ProgressBar from "@/components/prediction/ProgressBar";
import StepWrapper from "@/components/prediction/StepWrapper";
import TeamCard from "@/components/prediction/TeamCard";
import PlayerList from "@/components/prediction/PlayerList";
import MvpSearch from "@/components/prediction/MvpSearch";

const TOTAL_STEPS = 10;

interface FormData {
  name: string;
  mobile: string;
  winner: string;
  finalists: string[];
  top4: string[];
  mostRuns: string;
  mostWickets: string;
  bestStrikeRate: string;
  mostDotBalls: string;
  mvp: string;
}

const Predict = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    winner: "",
    finalists: [],
    top4: [],
    mostRuns: "",
    mostWickets: "",
    bestStrikeRate: "",
    mostDotBalls: "",
    mvp: "",
  });
  const update = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const toggleArray = (key: "finalists" | "top4", id: string, max: number) => {
    setForm(prev => {
      const arr = prev[key];
      if (arr.includes(id)) return { ...prev, [key]: arr.filter(x => x !== id) };
      if (arr.length >= max) return prev;
      return { ...prev, [key]: [...arr, id] };
    });
  };

  const canNext = (): boolean => {
    switch (step) {
      case 1: return form.name.trim().length > 0;
      case 2: return form.winner !== "";
      case 3: return form.finalists.length === 2;
      case 4: return form.top4.length === 4;
      case 5: return form.mostRuns !== "";
      case 6: return form.mostWickets !== "";
      case 7: return form.bestStrikeRate !== "";
      case 8: return form.mostDotBalls !== "";
      case 9: return form.mvp !== "";
      case 10: return true;
      default: return false;
    }
  };

  const handleSubmit = async () => {
  setSubmitting(true);
  setError("");

  try {
    // 🚫 CHECK duplicate BEFORE insert
    if (form.mobile) {
      const { data: existing } = await supabase
        .from("predictions")
        .select("id")
        .eq("mobile", form.mobile.trim())
        .maybeSingle();

      if (existing) {
        setError("This mobile number has already submitted!");
        setSubmitting(false);
        return;
      }
    }

    // ✅ INSERT
    const { error: err } = await supabase.from("predictions").insert({
      name: form.name.trim(),
      mobile: form.mobile.trim() || null,
      winner: form.winner,
      finalist_1: form.finalists[0],
      finalist_2: form.finalists[1],
      top4: form.top4,
      most_runs: form.mostRuns,
      most_wickets: form.mostWickets,
      best_strike_rate: form.bestStrikeRate,
      most_dot_balls: form.mostDotBalls,
      mvp: form.mvp,
    });

    if (err) {
      setError(err.message);
      return;
    }

    // 🎉 SUCCESS
    setDone(true);

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#F5A623", "#FFD700", "#FFA500"],
    });

  } catch {
    setError("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
        </motion.div>
        <h1 className="text-4xl font-display gold-text mb-2">Prediction Submitted! 🏏</h1>
        <p className="text-muted-foreground mb-8">Thanks {form.name}! May your team lift the trophy.</p>
        <button
          onClick={() => navigate("/")}
          className="gold-gradient text-primary-foreground font-bold px-8 py-3 rounded-xl text-lg"
        >
          Back to Home
        </button>
        <ShareButtons />
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepWrapper stepKey={1} title="Your Details" subtitle="Tell us who you are">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                <input
  type="text"
  value={form.name}
  onChange={e => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    update("name", val);
  }}
  placeholder="Enter your name"
  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
/>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Mobile</label>
                <input
  type="tel"
  value={form.mobile}
  onChange={e => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    update("mobile", val);
  }}
  placeholder="Enter mobile number"
  maxLength={10}
  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
/>
              </div>
            </div>
          </StepWrapper>
        );
      case 2:
        return (
          <StepWrapper stepKey={2} title="Pick the Winner 🏆" subtitle="Who will lift the IPL 2026 trophy?">
            <div className="grid grid-cols-2 gap-3">
              {teams.map(t => (
                <TeamCard key={t.id} team={t} selected={form.winner === t.id} onSelect={() => update("winner", t.id)} />
              ))}
            </div>
          </StepWrapper>
        );
      case 3:
  return (
    <StepWrapper stepKey={3} title="Finalists" subtitle="Winner must be included">
      <div className="grid grid-cols-2 gap-3">
        {teams.map(t => {
          const isWinner = t.id === form.winner;

          return (
            <TeamCard
              key={t.id}
              team={t}
              selected={form.finalists.includes(t.id)}
              onSelect={() => toggleArray("finalists", t.id, 2)}
              disabled={
                (form.finalists.length >= 2 && !form.finalists.includes(t.id)) ||
                (!isWinner && form.finalists.length === 1 && !form.finalists.includes(form.winner))
              }
            />
          );
        })}
      </div>
    </StepWrapper>
  );
case 4:
  return (
    <StepWrapper stepKey={4} title="Top 4 Teams" subtitle="Finalists must be included">
      <div className="grid grid-cols-2 gap-3">
        {teams.map(t => {
          const isFinalist = form.finalists.includes(t.id);
          const isSelected = form.top4.includes(t.id);

          return (
            <TeamCard
              key={t.id}
              team={t}
              selected={isSelected}
              onSelect={() => {
                // Block: can't deselect a finalist
                if (isFinalist && isSelected) return;
                // Block: can't select more than 4
                if (!isSelected && form.top4.length >= 4) return;
                // Toggle normally for non-finalists
                toggleArray("top4", t.id, 4);
              }}
              disabled={
                // Lock finalists that are already selected
                (isFinalist && isSelected) ||
                // Disable unselected teams when max 4 reached
                (!isSelected && form.top4.length >= 4)
              }
            />
          );
        })}
      </div>
    </StepWrapper>
  );
      // Step 5 - Most Runs
case 5: {
  const battingPool = Object.fromEntries(
    Object.keys(batters).map(teamId => [
      teamId,
      [...batters[teamId], ...bowlers[teamId].filter(p => p.role === "All-rounder")],
    ])
  );
  return (
    <StepWrapper stepKey={5} title="Most Runs 🏏" subtitle="Who will score the most runs?">
      <PlayerList playersByTeam={battingPool} selected={form.mostRuns} onSelect={v => update("mostRuns", v)} />
    </StepWrapper>
  );
}

// Step 6 - Most Wickets
case 6: {
  const bowlingPool = Object.fromEntries(
    Object.keys(bowlers).map(teamId => [
      teamId,
      [...bowlers[teamId], ...batters[teamId].filter(p => p.role === "All-rounder")],
    ])
  );
  return (
    <StepWrapper stepKey={6} title="Most Wickets 🎳" subtitle="Who will take the most wickets?">
      <PlayerList playersByTeam={bowlingPool} selected={form.mostWickets} onSelect={v => update("mostWickets", v)} />
    </StepWrapper>
  );
}

// Step 7 - Best Strike Rate (same batting pool)
case 7: {
  const battingPool = Object.fromEntries(
    Object.keys(batters).map(teamId => [
      teamId,
      [...batters[teamId], ...bowlers[teamId].filter(p => p.role === "All-rounder")],
    ])
  );
  return (
    <StepWrapper stepKey={7} title="Best Strike Rate ⚡" subtitle="Which batter will have the best SR?">
      <PlayerList playersByTeam={battingPool} selected={form.bestStrikeRate} onSelect={v => update("bestStrikeRate", v)} />
    </StepWrapper>
  );
}

// Step 8 - Most Dot Balls (same bowling pool)
case 8: {
  const bowlingPool = Object.fromEntries(
    Object.keys(bowlers).map(teamId => [
      teamId,
      [...bowlers[teamId], ...batters[teamId].filter(p => p.role === "All-rounder")],
    ])
  );
  return (
    <StepWrapper stepKey={8} title="Most Dot Balls 🎯" subtitle="Which bowler will bowl the most dots?">
      <PlayerList playersByTeam={bowlingPool} selected={form.mostDotBalls} onSelect={v => update("mostDotBalls", v)} />
    </StepWrapper>
  );
}
      case 9:
        return (
          <StepWrapper stepKey={9} title="MVP 🌟" subtitle="Overall most valuable player">
            <MvpSearch selected={form.mvp} onSelect={v => update("mvp", v)} />
          </StepWrapper>
        );
      case 10:
        return (
          <StepWrapper stepKey={10} title="Review & Submit" subtitle="Double-check your predictions">
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
              <SummaryItem label="Name" value={form.name} />
              {form.mobile && <SummaryItem label="Mobile" value={form.mobile} />}
              <SummaryItem label="Winner" value={getTeam(form.winner)?.name} />
              <SummaryItem label="Finalists" value={form.finalists.map(id => getTeam(id)?.shortName).join(" vs ")} />
              <SummaryItem label="Top 4" value={form.top4.map(id => getTeam(id)?.shortName).join(", ")} />
              <SummaryItem label="Most Runs" value={form.mostRuns} />
              <SummaryItem label="Most Wickets" value={form.mostWickets} />
              <SummaryItem label="Best SR" value={form.bestStrikeRate} />
              <SummaryItem label="Most Dots" value={form.mostDotBalls} />
              <SummaryItem label="MVP" value={form.mvp} />
            </div>
            {error && <p className="text-destructive text-sm mt-3">{error}</p>}
            <ShareButtons />
          </StepWrapper>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-lg mx-auto">
      <ProgressBar current={step} total={TOTAL_STEPS} />
      <div className="flex-1 overflow-y-auto mt-2">{renderStep()}</div>
      <div className="flex gap-3 p-4 border-t border-border">
        {step > 1 && (
          <button
            onClick={() => setStep(s => s - 1)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-foreground font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
        {step < TOTAL_STEPS ? (
          <button
            onClick={() => {
  if (!canNext()) return;
  if (step === 3) {
    update("top4", [...form.finalists]); // pre-seed finalists into top4
  }
  setStep(s => s + 1);
}}
            disabled={!canNext()}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-primary-foreground transition-opacity ${
              canNext() ? "gold-gradient" : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-primary-foreground gold-gradient"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            {submitting ? "Submitting..." : "Submit 🏏"}
          </button>
        )}
      </div>
    </div>
  );
};

const SummaryItem = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex justify-between items-center bg-secondary rounded-lg px-4 py-3">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-semibold text-foreground text-right max-w-[60%]">{value}</span>
  </div>
);

export default Predict;
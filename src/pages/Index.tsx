import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Copy, Share2 } from "lucide-react";

const APP_URL = "https://ipl-2026-predictions.vercel.app";

const SHARE_TEXT =
  "🏏 IPL 2026 Predictions is LIVE!\n" +
  "Pick your Winner, Top 4, MVP & more!\n" +
  "Submit your predictions now!\n\n" +
  "👉 https://ipl-2026-predictions.vercel.app\n\n" +
  "Let's see who knows cricket the best! 👀🏅\n\n" +
  "📸 Results will be announced after the IPL 2026 Final!\n" +
  "Follow us on Instagram for the winner reveal:\n" +
  "https://www.instagram.com/crush_beat.kit?igsh=NG1vbDdlNnd2cDky\n\n" +
  "We'll mention the IDs of top predictors! 🏆";

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT)}`, "_blank");
  };

  const shareNative = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "IPL 2026 Predictions",
      text: SHARE_TEXT,
      url: APP_URL,
    });
  } else {
    // fallback: copy to clipboard
    navigator.clipboard.writeText(SHARE_TEXT);
    alert("Link copied! Paste it anywhere.");
  }
};

  const copyLink = () => {
    navigator.clipboard.writeText(APP_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <p className="text-center text-sm text-muted-foreground mb-3 flex items-center justify-center gap-2">
        <Share2 className="w-4 h-4" /> Share with friends
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        <button
          onClick={shareWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.855L.057 23.943l6.244-1.638A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.214-3.714.974.99-3.614-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
          WhatsApp
        </button>
        <button
  onClick={shareNative}
  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm"
  style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
>
  <Share2 className="w-4 h-4" />
  Share
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

const Index = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from("predictions")
      .select("id", { count: "exact", head: true })
      .then(({ count: c }) => setCount(c ?? 0));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-6xl mb-4"> 🏏 </div>
        <h1 className="text-5xl sm:text-6xl font-display gold-text mb-3 leading-tight">
          IPL 2026<br />Predictions
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Pick your winner, top 4, MVP and more. Show off your cricket knowledge!
        </p>

        {count !== null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground mb-6"
          >
            🏏 <span className="text-primary font-bold">{count.toLocaleString()}</span> fans have predicted!
          </motion.p>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/predict")}
          className="gold-gradient text-primary-foreground font-bold px-10 py-4 rounded-2xl text-xl animate-pulse-gold"
        >
          Make Your Prediction
        </motion.button>

        <ShareButtons />
      </motion.div>
    </div>
  );
};

export default Index;
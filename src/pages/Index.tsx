import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

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
        <div className="text-6xl mb-4">🏏</div>
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
      </motion.div>
    </div>
  );
};

export default Index;

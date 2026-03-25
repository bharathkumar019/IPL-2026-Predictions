
CREATE TABLE public.predictions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  mobile text,
  winner text NOT NULL,
  finalist_1 text NOT NULL,
  finalist_2 text NOT NULL,
  top4 text[] NOT NULL,
  most_runs text NOT NULL,
  most_wickets text NOT NULL,
  best_strike_rate text NOT NULL,
  most_dot_balls text NOT NULL,
  mvp text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.predictions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert predictions" ON public.predictions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can read predictions" ON public.predictions
  FOR SELECT TO anon, authenticated USING (true);

CREATE UNIQUE INDEX idx_predictions_mobile ON public.predictions (mobile) WHERE mobile IS NOT NULL AND mobile != '';

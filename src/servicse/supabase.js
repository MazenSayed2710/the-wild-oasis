import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xurghvxrcsbvuhbkjnlk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1cmdodnhyY3NidnVoYmtqbmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMzEzMjQsImV4cCI6MjAxNDcwNzMyNH0.BvbVjQEx0sf2CjKjGY5cF3eH--3aw4VJ6bDuGDNKnc8";
export const supabase = createClient(supabaseUrl, supabaseKey);

// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://knczmtwvlnutbfuwhyam.supabase.co', // Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuY3ptdHd2bG51dGJmdXdoeWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNTIwNzksImV4cCI6MjA0ODYyODA3OX0.QoKAzZ901f7tLScNQbOT66e-Ywn6q09N8DIh1usY8E8' //Supabase Anon Key
);

export default supabase;
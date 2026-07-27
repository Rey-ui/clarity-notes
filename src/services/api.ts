import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cHd6dmpkcmhocGdhaGZ4YXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTEzMjgsImV4cCI6MjA5OTg2NzMyOH0.F4joEtm4bw7GaEM-cgvqKXU7nU87m1wFnYY0EJwwzTI";

const BASE_URL = "https://ozpwzvjdrhhpgahfxaxb.supabase.co";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    apikey: API_KEY,
    "Content-Type": "application/json",
  },
});

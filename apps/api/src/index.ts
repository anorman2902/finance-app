import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "finance-api", time: new Date().toISOString() });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, () => {
  console.log(`[finance-api] listening on http://localhost:${PORT}`);
});

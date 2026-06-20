const SUPABASE_URL = "https://nrawsieotdenqpebubfm.supabase.co";
const SUPABASE_KEY = "sb_publishable_89Z-cQgaR4twyqSKsa0PVw_x6yYuFRh";

document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    whatsapp: document.getElementById("whatsapp").value,
    email: document.getElementById("email").value,
    kebutuhan: document.getElementById("kebutuhan").value
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(data)
  });

  const text = await res.text();

  document.getElementById("result").innerText =
    res.ok ? "Terkirim ✔" : "Error: " + text;
});

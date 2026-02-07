// Rate limit
let lastAction = 0;

export function canAct() {
  const now = Date.now();
  if (now - lastAction < 3000) return false;
  lastAction = now;
  return true;
}

// Safe text (XSS shield)
export function safeText(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.textContent;
}
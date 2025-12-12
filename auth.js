// auth.js

const ADMIN_PIN = "11302024";
const TL_PINS = {
"EMON": "764751",
"LEO LIZA": "286153",
"JONY": "679904",
"ZR RAHMAN": "759500",
"NURUL": "915245",
"ALX": "421249",
"KHAN": "555864",
"CHAK": "975016",
"DAVID": "600249",
"MUFA": "756350",
"SHUVO": "909363",
"KARIO": "676773",
"MOHDDIN": "289837",
"ONEMEN": "207988",
"RC": "162289"
};

// -------------------------
// Admin Access
// -------------------------
window.requireAdmin = async function() {
  if (sessionStorage.getItem("isAdmin") === "true") return true;
  const entered = prompt("🔐 Enter Admin PIN:");
  if (entered === ADMIN_PIN) {
    sessionStorage.setItem("isAdmin", "true");
    return true;
  }
  throw new Error("Invalid Admin PIN");
};

// -------------------------
// Team Leader Access
// -------------------------
window.requireTeamLeader = async function(tlName) {
  const tl = tlName.toUpperCase();
  if (!TL_PINS[tl]) throw new Error("Team Leader not registered");

  // Check session
  if (sessionStorage.getItem("currentTL") === tl) return true;

  const entered = prompt(`🔐 Enter PIN for Team Leader: ${tl}`);
  if (entered === TL_PINS[tl]) {
    sessionStorage.setItem("currentTL", tl);
    return true;
  }
  throw new Error("Invalid TL PIN");
};

// Unified check
window.checkTLAccess = async function(tlName) {
  if (!tlName) throw new Error("Team Leader not specified");
  return await window.requireTeamLeader(tlName);
};

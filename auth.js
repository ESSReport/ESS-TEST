// auth.js

const ADMIN_PIN = "11302024";
const TL_PINS = {
   "TL-Emon": "820156",
  "TL-Onemen": "872941",
  "TL-RC": "872964",
  "TL-Emon": "872994",
  "TL-JAVED": "872741",
  "TL-SHARIFLUX": "872264",
  "TL-KING": "872914",
  "TL-DAJAS": "872441",
  "TL-KAHC": "872354",
  "TL-RAYHEX": "872332",
  "TL-MRLEE": "872694",
  "TL-NUMM": "872621",
  "TL-NOS": "872656",
  "TL-LEWEJ": "872443",
  "TL-SEXELA": "872882",
  "TL-INOR": "872431",
  "TL-RAIRA": "872557",
  "TL-NOMIL": "872229",
  "TL-LASAR": "872659",
  "TL-KCAJ": "872454",
  "TL-URMAK": "872428",
  "TL-VORUOS": "872922",
  "TL-NAJUS": "872755",
  "TL-DEAN": "872897",
  "TL-ALEXVENUS": "872326",
  "TL-YOB": "872919",
  "TL-DARAZ": "872439",
  "TL-ZINAK": "872729",
  "TL-XYZ": "872357",
  "TL-ARAP": "872989",
  "TL-ASIAK": "872449",
  "TL-IHAZ": "872486",
  "TL-JAFOR": "872561",
  "TL-KING": "872889",
  "TL-LODNOM": "872113",
  "TL-NRAB": "872336",
  "TL-TELE": "872457",
  "TL-RUZIFAH": "872632",
   "TL-MIHOR": "872644",
  "TL-MUSAM": "872772",
  "TL-AZAD": "872651",
  "TL-AHAM": "872842",
   "TL-MARKA": "872342",
   "TL-ROSE": "877112",
   "TL-DIZOM": "843112",
   "TL-FISAN": "843332",
   "TL-UHAJ": "862342",
   "TL-SANI": "892642",
   "TL-RAMO": "893842",
   "TL-DRAF": "895813",
   "TL-HAFIZUR": "872632",
   "TL-MUNIM": "820157",
   "TL-SVEN": "815695",
   "TL-LEOLIZA": "872982"

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



























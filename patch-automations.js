const fs = require("fs");

const i18nPath = "lib/i18n.ts";
let s = fs.readFileSync(i18nPath, "utf8");

// ar.services.automations: match the block that has Arabic title (تشغيل or أتمتة)
const arAutomationsMatch = s.match(
  /(automations: \{\s+title: )"([^"]*\\u062[TA][^"]+)"(,\s+desc: )"([^"]+)"(\s+\},\s+uiux:)/
);
if (arAutomationsMatch) {
  console.log("Found ar automations. Current title:", arAutomationsMatch[2]);
  const newTitle = "\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644";
  const newDesc =
    "\u0642\u0645 \u0628\u062A\u0628\u0633\u064A\u0637 \u0639\u0645\u0644\u064A\u0627\u062A\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0623\u062A\u0645\u062A\u0629 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u062E\u0635\u0635\u0629\u060C \u0648\u0627\u0644\u062A\u0643\u0627\u0645\u0645\u0627\u062A\u060C \u0648\u0623\u062F\u0648\u0627\u062A \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0639\u0645\u0645\u064A\u0627\u062A.";
  s = s.replace(
    arAutomationsMatch[0],
    arAutomationsMatch[1] +
      JSON.stringify(newTitle) +
      arAutomationsMatch[3] +
      JSON.stringify(newDesc) +
      arAutomationsMatch[5]
  );
  fs.writeFileSync(i18nPath, s);
  console.log("Updated i18n.ts");
} else {
  console.log("Pattern not found. Checking for automations block...");
  const idx = s.indexOf('title: "\u062A\u0634\u063A\u064A\u0644');
  console.log("Index with 064I:", idx);
  const idx2 = s.indexOf('title: "\u062A\u0634\u063A\u064A\u0644');
  console.log("Index with 064A:", idx2);
}


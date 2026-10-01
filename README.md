# PassAnalyzer — Technical Reference & Entropy Gauge

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Security: Client--Side Only](https://img.shields.io/badge/Security-Client--Side%20Only-emerald.svg)](SECURITY.md)
[![Standard: NIST SP 800--63B](https://img.shields.io/badge/Standard-NIST%20SP%20800--63B-informational.svg)](https://pages.nist.gov/800-63-3/sp800-63b.html)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A client-side instrument for evaluating password entropy, dictionary susceptibility, and realistic crack times across hardware attack vectors. Designed with a restrained, print-inspired paper-and-ink aesthetic.

---

## Live Demonstration

Deployable directly via GitHub Pages:
- **Live Application:** [Launch PassAnalyzer](https://cyber-anshuman.github.io/PasswordAnalyzer/) *(or host locally)*

---

## Design System & Architecture

- **Visual Tone:** Built like a precision instrument (Dieter Rams / Edward Tufte aesthetic). No gradients, no glassmorphism, no colored glow shadows, and no decorative rounded cards.
- **Color Palette:** Warm neutral paper (`#F6F5F1`) with near-black carbon ink (`#161616`), accompanied by a true neutral charcoal dark mode (`#141414`), a single desaturated ink-blue accent (`#1E3A5F`), and functional data-only status indicators.
- **Typography:**
  - Headings: `Newsreader` (editorial serif)
  - Body & UI: `IBM Plex Sans`
  - Metrics, Tables & Data: `IBM Plex Mono` with tabular numerals (`tnum`)
- **Layout:** Asymmetric 2-column technical layout on desktop (left: input, verdict, and flat segmented scale; right: diagnostics checklist, crack-time data table, and specific heuristic reasoning). Single column on mobile.
- **Interactions:**
  - Show/Hide plain text button ("Show" / "Hide").
  - Plain inline sample links (`password123`, `Tr0ub4dor&3`, `correct horse battery staple`).
  - Native styled range sliders and checkboxes.
  - Inline "Copied" text state replacement (zero floating toast popups).

---

## Analytical Capabilities

1. **Realistic Guess Calculation (`zxcvbn`)**
   - Directed acyclic graph (DAG) guess estimator.
   - Accurately penalizes dictionary words, spatial keyboard walks, l33t mutations, repeat sequences, and dates.
   - Reports both **Effective Entropy** (pattern-penalized) and **Raw Shannon Entropy** (`L × log2(pool)`).

2. **Attack Scenarios Data Table**
   - Real data table featuring right-aligned tabular numerals, hairline row borders, muted assumption labels, and an inline log-scale relative speed bar:
     - Online (throttled): ~100 guesses/sec
     - Online (unthrottled): ~10,000 guesses/sec
     - Offline slow hash: bcrypt / Argon2, ~100k guesses/sec
     - Offline fast hash: MD5 / NTLM / SHA-256 on GPU, ~10B guesses/sec
     - Large GPU cluster: dedicated warehouse, ~1T guesses/sec

3. **Cryptographic Generator**
   - Powered by `window.crypto.getRandomValues`.
   - Random character mode (length 8–64, custom charsets).
   - Diceware passphrase mode (4–7 memorable clean words with separator and number options).

4. **Optional Breach Check (k-Anonymity)**
   - Unchecked by default.
   - Computes local SHA-1 digest via `crypto.subtle`.
   - Sends only the 5-character prefix to Troy Hunt's HIBP Range API. Full password and hash never leave the device.

5. **NIST SP 800-63B Authentication Reference**
   - Clean numbered list outlining modern identity standards (length over complexity, abolishing periodic expiration, and screening breach dumps).

---

## Project Structure

```text
PassAnalyzer/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml       # Structured bug report form
│   │   ├── feature_request.yml  # Structured feature request form
│   │   └── config.yml           # Issue configuration & security policy link
│   ├── workflows/
│   │   ├── ci.yml               # Integrity validation & script syntax testing
│   │   └── deploy.yml           # Automated GitHub Pages deployment
│   ├── dependabot.yml           # Automated action dependency tracking
│   └── pull_request_template.md # PR guidelines and verification checklist
├── .gitignore                   # Excludes OS, IDE, logs, and large wordlists
├── CODE_OF_CONDUCT.md           # Contributor Covenant v2.1
├── CONTRIBUTING.md              # Contribution guide and code conventions
├── LICENSE                      # MIT Open Source License
├── README.md                    # Project documentation and architectural reference
├── SECURITY.md                  # Security model, k-anonymity disclosure, and reporting
└── index.html                   # Zero-dependency, single-page application
```

---

## Local Execution

Double click `index.html` or serve via Python:
```bash
python -m http.server 5173
```
Visit `http://localhost:5173` in any modern web browser.

---

## Optional: Larger Offline Common-Password List

A built-in list of ~230 very common passwords is included. For more coverage, create `common-passwords.txt`
next to `index.html` (one password per line, most common first), e.g. on Kali:

```bash
gunzip -k /usr/share/wordlists/rockyou.txt.gz
head -n 100000 rockyou.txt > common-passwords.txt
```

Serve over HTTP (`python -m http.server 5173`); browsers block this file read when opened via `file://`.

---

## Offline Use

Download `zxcvbn.js` (4.4.2) and the IBM Plex / Newsreader fonts, then point the `<script>` and `<link>` tags to local copies and tighten the CSP in `index.html` accordingly.

---

## Security & Privacy

PassAnalyzer is strictly client-side. No passwords or plaintext inputs are ever transmitted, saved, or monitored. For full details on our cryptographic model and vulnerability disclosure procedure, consult [SECURITY.md](SECURITY.md).

---

## Contributing & License

Contributions are welcome! Please review [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md) before submitting pull requests.

Distributed under the [MIT License](LICENSE). Copyright (c) 2026 Anshuman Patel.

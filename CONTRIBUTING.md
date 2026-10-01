# Contributing to PassAnalyzer

Thank you for your interest in contributing to PassAnalyzer! We welcome contributions that align with our mission: building an accurate, privacy-first, print-inspired password entropy gauge and security reference.

---

## Guiding Principles

Before submitting changes, please keep our core tenets in mind:

1. **Zero-Trust Privacy:**
   - Calculations must remain 100% client-side.
   - Never introduce code that persists passwords or transmits plaintext/hashes to unvetted external endpoints.
   - Respect and preserve the strict Content Security Policy (CSP).

2. **Restrained Instrument Aesthetic:**
   - PassAnalyzer adheres to a clean, Dieter Rams / Edward Tufte paper-and-ink design language.
   - Avoid visual clutter: no flashy gradients, neon glows, glassmorphism, or intrusive toast popups.
   - Favor tabular numerals, high contrast, clean hairlines, and functional typography (`Newsreader`, `IBM Plex Sans`, `IBM Plex Mono`).

3. **Minimal Footprint:**
   - PassAnalyzer is built with vanilla HTML, CSS, and modern JavaScript.
   - Avoid heavy runtime frameworks or superfluous external libraries.

---

## How Can I Contribute?

### Reporting Bugs
- Check the [existing issues](https://github.com/itz-Ansh/PassAnalyzer/issues) before opening a new one.
- Use the **Bug Report** template and include browser version, OS, steps to reproduce, and actual vs. expected behavior.
- *For security-related issues, please refer to [SECURITY.md](SECURITY.md).*

### Suggesting Enhancements
- Open a feature request describing the proposed functionality, motivation, and references (such as NIST SP 800-63B or cryptographic papers).

### Code Contributions

1. **Fork & Branch:**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Local Development:**
   - PassAnalyzer runs directly in any modern browser without a build step.
   - Serve locally:
     ```bash
     python -m http.server 5173
     # or npx serve .
     ```
   - Open `http://localhost:5173` in your browser.

3. **Verify:**
   - Test across modern browsers (Chrome, Firefox, Safari, Edge).
   - Ensure the browser developer console reports no CSP violations or runtime errors.
   - Verify keyboard navigation and responsive layout behavior.

4. **Commit Style:**
   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: add zxcvbn custom dictionary matcher`
   - `fix: resolve mobile overflow in attack scenarios table`
   - `docs: update NIST SP 800-63B section in README`
   - `style: adjust tabular numeral alignment in crack time column`

5. **Submit a Pull Request:**
   - Push to your fork and submit a PR against `main`.
   - Fill out the PR template completely.

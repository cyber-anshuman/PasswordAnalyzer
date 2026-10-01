# Security Policy

## Security & Privacy Guarantees

PassAnalyzer is designed from first principles as a **zero-trust, privacy-first technical instrument**:

1. **100% Client-Side Execution:**
   - All password analysis, entropy calculations, and dictionary matching are performed locally within your browser's JavaScript runtime.
   - Passwords and input values are stored in memory only for the duration of the active session and are never persisted to `localStorage`, `sessionStorage`, cookies, or remote databases.

2. **Strict Content Security Policy (CSP):**
   - The document enforces a locked-down CSP restricting external network connections (`connect-src 'self' https://api.pwnedpasswords.com`).
   - No analytics, tracking beacons, ads, or third-party monitoring scripts are embedded or allowed to execute.

3. **k-Anonymity Breach Verification:**
   - Breach verification against Have I Been Pwned (HIBP) is strictly opt-in (disabled by default).
   - When enabled, the SHA-1 hash is computed locally using `crypto.subtle.digest('SHA-1', ...)`.
   - Only the first 5 characters (prefix) of the hash are transmitted over HTTPS to the HIBP Range API. Full hashes and plaintext passwords **never** leave your device.

4. **Cryptographic Random Generation:**
   - All password and passphrase generation utilizes `window.crypto.getRandomValues()`, ensuring cryptographically secure pseudo-random number generation (CSPRNG).

---

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

---

## Reporting a Vulnerability

If you discover a potential security vulnerability, data leakage issue, or CSP violation in PassAnalyzer, please report it responsibly:

1. **Do not open a public issue.**
2. Send an email with details, reproduction steps, and potential impact to:
   - **Contact:** `anshumanpatel.in@gmail.com`
   - **Subject:** `[SECURITY] PassAnalyzer Vulnerability Report`
3. Alternatively, submit a report via GitHub's private vulnerability reporting feature under the **Security** tab of this repository.

We will acknowledge receipt of your report within 48 hours and work with you to understand and mitigate the issue before public disclosure.

# chess-image-logger

Proof-of-Concept for bug bounty testing against domain validation bypass using embedded images.

- Loads `/poc.png` from spoofed subdomain
- Logs requests (IP, headers, timestamp)
- Use: `https://chess.com.vyuh.dev/poc.png`

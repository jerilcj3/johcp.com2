import { BrowserFingerprint } from "browser_fingerprint";

const fingerPrinter = new BrowserFingerprint({
  cookieKey: "__browser_fingerprint",
  toSetCookie: true,
  onlyStaticElements: true,
  settings: {
    path: "/",
    expires: 3600000,
    httpOnly: null,
  },
});

export default function handler(req, res) {
  const { fingerprint } = fingerPrinter.fingerprint(req);
  res.status(200).json({ name: fingerprint });
}

// Prefer platform fonts, with Google Fonts for other non-Safari browsers.
const userAgent = navigator.userAgent;
const platform = navigator.userAgentData?.platform;
const isWindows = platform === "Windows" || /\bWindows\b/i.test(userAgent);
const isAndroid =
  platform === "Android" || /\bAndroid\b/i.test(userAgent);
const isLinux = platform === "Linux" || /\bLinux\b/i.test(userAgent);

const isSafari =
  /\bVersion\/[\d.]+.*\bSafari\//i.test(userAgent) &&
  !/\b(?:Chrome|Chromium|CriOS|FxiOS|Edg|EdgA|EdgiOS|OPR|OPiOS|SamsungBrowser)\//i.test(
    userAgent,
  );

if (isWindows) {
  document.documentElement.dataset.font = "windows";
} else if (isAndroid) {
  document.documentElement.dataset.font = "android";
} else if (isLinux) {
  document.documentElement.dataset.font = "linux";
} else if (!isSafari) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href =
    "https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap";
  document.head.append(stylesheet);
  document.documentElement.dataset.font = "web";
}

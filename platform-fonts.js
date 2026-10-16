// Use the bundled Hebrew font only on Android.
const isAndroid =
  navigator.userAgentData?.platform === "Android" ||
  /\bAndroid\b/i.test(navigator.userAgent);

if (isAndroid) {
  document.documentElement.dataset.platform = "android";
}

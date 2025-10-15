export function getRefreshToken() {
  const match = document.cookie.match(/(?:^| )refresh_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function getAccessToken() {
  const match = document.cookie.match(/(?:^| )access_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function setAccessToken(accessToken: string) {
  const base = getBase()
  document.cookie = `access_token=${encodeURIComponent(accessToken)}; ${base}`;
}

export function setRefreshToken(accessToken: string) {
  const base = getBase()
  document.cookie = `refresh_token=${encodeURIComponent(accessToken)}; ${base}`;
}

function getBase() {
  const oneYear = 60 * 60 * 24 * 365;
  const isProd = location.protocol === "https:" && location.hostname !== "localhost";

  return `path=/; max-age=${oneYear}; samesite=lax${isProd ? "; secure" : ""}`
}

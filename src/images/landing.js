function importAll(r) {
  return r.keys().map(r);
}

export const images = importAll(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);

export const info = [
  {
    id: "k9Zeq6EH_bk",
    photog: "Mike Swigunski",
    url: "https://unsplash.com/photos/k9Zeq6EH_bk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    link: "https://unsplash.com/@mike_swigunski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    id: "hlmuzhcpCkY",
    photog: "Ricardo Gomez Angel",
    url: "https://unsplash.com/photos/hlmuzhcpCkY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    link: "https://unsplash.com/@rgaleriacom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    id: "CfYRAHOESwQ",
    photog: "Datingscout",
    url: "https://unsplash.com/photos/CfYRAHOESwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    link: "https://unsplash.com/@datingscout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    id: "3PhC0WjLLkc",
    photog: "Nick Fewings",
    url: "https://unsplash.com/photos/3PhC0WjLLkc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    link: "https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
];

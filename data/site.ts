// Official studio destinations supplied by 2BD Studios.
export const site = {
  email: "twobdstudios@gmail.com",
  steam: "https://store.steampowered.com/curator/46742724/",
  linksAreSamples: false,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/2bdstudios/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/2bd-studios/",
    },
    { label: "YouTube", href: "https://www.youtube.com/@2BDStudios" },
  ],
};
export const chapters = ["Home", "Game", "About", "Contact"] as const;
export type Chapter = (typeof chapters)[number];

// Official studio destinations supplied by 2BD Studios.
export const site = {
  email: "twobdstudios@gmail.com",
  steam: "https://store.steampowered.com/app/4883480/To_Be_Seen/",
  linksAreSamples: false,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/2bdstudios/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/2bd-studios/",
    },
  ],
};
export const chapters = ["Home", "Game", "About", "Team", "Contact"] as const;
export type Chapter = (typeof chapters)[number];

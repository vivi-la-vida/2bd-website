// Links supplied by the prototype. Replace with approved studio destinations.
export const site = {
  email: "hello@2bdstudios.com",
  steam: "https://store.steampowered.com/search/?term=To+Be+Seen",
  linksAreSamples: true,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Discord", href: "https://discord.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
};
export const chapters = ["Home", "Game", "About", "Team", "Contact"] as const;
export type Chapter = (typeof chapters)[number];

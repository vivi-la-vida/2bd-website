export interface GameFeature {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}
export const features: GameFeature[] = [
  {
    image: "explore",
    title: "Explore",
    subtitle: "Wander the In-Between.",
    description: "Follow a jellyfish spirit guide, explore different seasons.",
  },
  {
    image: "possess",
    title: "Possess",
    subtitle: "Step into your family’s lives.",
    description: "Relive memories through family members' eyes.",
  },
  {
    image: "uncover",
    title: "Uncover",
    subtitle: "Piece together memory puzzles.",
    description: "Discover joy, regret, and hidden truths in blurry memories.",
  },
  {
    image: "return",
    title: "Return",
    subtitle: "From distance to connection.",
    description: "Understand your family. Find your way home.",
  },
];

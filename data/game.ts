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
    subtitle: "Wander the In Between.",
    description: "Find wonder in the places left behind.",
  },
  {
    image: "possess",
    title: "Connect",
    subtitle: "See through another’s eyes.",
    description: "Step into the memories of those you love.",
  },
  {
    image: "uncover",
    title: "Uncover",
    subtitle: "Every memory holds a story.",
    description: "Piece together the little things that matter.",
  },
  {
    image: "return",
    title: "Return",
    subtitle: "Some things stay with us.",
    description: "Find your way back to where you belong.",
  },
];

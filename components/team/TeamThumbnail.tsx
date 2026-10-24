import Image from "next/image";
import type { TeamMember } from "@/types/team";

export default function TeamThumbnail({
  member,
  selected,
  onSelect,
}: {
  member: TeamMember;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`gallery-thumbnail${selected ? " selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`Meet ${member.name}, ${member.role}`}
      title={`${member.name} · ${member.role}`}
    >
      <Image
        src={member.photo}
        alt=""
        width={180}
        height={212}
        sizes="(max-width: 640px) 80px, (max-width: 1000px) 65px, 55px"
        draggable={false}
      />
      <span>{member.name.split(" ")[0]}</span>
    </button>
  );
}

import Image from "next/image";
import { Stamp } from "@/components/ui/Stamp";
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
      <Stamp
        as="span"
        aria-hidden
        className="gallery-profile-stamp"
        paper={selected ? "#eee7fb" : "#fffaf1"}
        padding={5}
        horizontalPerforations={8}
        verticalPerforations={10}
      >
        <Image
          src={member.photo}
          style={{ objectPosition: member.photoPosition }}
          alt=""
          fill
          sizes="(max-width: 640px) 80px, (max-width: 1000px) 65px, 100px"
          draggable={false}
        />
      </Stamp>
    </button>
  );
}

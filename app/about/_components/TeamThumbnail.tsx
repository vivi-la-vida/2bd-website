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
      aria-label={`Meet ${member.name}`}
      title={`${member.name} `}
    >
      <Stamp
        paper={selected ? "#eee7fb" : "#fffaf1"}
        ink="#514775"
        padding={5}
        horizontalPerforations={8}
        verticalPerforations={10}
        className="gallery-profile-stamp"
        aria-hidden
      >
      <Image
        src={member.photo}
        style={{ objectPosition: member.photoPosition }}
        alt=""
        fill
        sizes="(max-width: 640px) 80px, (max-width: 1000px) 65px, 55px"
        draggable={false}
      />
      </Stamp>
      <span>{member.name.split(" ")[0]}</span>
    </button>
  );
}

import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { TeamMember } from "@/types/team";

export default function TeamProfileCard({ member }: { member: TeamMember }) {
  const qualifier = " (opens in a new tab)";
  return (
    <div className="gallery-bio">
      <h3>{member.name}</h3>
      <p className="gallery-role">{member.role}</p>
      <p className="gallery-biography">{member.bio}</p>
      <div className="gallery-socials">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name}'s LinkedIn${qualifier}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3V9Zm6 0h3v1.6c.7-1.2 1.9-1.9 3.4-1.9 3.2 0 4.6 2 4.6 5.4V21h-3v-6.4c0-1.8-.6-3-2.3-3s-2.7 1.2-2.7 3V21h-3V9Z" />
          </svg>
          LinkedIn
          <ArrowUpRight size={12} />
        </a>
        {member.portfolio && (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name}'s portfolio${qualifier}`}
          >
            <ExternalLink size={16} />
            Portfolio
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </div>
  );
}

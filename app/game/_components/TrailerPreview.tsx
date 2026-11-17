export default function TrailerPreview() {
  return (
    <div className="trailer-preview" role="group" aria-label="Game trailer">
      <iframe
        src="https://www.youtube-nocookie.com/embed/tdk6lrjkPFo"
        title="To Be Seen — official game trailer"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

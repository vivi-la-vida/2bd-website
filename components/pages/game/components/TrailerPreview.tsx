interface TrailerPreviewProps {
  videoSrc?: string;
  poster?: string;
}

export default function TrailerPreview({
  videoSrc = "/videos/tbs-oak-city.mp4",
  poster,
}: TrailerPreviewProps) {
  return (
    <div className="trailer-preview" role="group" aria-label="Game trailer">
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={poster}
          controls
          playsInline
          preload="none"
          aria-label="To Be Seen trailer"
        >
          Your browser does not support embedded video.
        </video>
      ) : (
        <p className="trailer-coming-soon">Coming Soon</p>
      )}
    </div>
  );
}

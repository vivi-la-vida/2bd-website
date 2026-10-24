interface TrailerPreviewProps {
  videoSrc?: string;
  poster?: string;
}

// Supply a video source here when the official trailer is ready; the frame stays the same.
export default function TrailerPreview({
  videoSrc,
  poster,
}: TrailerPreviewProps) {
  return (
    <div className="trailer-preview" role="group" aria-label="Game trailer">
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={poster}
          controls
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

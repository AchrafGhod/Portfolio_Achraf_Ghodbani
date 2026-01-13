import GlowCardContainer from "./GlowCardContainer";

/**
 * GlowCard - Legacy wrapper for backward compatibility
 * Now uses GlowCardContainer internally to avoid code duplication
 * 
 * Props are passed to GlowCardContainer
 */
const GlowCard = ({ card, index, children, ...props }) => {
  return (
    <GlowCardContainer
      index={index}
      className="timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
      {...props}
    >
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </GlowCardContainer>
  );
};

export default GlowCard;
import { useRef } from "react";

/**
 * GlowCardContainer - A reusable component that adds mouse-tracking glow effect to any card
 * 
 * Features:
 * - Mouse-tracking glow border effect (follows cursor position)
 * - Customizable glow color via CSS variable
 * - Flexible content through children
 * - Works with any styling via className
 * 
 * Props:
 * - children: React node - Card content
 * - className: string - Additional classes for the card
 * - glowColor: string (optional) - Hex color for glow effect (default: #3b82f6)
 * - index: number (optional) - Index for tracking multiple cards
 * - onMouseMove: function (optional) - Additional mouse move handler
 * - ...props: Any other HTML attributes
 * 
 * Usage:
 * <GlowCardContainer glowColor="#ff0000" className="rounded-xl p-8">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </GlowCardContainer>
 */
const GlowCardContainer = ({
  children,
  className = "",
  glowColor = "#3b82f6",
  index = 0,
  onMouseMove: externalMouseMove,
  ...props
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Calculate mouse position relative to card center
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate angle from center to mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    // Update CSS variable for glow rotation
    card.style.setProperty("--start", angle + 60);

    // Call external handler if provided
    externalMouseMove?.(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card card-border ${className}`}
      style={{ "--glow-color": glowColor }}
      {...props}
    >
      {/* Glow effect div */}
      <div className="glow"></div>

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowCardContainer;

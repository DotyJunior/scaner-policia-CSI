import React from "react";

interface AnimatedScannerIconProps {
  isHoveredOrActive?: boolean;
  style?: React.CSSProperties;
}

export const AnimatedScannerIcon: React.FC<AnimatedScannerIconProps> = ({
  isHoveredOrActive = false,
  style
}) => {
  const blueColor = isHoveredOrActive ? "#00b5ff" : "#246185";
  
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    >
      <defs>
        {/* Glow filter for neon green light */}
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        @keyframes scanSweep {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(42px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .neon-laser-line {
          animation: scanSweep 2s infinite ease-in-out;
        }
      `}</style>

      {/* Corner Brackets */}
      {/* Top-Left */}
      <path
        d="M 12 28 V 12 H 28"
        stroke={blueColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s ease" }}
      />
      {/* Top-Right */}
      <path
        d="M 72 12 H 88 V 28"
        stroke={blueColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s ease" }}
      />
      {/* Bottom-Left */}
      <path
        d="M 12 72 V 88 H 28"
        stroke={blueColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s ease" }}
      />
      {/* Bottom-Right */}
      <path
        d="M 72 88 H 88 V 72"
        stroke={blueColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s ease" }}
      />

      {/* Inner Square Frame */}
      <rect
        x="26"
        y="26"
        width="48"
        height="48"
        rx="5"
        stroke={blueColor}
        strokeWidth="8"
        fill="none"
        style={{ transition: "stroke 0.2s ease" }}
      />

      {/* Neon Green Scan Laser Line */}
      {/* Glow Layer */}
      <line
        className="neon-laser-line"
        x1="18"
        y1="29"
        x2="82"
        y2="29"
        stroke="#00ff33"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.6"
        filter="url(#neonGlow)"
      />
      {/* Core Layer */}
      <line
        className="neon-laser-line"
        x1="18"
        y1="29"
        x2="82"
        y2="29"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

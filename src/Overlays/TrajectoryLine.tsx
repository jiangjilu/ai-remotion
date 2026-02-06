import { AbsoluteFill } from "remotion";
import React from "react";

interface Point {
    x: number;
    y: number;
    frame: number;
}

interface TrajectoryLineProps {
    points: Point[];
    currentFrame: number;
    color?: string;
}

export const TrajectoryLine: React.FC<TrajectoryLineProps> = ({ points, currentFrame, color = "#00e5ff" }) => {
    // Filter points up to current frame
    const visiblePoints = points.filter(p => p.frame <= currentFrame);

    if (visiblePoints.length < 2) return null;

    // Create SVG path
    const pathData = visiblePoints.map((p, i) => {
        const command = i === 0 ? "M" : "L";
        return `${command} ${p.x} ${p.y}`;
    }).join(" ");

    return (
        <AbsoluteFill>
            <svg style={{ width: "100%", height: "100%", overflow: "visible" }}>
                <path
                    d={pathData}
                    stroke={color}
                    strokeWidth={5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.7))" // Neon glow
                    }}
                />
                {/* Current Dot */}
                {visiblePoints.length > 0 && (
                    <circle
                        cx={visiblePoints[visiblePoints.length - 1].x}
                        cy={visiblePoints[visiblePoints.length - 1].y}
                        r={8}
                        fill="white"
                        style={{
                            filter: "drop-shadow(0 0 10px white)"
                        }}
                    />
                )}
            </svg>
        </AbsoluteFill>
    );
};

import React from "react";

interface SpeedometerProps {
    speed: number; // km/h
}

export const Speedometer: React.FC<SpeedometerProps> = ({ speed }) => {
    return (
        <div style={{
            position: "absolute",
            bottom: 50,
            left: 50,
            background: "rgba(0,0,0,0.6)",
            padding: "15px 30px",
            borderRadius: "15px",
            color: "white",
            fontFamily: "sans-serif",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)"
        }}>
            <div style={{ fontSize: 14, color: "#aaa", textTransform: "uppercase", letterSpacing: 1 }}>Speed</div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontSize: 48, fontWeight: "bold", color: "#00e5ff" }}>
                    {speed.toFixed(1)}
                </span>
                <span style={{ fontSize: 20, marginLeft: 8, color: "#fff" }}>km/h</span>
            </div>

            {/* Visual Bar */}
            <div style={{ width: 150, height: 4, background: "#333", marginTop: 8, borderRadius: 2 }}>
                <div style={{
                    width: `${Math.min(speed, 100)}%`, // Max 100 Scale
                    height: "100%",
                    background: "linear-gradient(90deg, #00e5ff, #00ff99)",
                    borderRadius: 2,
                    transition: "width 0.1s linear"
                }} />
            </div>
        </div>
    );
};

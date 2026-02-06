import React from "react";

interface HeightGraphProps {
    height: number; // meters
}

export const HeightGraph: React.FC<HeightGraphProps> = ({ height }) => {
    return (
        <div style={{
            position: "absolute",
            bottom: 50,
            right: 50, // Right side
            background: "rgba(0,0,0,0.6)",
            padding: "15px 30px",
            borderRadius: "15px",
            color: "white",
            fontFamily: "sans-serif",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            textAlign: "right"
        }}>
            <div style={{ fontSize: 14, color: "#aaa", textTransform: "uppercase", letterSpacing: 1 }}>Altitude</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end" }}>
                <span style={{ fontSize: 48, fontWeight: "bold", color: "#ff00dd" }}>
                    {height.toFixed(1)}
                </span>
                <span style={{ fontSize: 20, marginLeft: 8, color: "#fff" }}>m</span>
            </div>
            {/* Visual Bar Vertical */}
            <div style={{
                display: "flex",
                flexDirection: "column-reverse",
                height: 100,
                width: 8,
                background: "#333",
                marginLeft: "auto",
                marginTop: 8,
                borderRadius: 4,
                overflow: "hidden"
            }}>
                <div style={{
                    height: `${Math.min(height * 10, 100)}%`, // Max 10m scale
                    width: "100%",
                    background: "linear-gradient(0deg, #ff00dd, #cc00ff)",
                    transition: "height 0.1s linear"
                }} />
            </div>
        </div>
    );
};

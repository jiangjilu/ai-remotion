import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { TrajectoryLine } from "./Overlays/TrajectoryLine";
import { Speedometer } from "./Overlays/Speedometer";
import { HeightGraph } from "./Overlays/HeightGraph";
import trackData from "./data/track_data.json";

// Typed interface for our data
interface TrackData {
    frame: number;
    x: number;
    y: number;
    speed_kmh: number;
    height_m: number;
}

export const MyComposition = () => {
    const frame = useCurrentFrame();
    const { width, height } = useVideoConfig();

    // Get data for current frame
    // In a real app, optimize this lookup or use an array with index == frame
    const currentData = (trackData as TrackData[]).find(d => d.frame === frame);

    // Background (Placeholder for video)
    // In real usage, <Video src={staticFile("input.mp4")} />
    // For now, synthetic dark background

    return (
        <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
            {/* Grid/Context (Optional) */}
            <AbsoluteFill style={{
                backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.2
            }} />

            {/* Main Title */}
            <div style={{ position: 'absolute', top: 30, width: '100%', textAlign: 'center', color: '#64748b', fontSize: 24, letterSpacing: 4 }}>
                AI REMOTION
            </div>

            {/* Trajectory Layer */}
            <TrajectoryLine
                points={trackData as any}
                currentFrame={frame}
            />

            {/* HUD Layer */}
            {currentData && (
                <>
                    <Speedometer speed={currentData.speed_kmh} />
                    <HeightGraph height={currentData.height_m} />
                </>
            )}

            {!currentData && (
                <div style={{ position: 'absolute', top: '50%', width: '100%', textAlign: 'center', color: 'white' }}>
                    No Data
                </div>
            )}
        </AbsoluteFill>
    );
};

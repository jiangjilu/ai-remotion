# AI Remotion Integration

This project integrates AI-powered motion tracking (using MediaPipe) with Remotion to generate dynamic data-driven videos. It automatically extracts motion trajectories from input videos (e.g., sports footage) and overlays visualization like speedometers and height graphs using programmatic video creation.

## Project Structure

- **`ai-engine/`**: Python-based computer vision pipeline.
  - Uses MediaPipe Pose to track subject movement.
  - Calculates metrics (Speed, Height).
  - Outputs frame-by-frame data to JSON.
- **`video-app/`**: Remotion (React) video project.
  - Reads the JSON data.
  - Renders the video with dynamic overlays (`TrajectoryLine`, `Speedometer`, `HeightGraph`).
- **`run.bat`**: Orchestration script to run the full pipeline.

## Prerequisites

- **Python 3.8+**
- **Node.js 16+**
- **FFmpeg** (Required for Remotion rendering)

## Installation

1.  **Install Python Dependencies:**
    ```bash
    cd ai-engine
    pip install -r requirements.txt
    ```

2.  **Install Node.js Dependencies:**
    ```bash
    cd video-app
    npm install
    ```

## Usage

### Automated Pipeline (Windows)

The simplest way to run the project is using the provided batch script.

1.  Place your input video (e.g., `input.mp4`) in the project root directory.
2.  Run the script:
    ```cmd
    run.bat input.mp4
    ```

**What this does:**
1.  Runs the AI engine to analyze `input.mp4`.
2.  Saves tracking data to `video-app/src/data/track_data.json`.
3.  Renders the final video with Remotion to `output.mp4` in the root directory.

### Manual Execution

If you are on macOS/Linux or want to run steps individually:

**Step 1: Extract Trajectory Data**
```bash
cd ai-engine
python main.py --input ../input.mp4 --output ../video-app/src/data/track_data.json
```

**Step 2: Preview in Remotion Studio**
```bash
cd video-app
npm run dev
```
(Opens the browser to interactively view the video and overlays)

**Step 3: Render Final Video**
```bash
cd video-app
npx remotion render MyComp ../output.mp4
```

## Configuration

- **AI Engine**: Modify `ai-engine/config.json` (if exists) or code in `main.py` to adjust FPS or `pixels_per_meter` metric calibration.
- **Visuals**: Edit `video-app/src/MyComposition.tsx` and components in `video-app/src/Overlays/` to change the look of the value visualizations.

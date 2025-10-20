<h1>3D Scene with Three.js - Basic Setup & Interactive Controls</h1>
<h2>Project Overview</h2>
<p>
  This is a Three.js setup featuring a 3D scene with perspective camera, Dynamic lighting, and orbital controls with damping and autorotate.<br>
  It serves as an excellent starting point for learning WebGL and building interactive 3D experiences in the browser.
</p>

<h2>Features</h2>
<ul>
  <li>🏗️ <strong>Three.js Initialization:</strong> Complete setup with WebGL renderer.</li>
  <li>🧰 <strong>3D Scene:</strong> Basic scene configuration as a container for 3D objects.</li>
  <li>📷 <strong>Perspective Camera: Configured to mimic natural human vision with depth perception.</strong></li>
  <li>🌞 <strong>Lights:</strong> Ambiant light and Point light that casts soft shadows and highlights.</li>
  <li>
    🔄<strong>Orbit Controls:</strong> Advanced camera controls with: <br>
    <ul>
      <li>Auto-rotate: Automatic 360° scene rotation.</li>
      <li>Damping: Smooth, inertia-based movement for natural interaction</li>
    </ul>
  </li>
  <li>🌫️ <strong>Fog:</strong> Fog effect for scene and background</li>
  <li>🌀 <strong>Antialiasing</strong>: For detail appearance for 3D objects.</li>
  <li>📱 <strong>Responsive:</strong> 3D image for all type of screen.</li>
</ul>

<h2>Technologies used</h2>
<ul>
  <li>Three.js - 3D Library</li>
  <li>Javascript (ES6+)</li>
  <li>WebGL</li>
  <li>Canvas</li>
</ul>

<h2>Quick Start</h2>
<h3>Prerequisites</h3>
<p>Node.js and npm installed on your machine</p>

<h3>Installation</h3>
<p>Clone the repository</p>

------
git clone https://github.com/MikaElliot/3D-website-Initial-setup.git
cd 3D-website-Initial-setup

<h3>Install dependencies</h3>
------
npm install

<h3>Run the development server</h3>
------
npm run dev

<h2>Controls</h2>
<ul>
  <li><strong>Left click + Drag:</strong> Rotate the camera</li>
  <li><strong>Right click + Drag:</strong> Pan the camera</li>
  <li><strong>Mouse wheel:</strong> Zoom in/out</li>
  <li><strong>The scene automatically rotates</strong> when idle for better visualization</li>
</ul>

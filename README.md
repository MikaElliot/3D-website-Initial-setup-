<h1>🌐 3D Scene with Three.js — Basic Setup & Interactive Controls</h1>

<h2>🧭 Project Overview</h2>
<p>
  This project is a <strong>starter setup using Three.js</strong>, featuring a fully functional 
  <strong>3D scene</strong> with a <strong>perspective camera</strong>, <strong>dynamic lighting</strong>, 
  and <strong>interactive orbit controls</strong> (with damping and auto-rotation).<br><br>
  It serves as a <strong>foundation for learning WebGL</strong> and building 
  <strong>interactive 3D experiences</strong> directly in the browser.
</p>

<hr>

<h2>✨ Features</h2>
<ul>
  <li>🏗️ <strong>Three.js Initialization:</strong> Complete setup with a WebGL renderer ready for 3D rendering.</li>
  <li>🧰 <strong>3D Scene Setup:</strong> Clean and modular configuration for adding 3D objects.</li>
  <li>📷 <strong>Perspective Camera:</strong> Simulates human depth perception for a realistic view.</li>
  <li>🌞 <strong>Dynamic Lighting:</strong> Ambient and point lights for soft shadows and realistic highlights.</li>
  <li>
    🔄 <strong>Orbit Controls:</strong> Smooth and responsive camera interactions featuring:
    <ul>
      <li>Auto-rotate for 360° scene rotation.</li>
      <li>Damping for inertia-based, natural movement.</li>
    </ul>
  </li>
  <li>🌫️ <strong>Fog Effect:</strong> Adds depth and atmosphere to the scene background.</li>
  <li>🌀 <strong>Antialiasing:</strong> Improves the visual quality of rendered objects.</li>
  <li>📱 <strong>Responsive Design:</strong> Adjusts dynamically to different screen sizes.</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><a href="https://threejs.org/" target="_blank">Three.js</a> — 3D JavaScript Library</li>
  <li>JavaScript (ES6+)</li>
  <li>WebGL</li>
  <li>HTML5 Canvas</li>
</ul>

<hr>

<h2>🚀 Quick Start</h2>

<h3>📋 Prerequisites</h3>
<p>
  Make sure you have <a href="https://nodejs.org/" target="_blank">Node.js</a> and npm installed on your system.
</p>

<h3>⚙️ Installation</h3>

<pre>
<code>
# Clone the repository
git clone https://github.com/MikaElliot/3D-website-Initial-setup-.git
cd 3D-website-Initial-setup-

# Install dependencies
npm install

# Start the development server
npm run dev
</code>
</pre>

<hr>

<h2>🎮 Controls</h2>
<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🖱️ Left Click + Drag</td>
      <td>Rotate the camera</td>
    </tr>
    <tr>
      <td>🖱️ Right Click + Drag</td>
      <td>Pan the camera</td>
    </tr>
    <tr>
      <td>🖱️ Mouse Wheel</td>
      <td>Zoom in/out</td>
    </tr>
    <tr>
      <td>🔁 Auto-Rotate</td>
      <td>The scene rotates automatically when idle</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📸 Preview</h2>
<img src="/src/img/3D.png" alt="project overview" />

<hr>

<h2>🧩 Notes</h2>
<p>
  This setup is perfect for experimenting with <strong>3D environments</strong>, 
  <strong>interactive animations</strong>, and <strong>visual effects</strong> using Three.js.<br>
  You can easily extend it with custom geometries, textures, or shaders.
</p>

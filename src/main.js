import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import createScene from './basic/scene.js'
import createCameraAndLight from './basic/camera-light.js';
import initRenderer from './basic/renderer.js';

const { scene, cubeMesh, platFormMesh } = createScene();
const { camera, pointLight, ambientLight } = createCameraAndLight();
const { renderer, canvas } = initRenderer();

scene.add(camera, cubeMesh, platFormMesh, ambientLight, pointLight);

//::::::::::::::::::: Orbit Controls :::::::::::::::::::
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
const clock = new THREE.Clock();
let previousTime = 0;

//::::::::::::::::::: Render Loop :::::::::::::::::::
const renderloop = () => {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime
  previousTime = currentTime;

  //:::::::::::: Animation for cubeMesh and platFormMesh :::::::::::::
  // cubeMesh.rotation.y += THREE.MathUtils.degToRad(5) * delta * 4;
  // platFormMesh.rotation.y += THREE.MathUtils.degToRad(15) * delta * 4;

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}
renderloop();

//::::::::::::::::: Responsive :::::::::::::::::::
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
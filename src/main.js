import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/Addons.js';
import createScene from './basic/scene.js'
import createCameraAndLight from './basic/camera-light.js';
import initRenderer from './basic/renderer.js';

//::::::::::::::::::: Scene, Camera, Light, Renderer :::::::::::::::::::
const { scene } = createScene();
const { camera } = createCameraAndLight();
const { renderer, canvas } = initRenderer();

//::::::::::::::::::: Loading model :::::::::::::::::
scene.add(camera);
const loader = new GLTFLoader();
const dracoloader = new DRACOLoader();

dracoloader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
loader.setDRACOLoader(dracoloader);

loader.load('/src/assets/models/car.glb', function(gltf){
  const model = gltf.scene;
  model.scale.set(0.15,0.15,0.15);
  model.position.set(0.25,0.5,0.6);
  model.rotation.set(0,Math.PI/2,0);
  scene.add(model);
});


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
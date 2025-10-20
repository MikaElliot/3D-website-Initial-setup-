import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//:::::::::::::::::: Scene ::::::::::::::::::
const scene = new THREE.Scene();

//:::::::::::::::::: Mesh (Geometry + Material) ::::::::::::::::
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "crimson" });
const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: "orangered" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
const platFormMesh = new THREE.Mesh(cubeGeometry, cubeMaterial2);

//:::::::::::: Position ::::::::::::
const tempVector = new THREE.Vector3(1,1,1);
cubeMesh.position.set(0,.2,0);
platFormMesh.position.set(0,.325,0);

//:::::::::::: Scale ::::::::::::
cubeMesh.scale.set(1,0,1);
platFormMesh.scale.set(.25,.25,.25);

const fog = new THREE.Fog("#232323", 1 ,2);
scene.fog = fog

scene.background = new THREE.Color("#232323"); 
//:::::::::::::::::: Camera :::::::::::::::::
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30);
camera.position.copy(tempVector);

const axeHelper = new THREE.AxesHelper();
scene.add(camera, cubeMesh, platFormMesh);

//:::::::::::::::::: Render (scene, camera) :::::::::::::::::
const canvas = document.querySelector('#three');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2);

//::::::::::::::::: Light :::::::::::::::::::::
const light = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1);

//::::::::::::::::: Responsive :::::::::::::::::::
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//::::::::::::::::::: Orbit Controls :::::::::::::::::::
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
const clock = new THREE.Clock();
let previousTime = 0;

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
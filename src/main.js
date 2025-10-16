import './style.css'
import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//:::::::::::::::::: Scene ::::::::::::::::
const scene = new THREE.Scene();

//:::::::::::::::::: Mesh(Geometry + Material) :::::::::::::::::
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "#fefefe"});
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial);

//:::::::::::::::: Positionning :::::::::::::::::
const tempVector = new THREE.Vector3(1,1,1);
const cameraVector = new THREE.Vector3(1,1,5);

cubeMesh.position.copy(tempVector);
const axesHelper = new THREE.AxesHelper(2);

//:::::::::::::::: Camera :::::::::::::::::::
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30);
camera.position.copy(cameraVector);

scene.add(camera, cubeMesh, axesHelper);

//::::::::::::::: Renderer = render(scene, camera) ::::::::::::::::::
const canvas = document.querySelector('#three');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
const maxPixelRation = Math.min(window.devicePixelRatio, 2);
renderer.setPixelRatio(maxPixelRation);

//:::::::::::::: Responsive ::::::::::::::::::
window.addEventListener('resize', () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//:::::::::::::: Orbit Controls :::::::::::::::
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

const renderloop = () => {
  controls.update(); renderer.render(scene,camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();
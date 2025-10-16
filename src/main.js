import './style.css'
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//:::::::::::::::: Scene ::::::::::::::::::::::
const scene = new THREE.Scene();

//:::::::::::::::: Mesh (Geometry + Material)::::::::::::::::::::
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "#fefefe"});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

//:::::::::::::::: Camera ::::::::::::::::
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30);
camera.position.z = 5;
scene.add(camera);

//::::::::::::::::: Renderer ::::::::::::::
const canvas = document.querySelector("#three");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

//::::::::::::::::: OrbitControls :::::::::
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.enableDamping = true;

const renderloop = () => {
  controls.update(); renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();
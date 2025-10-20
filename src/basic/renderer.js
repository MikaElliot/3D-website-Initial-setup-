import * as THREE from 'three'
import createCameraAndLight from './camera-light';

const { camera } = createCameraAndLight();

export default function initRenderer() {
  //:::::::::::::::::: Render (scene, camera) :::::::::::::::::
  const canvas = document.querySelector('#three');
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(2);

  //::::::::::::::::: Responsive :::::::::::::::::::
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return {
    renderer,
    canvas
  };
}
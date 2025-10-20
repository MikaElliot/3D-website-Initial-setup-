import * as THREE from 'three'
import createCameraAndLight from './camera-light';

const { camera } = createCameraAndLight();

export default function initRenderer() {
  //:::::::::::::::::: Render (scene, camera) :::::::::::::::::
  const canvas = document.querySelector('#three');
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(2);

  return {
    renderer,
    canvas
  };
}
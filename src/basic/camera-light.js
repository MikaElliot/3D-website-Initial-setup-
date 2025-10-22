import * as THREE from 'three';

export default function createCameraAndLight()
{
  //:::::::::::::::::: Camera :::::::::::::::::
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30);
  camera.position.set(2,1,1);

  //::::::::::::::::: Light :::::::::::::::::::::
  const ambiantLight = new THREE.AmbientLight(0xffffff, 0.9);
  const pointLight = new THREE.PointLight(0xffffff, 1);

  pointLight.position.set(0,.25,0);

  return {
    camera,
    ambiantLight,
    pointLight
  };
}
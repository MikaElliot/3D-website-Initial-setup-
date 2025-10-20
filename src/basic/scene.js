import * as THREE from 'three'

//:::::::::::::::::: Scene ::::::::::::::::
export default function createScene()
{
  const scene = new THREE.Scene();
  
  //:::::::::::::::::: Mesh(Geometry + Material) :::::::::::::::::
  //Box
  const cubeGeometry = new THREE.BoxGeometry(1,1,1);

  //Buffer Geometry
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -1.0, -1.0, 1.0,
     1.0, -1.0, 1.0,
     1.0,  1.0, 1.0,

     1.0, 1.0, 1.0,
     -1.0, 1.0, 1.0,
     -1.0, -1.0, 1.0
  ]);

  geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3));

  const cubeMaterial = new THREE.MeshBasicMaterial({color: "#fefefe"});
  const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial);

  return {
    scene,
    cubeMesh
  }
}
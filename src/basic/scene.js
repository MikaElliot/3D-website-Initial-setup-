import * as THREE from 'three'

//:::::::::::::::::: Scene ::::::::::::::::
export default function createScene()
{
  //:::::::::::::::::: Scene ::::::::::::::::::
  const scene = new THREE.Scene();
  
  //:::::::::::::::::: Mesh (Geometry + Material) ::::::::::::::::
  const fog = new THREE.Fog("orangered", 1 ,3);
  scene.fog = fog
  
  scene.background = new THREE.Color("#232323");

  return {
    scene,
  }
}
import * as THREE from 'three'

//:::::::::::::::::: Scene ::::::::::::::::
export default function createScene()
{
  //:::::::::::::::::: Scene ::::::::::::::::::
  const scene = new THREE.Scene();
  
  //:::::::::::::::::: Mesh (Geometry + Material) ::::::::::::::::
  const cubeGeometry = new THREE.BoxGeometry(1,1,1);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: "crimson" });
  const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: "orangered" });
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const platFormMesh = new THREE.Mesh(cubeGeometry, cubeMaterial2);
  
  //:::::::::::: Position ::::::::::::
  cubeMesh.position.set(0,.2,0);
  platFormMesh.position.set(0,.325,0);
  
  //:::::::::::: Scale ::::::::::::
  cubeMesh.scale.set(1,0,1);
  platFormMesh.scale.set(.25,.25,.25);
  
  const fog = new THREE.Fog("#232323", 1 ,2);
  scene.fog = fog
  
  scene.background = new THREE.Color("#232323");

  return {
    scene,
    cubeMesh,
    platFormMesh,
  }
}
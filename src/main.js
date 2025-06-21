// Imports
import * as THREE from 'three';
const canvas = document.getElementById('three-canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setAnimationLoop(animate);

// Create a simple cube geometry with a width, height, and depth of 1 unit
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Create a render loop that will continuously update the scene
function animate() {
  cube.rotation.x += 0.01; // Rotate the cube around the x-axis
  cube.rotation.y += 0.01; // Rotate the cube around the y-axis
  cube.rotation.z += 0.01; // Rotate the cube around the z-axis
    renderer.render(scene, camera);
}
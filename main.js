// Importing the necessary modules from Three.js
import * as THREE from "three";

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry and a material, then combine them into a mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some basic animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Adjust camera and renderer when the window is resized
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

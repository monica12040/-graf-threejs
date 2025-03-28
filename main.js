import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear cubos con diferentes colores
const geometries = new THREE.BoxGeometry(1, 1, 1);
const materials = [
    new THREE.MeshStandardMaterial({ color: 0xcaf0fa }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0x6cd452 })
];

const cubes = [
    new THREE.Mesh(geometries, materials[0]),
    new THREE.Mesh(geometries, materials[1]),
    new THREE.Mesh(geometries, materials[2])
];

// Posicionar los cubos en la escena
cubes[0].position.x = -2;
cubes[1].position.x = 0;
cubes[2].position.x = 2;

cubes.forEach(cube => scene.add(cube));

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con diferentes velocidades de rotación
function animate() {
    cubes[0].rotation.x += 0.10; // Rotación más rápida
    cubes[0].rotation.y += 0.10;
    
    cubes[1].rotation.x += 0.05; // Rotación media
    cubes[1].rotation.y += 0.05;
    
    cubes[2].rotation.x += 0.01; // Rotación más lenta
    cubes[2].rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
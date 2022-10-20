import './style.css'
import * as THREE from 'three'
import { Clock } from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)


const mesh2 = new THREE.Mesh(
    new THREE.BoxGeometry(1 ,1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
mesh2.position.x = -2
// scene.add(mesh2)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Small Tick function
// function tick() {
//     console.log("tick");
//     window.requestAnimationFrame(tick);
// }

// tick();
/**
 * Animating objects
 */

let time = Date.now()
const clock = new THREE.Clock()
function move() {
    
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // time = Date.now()

    const elapsedTime = clock.getElapsedTime()

    // mesh2.rotation.y += 0.001 * deltaTime
    // mesh.rotation.x += 0.001 * deltaTime
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    
    renderer.render(scene, camera);

    window.requestAnimationFrame(move)
}

move()
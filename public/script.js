// Hero Scene
const heroScene = new THREE.Scene();
const heroCamera = new THREE.PerspectiveCamera(75, document.getElementById('hero-canvas-container').offsetWidth / document.getElementById('hero-canvas-container').offsetHeight, 0.1, 1000);
const heroRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById('hero-canvas'), antialias: true });
heroRenderer.setSize(document.getElementById('hero-canvas-container').offsetWidth, document.getElementById('hero-canvas-container').offsetHeight);

const heroGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const heroMaterial = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true });
const heroCube = new THREE.Mesh(heroGeometry, heroMaterial);
heroScene.add(heroCube);
heroCamera.position.z = 5;
function heroAnimate() {
    requestAnimationFrame(heroAnimate);
    heroCube.rotation.x += 0.01;
    heroCube.rotation.y += 0.01;
    heroRenderer.render(heroScene, heroCamera);
}
heroAnimate();


// Civil Project Scene
const civilScene = new THREE.Scene();
const civilCamera = new THREE.PerspectiveCamera(75, document.querySelector('#civil-project-canvas').offsetWidth / document.querySelector('#civil-project-canvas').offsetHeight, 0.1, 1000);
const civilRenderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#civil-project-canvas'), antialias: true });
civilRenderer.setSize(document.querySelector('#civil-project-canvas').offsetWidth, document.querySelector('#civil-project-canvas').offsetHeight);

// Enhanced Concrete Support Pillar
const baseGeometry = new THREE.BoxGeometry(2.5, 0.4, 2.5);
const pillarGeometry = new THREE.BoxGeometry(0.8, 3, 0.8);
const rebarGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3, 8);
const concreteMaterial = new THREE.MeshBasicMaterial({ color: 0x95a5a6, wireframe: true });
const rebarMaterial = new THREE.MeshBasicMaterial({ color: 0x636e72, wireframe: true });

const base = new THREE.Mesh(baseGeometry, concreteMaterial);
const pillar = new THREE.Mesh(pillarGeometry, concreteMaterial);
pillar.position.y = 1.7;

const rebar1 = new THREE.Mesh(rebarGeometry, rebarMaterial);
const rebar2 = new THREE.Mesh(rebarGeometry, rebarMaterial);
const rebar3 = new THREE.Mesh(rebarGeometry, rebarMaterial);
const rebar4 = new THREE.Mesh(rebarGeometry, rebarMaterial);
rebar1.position.set(0.35, 1.5, 0.35);
rebar2.position.set(-0.35, 1.5, 0.35);
rebar3.position.set(0.35, 1.5, -0.35);
rebar4.position.set(-0.35, 1.5, -0.35);

civilScene.add(base);
civilScene.add(pillar);
civilScene.add(rebar1);
civilScene.add(rebar2);
civilScene.add(rebar3);
civilScene.add(rebar4);


civilCamera.position.set(7, 2, 7);
civilCamera.lookAt(civilScene.position);

function civilAnimate() {
    requestAnimationFrame(civilAnimate);
     civilRenderer.render(civilScene, civilCamera);
}
civilAnimate();


// Mechanical Project Scene
const mechanicalScene = new THREE.Scene();
const mechanicalCamera = new THREE.PerspectiveCamera(75, document.querySelector('#mechanical-project-canvas').offsetWidth / document.querySelector('#mechanical-project-canvas').offsetHeight, 0.1, 1000);
const mechanicalRenderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#mechanical-project-canvas'), antialias: true });
mechanicalRenderer.setSize(document.querySelector('#mechanical-project-canvas').offsetWidth, document.querySelector('#mechanical-project-canvas').offsetHeight);


// Enhanced Gearbox
const housingGeometry = new THREE.BoxGeometry(2.5, 1.5, 2.5);
const gear1Geometry = new THREE.TorusGeometry(0.6, 0.2, 8, 16);
const gear2Geometry = new THREE.TorusGeometry(0.45, 0.15, 8, 16);
const shaftGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 16)

const housingMaterial = new THREE.MeshBasicMaterial({ color: 0x7f8c8d, wireframe: true });
const gearMaterial = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true });
const shaftMaterial = new THREE.MeshBasicMaterial({ color: 0x636e72, wireframe: true });

const housing = new THREE.Mesh(housingGeometry, housingMaterial);
const gear1 = new THREE.Mesh(gear1Geometry, gearMaterial);
const gear2 = new THREE.Mesh(gear2Geometry, gearMaterial);
const shaft1 = new THREE.Mesh(shaftGeometry, shaftMaterial);
const shaft2 = new THREE.Mesh(shaftGeometry, shaftMaterial);

gear1.rotation.x = Math.PI / 2;
gear2.rotation.x = Math.PI / 2;
gear1.position.set(-0.6, 0.8, -0.4);
gear2.position.set(0.6, 0.8, 0.4);
shaft1.rotation.z = Math.PI / 2;
shaft2.rotation.z = Math.PI / 2;
shaft1.position.set(-0.6, 0.8, -0.4);
shaft2.position.set(0.6, 0.8, 0.4);

mechanicalScene.add(housing);
mechanicalScene.add(gear1);
mechanicalScene.add(gear2);
mechanicalScene.add(shaft1);
mechanicalScene.add(shaft2);
mechanicalCamera.position.set(6, 4, 6)
mechanicalCamera.lookAt(mechanicalScene.position);

function mechanicalAnimate() {
    requestAnimationFrame(mechanicalAnimate);
    gear1.rotation.z += 0.01;
    gear2.rotation.z -= 0.01;
    mechanicalRenderer.render(mechanicalScene, mechanicalCamera);
}
mechanicalAnimate();

// Resize handling
window.addEventListener('resize', () => {
        // Hero canvas
    const newHeroWidth = document.getElementById('hero-canvas-container').offsetWidth;
    const newHeroHeight = document.getElementById('hero-canvas-container').offsetHeight;
    heroCamera.aspect = newHeroWidth / newHeroHeight;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(newHeroWidth, newHeroHeight);

        // Civil project canvas
    const newCivilWidth =  document.querySelector('#civil-project-canvas').offsetWidth;
    const newCivilHeight =  document.querySelector('#civil-project-canvas').offsetHeight;
    civilCamera.aspect = newCivilWidth / newCivilHeight;
    civilCamera.updateProjectionMatrix();
    civilRenderer.setSize(newCivilWidth, newCivilHeight);


    // Mechanical Project Canvas
    const newMechWidth = document.querySelector('#mechanical-project-canvas').offsetWidth;
    const newMechHeight = document.querySelector('#mechanical-project-canvas').offsetHeight;
    mechanicalCamera.aspect = newMechWidth / newMechHeight;
     mechanicalCamera.updateProjectionMatrix();
     mechanicalRenderer.setSize(newMechWidth, newMechHeight);
});
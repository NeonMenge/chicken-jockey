import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeChicken = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, controls, renderer, container;
    let chicken, seed, isBlowing = false;
    let HEIGHT, WIDTH, windowHalfX, windowHalfY, mousePos = {x: 0, y: 0};

    function init() {
      scene = new THREE.Scene();
      HEIGHT = 200;
      WIDTH = 500;
      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 60;
      const nearPlane = 1;
      const farPlane = 2000;
      
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );
      
      camera.position.z = 600; // Move camera to a more balanced distance
      camera.position.y = 0;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      
      renderer = new THREE.WebGLRenderer({
        alpha: true, 
        antialias: true
      });
      renderer.setClearColor(0x000000, 0); // Transparent background
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;
      
      container = containerRef.current;
      // Clear container first
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);
      
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;
      
      container.addEventListener('mousemove', handleMouseMove, false);
      container.addEventListener('mousedown', handleMouseDown, false);
      container.addEventListener('mouseup', handleMouseUp, false);
      container.addEventListener('touchstart', handleTouchStart, false);
      container.addEventListener('touchend', handleTouchEnd, false);
      container.addEventListener('touchmove', handleTouchMove, false);
    }

    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }

    function handleMouseDown(event) {
      isBlowing = true;
    }
    
    function handleMouseUp(event) {
      isBlowing = false;
    }

    function handleTouchStart(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
        const rect = container.getBoundingClientRect();
        mousePos = {
          x: event.touches[0].pageX - rect.left,
          y: event.touches[0].pageY - rect.top
        };
        isBlowing = true;
      }
    }

    function handleTouchEnd(event) {
      mousePos = {x: windowHalfX, y: windowHalfY};
      isBlowing = false;
    }

    function handleTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        const rect = container.getBoundingClientRect();
        mousePos = {
          x: event.touches[0].pageX - rect.left,
          y: event.touches[0].pageY - rect.top
        };
      }
    }

    function createLights() {
      const light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);

      const shadowLight = new THREE.DirectionalLight(0xffffff, .8);
      shadowLight.position.set(200, 200, 200);
      shadowLight.castShadow = true;
      shadowLight.shadow.darkness = .2;

      const backLight = new THREE.DirectionalLight(0xffffff, .4);
      backLight.position.set(-100, 200, 50);
      backLight.shadow.darkness = .1;
      backLight.castShadow = true;

      scene.add(backLight);
      scene.add(light);
      scene.add(shadowLight);
    }

    // Chicken constructor
    function Chicken() {
      this.windTime = 0;
      this.threegroup = new THREE.Group();

      this.yellowMat = new THREE.MeshLambertMaterial({
        color: "rgb(255,224,65)",
        flatShading: true
      });
      
      this.whiteMat = new THREE.MeshLambertMaterial({
        color: "rgb(240,240,240)",
        flatShading: true
      });
      
      this.blackMat = new THREE.MeshLambertMaterial({
        color: "rgb(0,0,0)",
        flatShading: true
      });
      
      this.redMat = new THREE.MeshLambertMaterial({
        color: "rgb(226, 123, 131)",
        flatShading: true
      });

      // Body
      const body = new THREE.BoxGeometry(300, 300, 360);
      this.body = new THREE.Mesh(body, this.whiteMat);
      this.body.position.z = -240;
      this.body.position.y = -80;
      
      // Wings
      const wings = new THREE.BoxGeometry(70, 240, 240);
      
      // Wing left
      this.wingLeft = new THREE.Mesh(wings, this.whiteMat);
      this.wingLeft.position.z = -100;
      this.wingLeft.position.y = 0;
      this.wingLeft.position.x = -180;
      
      // Wing right
      this.wingRight = new THREE.Mesh(wings, this.whiteMat);
      this.wingRight.position.z = -100;
      this.wingRight.position.y = 0;
      this.wingRight.position.x = 180;
      
      // Legs
      const legs = new THREE.BoxGeometry(60, 200, 60);
      
      // Leg left
      this.legLeft = new THREE.Mesh(legs, this.yellowMat);
      this.legLeft.position.z = -100;
      this.legLeft.position.y = -260;
      this.legLeft.position.x = -100;
      
      // Leg right
      this.legRight = new THREE.Mesh(legs, this.yellowMat);
      this.legRight.position.z = -100;
      this.legRight.position.y = -260;
      this.legRight.position.x = 100;
      
      // Finger
      const fingers = new THREE.BoxGeometry(140, 20, 60);
      
      // Finger left
      this.fingerLeft = new THREE.Mesh(fingers, this.yellowMat);
      this.fingerLeft.position.z = -40;
      this.fingerLeft.position.y = -360;
      this.fingerLeft.position.x = -100;
      
      // Finger right
      this.fingerRight = new THREE.Mesh(fingers, this.yellowMat);
      this.fingerRight.position.z = -40;
      this.fingerRight.position.y = -360;
      this.fingerRight.position.x = 100;
      
      // Head
      const head = new THREE.BoxGeometry(200, 280, 100);
      this.head = new THREE.Mesh(head, this.whiteMat);
      this.head.position.z = 40;
      this.head.position.y = 120;
      
      // Eyes
      const eyes = new THREE.BoxGeometry(50, 50, 20);
      
      // Eye left
      this.eyeLeft = new THREE.Mesh(eyes, this.blackMat);
      this.eyeLeft.position.x = -70;
      this.eyeLeft.position.z = 50;
      this.eyeLeft.position.y = 60;
      
      // Eye right
      this.eyeRight = new THREE.Mesh(eyes, this.blackMat);
      this.eyeRight.position.x = 70;
      this.eyeRight.position.z = 50;
      this.eyeRight.position.y = 60;
      
      // Peak
      const Peak = new THREE.BoxGeometry(200, 90, 100);
      this.peak = new THREE.Mesh(Peak, this.yellowMat);
      this.peak.position.x = 0;
      this.peak.position.z = 100;
      this.peak.position.y = -14;
      
      // Beard
      const beard = new THREE.BoxGeometry(80, 80, 50);
      this.beard = new THREE.Mesh(beard, this.redMat);
      this.beard.position.x = 0;
      this.beard.position.z = 80;
      this.beard.position.y = -100;
      
      // Add Elements to head
      this.head.add(this.eyeLeft);
      this.head.add(this.eyeRight);
      this.head.add(this.peak);
      this.head.add(this.beard);
      
      // Add Elements to body
      this.body.add(this.wingRight);
      this.body.add(this.wingLeft);
      this.body.add(this.legLeft);
      this.body.add(this.legRight);
      this.body.add(this.fingerRight);
      this.body.add(this.fingerLeft);

      this.threegroup.add(this.head);
      this.threegroup.add(this.body);

      this.threegroup.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });
    }

    Chicken.prototype.updateBody = function (speed) {
      this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
      this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
      this.head.position.x += (this.tHeadPosX - this.head.position.x) / speed;
      this.head.position.y += (this.tHeadPosY - this.head.position.y) / speed;
      this.head.position.z += (this.tHeadPosZ - this.head.position.z) / speed;
      this.body.rotation.y = ((this.tHeagRotY - this.head.rotation.y) + 0.5) / speed;
      this.body.rotation.x = ((this.tHeadRotX - this.head.rotation.x) + 0.5) / speed;
      this.body.position.x += (this.tHeadPosX - this.head.position.x) / speed;
      this.body.position.y += (this.tHeadPosY - this.head.position.y) / speed;
      this.body.position.z += (this.tHeadPosZ - this.head.position.z) / speed;
    };

    Chicken.prototype.look = function (xTarget, yTarget) {
      this.tHeagRotY = rule3(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
      this.tHeadRotX = rule3(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
      this.tHeadPosX = rule3(xTarget, -200, 200, 140, -140);
      this.tHeadPosY = rule3(yTarget, -140, 260, 40, 200);
      this.tHeadPosZ = 0;
      this.updateBody(10);
    };

    Chicken.prototype.cool = function (xTarget, yTarget) {
      const dt = 20000 / (xTarget * xTarget + yTarget * yTarget);
      const dtClamped = Math.max(Math.min(dt, 1), .5);
      this.windTime += dtClamped;
      this.tHeagRotY = rule3(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
      this.tHeadRotX = rule3(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
      this.tHeadPosX = rule3(xTarget, -200, 200, 140, -140);
      this.tHeadPosY = rule3(yTarget, -140, 260, 40, 200);
      this.tHeadPosZ = 0;
      this.updateBody(10);
      this.body.rotation.x = -Math.cos(this.windTime) * Math.PI / 8 * dtClamped;
      this.wingRight.rotation.x = -Math.cos(this.windTime) * Math.PI / 8 * dtClamped;
      this.wingLeft.rotation.x = -Math.cos(this.windTime) * Math.PI / 8 * dtClamped;
    };

    function createChicken() {
      chicken = new Chicken();
      scene.add(chicken.threegroup);
    }

    function rule3(v, vmin, vmax, tmin, tmax) {
      const nv = Math.max(Math.min(v, vmax), vmin);
      const dv = vmax - vmin;
      const pc = (nv - vmin) / dv;
      const dt = tmax - tmin;
      const tv = tmin + (pc * dt);
      return tv;
    }

    function render() {
      renderer.render(scene, camera);
    }

    function loop() {
      render();

      const xTarget = (mousePos.x - windowHalfX);
      const yTarget = (mousePos.y - windowHalfY);

      if (isBlowing) {
        chicken.cool(xTarget, yTarget);
      } else {
        chicken.look(xTarget, yTarget);
      }
      
      requestAnimationFrame(loop);
    }

    // Initialize the scene
    init();
    createLights();
    createChicken();
    
    // Start animation loop
    loop();

    // Cleanup function
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchmove', handleTouchMove);
      
      // Dispose of Three.js resources
      renderer.dispose();
      
      // Remove all children from the scene
      while(scene.children.length > 0){ 
        const object = scene.children[0];
        scene.remove(object);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '500px', 
        height: '200px', 
        margin: '0 auto',
        overflow: 'visible'
      }}
      className="three-chicken-container"
    />
  );
};

export default ThreeChicken;

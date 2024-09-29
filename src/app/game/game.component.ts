import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { DomHandler } from "primeng/dom";
import WebGL from './lib/WebGL';
import { Vector3 } from 'three';
import * as dat from 'dat.gui';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent 
  implements OnInit, OnChanges,AfterViewInit
{
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  cube: THREE.Mesh;
  @ViewChild('container') container!: ElementRef;
  line!: THREE.Line;
  aspect: number;
  controls: { rotationX: number; rotationY: number; rotationZ: number; };
  canvas: any;
  constructor(
    // public domHandler: DomHandler
    // domHandler: DomHandler
  ) { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void { }
  ngAfterViewInit(): void {
    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer(this.container.nativeElement);
    this.cube = this.createCube();
    this.scene.add(this.cube);
    const fog = new THREE.Fog(0xffffff, 1, 100);
    this.scene.fog = fog;
    this.render();
    this.handleResize();
    // this.scene.add(this.line);
    this.controls = {
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    }
    const gui = new dat.GUI();
    gui.add(this.controls, 'rotationX',0,360)
      .onChange(value => {
        this.cube.rotation.x = value * Math.PI / 180;
        this.render();  
      })
    gui.add(this.controls, 'rotationY',0,360)
      .onChange(value => {
        this.cube.rotation.y = value * Math.PI / 180;
        this.render();  
      })
    gui.add(this.controls, 'rotationZ',0,360)
      .onChange(value => {
        this.cube.rotation.z = value * Math.PI / 180;
        this.render();  
      })
    //#endregion

    if ( WebGL.isWebGLAvailable() ) {
      this.render();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      this.container.nativeElement.appendChild( warning );
    }
  }
  createScene() {
    const scene = new THREE.Scene();
    const axesHelper = new THREE.AxesHelper(12);
    scene.add(axesHelper);
    return scene;
  }
  createCamera() {
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    camera.position.set(-30, 40, 30);
    camera.lookAt(this.scene.position);

    camera['tick'] = ms => {
      // Tính góc xoay theo thời gian
      // Xoay một vòng hết 16 giây
      const seconds = ms / 1000;
      const angle = seconds * Math.PI / 8;
  
      // Sử dụng các hàm sin và cos để di chuyển vòng tròn
      camera.position.x = 30 * Math.sin(angle);
      camera.position.z = 30 * Math.cos(angle);
  
      // Luôn nhìn vào điểm trung tâm
      camera.lookAt(this.scene.position);
    };
    document.addEventListener('keydown',(event) => {
      switch (event.code) {
        case 'KeyW':
          camera.rotation.x += Math.PI / 180;
          break;
        case 'KeyS':
          camera.rotation.x -= Math.PI / 180;
          break;
        case 'KeyD':
          camera.rotation.z += Math.PI / 180;
          break;
        case 'KeyA':
          camera.rotation.z -= Math.PI / 180;
          break;
      }
    })
    return camera;
  }
  createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setClearColor(0x000);
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    const width = canvas.clientWidth * pixelRatio;
    const height = canvas.clientHeight * pixelRatio;
    renderer.setSize(width, height, false);
      return renderer;
  }
  createCube() {
    const cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
    const cubeMaterial = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    // các method của cube
    cube['tick']= (ms) => {
      cube.rotation.y = ms * Math.PI / 1000;
    }

    return cube;
  }
  update(ms) {
    this.cube['tick'](ms);
    // this.camera['tick'](ms);
  }
  render(ms = 0) {
    this.update(ms);
    this.renderer.render( this.scene, this.camera );
    requestAnimationFrame(this.render.bind(this));
  }
  handleResize() {
    window.addEventListener('resize', () => {
        this.onResize();
        this.render()
    });
  }
  onResize() {
    const canvas = this.renderer.domElement;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    const width = canvas.clientWidth * pixelRatio;
    const height = canvas.clientHeight * pixelRatio;
    const aspect = width / height;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }
}

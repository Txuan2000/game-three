import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { DomHandler } from "primeng/dom";

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
  cube!: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  @ViewChild('container') container!: ElementRef;
  constructor(
    // public domHandler: DomHandler
    // domHandler: DomHandler
  ) { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void { }
  ngAfterViewInit(): void {
    let width = window.innerWidth;
    let height =window.innerHeight - 65;
    
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    const geometry = new THREE.BoxGeometry( 1, 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add( this.cube );
    this.camera = new THREE.PerspectiveCamera( 75,  width/ height, 0.1, 1000 );
    this.renderer.setSize(width, height);
    this.container.nativeElement.appendChild( this.renderer.domElement );

    this.camera.position.z = 3;
    this.animate();
  }
  animate() {
    if (this) {      
      requestAnimationFrame( this.animate.bind(this) );
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render( this.scene, this.camera );
    }
  }
}

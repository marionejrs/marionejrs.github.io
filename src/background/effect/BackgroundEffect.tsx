import "./BackgroundEffect.scss";
import React, { Component } from "react";
import {
    PerspectiveCamera,
    Scene,
    BufferGeometry,
    BufferAttribute,
    ShaderMaterial,
    Color,
    Points,
    WebGLRenderer } from "three";

let SEPARATION = 40;
let AMOUNTX = 130;
let AMOUNTY = 35;
let NUM_OF_PARTICLES = AMOUNTX * AMOUNTY;

export default class BackgroundEffect extends Component {

    containerElement : HTMLDivElement;
    camera : PerspectiveCamera;
    scene : Scene;
    renderer : WebGLRenderer;
    particles : Points;
    count : number;
    windowHalfX : number;
    windowHalfY : number;

    constructor(props : any) {
        super(props);
        this.count = 0;
    }

    onWindowResize() {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    componentDidMount() {
        let camera = new PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.y = 200;
        camera.position.z = 100;
        camera.rotation.x = 0.35;
        this.camera = camera;

        let positions = new Float32Array(NUM_OF_PARTICLES * 3);
        let scales = new Float32Array(NUM_OF_PARTICLES);

        let incrementI = 0;
        let incrementJ = 0;

        for (let indexX = 0; indexX < AMOUNTX; indexX++) {
            for (let indexY = 0; indexY < AMOUNTY; indexY++) {
                positions[incrementI] = indexX * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2); // x
                positions[incrementI + 1] = 0; //y
                positions[incrementI + 2] = indexY * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10); //z
            
                scales[incrementJ] = 1;

                incrementI += 3;
                incrementJ++;
            }
        }

        let geometry = new BufferGeometry();
        geometry.addAttribute( 'position', new BufferAttribute( positions, 3 ) );
        geometry.addAttribute( 'scale', new BufferAttribute( scales, 1 ) );

        let material = new ShaderMaterial({
            uniforms : {
                color: { value: new Color( 0x939393 ) },
            },
            vertexShader : `attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 35.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,
            fragmentShader : `uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

			}`
        });

        let particles = new Points(geometry, material);
        this.scene = new Scene();
        // this.scene.background = new Color( 0x0000 );
        this.scene.add(particles);
        this.particles = particles;

        let renderer = new WebGLRenderer( { alpha : true, antialias : true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor( 0xffffff, 0 );
        this.renderer = renderer;

        this.containerElement.appendChild( renderer.domElement );
        this.animate();

        window.addEventListener( 'resize', () => { this.onWindowResize() }, false);
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );        
        // not necessary as camera will not be moved
        // camera.position.x += ( mouseX - camera.position.x ) * .05;
        // camera.position.y += ( - mouseY - camera.position.y ) * .05;
        // camera.lookAt( scene.position );
        this.renderCanvas();
        
    }

    renderCanvas() {
        let positionAttrib = (this.particles.geometry as BufferGeometry).getAttribute('position') as BufferAttribute;
        let scaleAttrib = (this.particles.geometry as BufferGeometry).getAttribute('scale') as BufferAttribute;

        let positions = positionAttrib.array as Float32Array;
        let scales = scaleAttrib.array as Float32Array;

        let incrementI = 0;
        let incrementJ = 0;

        for (let indexX = 0; indexX < AMOUNTX; indexX++) {
            for (let indexY = 0; indexY < AMOUNTY; indexY++) {
                positions[incrementI + 1] = ( Math.sin( ( indexX + this.count ) * 0.5 ) * 20 ) + ( Math.sin( ( indexY + this.count ) * 0.5 ) * 20 )
            
                scales[incrementJ] = ( Math.sin( ( indexX + this.count ) * 0.3 ) + 1 ) * 8 +
                        ( Math.sin( ( indexY + this.count ) * 0.5 ) + 1 ) * 8;

                incrementI += 3;
                incrementJ++;
            }
        }

        ((this.particles.geometry as BufferGeometry).getAttribute('position') as BufferAttribute).needsUpdate = true;
        ((this.particles.geometry as BufferGeometry).getAttribute('position') as BufferAttribute).needsUpdate = true;

        this.renderer.render( this.scene, this.camera );
        this.count += 0.05;
    }

    render() {
        return (
            <div className='particle-container'
                ref={(container) => this.containerElement = container}>
            </div>
        );
    }
}
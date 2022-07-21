import { Mesh, ShaderMaterial, SphereBufferGeometry, Color, TorusGeometry, DoubleSide, BufferGeometry, BufferAttribute, Points, Vector2, Vector3, Object3D, Group } from "three";
import type { Context } from "../Context";
import { Entity } from "./Entity";

export class Wormhole extends Entity {
  private torus: Object3D = new Group();
  private stars: Object3D = new Group();

  private torusMaterial: ShaderMaterial;
  private starsMaterials: ShaderMaterial[] = [];


  private frequency: number = 2;
  private amplitude: number = 0.01;

  constructor() {
    super();

    const torusGeometry = new TorusGeometry(10, 8, 32, 200);

    const torusUniforms = {
      color: { value: new Color(0x27214f) },
      time: { value: 0 },
      frequency: { value: this.frequency },
      amplitude: { value: this.amplitude }
    }

    this.torusMaterial = new ShaderMaterial(
      {
        uniforms: torusUniforms,
        fragmentShader: this.torusFragmentShader(),
        vertexShader: this.torusVertexShader(),
        side: DoubleSide,
      }
    );

    this.torus.add(new Mesh(torusGeometry, this.torusMaterial));

    this.object.add(this.torus);

    const addStarsLayer = (count: number, color: Color, size: number) => {
      const starsGeometry = new BufferGeometry;
      const posArray = new Float32Array(count * 3);

      const starsUniforms = {
        color: { value: color },
        time: { value: 0 },
        eye: { value: new Vector3(0, 0, 0) },
        size: { value: size }
      };

      for (let i = 0; i < count; i++) {
        const x = 18 - Math.random() * 36;
        const y = 18 - Math.random() * 36;
        const z = 8 - Math.random() * 16;

        posArray.set([x, y, z], i * 3);
      }

      starsGeometry.setAttribute("position", new BufferAttribute(posArray, 3));

      const starsMaterial = new ShaderMaterial({
        uniforms: starsUniforms,
        vertexShader: this.starsVertexShader(),
        fragmentShader: this.starsFragmentShader(),
        transparent: true,
        depthWrite: false
      });

      this.starsMaterials.push(starsMaterial);

      this.stars.add(new Points(starsGeometry, starsMaterial));
    }

    this.object.add(this.stars);

    addStarsLayer(500, new Color(0xffffff), 40); //white
    addStarsLayer(150, new Color(0x005e67), 70); //blue
    addStarsLayer(150, new Color(0x27214f), 110); //purple

    this.object.rotation.y = Math.PI / 2;
    this.object.position.y = 9.5;
  }

  public update(dt: number, elapsedTime: number, context: Context): void {
    this.torus.rotation.z += 0.1 * dt;
    this.stars.rotation.z += 0.3 * dt;

    this.torusMaterial.uniforms.amplitude.value = this.amplitude;
    this.torusMaterial.uniforms.frequency.value = this.frequency;
    this.torusMaterial.uniforms.time.value = elapsedTime;

    for (const starsMaterial of this.starsMaterials) {
      starsMaterial.uniforms.time.value = elapsedTime;
      starsMaterial.uniforms.eye.value = context.camera.position;
    }
  }

  private torusVertexShader() {
    return `   
      uniform float time;
      uniform float frequency;
      uniform float amplitude;

      varying float timeNoise;
      varying vec3 worldPosition;
      varying float positionNoise;

      //	Classic Perlin 3D Noise 
      //	by Stefan Gustavson
      //

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      void main() {
        timeNoise = cnoise(vec3(1,1,1) * 20. * time * 0.1);
        positionNoise = cnoise((position * frequency + time * 0.5)) * amplitude;

        worldPosition = position + (positionNoise) * position;
        vec4 mvPosition = modelViewMatrix * vec4(worldPosition, 1.);
        gl_Position = projectionMatrix * mvPosition;
      }
    `
  }

  private torusFragmentShader() {
    return `
      uniform vec3 color;
      uniform float time;

      varying vec3 worldPosition;
      varying float positionNoise;
      varying float timeNoise;

      void main() {
        gl_FragColor = vec4((color * positionNoise * 100.), 1.);
      }
    `
  }

  private starsVertexShader() {
    return `   
      varying vec3 worldPosition;

      uniform float time;
      uniform vec3 eye;
      uniform float size;

      //	Classic Perlin 3D Noise 
      //	by Stefan Gustavson
      //

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      void main() {
          worldPosition = (modelMatrix * vec4(position, 1.)).xyz;

          vec4 mvPosition = viewMatrix * vec4(worldPosition, 1.);

          float sizeNoise = size / 2. + cnoise(position) * size/2.;

          gl_PointSize = pow(sizeNoise - distance(eye, worldPosition),1.);

          gl_Position = projectionMatrix * mvPosition;
      }
    `
  }

  private starsFragmentShader() {
    return `
      uniform vec3 color;
      uniform vec3 eye;
      varying vec3 worldPosition;

      void main() {

        vec2 cxy = gl_PointCoord * 2. - 1.;
        float alpha = (.99 - pow(dot(cxy,cxy), .1) + (-1.5/100. * distance(worldPosition, eye)));

        gl_FragColor = vec4( color, alpha );
      }
    `
  }
}
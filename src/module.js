import {Object3D, WebGLRenderer, Scene, PerspectiveCamera, CubeGeometry, MeshBasicMaterial, Mesh} from 'three';

document.body.style.margin = 0;

let livings = [];

const
renderer = new WebGLRenderer({antialias:true})
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement)

const
scene = new Scene();

const
camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .001, 10000 );
scene.add(camera)

class Beeing extends Mesh{
  live(animation){
    livings.push(animation);
  }
}

class Container extends Object3D{
  live(animation){
    livings.push(animation);
  }
}

function live(){
  requestAnimationFrame(live);

  for(var i=0;i<livings.length;i++){
    livings[i]();
  }

  renderer.render(scene, camera)
}

export {renderer, scene, camera, live, Beeing, Container}

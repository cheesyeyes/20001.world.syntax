import {Clock,CubeGeometry, MeshBasicMaterial, Mesh} from 'three';

import * as META from './meta';
//import * as Human from './module';
//import * as Space from './module';

//META.World.scene.add(new Mesh(new CubeGeometry(5,5,5), new MeshBasicMaterial({color:0x0000ff, wireframe:true})));
/*
let cube = new META.World.Beeing(new CubeGeometry(5,5,5), new MeshBasicMaterial({color:0x0000ff, wireframe:true}));
cube.live(function(){
  cube.rotation.x+=0.01;
  cube.rotation.z+=0.01;
});

META.World.scene.add(cube)
*/

let
cubes = new META.World.Container();
cubes.live(function(){
  cubes.rotation.x+=Math.random()*.005;
  cubes.rotation.y-=Math.random()*0.05;
  cubes.rotation.z+=Math.random()*0.05;
})
META.World.scene.add(cubes)
let clock = new Clock();
for (var i=-10;i<10;i++){
  for (var j=-10;j<10;j++){
    for (var k=-10;k<10;k++){
      let cube = new META.World.Beeing(new CubeGeometry(5,5,5), new MeshBasicMaterial({color:0x0000ff, wireframe:true}));
      cube.position.set(i*10,j*10,k*10);
      cubes.add(cube)
      cube.live(function(){
        let time = clock.getElapsedTime();
        cube.scale.x=Math.sin(time+Math.random());
        cube.scale.y=Math.sin(time+Math.random());
        cube.scale.z=Math.sin(time+Math.random());

        cube.rotation.x+=Math.random()*.005;
        cube.rotation.y-=Math.random()*0.05;
        cube.rotation.z+=Math.random()*0.05;
        cube.material.color.setHex( Math.random() * 0xffffff );
      });
    }
  }
  META.World.scene.add(cubes)
}

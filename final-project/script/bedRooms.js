//*************BED ROOM
var bedRooms=loadObj('camera.obj', new THREE.MeshLambertMaterial({color: 0x89ACAC, shading: THREE.FlatShading, side: THREE.DoubleSide, wired:true }));
house.add(bedRooms);
objects.push(bedRooms);

//texture
var bigBedRoomWallCover = 'bedroom-white-flower.jpg';
var littleBedRoomWallTextureR='bedroom-black-flower-rigth.jpg';
var littleBedRoomWallTextureU='bedroom-black-flower-upset.jpg';
var littleBedRoomWallTextureL='bedroom-black-flower-left.jpg';
var littleBedRoomWallTexture='bedroom-black-flower.jpg';
var whiteParquetTexture='white-parquet.jpg';
var littleBedRoomFloorTexture='bedroom-black-floor.jpg';
var bathRoomFloorTexture='bedroom-black-floor.jpg';
var bathRoomWallTexture='bath-room-wall.jpg';
var bathRoomWallTextureR='bath-room-wallR.jpg';
var bedRoomDoorTexture='door-chamber.jpg';
var bathRoomDoorTexture='bath-room-door.jpg';
var bathRoomDoorTexture1='bath-room-door1.jpg';
var lBRWindowTexture='bedroom-window.jpeg';

//*****************Big bed Room
var bigBedRoomSize=[[spigolo, 3.73, spigolo, 3,spigolo], [4.3, spigolo]];

//start after the door
var bigBedRoom = new THREE.Object3D();
bigBedRoom.position.set(entranceSize[0].reduce(somma), kitchenSize[1].reduce(somma), spigolo);
house.add(bigBedRoom);

//wall between bedroom and kitchen
//for someone reasons the measures dont match with the larcc obj
var middleWallCover= makeWallCover([[1.365+0.04, xporta-0.12, 1.365+spigolo+0.12],[zporta, 3-zporta].reverse()],[[1,1]],bigBedRoomWallCover, undefined, 6,6);
middleWallCover.rotation.x=-Math.PI/2;
middleWallCover.position.set(0, margine, 3);
bigBedRoom.add(middleWallCover);

//north wall of the est bedRoom.
var bigBedRoomNorthWall = makeWallCover([[3.77+spigolo],[3]],[], bigBedRoomWallCover, undefined,6,6);
bigBedRoomNorthWall.rotation.x=Math.PI/2;
bigBedRoomNorthWall.position.set(0, 4.3-margine,0);
bigBedRoom.add(bigBedRoomNorthWall);

//terrace inner wall
var balconyInnerWall = makeWallCover([[zporta, 3-zporta],[(4.3/2-xporta), xporta*2, (4.3/2-xporta)]],[[0,1]],bigBedRoomWallCover,undefined, 6, 6);
balconyInnerWall.rotation.y= -Math.PI/2;
balconyInnerWall.position.set(3.73-margine+spigolo, 0, 0);
bigBedRoom.add(balconyInnerWall);

//wall near little bedRoom
var bigBedRoomNearWall = makeWallCover([[3-zporta, zporta],[entranceSize[1].reduce(somma)-kitchenSize[1].reduce(somma)+1.46+spigolo,xporta,2.84-1.46-xporta+spigolo]],[[1,1]], bigBedRoomWallCover,undefined, 6, 6);
bigBedRoomNearWall.rotation.y = Math.PI/2;
bigBedRoomNearWall.position.set(margine,0,3);
bigBedRoom.add(bigBedRoomNearWall);

var bigBedRoomFloor = makeWallCover([[bigBedRoomSize[0][1]+spigolo],[ bigBedRoomSize[1][0] ]],[],whiteParquetTexture, undefined, 10,10);
bigBedRoomFloor.position.setZ(margine);
bigBedRoom.add(bigBedRoomFloor);

//Door & window
var bedRoomsDoor = mkDoor(xporta,zporta,spigolo,bedRoomDoorTexture);
bedRoomsDoor.rotation.z=Math.PI/2;
bedRoomsDoor.position.set(0,entranceSize[1].reduce(somma)-kitchenSize[1].reduce(somma)+1.46+spigolo,0);
bigBedRoom.add(bedRoomsDoor);

var balconyDoor= mkDoubleWindow(xporta,zporta, spigolo, lBRWindowTexture);
balconyDoor.rotation.z=Math.PI/2;
balconyDoor.position.set(spigolo+3.73+spigolo,(4.3/2-xporta),0);
bigBedRoom.add(balconyDoor);

//loaded object
var singleBed = loadSingleBed(0x40955a,0xFFFFFF,0x43330a,0x756335);
singleBed.scale.set(0.065,0.07,0.07);
singleBed.rotation.y=Math.PI/2;
singleBed.position.set(160,13,-215);
scene.add(singleBed);

var singleBed2 = loadSingleBed(0x40955a,0x743436,0x43330a,0x756335);
singleBed2.scale.set(0.065,0.07,0.07);
singleBed2.position.set(180,13,-230);
scene.add(singleBed2);

var wardRobe= loadWardrobe ('mobileAzzurro.mtl');
wardRobe.scale.set(0.3,.2,.3);
wardRobe.rotation.y=Math.PI;
wardRobe.position.set((entranceSize[0].reduce(somma)+bigBedRoomSize[0][1])*houseScalex, spigolo*houseScalez, -(kitchenSize[1].reduce(somma))*houseScaley);
scene.add(wardRobe);

var bBRLamp =loadChandalier('lampadario.mtl');
bBRLamp.scale.set(2,2,2);
bBRLamp.position.set((bigBedRoomSize[0][1]*0.5+spigolo+entranceSize[0].reduce(somma))*houseScalex,(2.5+spigolo)*houseScalez,-(bigBedRoomSize[1].reduce(somma)*0.5+ kitchenSize[1].reduce(somma))*houseScaley);
scene.add(bBRLamp);
var bBRLight=bBRLamp.getLight(5*houseScale);
scene.add(bBRLight);
lights.push(bBRLight);

//*********************littleBedRoom
littleBedRoomSize = [[spigolo, primoblocco+spigolo+xscala*2, spigolo], [spigolo,3.04,spigolo]];

var littleBedRoom= new THREE.Object3D();
littleBedRoom.position.set(0,entranceSize[1].reduce(somma),spigolo);
house.add(littleBedRoom);

var littleBedRoomMiddleCover = makeWallCover([[zporta, 3-zporta],[1.46+spigolo,xporta,3.04-1.46-xporta]],[[0,1]],littleBedRoomWallTextureR, undefined, 4, 7);
littleBedRoomMiddleCover.rotation.y=-Math.PI/2
littleBedRoomMiddleCover.position.set(littleBedRoomSize[0].reduce(somma)-spigolo-margine, 0, 0);
littleBedRoom.add(littleBedRoomMiddleCover);

var northFace=[[littleBedRoomSize[0][1]/2-xfinestra*2.5, xfinestra*2, xfinestra, xfinestra*2, littleBedRoomSize[0][1]/2-xfinestra*2.5],[3*.3, zfinestra, 3*0.7-zfinestra]];
var littleBedRoomNorthCover = makeWallCover(northFace,[[1,1],[3,1]], littleBedRoomWallTexture,undefined,7,4);
littleBedRoomNorthCover.rotation.x=Math.PI/2;
littleBedRoomNorthCover.position.set(spigolo, littleBedRoomSize[1].reduce(somma)-spigolo-margine,0);
littleBedRoom.add(littleBedRoomNorthCover);

var littleBedRoomSouthCover = makeWallCover([[2.9,xporta,0.04],[3-zporta,zporta]],[[1,1]], littleBedRoomWallTextureU, undefined, 7,4);
littleBedRoomSouthCover.rotation.x=-Math.PI/2;
littleBedRoomSouthCover.position.set(spigolo,spigolo+margine,3);
littleBedRoom.add(littleBedRoomSouthCover);

var littleBedRoomWestCover = makeWallCover([[3],[littleBedRoomSize[1][1]]], [], littleBedRoomWallTextureL, undefined, 4,7);
littleBedRoomWestCover.rotation.y= Math.PI/2;
littleBedRoomWestCover.position.set(spigolo+margine, spigolo, 3);
littleBedRoom.add(littleBedRoomWestCover);

var littleBedRoomFloor = makeWallCover([[littleBedRoomSize[0][1]],[littleBedRoomSize[1][1]]],[], littleBedRoomFloorTexture,undefined, 10, 10);
littleBedRoomFloor.position.set(spigolo, spigolo, margine);
littleBedRoom.add(littleBedRoomFloor);

//window
var lbrWindow1 = mkDoubleWindow(xfinestra,zfinestra,spigolo, lBRWindowTexture, 0x737c7c);
lbrWindow1.rotation.z=Math.PI;
lbrWindow1.position.set(spigolo+littleBedRoomSize[0][1]/2-xfinestra*2.5+xfinestra*2,littleBedRoomSize[1].reduce(somma), 3*.3);
littleBedRoom.add(lbrWindow1);

var lbrWindow2 = mkDoubleWindow(xfinestra,zfinestra,spigolo, lBRWindowTexture, 0x737c7c);
lbrWindow2.rotation.z=Math.PI;
lbrWindow2.position.set(spigolo+littleBedRoomSize[0][1]/2-xfinestra*2.5+xfinestra*2+xfinestra*3,littleBedRoomSize[1].reduce(somma), 3*.3);
littleBedRoom.add(lbrWindow2);

var dbed = loadDoubleBed (0x401a8b, 0x124063, 0x124063);
dbed.rotation.y=-Math.PI/2;
dbed.scale.set(0.23,0.23,0.23);
dbed.position.set(littleBedRoomSize[0].reduce(somma)*.24*houseScalex,spigolo*houseScalez,-(entranceSize[1].reduce(somma)+littleBedRoomSize[1].reduce(somma)*.40)*houseScaley );
scene.add(dbed);

var wardRobe1= loadWardrobe ('mobileAzzurro1.mtl');
wardRobe1.scale.set(0.2,.15,.1);
wardRobe1.rotation.y=-Math.PI/2;
wardRobe1.position.set((littleBedRoomSize[0].reduce(somma)-spigolo)*houseScalex,spigolo*houseScalez,-(entranceSize[1].reduce(somma))*houseScaley-130*0.3);
scene.add(wardRobe1);

var lBRLamp =loadChandalier('lampadario.mtl');
lBRLamp.scale.set(2,2,2);
lBRLamp.position.set((littleBedRoomSize[0][1]*0.5+spigolo)*houseScalex,(2.5+spigolo)*houseScalez,-(littleBedRoomSize[1].reduce(somma)*0.5+entranceSize[1].reduce(somma))*houseScaley);
scene.add(lBRLamp);
var lBRLight=lBRLamp.getLight(5*houseScale);
scene.add(lBRLight);
lights.push(lBRLight);

//***********bathroom
var bathRoomSize = [[primoblocco,spigolo, xscala*2,spigolo],[spigolo, 1.64]]

var bathRoom= new THREE.Object3D();
bathRoom.position.set(spigolo,entranceSize[1].reduce(somma)-spigolo-1.64,spigolo);
house.add(bathRoom);

var bathRoomFloor = makeWallCover([ [bathRoomSize[0].reduce(somma)-spigolo],[bathRoomSize[1][1]]],[], bathRoomFloorTexture, undefined, 4,4);
bathRoomFloor.position.set(0, spigolo, margine);
bathRoom.add(bathRoomFloor); 

var bathRoomWallN = makeWallCover([[primoblocco+xscala*2-xporta-0.04+spigolo,xporta,0.04],[zporta, 3-zporta]],[[1,0]], bathRoomWallTexture);
bathRoomWallN.rotation.x= Math.PI/2;
bathRoomWallN.position.set(0,bathRoomSize[1].reduce(somma)-margine,0);
bathRoom.add(bathRoomWallN); 

var bathRoomWallS = makeWallCover([[bathRoomSize[0].reduce(somma)-spigolo],[3]],[], bathRoomWallTexture);
bathRoomWallS.rotation.x= -Math.PI/2;
bathRoomWallS.position.set(0,spigolo+margine,3);
bathRoom.add(bathRoomWallS);

var bathRoomWallE = makeWallCover([[3],[bathRoomSize[1][1]]],[], bathRoomWallTextureR);
bathRoomWallE.rotation.y=Math.PI/2;
bathRoomWallE.position.set(margine,spigolo,3);
bathRoom.add(bathRoomWallE);

var bathRoomWallW = makeWallCover([[3],[bathRoomSize[1][1]]],[], bathRoomWallTextureR);
bathRoomWallW.rotation.y=-Math.PI/2;
bathRoomWallW.position.set(bathRoomSize[0].reduce(somma)-margine-spigolo,spigolo,0);
bathRoom.add(bathRoomWallW);

//door
var bathRoomDoor = mkDoor(xporta,zporta,spigolo, bathRoomDoorTexture1,bathRoomDoorTexture);
bathRoomDoor.rotation.z=Math.PI;
bathRoomDoor.position.set(primoblocco+xscala*2-0.04+spigolo,bathRoomSize[1].reduce(somma)+spigolo,0);
bathRoom.add(bathRoomDoor);

//loaded obj
var shower= loadShower(0x02f78b);
shower.scale.set(0.4,0.2,0.4);
shower.position.set();
shower.rotation.y=-Math.PI/2;
shower.position.set(spigolo*houseScalex+70*0.4,spigolo*houseScalez,-(entranceSize[1].reduce(somma)-1.64)*houseScaley-70*0.4);
scene.add(shower);

var wc = loadWc(0xFFFFFF);
wc.rotation.y=Math.PI;
wc.scale.set(0.23,0.23,0.23);
wc.position.set( (spigolo+bathRoomSize[0].reduce(somma)*0.40)*houseScalex,spigolo*houseScalez,-(entranceSize[1].reduce(somma)-1.64)*houseScaley);
scene.add(wc);

var sink=loadLavatory(0x187092,0x667797,0x0c3d97,0xcbca89,0xfffffE,0xDCDCDC);
sink.scale.set(0.2,0.2,0.2);
sink.position.set( (spigolo+bathRoomSize[0].reduce(somma)*0.70)*houseScalex,spigolo*houseScalez-5,-(entranceSize[1].reduce(somma)-1.64)*houseScaley);
scene.add(sink);

var bidet=loadBidet(0xffffff,0x667797);
bidet.scale.set(0.23,0.23,0.23);
bidet.rotation.y=Math.PI;
bidet.position.set((spigolo+bathRoomSize[0].reduce(somma)*0.58)*houseScalex,spigolo*houseScalez,-(entranceSize[1].reduce(somma)-1.64)*houseScaley);
scene.add(bidet);

var bRLamp =loadChandalier('lampadario.mtl');
bRLamp.scale.set(2,2,2);
bRLamp.position.set((bathRoomSize[0].reduce(somma)-2*spigolo)*0.5*houseScalex,(2.5+spigolo)*houseScalez,-(bathRoomSize[1].reduce(somma)*0.5+entranceSize[1].reduce(somma)-spigolo-1.64)*houseScaley);
scene.add(bRLamp);
var bRLight=bRLamp.getLight(5*houseScale);
scene.add(bRLight);
lights.push(bRLight);
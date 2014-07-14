var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

var pointerLockHeigth=1000;

if (havePointerLock) {

  var element = document.body;

  var pointerlockchange = function(event) {
    if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
      FPEnabled = true;
      // trackballControls.reset();
      dat.GUI.toggleHide();
      controls.enabled = true;
      $("#blocker").fadeOut(1000);
      $("#instructions").fadeOut(1000);
    } else {
      location.reload();
    }
  }

  var pointerlockerror = function(event) {
    $("#error").fadeIn(500);
  }

  document.addEventListener('pointerlockchange', pointerlockchange, false);
  document.addEventListener('mozpointerlockchange', pointerlockchange, false);
  document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

  document.addEventListener('pointerlockerror', pointerlockerror, false);
  document.addEventListener('mozpointerlockerror', pointerlockerror, false);
  document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

  var startFP = function() {
    // controls = new THREE.PointerLockControls(camera);
    // scene.add(controls.getObject());
    controls.getObject().position.set(20, pointerLockHeigth, -20);
    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
      var fullscreenchange = function(event) {
        if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
          document.removeEventListener('fullscreenchange', fullscreenchange);
          document.removeEventListener('mozfullscreenchange', fullscreenchange);
          element.requestPointerLock();
        }
      }
      document.addEventListener('fullscreenchange', fullscreenchange, false);
      document.addEventListener('mozfullscreenchange', fullscreenchange, false);
      element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      element.requestPointerLock();
    }
  };

  function animateControls() {
    controls.isOnObject(false);
    ray.ray.origin.copy(controls.getObject().position);
    ray.ray.origin.y -= pointerLockHeigth+spigolo*houseScale;
    var intersections = ray.intersectObjects(objects);
    if (intersections.length > 0) {
      var distance = intersections[0].distance;
      if (distance > 0 && distance < pointerLockHeigth+spigolo*houseScale) {
        controls.isOnObject(true);
      }
    }
    controls.update(2);
  }

}
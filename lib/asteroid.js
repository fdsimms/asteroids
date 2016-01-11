(function () {
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = this.COLOR =  "#00FF00";
    options.radius = this.RADIUS = 100;
    options.vel = Asteroids.Utils.randomVec(6);
    Asteroids.MovingObject.call(this, options);
  };



  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

})();

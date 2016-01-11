(function () {
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var Game = Asteroids.Game = function (dim_x, dim_y) {
    this.dim_x = dim_x;
    this.dim_y = dim_y;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.randomPosition = function () {
    var x = Math.floor(Math.random() * this.dim_x);
    var y = Math.floor(Math.random() * this.dim_y);

    return [x, y];
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i <= this.NUM_ASTEROIDS; i++) {
      var randPos = this.randomPosition();
      var a = new Asteroids.Asteroid({ pos: randPos });
      this.asteroids.push(a);
    }
    return this.asteroids;
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);

    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {

    this.asteroids.forEach( function (asteroid) {
      asteroid.move();
    });
  };


})();

(function () {
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var Game = Asteroids.Game = function (dim_x, dim_y) {
    this.dim_x = dim_x;
    this.dim_y = dim_y;
    this.NUM_ASTEROIDS = 1;
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
      var a = new Asteroids.Asteroid({ pos: randPos, game: this });
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

  Game.prototype.wrap = function (pos) {
    if (pos[0] <= 0) {
       pos[0] = this.dim_x;
    } else if (pos[0] >= this.dim_x) {
      pos[0] = 1;
    }
    if (pos[1] <= 0) {
      pos[1] = this.dim_y;
    } else if (pos[1] >= this.dim_y) {
      pos[1] = 1;
    }
    return pos;
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length; i++ ) {
      for (var j = i + 1; i < this.asteroids.length; i++ ) {
        var asteroid1 = this.asteroids[i];
        var asteroid2 = this.asteroids[j];
        if (asteroid1.isCollidedWith(asteroid2) && asteroid1 !== asteroid2) {
          alert("COLLISION");
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };


})();

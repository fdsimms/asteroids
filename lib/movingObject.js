(function () {

  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos = this.game.wrap(this.pos);
    var dx = this.vel[0];
    var dy = this.vel[1];

    this.pos[0] = this.pos[0] + dx;
    this.pos[1] = this.pos[1] + dy;
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var center1 = this.pos;
    var center2 = otherObject.pos;
    var radiusSum = this.radius + otherObject.radius;

    if (radiusSum > Asteroids.Utils.vecDist(center1, center2)) {
      return true;
    } else {
      return false;
    }

  };



})();

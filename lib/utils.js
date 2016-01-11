(function () {
  if (typeof Asteroids.Utils === "undefined") {
    Asteroids.Utils = {};
  }

  Asteroids.Utils.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };
  //length = 5
  Asteroids.Utils.randomVec = function (length) {
    var x = Math.floor(Math.random() * (length - 1)) + 1;
    var y = Math.floor(Math.random() * (length - 1)) + 1;
    x = Asteroids.Utils.randNegOrPos(x);
    y = Asteroids.Utils.randNegOrPos(y);

    return [x, y];
  };
  // vel = [3,4] or [3,-4] or [-4,3]

  Asteroids.Utils.vecDist = function (pos1, pos2) {
    var x1 = pos1[0];
    var x2 = pos2[0];
    var y1 = pos1[1];
    var y2 = pos2[1];

    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  };

  Asteroids.Utils.vecLength = function (vel) {
    return Asteroids.Utils.vecDist([0,0], vel);
  };

  Asteroids.Utils.randNegOrPos = function (num) {
    if (Math.round(Math.random()) === 0) {
      return num * -1;
    } else {
      return num;
    }
  };

})();

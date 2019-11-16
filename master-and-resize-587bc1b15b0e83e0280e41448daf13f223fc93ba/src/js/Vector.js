'use strict';
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  change(x, y) {
    this.x = x;
    this.y = y;
  }

  scale(scale) {
    this.x *= scale;
    this.y *= scale;
  }

  sum(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  diff(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y
  }

  normalize(copy) {
    let vector = copy ? new Vector(this.x, this.y) : this;
    let length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (length) {
      vector.x /= length;
      vector.y /= length;
    }
    return vector;
  }

  //радианы
  rotate(angle) {
    let x = this.x,
      y = this.y,
      cos = Math.cos(angle),
      sin = Math.sin(angle);
    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
  }

}

export { Vector };
class Enemy extends SpriteEntity {
  constructor(x, y) {
    super(x, y);
    
    this.width = 40;
    this.height = 40;
    this.health = 100;
    this.canCollideWithPlayer = true;

    this.direction = 0;
    this.moveSpeed = 5;

    this.rotationClock = 0;
    this.rotationTimer = 0;

    this.targetRange = 0;
    this.fireRate = 60;
    this.fireDistance = 100;
    this.reload = this.fireRate;
    this.outOfRange = 20000000;
  }

  get originX() {
    return this.sprite.x - (this.sprite?.width || 0) / 2;
  }

  get originY() {
    return this.sprite.y - (this.sprite?.height || 0) / 2;
  }

  get originVector() {
    return { x: this.originX, y: this.originY };
  }

  get isAlive() {
    return Boolean(this.health);
  }
  applyDamage(damage) {
    if (!this.isAlive) return;

    this.health = Math.max(this.health - damage, 0);

    if (!this.health) this.onDeath();
  }

  onDeath() {
    this.remove();
    const deathSprite = new Death(this.x + this.width / 2, this.y + this.height / 2);
    window.game.addEntity(deathSprite);
    window.game.onEnemyDeath();
  }

  fire(timeDelta) {
    this.reload = Math.max(this.reload - timeDelta, 0);
    if (this.reload) return;
    this.reload = this.fireRate;

    const target = window.game.player.hitBoxOrigin;
    const range = Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2);
    const origin = this.originVector;
    if (Math.pow(this.targetRange, 2) >= range) {
      const direction = getFireVector(origin, target);
      const bullet = new this.Projectile(
        origin.x + direction.x * this.fireDistance,
        origin.y + direction.y * this.fireDistance,
        direction
      );
      window.game.addEntity(bullet);
      bullet.spawn();
    }
  }

  tick(deltaTime) {
    this.rotationTimer += deltaTime;
    if (this.rotationTimer >= this.rotationClock) {
      if (getDistance(this, window.game.player) >= this.outOfRange)
        this.direction = getFireRotation(this, window.game.player);
      const randomDir = randomBetweenFloat(-deltaTime * 0.6, deltaTime * 0.6);
      this.direction += randomDir;
      this.rotationClock = randomBetweenFloat(4, 60);
      this.rotationTimer = 0;
    }
    const { x, y } = angleToVector(this.direction);
    const dirX = x * this.moveSpeed * deltaTime;
    const dirY = y * this.moveSpeed * deltaTime;
    this.move(dirX, dirY);

    this.fire(deltaTime);
    super.tick(deltaTime);
    
  }
}

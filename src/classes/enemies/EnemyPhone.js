class ProjectilePhone extends Projectile {
  constructor(x, y, direction={ x: 0, y: 0 }) {
    const moveSpeed = 16;
    const damage = 6;
    super(x, y, moveSpeed, direction, damage);
    const graphics = new PIXI.Graphics();

    graphics.beginFill(0x0FF0AA);
    graphics.drawRect(0, 0, 10, 10);
    graphics.endFill();

    this.sprite = new PIXI.Sprite(window.game.app.renderer.generateTexture(graphics));
    this.sprite.position.set(this.x, this.y);
  }
}

class EnemyPhone extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.fireRate = 8;
    this.targetRange = 1000;

    this.isAnimate = true;
    this.animationClock = 20;
    this.textures = [
      PIXI.Texture.fromFrame(PHONE_SPRITE_PATH1),
      PIXI.Texture.fromFrame(PHONE_SPRITE_PATH2),
      PIXI.Texture.fromFrame(PHONE_SPRITE_PATH3),
    ];
    const enemySprite = new PIXI.Sprite(this.textures[0]);
    enemySprite.scale.x = 0.1;
    enemySprite.scale.y = 0.1;
    this.sprite = enemySprite;
    app.stage.addChild(enemySprite);

    this.Projectile = ProjectilePhone;
  }
}
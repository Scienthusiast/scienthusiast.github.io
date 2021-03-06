const TEXTURES_MAIL = [
  PIXI.Texture.from(MAIL_SPRITE_PATH1),
  PIXI.Texture.from(MAIL_SPRITE_PATH2),
  PIXI.Texture.from(MAIL_SPRITE_PATH3),
];

class ProjectileMail extends EnemyProjectile {
  constructor(x, y, direction={ x: 0, y: 0 }) {
    const moveSpeed = 10;
    const damage = 4;
    super(x, y, moveSpeed, direction, damage);

    this.sprite.position.set(this.x, this.y);
    const audio = new Audio('src/assets/audio/fire/mail.wav');
    audio.volume = 0.06
    audio.muted = window.game.music.muted;
    audio.play();
  }
}

class EnemyMail extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.fireRate = 13;
    this.targetRange = 1200;
    this.health = 50;
    this.moveSpeed = 5;

    this.isAnimate = true;
    this.animationClock = 13;
    this.textures = TEXTURES_MAIL;
    const enemySprite = new PIXI.Sprite(this.textures[0]);
    enemySprite.scale.x = 0.1;
    enemySprite.scale.y = 0.1;
    this.sprite = enemySprite;
    this.sprite.anchor.set(0.5);
    app.stage.addChild(enemySprite);

    this.Projectile = ProjectileMail;
    this.sprite.tint = Math.round(Math.random() * 0xFFFFFF);
  }
}
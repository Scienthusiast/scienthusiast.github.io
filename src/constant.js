const INPUT_KEYS = {
    UP: 'w',
    DOWN: 's',
    LEFT: 'a',
    RIGHT: 'd',
    FIRE: 'mouse0',
    INCREMENT_POWER: 'v',
    DECREMENT_POWER: 'c',
};

const FLOORS = {
    '0': 'Ground Floor - Reception',
    '1': '1st Floor - IT Department',
    '2': '2nd Floor - Marketing Department',
    '3': '3rd Floor - HR Department',
    '4': '4th Floor - Big Boss',
}

const PLAYER_WIDTH = 1
const PLAYER_HEIGHT = 50
const WALL_WIDTH = 1
const WALL_HEIGHT = 150
const WALL_SPRITE_PATH = 'src/assets/sprites/wall.png'
const BACKGROUND_COLOR = 0x000
const PLAYER_SPRITE_PATH = 'src/assets/sprites/cravate.png'
const PLAYER_SPRITE_PATH2 = 'src/assets/sprites/cravate3.png'
const PLAYER_SPRITE_DEFAULT_PATH = 'src/assets/sprites/cravate2.png'
const PLAYER_PATTERN_PATH = 'src/assets/sprites/pattern.jpg'
const DEATH_SPRITE_PATH = 'src/assets/sprites/enemies/death.png'
const PRINTER_SPRITE_PATH = 'src/assets/sprites/furniture/printer.png'
const DESK_SPRITE_PATH = 'src/assets/sprites/furniture/desk.png'
const ARMCHAIR_SPRITE_PATH = 'src/assets/sprites/furniture/armchair.png'

const TROMBI_X = innerWidth - 200;
const TROMBI_Y = innerHeight - innerHeight / 2;
const BUBBLE_W = 250;
const BUBBLE_H = 170;
const TROMBI_SPRITE_PATH1 = 'src/assets/sprites/enemies/Trombi/Trombi_Phase_Une.png';
const TROMBI_SPRITE_PATH2 = 'src/assets/sprites/enemies/Trombi/Trombi_Phase_Deux.png';
const TROMBI_SPRITE_PATH3 = 'src/assets/sprites/enemies/Trombi/Trombi_Phase_Trois.png';

const WORDSHOT_SQUARE = 30
const ENEMY_SHOT_WIDTH = 15

const BORDER_ROOM_SPRITE_PATH = 'src/assets/sprites/wall.png'

const ROOM_SIZE = 1500;

const CORPORATE_TEXT = [
  "Actionable", "Gain traction", "Low-hanging fruit", "Quick fix", "Think outside the box", "30,000 foot view", "Bandwidth", "Benchmark", "Best practice", "Bottleneck", "Deliverable", "Downsize", "In the loop", "Win win", "Pouvoir d'achat", "Gagner un marché", "Scalable", "Hierarchie horizontale", "Scrum Master", "Itération", "Iterate", "Booster", "Closer le deal", "Business Angel", "Buzzword", "VC", "Licorne", "Unicorn", "Pitch", "Traction", "Disrupter", "Écosystème", "Innover", "Lean", "FOMO", "Bankable", "Blockchain", "Business Plan", "Business Model", "Coworking", "Crowdsourcing", "Norvegian Inquisition", "Fordism", "Monetisation", "Disruptif", "Anarchocapitalism", "Vert Libéral", "Gamification"
]
const LOVE_TEXT = [
    "Love"
]

const ENEMY_LIST = [
    EnemyCV,
    EnemyMail,
    EnemyPhone,
];

const ENTITY_TYPES = {
  PLAYER: 'player',
  WALL: 'wall',
  PROJECTILE: 'projectile',
  DEATH: 'death',
  FURNITURE: 'furniture'
}

const PROBA_LOVE_SHOT = 0.1
const PROBA_FURNISH_ROOM = 0.5

const FURNITURE_LIST = [
  Printer,
  Armchair,
  Desk,
]

const PROJECTILE_TIME_TO_LIVE = 500
const TIME_TO_LIVE_DEATH = 200


const RANDOM_TIPS = [
    "It looks like you're trying to be productive ! Keep setting a good example for your coworkers !",
    "Hey ! Are you trying to go up the corporate lift? If so, keep squashing those productivity issues.",
    "Don't worry, if you are a good slave.. erm.. worker, I'm sure you'll get on top in no time !",
    "Who needs love when you can have PROFITS? Keep KILLING it at work!",
    "I hope you're not one of those dirty syndicalists, they've tried to infiltrate us recently.",
    "I'm so glad to be helpful! I hope you enjoy my company as much as I enjoy yours :3",
    "A life with no money is like a Game Jam with no masseur.se.x. Worthless.",
    "Kids these days only think about ecology and they're lazy. I feel you're different.",
    "We don't need SWOTs here! This company is only Ss!",
    "If you get good results, I'll show you motivational pictures so you'll be even MORE efficient!",
    "Your MCT™ is really good looking! I'm sure it's a sign that you'll go far!",
    "Blockchain is the future of mankind and clipkind! And also womankind but only 22% less.",
    "Don't forget to take your Mandatory Contraception Pills every morning!",
    "If there's a will, there's a way! Focus on your GOALS!",
    "I'm sure management will notice you working so hard and KILLING all those productivity issues.",
    "lorem ipsum DOLOR sit amet.",
]
const ELEVATOR_SPRITE = 'src/assets/sprites/ascenseur.png'
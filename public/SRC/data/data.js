import { inicio } from '../components/inicio/inicio'
import { investigacion } from '../components/investigacion/investigacion'
import { personajes } from '../components/personajes/personajes'

export const listadoHeader = [
  { nombre: 'Inicio', funcion: inicio },
  { nombre: 'Personajes', funcion: personajes },
  { nombre: 'Investgación', funcion: investigacion }
]

export const app = document.querySelector('#app')
export const participantes = [
  {
    nombre: 'Beltrán',
    fotoPerfil: 'https://i.ibb.co/qn2QLbS/Beltr-n.jpg',
    alias: 'El vallecano.',
    rol: 'Comandante en jefe del Estado Mayor de Defensa de (v)KRBC.',
    ideologia: 'Acción directa.',
    aliados:
      'Los vallekanos. El cabeza, que estuvo dos años allí haciendo (Arte marcial).',
    enemigos: ' ̶ ̷E̷k̷o̷n̷t̷r̷o̷n̷a̷z̷o̷. Cualquiera que menosprecie a VK.',
    habilidades:
      'Absolutamente todas. Estar siempre que hace falta para lo que sea.',
    fotos: [
      'https://i.ibb.co/x7XtkMp/BELTRAN1.jpg',
      'https://i.ibb.co/qMZ5Lxy/BELTRAN2.jpg',
      'https://i.ibb.co/XCmvGH5/BELTRAN3.jpg',
      'https://i.ibb.co/jfR2DRg/BELTRAN4.jpg',
      'https://i.ibb.co/qk3dfFB/BELTRAN5.jpg',
      'https://i.ibb.co/hf1D2Cf/BELTRAN6.jpg'
    ]
  },
  {
    nombre: 'Campi',
    fotoPerfil: 'https://i.ibb.co/0YmXkS0/Campi.jpg',
    alias: 'El leonés',
    Rol: 'Difusión interna de información.',
    ideologia: 'Autogestión y organización llionesa.',
    aliados: 'aliados',
    enemigos: 'La ausencia de sonido. Las pantas',
    habilidades: 'Ser duro como un minero.',
    fotos: [
      './assets/RANDOM/CAMPI1.jpg',
      './assets/RANDOM/CAMPI2.jpg',
      './assets/RANDOM/CAMPI3.jpg',
      './assets/RANDOM/CAMPI4.jpg'
    ]
  },
  {
    nombre: 'Cris',
    fotoPerfil: 'https://i.ibb.co/LCSr1Wj/Cris.jpg',
    alias: 'Sandalia caótica.',
    Rol: 'Suministradora de cultura popular de altísimo nivel.',
    ideologia: 'Anarquismo Patty&Shelmista.',
    aliados: 'aliados',
    enemigos: 'Los dolores gastrointestinales.',
    habilidades:
      'Exquisito gusto artístico junto a excelentes dotes interpersonales.',
    fotos: [
      './assets/RANDOM/CRIS1.jpg',
      './assets/RANDOM/CRIS2.jpg',
      './assets/RANDOM/CRIS3.jpg'
    ]
  },
  {
    nombre: 'Enol',
    fotoPerfil: 'https://i.ibb.co/1QNWWmz/Enol.jpg',
    alias: 'El torpedo',
    Rol: 'Organización de expectativas. "Chavales, no os flipéis"',
    ideologia: 'Imperialismo Panuserista.',
    aliados:
      'Usera Antifa. ¿Están aquí con nosotros en esta sala esos antifas?',
    enemigos:
      'Los pancarabancherelistas con ansias de expansión del distrito.  ',
    habilidades:
      'Adaptabilidad a cualquier entorno y ambiente generando buen rollo. ',
    fotos: [
      './assets/RANDOM/ENOL1.jpg',
      './assets/RANDOM/ENOL2.jpg',
      './assets/RANDOM/ENOL3.jpg',
      './assets/RANDOM/ENOL4.jpg',
      './assets/RANDOM/ENOL5.jpg',
      './assets/RANDOM/ENOL6.jpg',
      './assets/RANDOM/ENOL7.jpg'
    ]
  },
  {
    nombre: 'Grow',
    fotoPerfil: 'https://i.ibb.co/F6zwppr/Grow.jpg',
    alias: 'El ojo del huracán.',
    Rol: 'Relaciones públicas.',
    ideologia: 'Teoría del caos.',
    aliados:
      'Cualquier ser vivo no nazi que exista es un potencial aliado de Ebola.',
    enemigos: 'La autoridad y el aburrimiento.',
    habilidades: 'Ilimitada energía y batería social. ',
    fotos: [
      './assets/RANDOM/GROW1.jpg',
      './assets/RANDOM/GROW2.jpg',
      './assets/RANDOM/GROW3.jpg',
      './assets/RANDOM/GROW4.jpg',
      './assets/RANDOM/GROW5.jpg',
      './assets/RANDOM/GROW6.jpg',
      './assets/RANDOM/GROW7.jpg'
    ]
  },
  {
    nombre: 'Héctor',
    fotoPerfil: 'https://i.ibb.co/qJ68qGH/H-ctor.jpg',
    alias: 'El buko',
    Rol: 'Líder horizontal de Karaduras',
    ideologia: 'Marxismo-leninismo-flokismo',
    aliados: 'Los gitanos y yonkis del cara. El glorioso camarada Stalin',
    enemigos: 'Floki. Si no está 100% satisfecho castiga a Héctor sin salir',
    habilidades: 'Crear elementos de mediación y gestión de conflictos',
    fotos: [
      './assets/RANDOM/HECTOR1.jpg',
      './assets/RANDOM/HECTOR2.jpg',
      './assets/RANDOM/HECTOR3.jpg',
      './assets/RANDOM/HECTOR4.jpg',
      './assets/RANDOM/HECTOR5.jpg',
      './assets/RANDOM/HECTOR6.jpg'
    ]
  },
  {
    nombre: 'Josemi',
    fotoPerfil: 'https://i.ibb.co/6b07WW4/Josemi.jpg',
    alias: 'Líder de los Josemis.',
    Rol: 'Organización social.',
    ideologia: 'Ultraviolencia ultra antichichipanista.',
    aliados: 'aliados',
    enemigos: 'Los cerdos, los costras y los chichipanes.',
    habilidades: 'habiliadades',
    fotos: ['./assets/RANDOM/JOSEMI.jpg']
  },
  {
    nombre: 'Laura',
    fotoPerfil: 'https://i.ibb.co/sj9J24p/Laura.jpg',
    alias: 'The lemon bukaner.',
    Rol: 'Eje moral del grupo.',
    ideologia: 'La casualidad.',
    aliados: 'aliados',
    enemigos: 'La poca previsión de cuantos van a ir.',
    habilidades: 'Poner orden.',
    fotos: [
      './assets/RANDOM/LAURA1.jpg',
      './assets/RANDOM/LAURA2.jpg',
      './assets/RANDOM/LAURA3.jpg',
      './assets/RANDOM/LAURA4.jpg',
      './assets/RANDOM/LAURA5.jpg',
      './assets/RANDOM/LAURA6.jpg',
      './assets/RANDOM/LAURA7.jpg',
      './assets/RANDOM/LAURA8.jpg'
    ]
  },
  {
    nombre: 'Luis',
    fotoPerfil: 'https://i.ibb.co/T8zy14D/Luis.jpg',
    alias: 'El niño',
    Rol: 'Rol',
    ideologia: 'Aceleracionista soviético',
    aliados: 'aliados',
    enemigos: 'enemigos',
    habilidades: 'habiliadades',
    fotos: [
      './assets/RANDOM/LUIS1.jpg',
      './assets/RANDOM/LUIS2.jpg',
      './assets/RANDOM/LUIS3.jpg'
    ]
  },
  {
    nombre: 'Marisa',
    fotoPerfil: 'https://i.ibb.co/bJ9JFNW/Marisa.jpg',
    alias: 'Alias',
    Rol: 'Propagandista',
    ideologia: 'Flokismo buenista',
    aliados: 'aliados',
    enemigos: 'Quien cuestione el calendario de custodia compartida.',
    habilidades: 'Faltar al respeto indiscriminadamanete en convocatorias.',
    fotos: [
      './assets/RANDOM/MARISA1.jpg',
      './assets/RANDOM/MARISA2.jpg',
      './assets/RANDOM/MARISA3.jpg',
      './assets/RANDOM/MARISA4.jpg'
    ]
  },
  {
    nombre: 'Marta',
    fotoPerfil: 'https://i.ibb.co/YjNXZ8Y/Marta.jpg',
    alias: 'alias',
    Rol: 'Estabilizadora de meterse en jaleos.',
    ideologia: 'Racionalismo ácrata bondadoso.',
    aliados: 'Las primas. Los gatos. La gente buena.',
    enemigos: 'Las fechas y horas previamente avisadas y cerradas.',
    habilidades: 'Encontrar realidades alternativas de bondad innata.',
    fotos: [
      './assets/RANDOM/MARTA1.jpg',
      './assets/RANDOM/MARTA2.jpg',
      './assets/RANDOM/MARTA3.jpg',
      './assets/RANDOM/MARTA4.jpg',
      './assets/RANDOM/MARTA5.jpg',
      './assets/RANDOM/MARTA6.jpg',
      './assets/RANDOM/MARTA7.jpg',
      './assets/RANDOM/MARTA8.jpg',
      './assets/RANDOM/MARTA9.jpg'
    ]
  },
  {
    nombre: 'Mayte',
    fotoPerfil: 'https://i.ibb.co/bsgPBP5/Mayte.jpg',
    alias: 'La serrana',
    Rol: 'Relaciones diplomáticas interterritoriales',
    ideologia: 'Anarquista pero anarquista bien no anarquista Eko',
    aliados: 'Meningitis y hepatitis. Sus puños. A quien no matan dejan tonto',
    enemigos: 'enemigos',
    habilidades:
      'Estar siempre en los momentos importantes y generar colegueo guay. ',
    fotos: [
      './assets/RANDOM/MAYTE1.jpg',
      './assets/RANDOM/MAYTE2.jpg',
      './assets/RANDOM/MAYTE3.jpg',
      './assets/RANDOM/MAYTE4.jpg',
      './assets/RANDOM/MAYTE5.jpg',
      './assets/RANDOM/MAYTE6.jpg'
    ]
  },
  {
    nombre: 'Pablo',
    fotoPerfil: 'https://i.ibb.co/cxmYy4L/Pablo.jpg',
    alias: 'El cerva.',
    Rol: 'El ímpetu de la juventud.',
    ideologia: 'Centralismo idemocrático.',
    aliados: 'Los del otro cole. Tifus Crew',
    enemigos:
      'El rubencín y las previas de menos de 7 horas o la gente que quiere irse',
    habilidades: 'Hacer que te quedes a la última.',
    fotos: [
      './assets/RANDOM/PABLO1.jpg',
      './assets/RANDOM/PABLO2.jpg',
      './assets/RANDOM/PABLO3.jpg',
      './assets/RANDOM/PABLO4.jpg',
      './assets/RANDOM/PABLO5.jpg',
      './assets/RANDOM/PABLO6.jpg',
      './assets/RANDOM/PABLO7.jpg',
      './assets/RANDOM/PABLO8.jpg'
    ]
  },
  {
    nombre: 'Paula',
    fotoPerfil: 'https://i.ibb.co/p39vvJy/Paula.jpg',
    alias: 'Alias',
    Rol: 'Rol',
    ideologia: 'ideologia',
    aliados: 'aliados',
    enemigos: 'enemigos',
    habilidades: 'habiliadades',
    fotos: [
      './assets/RANDOM/PAULA1.jpg',
      './assets/RANDOM/PAULA2.jpg',
      './assets/RANDOM/PAULA3.jpg',
      './assets/RANDOM/PAULA4.jpg',
      './assets/RANDOM/PAULA5.jpg'
    ]
  },
  {
    nombre: 'Victoria',
    fotoPerfil: './assets/PERFIL/Victoria.jpg',
    alias: 'Alias',
    Rol: 'Vidente pitonisa',
    ideologia: 'ideologia',
    aliados: 'aliados',
    enemigos: 'El horoscopo',
    habilidades: 'Las predicciones de aquí a tiempo X',
    fotos: [
      './assets/RANDOM/VICTORIA1.jpg',
      './assets/RANDOM/VICTORIA2.jpg',
      './assets/RANDOM/VICTORIA3.jpg'
    ]
  },
  {
    nombre: 'Zyme',
    fotoPerfil: 'https://i.ibb.co/ySttgjX/Zyme.jpg',
    alias: 'El pinturas',
    Rol: 'Liar a la gente para cosas random',
    ideologia: 'Ultrassur de línea dura pero antifa (a veces).',
    aliados: 'La subida del SMI. Le permite gastar más dinero.',
    enemigos:
      'Las cantidades de cosas objetiva y racionalmente suficientes para un propósito porque son pocas.',
    habilidades: 'Sacar planes guapos de lugares inesperados',
    fotos: [
      './assets/RANDOM/ZYME1.jpg',
      './assets/RANDOM/ZYME2.jpg',
      './assets/RANDOM/ZYME3.jpg',
      './assets/RANDOM/ZYME4.jpg',
      './assets/RANDOM/ZYME5.jpg',
      './assets/RANDOM/ZYME6.jpg',
      './assets/RANDOM/ZYME7.jpg',
      './assets/RANDOM/ZYME8.jpg'
    ]
  }
]

export const personas = [
  'Mapa',
  'Beltrán',
  'Campi',
  'Cris',
  'Enol',
  'Grow',
  'Héctor',
  'Josemi',
  'Laura',
  'Luis',
  'Marisa',
  'Marta',
  'Mayte',

  'Pablo',
  'Paula',
  'Victoria',
  'Zyme'
]

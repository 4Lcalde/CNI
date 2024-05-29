import { explicacion } from '../components/explicacion/explicacion'
import { inicio } from '../components/inicio/inicio'
import { investigacion } from '../components/investigacion/investigacion'
import { personajes } from '../components/personajes/personajes'

export const listadoHeader = [
  { nombre: 'Inicio', funcion: inicio },
  { nombre: 'Personajes', funcion: personajes },
  { nombre: 'Investigación', funcion: investigacion },
  { nombre: 'Explicación', funcion: explicacion }
]

export const placa = { Nombre: '', placa: 0 }

export const app = document.querySelector('#app')
export const participantes = [
  {
    nombre: 'Beltrán',
    fotoPerfil: 'https://i.ibb.co/qn2QLbS/Beltr-n.jpg',
    alias: 'El aviones. Ayatolá Escudero si lleva barba larga',
    rol: 'Comandante en jefe del Estado Mayor de Defensa de (v)KRBC.',
    ideologia: 'Acción directa.',
    aliados:
      'Los vallekanos. El cabeza, que estuvo dos años allí haciendo (Arte marcial).',
    enemigos: ' ̶ ̷E̷k̷o̷n̷t̷r̷o̷n̷a̷z̷o̷. Cualquiera que menosprecie a VK.',
    habilidades:
      'Absolutamente todas. Juez de bebidas mitológicas. Estar siempre que hace falta para lo que sea.',
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
    aliados: 'Cualquiera que le rente estar un rato agusto.  ',
    enemigos: 'La ausencia de sonido. Las plantas.',
    habilidades:
      'Ser duro como un minero. Aguante indefinido bajo el sol de festivales en Almería.',
    fotos: [
      'https://i.ibb.co/kQS5jY1/CAMPI1.jpg',
      'https://i.ibb.co/P1tGnzZ/CAMPI2.jpg',
      'https://i.ibb.co/VQDW2Tj/CAMPI3.jpg',
      'https://i.ibb.co/9N571Cx/CAMPI4.jpg',
      'https://i.ibb.co/9nwRyHm/CAMPI5.jpg'
    ]
  },
  {
    nombre: 'Cris',
    fotoPerfil: 'https://i.ibb.co/LCSr1Wj/Cris.jpg',
    alias: 'Sandalia caótica.',
    Rol: 'Suministradora de cultura popular de altísimo nivel.',
    ideologia: 'Anarquismo Patty&Shelmista.',
    aliados:
      'Miseria, Chechenia y un puñado de prepubers hormonados a los que aporta conocimiento en clase. ',
    enemigos: 'Los dolores gastrointestinales.',
    habilidades:
      'Exquisito gusto artístico junto a excelentes dotes interpersonales. Catadora de vinos.',
    fotos: [
      'https://i.ibb.co/DW9PYHc/CRIS1.jpg',
      'https://i.ibb.co/GsY0MHh/CRIS2.jpg',
      'https://i.ibb.co/RTQBKr7/CRIS3.jpg',
      'https://i.ibb.co/QP0DRQW/CRIS4.jpg',
      'https://i.ibb.co/RCLNGD5/CRIS5.jpg'
    ]
  },
  {
    nombre: 'Enol',
    fotoPerfil: 'https://i.ibb.co/1QNWWmz/Enol.jpg',
    alias: 'El torpedo.',
    Rol: 'Organización de expectativas. "Chavales, no os flipéis".',
    ideologia: 'Imperialismo Panuserista.',
    aliados:
      'Usera Antifa. ¿Están aquí con nosotros en esta sala esos antifas?',
    enemigos:
      'Los pancarabancherelistas con ansias de expansión del distrito.  ',
    habilidades:
      'Adaptabilidad a cualquier entorno y ambiente generando buen rollo. ',
    fotos: [
      'https://i.ibb.co/1mhvCvT/ENOL1-copia.jpg',
      'https://i.ibb.co/VxwCcGz/ENOL2.jpg',
      'https://i.ibb.co/vXT8KMm/ENOL3.jpg',
      'https://i.ibb.co/SKxQr8d/ENOL4.jpg',
      'https://i.ibb.co/JtX2fJx/ENOL5.jpg',
      'https://i.ibb.co/thJmX2T/ENOL6.jpg',
      'https://i.ibb.co/d7fK8hJ/ENOL7.jpg'
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
      'https://i.ibb.co/ZcK0SK1/GROW1-copia.jpg',
      'https://i.ibb.co/Y7m9s25/GROW2.jpg',
      'https://i.ibb.co/y0mfJW8/GROW3.jpg',
      'https://i.ibb.co/syhfYkq/GROW4.jpg',
      'https://i.ibb.co/3zWnPKc/GROW5.jpg',
      'https://i.ibb.co/8XTNjwN/GROW6.jpg',
      'https://i.ibb.co/NjwbBxB/GROW7.jpg'
    ]
  },
  {
    nombre: 'Héctor',
    fotoPerfil: 'https://i.ibb.co/qJ68qGH/H-ctor.jpg',
    alias: 'El buko.',
    Rol: 'Líder horizontal de Karaduras.',
    ideologia: 'Marxismo-leninismo-flokismo.',
    aliados: 'Los gitanos y yonkis del cara. El glorioso camarada Stalin.',
    enemigos: 'Floki. Si no está 100% satisfecho castiga a Héctor sin salir.',
    habilidades: 'Crear elementos de mediación y gestión de conflictos.',
    fotos: [
      'https://i.ibb.co/ZLmjFx0/HECTOR1.jpg',
      'https://i.ibb.co/JvGGVMv/HECTOR2.jpg',
      'https://i.ibb.co/kB65Htd/HECTOR3.jpg',
      'https://i.ibb.co/HTP1yrB/HECTOR4.jpg',
      'https://i.ibb.co/rMkJ3Gz/HECTOR5.jpg',
      'https://i.ibb.co/SJh8Jnd/HECTOR6.jpg'
    ]
  },
  {
    nombre: 'Josemi',
    fotoPerfil: 'https://i.ibb.co/6b07WW4/Josemi.jpg',
    alias: 'Líder de los Josemis.',
    Rol: 'Organización social.',
    ideologia: 'Ultraviolencia ultra antichichipanista.',
    aliados: 'El Vicente. Los semicadáveres del hospital.',
    enemigos: 'Los cerdos, los costras y los chichipanes.',
    habilidades:
      'El Kung-fu. Liarte para ir a cenar a un sitio carísimo pero que a él le sale gratis con un ticket. ',
    fotos: [
      'https://png.pngtree.com/png-clipart/20231101/original/pngtree-unidentified-man-with-featureless-and-expressionless-face-unrecognizable-person-photo-png-image_13469113.png'
    ]
  },
  {
    nombre: 'Laura',
    fotoPerfil: 'https://i.ibb.co/sj9J24p/Laura.jpg',
    alias: 'The lemon bukaner.',
    Rol: 'Eje moral del grupo.',
    ideologia: 'La casualidad.',
    aliados:
      'El Paco. Los bukaneros que saludan. Las del pueblo hasta que llegaron Maronillerxs a las fiestas. ',
    enemigos: 'La poca previsión de cuantos van a ir. Los estantes de arriba. ',
    habilidades:
      'Poner orden. Quitarse los pendientes echando hostias si ve jaleo. ',
    fotos: [
      'https://i.ibb.co/zHxzZSf/LAURA1.jpg',
      'https://i.ibb.co/MkVMgnr/LAURA2.jpg',
      'https://i.ibb.co/7JVjNVk/LAURA3.jpg',
      'https://i.ibb.co/KD6jLW7/LAURA4.jpg',
      'https://i.ibb.co/2v66SGR/LAURA5.jpg',
      'https://i.ibb.co/jTPstp7/LAURA6.jpg',
      'https://i.ibb.co/PNbwX61/LAURA7.jpg',
      'https://i.ibb.co/FzP312V/LAURA8.jpg'
    ]
  },
  {
    nombre: 'Luis',
    fotoPerfil: 'https://i.ibb.co/T8zy14D/Luis.jpg',
    alias: 'El niño.',
    Rol: 'Protegerte de que no te entren virus cuando pinchas en páginas raras. ',
    ideologia: 'Aceleracionista soviético.',
    aliados:
      'Los marroquís de Guadarrama. No será reprimido en el Al-Andalus II.',
    enemigos: 'La gente que no se lo pasa bien. ',
    habilidades: 'Conocimientos absurdamente amplios de música. ',
    fotos: [
      'https://i.ibb.co/XXLfz3Y/LUIS1.jpg',
      'https://i.ibb.co/RcP3yJP/LUIS2.jpg',
      'https://i.ibb.co/gjJ6fF8/LUIS3.jpg',
      'https://i.ibb.co/936MRW0/luis4.jpg'
    ]
  },
  {
    nombre: 'Marisa',
    fotoPerfil: 'https://i.ibb.co/bJ9JFNW/Marisa.jpg',
    alias: 'La ofensas.',
    Rol: 'Propagandista y CM.',
    ideologia: 'Flokismo buenista.',
    aliados: 'La gente de Getafe. Qué gente. Qué Getafe.',
    enemigos: 'Quien cuestione el calendario de custodia compartida.',
    habilidades: 'Faltar al respeto indiscriminadamanete en convocatorias. Desayunar champiñones. Hacer memes.',
    fotos: [
      'https://i.ibb.co/yN3sN0K/MARISA1.jpg',
      'https://i.ibb.co/b3DwJ9n/MARISA2.jpg',
      'https://i.ibb.co/x3GvV6x/MARISA3.jpg',
      'https://i.ibb.co/Dzm2VZ3/MARISA4.jpg'
    ]
  },
  {
    nombre: 'Marta',
    fotoPerfil: 'https://i.ibb.co/YjNXZ8Y/Marta.jpg',
    alias: 'La mataleones. ',
    Rol: 'Estabilizadora de meterse en jaleos.',
    ideologia: 'Racionalismo ácrata bondadoso.',
    aliados: 'Las primas. Los gatos. La gente buena.',
    enemigos: 'Las fechas y horas previamente avisadas y cerradas.',
    habilidades:
      'Encontrar realidades alternativas de bondad innata. Involucrarse de corazón en cosas que le apasionan.Estar fuertísima. ',
    fotos: [
      'https://i.ibb.co/rtwt9WS/MARTA1.jpg',
      'https://i.ibb.co/m5D7y7t/MARTA2.jpg',
      'https://i.ibb.co/0Xb04Gc/MARTA3.jpg',
      'https://i.ibb.co/Zg3fbsv/MARTA4.jpg',
      'https://i.ibb.co/Y7nJFCd/MARTA5.jpg',
      'https://i.ibb.co/sqdD2sZ/MARTA6.jpg',
      'https://i.ibb.co/pnHh82y/MARTA7.jpg',
      'https://i.ibb.co/c3Kr2LW/MARTA8.jpg',
      'https://i.ibb.co/yFjpLMm/MARTA9.jpg'
    ]
  },
  {
    nombre: 'Mayte',
    fotoPerfil: 'https://i.ibb.co/bsgPBP5/Mayte.jpg',
    alias: 'La serrana.',
    Rol: 'Relaciones diplomáticas interterritoriales.',
    ideologia: 'Anarquista pero anarquista bien no anarquista Eko.',
    aliados: 'Meningitis y hepatitis. Sus puños. A quien no matan le dejan tonto.',
    enemigos: 'Los niños de la mina cuando son más de tres juntos.',
    habilidades:
      'Bailes raveros. Inmunidad a sonidos roncosos. ',
    fotos: [
      'https://i.ibb.co/XtnPmxv/MAYTE1.jpg',
      'https://i.ibb.co/Rgcw2D1/MAYTE2.jpg',
      'https://i.ibb.co/3mbHr4S/MAYTE3.jpg',
      'https://i.ibb.co/0QVr1J7/MAYTE4.jpg',
      'https://i.ibb.co/Zd46fjb/MAYTE5.jpg',
      'https://i.ibb.co/XjqnCH3/MAYTE6.jpg'
    ]
  },
  {
    nombre: 'Pablo',
    fotoPerfil: 'https://i.ibb.co/cxmYy4L/Pablo.jpg',
    alias: 'El cerva.',
    Rol: 'El ímpetu de la juventud.',
    ideologia: 'Centralismo idemocrático.',
    aliados: 'Los del otro cole. Tifus Crew.',
    enemigos:
      'El rubencín y las previas de menos de 7 horas o la gente que no juega al mus de manera tradicional o le gana.',
    habilidades:
      'Hacer que te quedes a la última. Hacer que nunca sepas qué emoción está mostrando. Dar la mano a gente cagando. ',
    fotos: [
      'https://i.ibb.co/FD7d88h/PABLO1.jpg',
      'https://i.ibb.co/tX6V2vL/PABLO2.jpg',
      'https://i.ibb.co/G2rfLG7/PABLO3.jpg',
      'https://i.ibb.co/xhW59cS/PABLO4.jpg',
      'https://i.ibb.co/CtFgwMJ/PABLO5.jpg',
      'https://i.ibb.co/4pPC39S/PABLO6.jpg',
      'https://i.ibb.co/WBZB0Sr/PABLO7.jpg',
      'https://i.ibb.co/Q9X6HZR/PABLO8.jpg'
    ]
  },
  {
    nombre: 'Paula',
    fotoPerfil: 'https://i.ibb.co/p39vvJy/Paula.jpg',
    alias: 'Bebé.',
    Rol: 'Dinamizadora de quedadas',
    ideologia: 'Flow to thousand.',
    aliados: 'La bad Gyal, Hello Kitty y el brilli-brilli.',
    enemigos: 'Las carpas de Vox en las fiestas populares. ',
    habilidades: 'Decir que sí a to plan que se le proponga por raro que sea.',
    fotos: [
      'https://i.ibb.co/6yvNF57/PAULA1.jpg',
      'https://i.ibb.co/MP9hzxL/PAULA2.jpg',
      'https://i.ibb.co/XkQGj43/PAULA3.jpg',
      'https://i.ibb.co/ChcXGLJ/PAULA4.jpg',
      'https://i.ibb.co/CPDhY72/PAULA5.jpg'
    ]
  },
  {
    nombre: 'Victoria',
    fotoPerfil: 'https://i.ibb.co/5B92RJR/victoria.jpg',
    alias: 'La libertadora.',
    Rol: 'Vidente pitonisa.',
    ideologia: 'Antiimperialismo cosmopolita.',
    aliados: 'Las karaduras.',
    enemigos: 'El horoscopo de Pronto. Gente con gafas de sol aburridas',
    habilidades: 'Las predicciones de aquí a tiempo X. Integrarse rapidísimo. Preparación de festejos.',
    fotos: [
      'https://i.ibb.co/tMG1k9k/VICTORIA1.jpg',
      'https://i.ibb.co/v43Qqz9/VICTORIA2.jpg',
      'https://i.ibb.co/HX3n2JR/VICTORIA3.jpg'
    ]
  },
  {
    nombre: 'Zyme',
    fotoPerfil: 'https://i.ibb.co/ySttgjX/Zyme.jpg',
    alias: 'El pinturas.',
    Rol: 'Liar a la gente para cosas random.',
    ideologia: 'Ultrassur de línea dura pero antifa (a veces).',
    aliados: 'La subida del SMI. Le permite gastar más dinero.',
    enemigos:
      'Las cantidades de cosas objetiva y racionalmente suficientes para un propósito porque son pocas.',
    habilidades: 'El refuerzo positivo. Los juegos de palabras. Esperar a gente. El',
    fotos: [
      'https://i.ibb.co/M8Rd7Ly/ZYME1.jpg',
      'https://i.ibb.co/JdwP0k7/ZYME2.jpg',
      'https://i.ibb.co/Sfg8ZP1/ZYME3.jpg',
      'https://i.ibb.co/ZG5XNQd/ZYME4.jpg',
      'https://i.ibb.co/3StqRrY/ZYME5.jpg',
      'https://i.ibb.co/nfKN1Y3/ZYME6.jpg',
      'https://i.ibb.co/6HwS3GG/ZYME7.jpg',
      'https://i.ibb.co/QQx32CC/ZYME8.jpg'
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

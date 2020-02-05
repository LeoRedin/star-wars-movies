import characters from '../assets/characters/characters.png';

export default function getCharacter(characterId) {
  const icons = {
    1: {
      name: 'Luke Skywalker',
      icon: `url(${characters}) no-repeat 97.989% 1.623%`,
      size: '1536px 1536px',
    },
    2: {
      name: 'C-3PO',
      icon: `url(${characters}) no-repeat 10.736% 63.435%`,
      size: '1536px 1536px',
    },
    3: {
      name: 'R2-D2',
      icon: `url(${characters}) no-repeat 54.451% 72.452%`,
      size: '1536px 1536px',
    },
    4: {
      name: 'Darth Vader',
      icon: `url(${characters}) no-repeat 89.697% 28.077%`,
      size: '1536px 1536px',
    },
    5: {
      name: 'Leia Organa',
      icon: `url(${characters}) no-repeat 80.81% 19.001%`,
      size: '1536px 1536px',
    },
    6: {
      name: 'Owen Lars',
      icon: `url(${characters}) no-repeat 63.196% 36.995%`,
      size: '1536px 1536px',
    },
    7: {
      name: 'Beru Whitesun lars',
      icon: `url(${characters}) no-repeat 28.037% 90.052%`,
      size: '1536px 1536px',
    },
    10: {
      name: 'Obi-Wan Kenobi',
      icon: `url(${characters}) no-repeat 10.412% 1.248%`,
      size: '1536px 1536px',
    },
    11: {
      name: 'Anakin Skywalker',
      icon: `url(${characters}) no-repeat 28.007% 54.508%`,
      size: '1536px 1536px',
    },
    13: {
      name: 'Chewbacca',
      icon: `url(${characters}) no-repeat 54.505% 36.667%`,
      size: '1536px 1536px',
    },
    14: {
      name: 'Han Solo',
      icon: `url(${characters}) no-repeat 54.363% 63.523%`,
      size: '1536px 1536px',
    },
    16: {
      name: 'Jabba Desilijic Tiure',
      icon: `url(${characters}) no-repeat 1.313% 28.177%`,
      size: '1536px 1536px',
    },
    default: {
      name: '',
      icon: '',
      size: '',
    },
  };

  return icons[characterId] || icons.default;
}

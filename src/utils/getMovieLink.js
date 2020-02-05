export default function getMovieLink(episodeId) {
  const links = {
    1: '/movie/4',
    2: '/movie/5',
    3: '/movie/6',
    4: '/movie/1',
    5: '/movie/2',
    6: '/movie/3',
    default: '/',
  };

  return links[episodeId] || links.default;
}

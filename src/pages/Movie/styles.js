import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.h1`
  color: #ffd700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  padding: 2rem;
  margin-top: 2rem;
  grid-template-columns: 250px minmax(320px, 1fr);
  grid-gap: 2rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
    justify-content: center;
  }
`;

export const MovieCover = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    align-items: center;
    justify-content: center;
  }
`;

export const Intro = styled.div`
  display: flex;
`;

export const Director = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const Producer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const ReleaseDate = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const CharactersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffd700;
  border-radius: 100%;
  margin: 1rem;
`;

export const Name = styled.div`
  font-size: 12px;
`;

export const StarshipsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Starship = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 250px;
  height: 400px;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
`;

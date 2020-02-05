import styled from 'styled-components';

export const Container = styled.div``;

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;

export const Movie = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Cover = styled.div`
  img {
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;

    :hover {
      border-color: #ffd700;
      transform: scale(1.075);
      cursor: pointer;
    }
  }
`;

export const Details = styled.div``;

export const Title = styled.h2`
  color: #ffd700;
`;

export const ReleaseDate = styled.p`
  color: #fff;
`;

export const Director = styled.p`
  color: #fff;
`;

export const Image = styled.div`
  width: 250px;
  height: 400px;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
`;

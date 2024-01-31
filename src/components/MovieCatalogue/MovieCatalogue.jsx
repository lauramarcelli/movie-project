import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useMovies from "../../hooks/useMovies";
import { useEffect } from "react";

export default function MovieCatalogue({category}) {
    const { data, getMovies } = useMovies();

    useEffect(() => {
      getMovies(category);
    }, []);

  return (
    <>
       <Card style={{ width: '18rem' }}>
        {data.map((movie) => {
            return (
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    key={movie.id}
     />
    <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.overview}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
            );
        })}
    </Card>
    </>
 );
}

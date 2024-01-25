import React from 'react'
import { useState, useEffect } from 'react';
import useMovies from '../hooks/useMovies';
import { Button, Flex } from  '@chakra-ui/react'
export default function MovieSlider() {

	const { data, getMovies} = useMovies();

	useEffect(() => {
		getMovies();
	  }, [])
  
	const [image, setImage] = useState([0]);
	const quantity = movieImage?.length;


	const nextImage = () => {
		setActualImage(image === quantity - 1 ? 0 : image + 1);
	};

	const previousImage = () => {
		setActualImage(image === 0 ? quantity - 1 : image - 1);
	};

	return (
		<Flex className={estilos.container}>
			<Button onClick={previousImage}>←</Button>
			{movieImage.map((imagen, index) => {
				return (
					<Box
						className={
							image === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{image === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</Box>
				);
			})}
			<Button onClick={nextImage}>→</Button>
		</Flex>
	);
}
  


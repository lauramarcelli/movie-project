import React from 'react'
import { useState } from 'react';

export default function MovieSlider() {
  	// Variables y Estados
	const [image, setImage] = useState([0]);
	const quantity = images?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(images) || quantity === 0) return;

	const nextImage = () => {
		setActualImage(image === quantity - 1 ? 0 : image + 1);
	};

	const previousImage = () => {
		setActualImage(image === 0 ? quantity - 1 : image - 1);
	};

	return (
		<div className={estilos.container}>
			<button onClick={previousImage}>←</button>
			{images.map((imagen, index) => {
				return (
					<div
						className={
							image === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{image === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
			<button onClick={nextImage}>→</button>
		</div>
	);
}
  


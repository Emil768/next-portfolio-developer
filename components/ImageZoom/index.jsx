'use client';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const ImageZoom = ({ component }) => {
	return <Zoom>{component}</Zoom>;
};

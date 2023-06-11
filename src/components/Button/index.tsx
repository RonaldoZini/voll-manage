import React from 'react';
import { Props } from 'src/shared/interfaces/props.interface';
import './Button.css';

interface ButtonProps extends Props {
	type?: string,
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
	return (
		<button className={type} onClick={(event) => onClick(event)}>
			{children}
		</button>
	)
}

export default Button;
import { Props } from 'src/shared/interfaces/props.interface';
import './Container.scss';

interface ContainerProps extends Props { }

const Container = ({ children }: ContainerProps) => {
	return (
		<section>{children}</section>
	);
};

export default Container;
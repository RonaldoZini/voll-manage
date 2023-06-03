import { IconType } from 'src/shared/types/icon.type';
import './Title.scss';

interface TitlePros {
	icon?: IconType
	children: React.ReactNode
}

const Title = ({ icon, children }: TitlePros) => {
	return (
		<div>
			<img src={icon} />
			<h2></h2>
		</div>
	);
};

export default Title;
import { Props } from 'src/shared/interfaces/props.interface';
import { ColorType } from 'src/shared/types/color.type';
import { IconType } from 'src/shared/types/icon.type';
import Icon from '../Icon';
import './Title.scss';

interface TitlePros extends Props {
	icon?: IconType;
	color?: ColorType;
}

const Title = ({ icon, children, color = '--secondary-color' }: TitlePros) => {
	return (
		<div className='div-title'>
			{icon && <Icon color={color} icon={icon} />}
			<h2 style={{ color: `var(${color})` }}>{children}</h2>
		</div>
	);
};

export default Title;
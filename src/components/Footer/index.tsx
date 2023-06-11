import Icon from '../Icon';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className='content'>
				<div className='contact'>
					<Icon icon='static-facebook' />
					<Icon icon='static-whatsapp' />
					<Icon icon='static-google' />
					<Icon icon='static-instagram' />
				</div>
				<div className='description'>
					<label>2023 © Desenvolvido por Ronaldo Zini | Projeto fictício sem fins comerciais.</label>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
import { Props } from "src/shared/interfaces/props.interface";
import { IconType } from "src/shared/types/icon.type";

interface IconProps extends Props {
	icon: IconType,
}

const Icon = ({ icon, color = '--primary-color', onClick }: IconProps) => {
	return (
		<div className="icon">
			{
				{
					'evaluation':
						<svg width="21" height="24" viewBox="0 0 21 24" fill={`var(${color})`} xmlns="http://www.w3.org/2000/svg"><path d="M2.01562 5.01562H3.98438V8.01562H14.0156V5.01562H15.9844V9.98438H18V5.01562C18 4.45312 17.7969 3.98438 17.3906 3.60938C17.0156 3.20312 16.5469 3 15.9844 3H11.8125C11.5938 2.40625 11.2344 1.92188 10.7344 1.54688C10.2344 1.17188 9.65625 0.984375 9 0.984375C8.34375 0.984375 7.76562 1.17188 7.26562 1.54688C6.76562 1.92188 6.40625 2.40625 6.1875 3H2.01562C1.45312 3 0.96875 3.20312 0.5625 3.60938C0.1875 3.98438 0 4.45312 0 5.01562V18.9844C0 19.5469 0.1875 20.0312 0.5625 20.4375C0.96875 20.8125 1.45312 21 2.01562 21H6.98438V18.9844H2.01562V5.01562ZM9 3C9.28125 3 9.51562 3.10937 9.70312 3.32812C9.89062 3.51562 9.98438 3.73438 9.98438 3.98438C9.98438 4.26562 9.89062 4.51562 9.70312 4.73438C9.51562 4.92188 9.28125 5.01562 9 5.01562C8.71875 5.01562 8.48438 4.92188 8.29688 4.73438C8.10938 4.51562 8.01562 4.26562 8.01562 3.98438C8.01562 3.73438 8.10938 3.51562 8.29688 3.32812C8.48438 3.10937 8.71875 3 9 3ZM17.2969 18.8906C17.4844 18.5469 17.6406 18.1719 17.7656 17.7656C17.9219 17.3594 18 16.9375 18 16.5C18 15.6562 17.7969 14.9062 17.3906 14.25C16.9844 13.5625 16.4375 13.0156 15.75 12.6094C15.0938 12.2031 14.3438 12 13.5 12C12.6562 12 11.8906 12.2031 11.2031 12.6094C10.5469 13.0156 10.0156 13.5625 9.60938 14.25C9.20312 14.9062 9 15.6562 9 16.5C9 17.3438 9.20312 18.1094 9.60938 18.7969C10.0156 19.4531 10.5469 19.9844 11.2031 20.3906C11.8906 20.7969 12.6562 21 13.5 21C13.9375 21 14.3594 20.9375 14.7656 20.8125C15.1719 20.6562 15.5469 20.4844 15.8906 20.2969L18.6094 23.0156L20.0156 21.6094L17.2969 18.8906ZM13.5 18.9844C12.8125 18.9844 12.2188 18.75 11.7188 18.2812C11.25 17.7812 11.0156 17.1875 11.0156 16.5C11.0156 15.8125 11.25 15.2344 11.7188 14.7656C12.2188 14.2656 12.8125 14.0156 13.5 14.0156C14.1875 14.0156 14.7656 14.2656 15.2344 14.7656C15.7344 15.2344 15.9844 15.8125 15.9844 16.5C15.9844 17.1875 15.7344 17.7812 15.2344 18.2812C14.7656 18.75 14.1875 18.9844 13.5 18.9844Z" fill={`var(${color})`} /></svg>,
					'graph':
						<svg width="18" height="18" viewBox="0 0 18 18" fill={`var(${color})`} xmlns="http://www.w3.org/2000/svg"><path d="M12.9844 6H17.0156V17.0156H12.9844V6ZM0.984375 17.0156V9H5.01562V17.0156H0.984375ZM6.98438 17.0156V0.984375H11.0156V17.0156H6.98438Z" fill={`var(${color})`} /></svg>,
					'medicine':
						<svg width="14" height="18" viewBox="0 0 14 18" fill={`var(${color})`} xmlns="http://www.w3.org/2000/svg"><path d="M1 0H13V2.01562H1V0ZM12.0156 3H1.98438C1.45312 3 0.984375 3.20312 0.578125 3.60938C0.203125 3.98438 0.015625 4.45312 0.015625 5.01562V15.9844C0.015625 16.5469 0.203125 17.0312 0.578125 17.4375C0.984375 17.8125 1.45312 18 1.98438 18H12.0156C12.5469 18 13 17.8125 13.375 17.4375C13.7812 17.0312 13.9844 16.5469 13.9844 15.9844V5.01562C13.9844 4.45312 13.7812 3.98438 13.375 3.60938C13 3.20312 12.5469 3 12.0156 3ZM10.9844 12H8.5V14.4844H5.5V12H3.01562V9H5.5V6.51562H8.5V9H10.9844V12Z" fill={`var(${color})`} /></svg>,
					'static-facebook':
						<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.79576 24V13.0703H11.3503L11.8787 8.79094H7.79576V6.06518C7.79576 4.83032 8.12743 3.98485 9.83592 3.98485H12.0008V0.169586C10.9475 0.0524886 9.88869 -0.00405133 8.82934 0.00022559C5.68746 0.00022559 3.53031 1.98987 3.53031 5.64245V8.78294H-0.00109863V13.0623H3.53802V24H7.79576Z" fill="#339CFF" /></svg>,
					'static-whatsapp':
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34466 20.6267L6.737 20.8213C8.37197 21.7943 10.203 22.2483 12.0341 22.2483C17.7888 22.2483 22.4973 17.5781 22.4973 11.8699C22.4973 9.14566 21.3855 6.48618 19.4237 4.54021C17.4618 2.59424 14.846 1.49158 12.0341 1.49158C6.27932 1.49158 1.5708 6.16184 1.63623 11.9349C1.63623 13.8807 2.22479 15.7619 3.20568 17.3834L3.46724 17.7727L2.421 21.5997L6.34466 20.6267Z" fill="#00E676" /><path d="M20.5348 3.5027C18.3114 1.23247 15.2378 0 12.0989 0C5.42865 0 0.0662299 5.38376 0.131573 11.9351C0.131573 14.0108 0.720126 16.0217 1.70111 17.8378L0.000793457 24L6.3441 22.3784C8.10976 23.3514 10.0715 23.8055 12.0335 23.8055C18.6384 23.8055 24.0008 18.4216 24.0008 11.8704C24.0008 8.69193 22.7583 5.70811 20.5349 3.5027H20.5348ZM12.0989 21.7947C10.3332 21.7947 8.56754 21.3407 7.06343 20.4326L6.6711 20.238L2.87822 21.2109L3.85911 17.5137L3.59755 17.1244C0.720126 12.5191 2.09345 6.42161 6.80187 3.56751C11.5103 0.713502 17.5921 2.07569 20.4695 6.74595C23.3468 11.4162 21.9735 17.4487 17.2652 20.3028C15.761 21.2757 13.93 21.7946 12.0989 21.7946V21.7947ZM17.8536 14.5948L17.1343 14.2704C17.1343 14.2704 16.088 13.8163 15.4341 13.492C15.3686 13.492 15.3033 13.4271 15.2378 13.4271C15.0416 13.4271 14.9108 13.492 14.7801 13.5569C14.7801 13.5569 14.7147 13.6217 13.7992 14.6596C13.7337 14.7893 13.603 14.8542 13.4722 14.8542H13.4067C13.3414 14.8542 13.2106 14.7893 13.1452 14.7245L12.8182 14.5948C12.0989 14.2704 11.445 13.8812 10.9217 13.3623C10.791 13.2326 10.5948 13.1028 10.464 12.9731C10.0062 12.5191 9.54843 12.0001 9.22153 11.4163L9.15609 11.2866C9.09074 11.2217 9.09075 11.1569 9.02531 11.0272C9.02531 10.8974 9.02531 10.7677 9.09075 10.7028C9.09075 10.7028 9.3523 10.3785 9.54843 10.1839C9.6793 10.0541 9.74464 9.85959 9.87542 9.72987C10.0062 9.53524 10.0716 9.2758 10.0062 9.08118C9.94086 8.75683 9.15609 7.00549 8.95997 6.61633C8.82909 6.4217 8.69841 6.35689 8.50219 6.29198H7.78286C7.65199 6.29198 7.5213 6.35689 7.39043 6.35689L7.32499 6.4217C7.19421 6.48661 7.06343 6.61633 6.93265 6.68114C6.80188 6.81095 6.73644 6.94058 6.60566 7.07039C6.14789 7.65418 5.88633 8.36768 5.88633 9.08118C5.88633 9.60006 6.01711 10.119 6.21332 10.5731L6.27876 10.7677C6.86731 12.0001 7.65199 13.1028 8.69841 14.0758L8.95997 14.3352C9.15609 14.5298 9.3523 14.6596 9.48308 14.8541C10.8564 16.0218 12.4258 16.865 14.1915 17.319C14.3877 17.3839 14.6493 17.3839 14.8455 17.4488H15.4994C15.8264 17.4488 16.2187 17.319 16.4804 17.1893C16.6765 17.0596 16.8073 17.0596 16.9381 16.9299L17.0689 16.8001C17.1997 16.6704 17.3305 16.6055 17.4613 16.4758C17.5921 16.3461 17.7228 16.2164 17.7883 16.0866C17.919 15.8271 17.9844 15.5028 18.0498 15.1785V14.7245C18.0498 14.7245 17.9844 14.6596 17.8536 14.5948Z" fill="white" /></svg>,
					'static-google':
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7673 9.64975H22.8007V9.59995H12.0007V14.3999H18.7825C17.7931 17.1941 15.1345 19.1999 12.0007 19.1999C8.02456 19.1999 4.80077 15.9761 4.80077 11.9999C4.80077 8.02376 8.02456 4.79998 12.0007 4.79998C13.8361 4.79998 15.5059 5.49237 16.7773 6.62337L20.1715 3.22918C18.0283 1.23179 15.1615 0 12.0007 0C5.37377 0 0.000793457 5.37297 0.000793457 11.9999C0.000793457 18.6269 5.37377 23.9999 12.0007 23.9999C18.6277 23.9999 24.0007 18.6269 24.0007 11.9999C24.0007 11.1953 23.9179 10.4099 23.7673 9.64975Z" fill="#FFC107" /><path d="M1.38446 6.41457L5.32704 9.30595C6.39384 6.66477 8.97742 4.79998 12.0008 4.79998C13.8362 4.79998 15.506 5.49237 16.7774 6.62337L20.1716 3.22918C18.0284 1.23179 15.1616 0 12.0008 0C7.39163 0 3.39445 2.60219 1.38446 6.41457Z" fill="#FF3D00" /><path d="M12.0006 24C15.1002 24 17.9166 22.8139 20.046 20.8849L16.332 17.7421C15.0867 18.6891 13.5651 19.2013 12.0006 19.2001C8.87945 19.2001 6.22926 17.2099 5.23087 14.4325L1.31769 17.4475C3.30368 21.3337 7.33686 24 12.0006 24Z" fill="#4CAF50" /><path d="M23.7672 9.64917H22.8006V9.59937H12.0006V14.3993H18.7824C18.3091 15.7292 17.4566 16.8912 16.3302 17.7419L16.332 17.7407L20.046 20.8835C19.7832 21.1223 24.0006 17.9993 24.0006 11.9994C24.0006 11.1948 23.9178 10.4094 23.7672 9.64917Z" fill="#1976D2" /></svg>,
					'static-instagram':
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9977 7.9983C9.79418 7.9983 7.99597 9.79651 7.99597 12C7.99597 14.2035 9.79418 16.0017 11.9977 16.0017C14.2012 16.0017 15.9994 14.2035 15.9994 12C15.9994 9.79651 14.2012 7.9983 11.9977 7.9983ZM23.9998 12C23.9998 10.3429 24.0148 8.70077 23.9217 7.04665C23.8287 5.12535 23.3904 3.4202 21.9854 2.01525C20.5775 0.607302 18.8753 0.172008 16.954 0.0789456C15.2969 -0.0141173 13.6548 0.000892936 12.0007 0.000892936C10.3435 0.000892936 8.70144 -0.0141173 7.04732 0.0789456C5.12603 0.172008 3.42087 0.610305 2.01593 2.01525C0.607974 3.42321 0.17268 5.12535 0.079617 7.04665C-0.0134459 8.70377 0.00156432 10.3459 0.00156432 12C0.00156432 13.6541 -0.0134459 15.2992 0.079617 16.9533C0.17268 18.8746 0.610976 20.5798 2.01593 21.9847C3.42388 23.3927 5.12603 23.828 7.04732 23.9211C8.70444 24.0141 10.3466 23.9991 12.0007 23.9991C13.6578 23.9991 15.2999 24.0141 16.954 23.9211C18.8753 23.828 20.5805 23.3897 21.9854 21.9847C23.3934 20.5768 23.8287 18.8746 23.9217 16.9533C24.0178 15.2992 23.9998 13.6571 23.9998 12ZM11.9977 18.1572C8.59037 18.1572 5.84051 15.4073 5.84051 12C5.84051 8.5927 8.59037 5.84284 11.9977 5.84284C15.405 5.84284 18.1548 8.5927 18.1548 12C18.1548 15.4073 15.405 18.1572 11.9977 18.1572ZM18.407 7.02864C17.6115 7.02864 16.969 6.38621 16.969 5.59067C16.969 4.79513 17.6115 4.1527 18.407 4.1527C19.2025 4.1527 19.845 4.79513 19.845 5.59067C19.8452 5.77957 19.8082 5.96667 19.736 6.14124C19.6638 6.31581 19.5579 6.47442 19.4243 6.608C19.2908 6.74157 19.1321 6.84748 18.9576 6.91967C18.783 6.99185 18.5959 7.02888 18.407 7.02864Z" fill="url(#paint0_linear_2254_96)" /><defs><linearGradient id="paint0_linear_2254_96" x1="3.21499" y1="1.02069" x2="20.7811" y2="22.9784" gradientUnits="userSpaceOnUse"><stop stop-color="#CE00D2" /><stop offset="0.557292" stop-color="#E6758D" /><stop offset="1" stop-color="#FFC364" /></linearGradient></defs></svg>,
				}[icon as IconType]
			}
		</div>
	)
};

export default Icon;
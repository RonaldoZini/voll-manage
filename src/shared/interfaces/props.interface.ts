import { ColorType } from "../types/color.type";

export interface Props {
	children?: React.ReactNode;
	color?: ColorType;
	onClick?: (event?: any) => void;
}
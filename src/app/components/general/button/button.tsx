import './button.scss'
type Props = {
	children: React.ReactNode,
	className?: string;
	onClick?: () => void;
}

const Button = ({children, className, ...rest}: Props) => {
	return (
		<button className={'btn ' + (className ?? '')} {...rest} >{children}</button>
	)
}

export default Button
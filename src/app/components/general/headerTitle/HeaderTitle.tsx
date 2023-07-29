import './HeaderTitle.scss'

type headerTitleProps = {
	title: string;
	children: React.ReactNode;
}

const HeaderTitle = ({title, children}: headerTitleProps) => {
	return (
		<article className="container_header-title">
			<h1 className="header-title">
				{title}
			</h1>
			<p className="header-description">
				{children}
			</p>
		</article>
	)
}

export default HeaderTitle
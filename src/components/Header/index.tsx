import * as React from "react";
import { Link } from "react-router-dom";

const s = require("./style.scss");

export default class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={s.header}>
				<Link to="/" className={s.title}>Boilerplate React/Mobx</Link>
				<ul className={s.menu}>
					<li><Link className={s.menuItem} to="/">Home</Link></li>
					<li><Link className={s.menuItem} to="/about">About</Link></li>
				</ul>
			</header>
		);
	}
}

import * as React from "react";

const s = require("./style.scss");
const reactImg = require("../../assets/img/react.svg");
const mobxImg = require("../../assets/img/mobx.png");

export default class About extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={s.container}>
				<div className={s.features}>
					<div className={s.content}>
						<span className={s.title}>Features</span>
						<ul>
							<li>React 16.2.0</li>
							<li>React Hot Loader</li>
							<li>Mobx 3.6.1</li>
							<li>React Router 4.2.0</li>
							<ul>
								<li>React Router DOM 4.2.2</li>
							</ul>
							<li>Sass</li>
							<li>Hot Reload</li>
							<li>Source Map</li>
							<li>Typescript 2.6.2</li>
							<ul>
								<li>ESNEXT</li>
								<li>Linter</li>
							</ul>
							<li>Webpack 4</li>
							<ul>
								<li>Uglify</li>
								<li>Imagemin</li>
								<li>Favicon Plugin</li>
							</ul>
							<li>Babel 6.26.0</li>
							<ul>
								<li>Rest Spread Plugin</li>
								<li>Transform Regenarator</li>
							</ul>
						</ul>
					</div>
					<div className={s.imgContent}>
						<img className={s.image} src={reactImg} alt="Logo React" />
						<img className={s.image} src={mobxImg} alt="Logo Mobx" />
					</div>
				</div>
			</div>
		);
	}
}

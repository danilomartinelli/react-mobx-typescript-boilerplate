import * as React from "react";

const s = require("./style.scss");
const reactImg = require("../../assets/img/react.svg");
const mobxImg = require("../../assets/img/mobx.png");

export class About extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={s.container}>
				<div className={s.features}>
					<div className={s.content}>
						<span className={s.title}>Features</span>
						<ul>
							<li>React 16</li>
							<li>React Hot Loader</li>
							<li>Mobx 4</li>
							<li>React Router 4</li>
							<ul>
								<li>React Router DOM</li>
							</ul>
							<li>Sass</li>
							<li>Hot Reload</li>
							<li>Source Map</li>
							<li>Typescript 2.8</li>
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

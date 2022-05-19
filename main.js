class MetaTabColors {
	constructor (API, name, config) {
		this.API = API;
		this.name = name;
		this.config = config;
	}

	addInsertions () {
		this.API.addInsertion('publiiHead', this.metaTabColors, 1, this);
	}

	addModifiers () {

	}

	addEvents () {

	}

	metaTabColors () {
		return `
			<meta name="theme-color" content="${this.config.darkModeColor}"  media="(prefers-color-scheme: dark)">
	    	<meta name="theme-color" content="${this.config.defaultColor}" media="(prefers-color-scheme: light)">
	    	<meta name="msapplication-navbutton-color" content="${this.config.defaultColor}">
	    	<meta name="apple-mobile-web-app-status-bar-style" content="${this.config.defaultColor}">
    	`;
	}
}

module.exports = MetaTabColors;
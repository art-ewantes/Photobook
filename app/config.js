System.config({
	map: {
		'plugin-traceur': 'libs/systemjs-plugin-traceur/plugin-traceur.js',
		'traceur': 'libs/traceur/traceur.js',
		'traceur-runtime': 'libs/traceur-runtime/traceur-runtime.js'
	},
	meta: {
		'traceur': {
			format: 'global',
			exports: 'traceur',
			scriptLoad: false
		},
		'traceur-runtime': {
			format: 'global',
			exports: '$traceurRuntime'
		},
		'js/app/*.js': {
			format: 'esm'
		}
	},
	transpiler: 'plugin-traceur',
	transpilerRuntime: false
});
System.import("js/app/app.js");
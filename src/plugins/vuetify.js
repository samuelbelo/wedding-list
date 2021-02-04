import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/lib/locale/pt';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const config = {
	lang: {
		locales: { pt },
		current: 'pt',
	},
	theme: {
		themes: {
			light: {
				primary: "#f7f5f5", //colors.grey.darken1
				secondary: colors.red.lighten4,
				accent: colors.indigo.base,
			},
		}
	}
}


export default new Vuetify(config);

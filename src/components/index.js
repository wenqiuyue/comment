import Header from './header.vue';
import SvgIcon from './svgIcon.vue';
import Footer from './footer.vue';
import Rate from './rate.vue';

export default {
	install: Vue => {
		Vue.component(Header.name, Header);
		Vue.component(SvgIcon.name, SvgIcon);
		Vue.component(Footer.name, Footer);
		Vue.component(Rate.name, Rate);
	}
};

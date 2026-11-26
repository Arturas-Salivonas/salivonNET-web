export interface SiteShot {
	name: string;
	url: string;
	/** File name inside `static/images/sites/`. */
	image: string;
	width: number;
	height: number;
}

/** Sites with a screenshot. Every image is a 386x240 WebP unless noted. */
export const shots: SiteShot[] = [
	shot('London Gynaecology', 'https://london-gynaecology.com/', 'london-gynaecology.webp'),
	shot('Tyk.io', 'https://tyk.io/', 'tyk.webp'),
	shot('Philip Morris Int.', 'https://www.pmi.com/', 'philip-morris.webp'),
	shot('Odeon', 'https://www.odeon.co.uk/', 'odeon.webp'),
	shot('Money20/20', 'https://www.money2020.com/', 'money2020.webp'),
	shot('New Statesman', 'https://www.newstatesman.com/', 'new-statesman.webp'),
	shot('GlobalData', 'https://www.globaldata.com/', 'globaldata.webp'),
	shot('Elite Traveler', 'https://elitetraveler.com/', 'elite-traveler.webp'),
	shot('Two Circles Studio', 'https://twocirclesstudio.com/', 'two-circles.webp'),
	shot('TreatmentCosts', 'https://treatmentcosts.co.uk/', 'treatmentcosts.webp'),
	shot('OnlyDogFood', 'https://onlydogfood.com/', 'onlydogfood.webp'),
	shot('FilmingMap', 'https://filmingmap.com/', 'filmingmap.webp', 536, 403)
];

export interface NamedSite {
	name: string;
	url: string;
}

/** Sites named without a screenshot. Addresses last checked on 16 November 2026. */
export const moreSites: NamedSite[] = [
	{ name: 'Cannes Lions', url: 'https://www.canneslions.com/' },
	{ name: 'Cinema City', url: 'https://www.cinemacity.bg/home?lang=en_GB' },
	{ name: 'Press Gazette', url: 'https://pressgazette.co.uk/' },
	{ name: 'Verdict', url: 'https://www.verdict.co.uk/' },
	{ name: "Spear's", url: 'https://spearswms.com/' },
	{ name: 'The Samling', url: 'https://www.thesamlinghotel.co.uk/' }
];

function shot(name: string, url: string, image: string, width = 386, height = 240): SiteShot {
	return { name, url, image, width, height };
}

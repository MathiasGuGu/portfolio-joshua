import lemonkiss from '$lib/assets/lemonkiss_showcase.png';
import lk from '$lib/assets/lemonkiss.png';
import designfestivalen from '$lib/assets/designfestivalen.png';
import GOG from '$lib/assets/GOG_showcase.png';
import fourme from '$lib/assets/4me_showcase.png';
import oned from '$lib/assets/1D_showcase.png';
import threeu from '$lib/assets/3u_showcase.png';
import u1 from '$lib/assets/u1.png';

export let projects = {
	lemonkiss: {
		name: 'Lemon Kiss',
		description: `
        This project was a school exam task that involved crafting a unique cream flavor infused with an extraordinary 'X factor' for the renowned Norwegian ice cream brand, 'Henning Olsen.' My contribution to this challenge resulted in the creation of 'Lemon Kiss,' an ice cream flavor inspired by the zestiness of lemonade.
Leveraging my graphic design expertise and keen visual sensibilities, I meticulously developed this concept. The marketing campaign for this delectable treat includes two eye-catching posters, both featuring a custom logo I personally crafted from a photograph, transforming it into a unique font.`,
		showcase: lemonkiss,
		image: lk
	},
	designfestivalen: {
		name: 'Designfestivalen',
		description: `This poster represents a school project I undertook, tasked with designing promotional material for a fictional Design Festival. To ensure its effectiveness, I conducted thorough research into the prospective audience for this hypothetical event, employing a blend of my expertise and creative prowess in the process.

        The poster features a minimalist yet impactful design, utilizing a simple sans-serif font and carefully chosen design elements to convey the essence of the festival.`,
		showcase: designfestivalen,
		image: designfestivalen
	},
	'4me': {
		name: '4me',
		description: `This poster is created from my personal passion and dedication during my free time. the idea was sparked by the captivating posters I've encountered on social media, resonating deeply with my interest in the realm of graphic design. The aesthetic of this poster is meticulously curated to resonate with a specific target audience, the younger generation. It exudes a dynamic and trendy design language that distinctly appeals to and communicates with the youthful demographic.`,
		showcase: fourme,
		image: fourme
	},
	gol: {
		name: 'GOL',
		description: `This poster is a personal project I created during my free time, drawing inspiration from Brent Faiyaz's song titled 'Gang Over Love.' The central concept of this artwork revolves around the significance of one's inner circle, emphasizing that loyalty takes precedence over love.`,
		showcase: GOG,
		image: GOG
	},

	'1d': {
		name: '4me',
		description: `This project was an assignment in school, with the objective of capturing an image suitable for publication in ID magazine. For this particular photograph, I sought to depict a subject or model that aligned seamlessly with a compelling theme. My chosen theme revolved around the pervasive addiction to social media 'likes' and its profound impact on my generation.
        Consequently, the theme of the ID issue in question became 'The Social Issue.' To accentuate the gravity of our increasingly emotionless and 'likes-hungry' society, I opted for a monochromatic black-and-white presentation for the photograph, aiming to underscore the theme's significance.
        `,
		showcase: oned,
		image: oned
	},
	u: {
		name: 'U',
		description: `This project was an assignment in school, with the objective of capturing an image suitable for publication in ID magazine. For this particular photograph, I sought to depict a subject or model that aligned seamlessly with a compelling theme. My chosen theme revolved around the pervasive addiction to social media 'likes' and its profound impact on my generation.
        Consequently, the theme of the ID issue in question became 'The Social Issue.' To accentuate the gravity of our increasingly emotionless and 'likes-hungry' society, I opted for a monochromatic black-and-white presentation for the photograph, aiming to underscore the theme's significance.
        `,
		showcase: threeu,
		image: threeu
	}
};

/** Icons on a 24x24 grid, one path each. Drawn as outlines by `Icon.svelte`. */
export const icons = {
	arrow: 'M4 12h15M13 6l6 6-6 6',
	bell: 'M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4',
	check: 'M4 12.5 9.5 18 20 6.5',
	clock: 'M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0zM12 7v5l3.5 2',
	copy: 'M11 9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM5 15V6a2 2 0 0 1 2-2h8',
	cursor: 'M5 3v16l4.5-4 3 6.5 2.5-1.2L12 14h6z',
	doc: 'M7 3h7l4 4v14H7zM14 3v4h4M10 13h5M10 17h5',
	mail: 'M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3.5 7 12 13.5 20.5 7',
	phone:
		'M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z',
	search: 'M17.5 11a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0zM16 16l5 5',
	sync: 'M4 11a8 8 0 0 1 14-4.5L20 8M20 4v4h-4M20 13a8 8 0 0 1-14 4.5L4 16M4 20v-4h4'
} as const satisfies Record<string, string>;

export type IconName = keyof typeof icons;

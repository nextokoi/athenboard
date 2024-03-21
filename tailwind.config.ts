import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('keep-react/preset')],
	plugins: [],
}
export default config

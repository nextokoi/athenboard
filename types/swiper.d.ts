declare namespace JSX {
	interface IntrinsicElements {
		'swiper-container': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		> & {
			navigation?: boolean
			pagination?: { type: string }
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			modules?: any[]
		}
		'swiper-slide': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		>
	}
}

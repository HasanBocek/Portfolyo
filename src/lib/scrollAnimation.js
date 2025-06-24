export function scrollAnimation(node, { threshold = 0.1 } = {}) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('opacity-100', 'translate-y-0');
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	node.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

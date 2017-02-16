module.exports = {
	mounted() {
		const attributes = this.getDataAttributes();

		Object.assign(this, attributes);
	},

	methods: {
		getDataAttributes() {
			if (!this.$el) {
				return {};
			}

			if (this.$el.dataset) {
				return this.$el.dataset;
			}

			// http://stackoverflow.com/a/5915585/5930258
			return Array.from(this.$el.attributes).reduce((memo, attr) => {
				if (/^data-/.test(attr.name)) {
					const key = attr.name
                        .substr(5)
                        .replace(/-(.)/g, ($0, $1) => $1.toUpperCase());

					memo[key] = attr.value;
				}

				return memo;
			}, {});
		},
	},
};

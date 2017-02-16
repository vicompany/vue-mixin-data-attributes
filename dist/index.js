"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	mounted: function mounted() {
		var attributes = this.getDataAttributes();

		Object.assign(this, attributes);
	},


	methods: {
		getDataAttributes: function getDataAttributes() {
			if (!this.$el) {
				return {};
			}

			if (this.$el.dataset) {
				return this.$el.dataset;
			}

			// http://stackoverflow.com/a/5915585/5930258
			return Array.from(this.$el.attributes).reduce(function (memo, attr) {
				if (/^data-/.test(attr.name)) {
					var key = attr.name.substr(5).replace(/-(.)/g, function ($0, $1) {
						return $1.toUpperCase();
					});

					memo[key] = attr.value;
				}

				return memo;
			}, {});
		}
	}
};
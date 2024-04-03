export default {
	left : {
		initial : {
			x       : -100,
			opacity : 0
		},
		visibleOnce : {
			x          : 0,
			opacity    : 1,
			transition : { duration : 750 }
		},
		enter : {
			x          : 0,
			opacity    : 1,
			transition : { duration : 1250 }
		}
	},
	right : {
		initial : {
			x       : 100,
			opacity : 0
		},
		visibleOnce : {
			x          : 0,
			opacity    : 1,
			transition : { duration : 750 }
		},
		enter : {
			x          : 0,
			opacity    : 1,
			transition : { duration : 1250 }
		}
	},
	top : {
		initial : {
			y       : -100,
			opacity : 0
		},
		enter : {
			y          : 0,
			opacity    : 1,
			transition : { duration : 1250 }
		}
	},
	bottom : {
		initial : {
			y       : 100,
			opacity : 0
		},
		enter : {
			y          : 0,
			opacity    : 1,
			transition : { duration : 1250 }
		}
	}
}
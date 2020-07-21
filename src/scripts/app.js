
		const viewport = {
			width : window.innerWidth,
			height : window.innerHeight
		}

		window.addEventListener("resize", () => {
			viewport.width = window.innerWidth;
			viewport.height = window.innerHeight;

			//console.log(viewport);
		});

		document.addEventListener('DOMContentLoaded', (event) => {
			//Initialize you modules here...
		})
	
const AnimationController = (() => {
	function animate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve("done!"), 3000);
		});
	}
	const keyHightLightAnim = (keyHighLight) => {
		const currentKeyHightLight = keyHighLight;

		animate().then(
			async () => {
				const elm = document.querySelector(".my-keyhighlight");

				elm.classList.remove("animate__fadeInLeft", "animate__slow");
				// Using await so that animation can apply and finish easily
				await new Promise((resolve, reject) => {
					elm.classList.add("animate__fadeOutRight", "animate__slow");
					// Delay of 2 seconds so animation can apply and finish
					setTimeout(() => {
						resolve("success");
					}, 1000);
				});
				elm.classList.remove("animate__fadeOutRight", "animate__slow");
				elm.textContent = currentKeyHightLight;

				// Using await so that animation can apply and finish easily
				await new Promise((resolve, reject) => {
					elm.classList.add("animate__fadeInLeft", "animate__slow");
					setTimeout(() => {
						resolve("success");
					}, 1000);
				});
                if (currentKeyHightLight.toLowerCase() === "web developer") {
                    keyHightLightAnim("Tech Enthusiast");
                } else if (currentKeyHightLight.toLowerCase() === "tech enthusiast") {
                    keyHightLightAnim("Programmer");
                } else if (currentKeyHightLight.toLowerCase() === "programmer") {
                    keyHightLightAnim("Web Developer")
                }
			},
			(err) => {
				console.log("Error Message: ", err);
			}
		);
	};

	return {
		keyHightLightAnim,
	};
})();

export { AnimationController };

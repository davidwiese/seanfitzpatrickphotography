const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const cloudinaryLink = (id, width, height) =>
	`https://res.cloudinary.com/dqztlsan0/image/upload/w_${width},h_${height}/seanypics/${id}`;

const cloudinaryPhotos = [
	{ id: "c8wgpeh4c9z5y6hcdsgg.jpg", width: 1080, height: 864 },
	{ id: "qzplwe3m9dildt15z3kp.jpg", width: 1080, height: 720 },
	{ id: "zl9vkfkrjxxmdrhqe2k5.jpg", width: 1080, height: 1620 },
	{ id: "vpzahhgavpfmyr12wrsn.jpg", width: 1080, height: 1620 },
	{ id: "dzkwpgezt3n8dyexjjwe.jpg", width: 1080, height: 720 },
	{ id: "ylls3nuqob3wl9o4hexb.jpg", width: 1080, height: 1620 },
	{ id: "mej0ho9oj252uzhngwze.jpg", width: 1080, height: 720 },
	{ id: "xcykhdzlzqlxhxicivgc.jpg", width: 1080, height: 1620 },
	{ id: "turxy18vbzdi7djhl6ae.jpg", width: 1080, height: 1620 },
	{ id: "r3mra8uh1n35o1mmnxvx.jpg", width: 1080, height: 720 },
	{ id: "nfvylrgfzzbltj3tpnat.jpg", width: 1080, height: 1620 },
	{ id: "cuqtwyq5vr7rqxhjbymo.jpg", width: 1080, height: 720 },
	{ id: "tzv8miqcgeujys3njfux.jpg", width: 1080, height: 1350 },
	{ id: "mxmlzrta1lbjhomefqaj.jpg", width: 1080, height: 1350 },
	{ id: "jfz26hyipqprgjtjwpqg.jpg", width: 960, height: 1200 },
	{ id: "ze27hjedtnjotpqnouam.jpg", width: 1080, height: 1620 },
	{ id: "u79cup2fnfbxjeb0twps.jpg", width: 1080, height: 864 },
	{ id: "pohozf3wskfa6pst89mw.jpg", width: 1080, height: 1620 },
	{ id: "mwatuyaqfke8gylkwfjn.jpg", width: 1080, height: 1620 },
	{ id: "vfglzpkh5kxzu3xdkofp.jpg", width: 1080, height: 720 },
	{ id: "kkof7tofgjqkksjqaxif.jpg", width: 1080, height: 1620 },
];

const photos = cloudinaryPhotos.map((photo) => {
	const width = breakpoints[0];
	const height = (photo.height / photo.width) * width;

	return {
		src: cloudinaryLink(photo.id, width, height),
		width,
		height,
		srcSet: breakpoints.map((breakpoint) => {
			const height = Math.round((photo.height / photo.width) * breakpoint);
			return {
				src: cloudinaryLink(photo.id, breakpoint, height),
				width: breakpoint,
				height,
			};
		}),
	};
});

export default photos;

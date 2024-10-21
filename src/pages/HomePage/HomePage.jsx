const HomePage = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-4xl font-bold text-center">
						Application for recording and storing phone numbers.!
					</h1>
					<p className="py-6 text-center">
						The program was developed by an outstanding developer of programs
						for recording phone numbers!
					</p>
					<h2 className="text-5xl font-bold text-center mb-5">
						Remember his name and never forget, and also take him to work,
						because there is not a piece of bread at home, and eight children
						and a quarrelsome wife are crying at home.!
					</h2>
					<div className="text-2xl text-center outline">
						Linkedin:{" "}
						<a
							href="https://www.linkedin.com/in/vitalii-barabash/"
							target="_blank"
						>
							Vitalii Barabash
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
	slideInFromBot,
	slideInFromLeft,
	slideInFromRight,
} from "../../components/motion/motion";
// import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { useEffect } from "react";

const LoginPage = () => {
	const dispatch = useDispatch();

	// 1-variant, 2-variant
	// const navigate = useNavigate();
	// const isLoggedIn = useSelector(selectIsLoggedIn);

	const initialValues = {
		email: "",
		password: "",
	};
	// const handleSubmit = (values, options) => {
	// 	console.log(values);
	// 	dispatch(login(values));
	// 	options.resetForm();
	// };

	// // 1-variant
	// useEffect(() => {
	// 	isLoggedIn && navigate("/");
	// }, [isLoggedIn, navigate]);

	// // 2-variant
	// if (isLoggedIn) {
	// 	return <Navigate to="/" />;
	// }

	// // 3-variant
	// const handleSubmit = (values, options) => {
	// 	console.log(values);
	// 	dispatch(login(values))
	// 		.unwrap()
	// 		.then((res) => {
	// 			toast(`Welcome, ${res.user.name}!`);
	// 			navigate("/");
	// 		})
	// 		.catch(() => {
	// 			toast.error("invalid credentials");
	// 		});
	// 	options.resetForm();
	// };

	const handleSubmit = (values, options) => {
		dispatch(login(values))
			.unwrap()
			.then((res) => {
				toast(`Welcome, ${res.user.name}!`);
			})
			.catch(() => {
				toast.error("invalid credentials");
			});
		options.resetForm();
	};

	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={slideInFromRight()}
						className="text-5xl font-bold"
					>
						Login now!
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={slideInFromBot(1)}
						className="py-6"
					>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</motion.p>
				</div>
				<motion.div
					exit="exit"
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(1)}
					className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
				>
					<Formik onSubmit={handleSubmit} initialValues={initialValues}>
						<Form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<Field
									name="email"
									type="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<Field
									name="password"
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary" type="submit">
									Login
								</button>
							</div>
						</Form>
					</Formik>
				</motion.div>
			</div>
		</div>
	);
};

export default LoginPage;

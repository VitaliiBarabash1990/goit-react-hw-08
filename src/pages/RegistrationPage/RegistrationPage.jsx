import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { motion } from "framer-motion";
import {
	slideInFromBot,
	slideInFromLeft,
	slideInFromRight,
} from "../../components/motion/motion";

const RegistrationPage = () => {
	const dispatch = useDispatch();
	const initialValues = {
		name: "",
		email: "",
		password: "",
	};
	const handelSubmit = (values, options) => {
		dispatch(register(values));
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
						Sign up now!
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={slideInFromBot(1)}
						className="py-6"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						reprehenderit nobis expedita neque ut odit quas incidunt, quo saepe
						cum possimus, provident libero eligendi, hic veniam molestiae
						voluptas iusto dolorum. Qui sit libero quod veniam. Vel quisquam
						excepturi aperiam voluptatem, velit earum aspernatur rerum dolores
						voluptatum obcaecati molestias. Deleniti laborum alias temporibus
						quis esse ratione dolorem impedit dicta dolore ipsum?
					</motion.p>
				</div>
				<motion.div
					exit="exit"
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(1)}
					className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
				>
					<Formik onSubmit={handelSubmit} initialValues={initialValues}>
						<Form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<Field
									name="name"
									type="text"
									placeholder="name"
									className="input input-bordered"
									required
								/>
							</div>
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
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary" type="submit">
									Register
								</button>
							</div>
						</Form>
					</Formik>
				</motion.div>
			</div>
		</div>
	);
};

export default RegistrationPage;

import s from "./ContactForm.module.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
	const initialValues = {
		name: "",
		number: "",
	};
	const dispatch = useDispatch();

	const onlyWords = /^[a-zA-Z]+$/;
	const phoneNumberRules =
		/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	const orderSchema = Yup.object().shape({
		name: Yup.string()
			.matches(onlyWords, "ONLY WORDS")
			.min(3, "Мінімум 3 символа")
			.max(50, "Максимум 50 символів")
			.required("Це поле обов'язкове!"),
		number: Yup.string()
			.matches(phoneNumberRules, { message: "Не коректрий номер телефону!" })
			.required("Ви не ввели номер !"),
	});

	const handleAdd = (values, options) => {
		const newContact = {
			name: values.name,
			number: values.number,
		};
		dispatch(addContact(newContact));
		options.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleAdd}
			validationSchema={orderSchema}
		>
			<Form className={s.form}>
				<label className={s.label}>
					<span>Name</span>
					<Field type="text" name="name" placeholder="Введіть ім'я" />
					<ErrorMessage name="name" component="p" className={s.error} />
				</label>
				<label className={s.label}>
					<span>Number</span>
					<Field type="tel" name="number" placeholder="Введіть телефон" />
					<ErrorMessage name="number" component="p" className={s.error} />
				</label>
				<button className={s.btn} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;

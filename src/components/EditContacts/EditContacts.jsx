import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import s from "./EditContacts.module.css";
import { updateContact } from "../../redux/contacts/operations";

const EditContacts = ({ contact, onClose }) => {
	const initialValues = {
		name: contact.name,
		number: contact.number,
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

	const handleUpdate = (values, options) => {
		const newContact = {
			id: contact.id,
			name: values.name,
			number: values.number,
		};
		dispatch(updateContact(newContact));
		options.resetForm();
		onClose();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleUpdate}
			validationSchema={orderSchema}
		>
			<Form className={s.form}>
				<label className={s.label}>
					<span>Name</span>
					<Field
						className="input input-bordered input-info w-full max-w-xs"
						type="text"
						name="name"
						required
						autoFocus
					/>
					<ErrorMessage name="name" component="p" className={s.error} />
				</label>
				<label className={s.label}>
					<span>Number</span>
					<Field
						className="input input-bordered input-info w-full max-w-xs"
						type="tel"
						name="number"
						required
						autoFocus
					/>
					<ErrorMessage name="number" component="p" className={s.error} />
				</label>
				<button className={s.btnUpd} type="submit">
					Update contact
				</button>
			</Form>
		</Formik>
	);
};

export default EditContacts;

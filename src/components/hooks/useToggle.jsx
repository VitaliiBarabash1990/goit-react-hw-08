import { useState } from "react";

const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDel, setIsOpenDel] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const openModalDel = () => setIsOpenDel(true);
	const closeModalDel = () => setIsOpenDel(false);
	return {
		isOpen,
		isOpenDel,
		openModal,
		closeModal,
		openModalDel,
		closeModalDel,
	};
};

export default useToggle;

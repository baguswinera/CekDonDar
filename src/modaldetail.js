import './modal.css';

const modaldetail = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* {children} */}
                <button type="button" onClick={handleClose}>
                Close
                </button>
            </section>
        </div>
    )
}

export default modaldetail

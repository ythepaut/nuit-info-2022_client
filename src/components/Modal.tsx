interface Props {
    name: string;
    message: string;
    closeCallback: () => void;
}

export default function Modal(props: Props): JSX.Element {
    const closeModal = () => {
        const elementById = document.getElementById("modalShow");
        elementById!.className = elementById!.className.replace("modal-open", "");
        props.closeCallback();
    };

    return (
        <>
            <div className="animate-fade-in-down modal modal-bottom modal-open" id="modalShow">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{props.name}</h3>
                    <p className="py-4">{props.message}</p>
                    <div className="modal-action">
                        <button onClick={closeModal} className="btn">
                            Compris !
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

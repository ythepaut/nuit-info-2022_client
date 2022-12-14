interface Props {
    onClick: () => void;
}

export default function RerollButton(props: Props) {
    return (
        <div className="absolute bottom-3 left-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={props.onClick}>
                Repiocher
            </button>
        </div>
    );
}

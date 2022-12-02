import { Disease } from "../model/disease";
import ReactTooltip from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";

interface Props {
    disease: Disease;
}

function DiseaseTooltip(props: Props): JSX.Element {
    return (
        <div className="text-black">
            <span className="font-bold">{props.disease.name}</span>
            <br />
            {props.disease.description.map((line) => (
                <>
                    {line}
                    <br />
                </>
            ))}
        </div>
    );
}

export default function DiseaseIcon(props: Props): JSX.Element {
    return (
        <div>
            <div
                className="w-16 h-16 rounded-2xl bg-pink-400"
                data-html={true}
                data-tip={ReactDOMServer.renderToString(<DiseaseTooltip disease={props.disease} />)}
            >
                <Image src={props.disease.icon} alt={props.disease.name} />
            </div>
            <ReactTooltip backgroundColor="white" place="left" effect="solid" />
        </div>
    );
}

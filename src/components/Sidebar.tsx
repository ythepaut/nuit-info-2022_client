import { Disease } from "../model/disease";
import DiseaseIcon from "./DiseaseIcon";

interface Props {
    diseases: Disease[];
}

export default function Sidebar(props: Props): JSX.Element {
    return (
        <div className="absolute right-0 h-full p-4">
            <div className="flex flex-col space-y-2">
                {props.diseases.map((disease, i) => (
                    <DiseaseIcon key={i} disease={disease} />
                ))}
            </div>
        </div>
    );
}

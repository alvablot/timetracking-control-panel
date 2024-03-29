import { ChangeEvent } from "react";
import { useProjectContext } from "../contexts/ProjContext";
import axios from "axios";
import updateImg from "../assets/icon-for-update.png";
import Header2 from "./Header2";
const host: string = "http://localhost:3000/";

function Projects() {
    const {
        project,
        invoice,
        fetchData,
        deletePost,
        inputs,
        setInputs,
        showEmo,
    } = useProjectContext();

    async function uppdatePrice(price: number, id: number, i: number): Promise<void> {
        try {
            const response = await axios.patch(`${host}projects/${id}`, {
                price: price,
            });
            fetchData("projects");
            showEmo("👍🏼");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    }
    return (
        <div className="projects">
            <Header2 text={"Projects"} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price kr/h</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map((element, i: number) => {
                        let isInvoice: boolean = invoice.some((inv) => inv.project === element.id);
                        return (
                            <tr key={`project_${element.id}`} className="container">
                                <td key={`name_${element.id}`}>{element.name}</td>
                                <td key={`price_${element.id}`} className="priceTd">
                                    <input
                                        data-testid="priceInput"
                                        type="number"
                                        step="10"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            setInputs((previous) => {
                                                const newInputs: number[] = [...previous];
                                                newInputs[i] = parseInt(e.target.value);
                                                return newInputs;
                                            });
                                        }}
                                        className="priceinput"
                                        value={inputs[i]}
                                    />
                                    <img
                                        className="uppdate-img"
                                        src={updateImg}
                                        width="30"
                                        onClick={() => {
                                            uppdatePrice(inputs[i], element.id, i);
                                        }}
                                    />
                                </td>
                                {/* <td>
                                    {isInvoice ? <button>Show</button> : <button>Create</button>}
                                </td> */}
                                <td key={`delete1_${element.id}`}>
                                    <button
                                        data-testid="projectDeleteButton"
                                        onClick={() => {
                                            deletePost(element.id, "projects");
                                            fetchData("projects");
                                            fetchData("tasks");
                                            fetchData("timelogs");
                                        }}
                                    >
                                        x
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Projects;

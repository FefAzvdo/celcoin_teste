import { SearchBox } from "../MainHeader";
import * as icons from "../../assets/icons";
import "./styles.css";

export default function AllPatientsHeader() {
  return (
    <div className="attandance_history_wrapper">
      <strong className="main_title_header">Todos os pacientes</strong>
      <div className="header_wrapper_AllPatientsHeader">
        <div className="header_wrapper_AllPatientsHeader">
          <strong className="patientsListTitle_AllPatientsHeader">
            Lista de pacientes (36)
          </strong>
          <SearchBox placeholder="Buscar por paciente" />
        </div>
        <div>
          <div className="elipsis_box_AllPatientsHeader">
            {icons.elipsisIcon}
            {icons.elipsisIcon}
            {icons.elipsisIcon}
          </div>
        </div>
      </div>
    </div>
  );
}

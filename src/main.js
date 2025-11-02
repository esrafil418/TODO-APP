import "./style.css";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";

const app = document.getElementById("app");
app.append(Header(), Table());

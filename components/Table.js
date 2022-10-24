import styles from "/styles/Table.module.css";
import TableRow from "/components/TableRow.js";
import TableHead from "/components/TableHead.js";
import TableItem from "/components/TableItem";
import TableFooter from "/components/TableFooter";

const heads = [
  { text: "Grupo" },
  { text: "Materias" },
  { text: "Miembros" },
  { text: "Detalles de Grupo" },
  { text: "Unirse" },
];

const footers = [
  { text: "Total de Grupos" },
  { text: "6" },
  { text: "" },
  { text: "" },
  { text: "" },
];

const rows = [
  { text: "LosFisicos" },
  { text: "FisicaMaterias" },
  { text: "7/30" },
];

const rows2 = [
  { text: "RepasitoMate" },
  { text: "Matematicas" },
  { text: "24/30" },
];

const rows3 = [
  { text: "LaTerceraEsLaVencida" },
  { text: "Contabilidad" },
  { text: "29/30" },
];

const rows4 = [{ text: "AL" }, { text: "Algebra Lineal" }, { text: "13/30" }];

const rows5 = [
  { text: "F en el chat" },
  { text: "Electromagnetismo" },
  { text: "21/30" },
];

const rows6 = [
  { text: "Repasito" },
  { text: "Estructuras Discretas" },
  { text: "19/30" },
];

const rowsB = [{ text: "Detalles" }, { text: "Unirse" }];

export default function Table() {
  const UnirsePagina = () => {};
  return (
    <table>
      <thead>
        <TableRow>
          {heads.map((head) => (
            <TableHead text={head.text}></TableHead>
          ))}
        </TableRow>
      </thead>
      <tbody className={styles.tbody}>
        <TableRow>
          {rows.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button className={styles.buttonJoin} onClick={UnirsePagina}>
                {row.text}
              </button>
            </TableItem>
          ))}
        </TableRow>
        {/* 2 */}
        <TableRow>
          {rows2.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button>{row.text}</button>
            </TableItem>
          ))}
        </TableRow>
        {/* 3 */}
        <TableRow>
          {rows3.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button>{row.text}</button>
            </TableItem>
          ))}
        </TableRow>
        {/* 4 */}
        <TableRow>
          {rows4.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button>{row.text}</button>
            </TableItem>
          ))}
        </TableRow>
        {/* 5 */}
        <TableRow>
          {rows5.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button>{row.text}</button>
            </TableItem>
          ))}
        </TableRow>
        {/* 6 */}
        <TableRow>
          {rows6.map((row) => (
            <TableItem>
              <p>{row.text}</p>
            </TableItem>
          ))}
          {rowsB.map((row) => (
            <TableItem>
              <button>{row.text}</button>
            </TableItem>
          ))}
        </TableRow>
      </tbody>
      <tfoot>
        <TableFooter>
          {footers.map((footer) => (
            <TableItem>
              <p>{footer.text}</p>
            </TableItem>
          ))}
        </TableFooter>
      </tfoot>
    </table>
  );
}
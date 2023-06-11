import { Paper } from "@mui/material";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './Table.scss';

interface TableProps {
	heads: string[];
	rows: Array<string[]> | undefined;
}

const Table = ({ heads, rows }: TableProps) => {
	return (
		<>
			<TableContainer component={Paper}>
				<MuiTable>
					{
						rows ?
							<>
								<TableHead>
									<TableRow>
										{heads.map((head) => <TableCell>{head}</TableCell>)}
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => <TableRow>
										{row.map((cell) => <TableCell>{cell}</TableCell>)}
									</TableRow>)}
								</TableBody>
							</>
							: <caption>Nenhum registro foi encontrado</caption>
					}
				</MuiTable>
			</TableContainer>
		</>
	);
};

export default Table;
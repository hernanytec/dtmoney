import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>JOB</td>
            <td className="deposit">R$10.000</td>
            <td>DEV</td>
            <td>05/01/2021</td>
          </tr>
          <tr>
            <td>BUY</td>
            <td className="withdraw">-R$5.000</td>
            <td>SHOP</td>
            <td>20/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

import {
  TData,
  THeader,
  TRow,
  Transactstory,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactstory>
      <thead>
        <tr>
          <THeader>Type</THeader>
          <THeader>Amount</THeader>
          <THeader>Currency</THeader>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TRow key={id}>
            <TData>{type}</TData>
            <TData>{amount}</TData>
            <TData>{currency}</TData>
          </TRow>
        ))}
      </tbody>
    </Transactstory>
  );
};

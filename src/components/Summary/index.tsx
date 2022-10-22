import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SummaryCard, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard iconColor="green">
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} />
          </header>

          <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard iconColor="red">
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} />
          </header>

          <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} />
          </header>

          <strong>R$ 17.400,00</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  )
}

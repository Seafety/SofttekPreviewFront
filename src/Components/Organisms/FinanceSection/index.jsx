import React from "react";
import RevenueCostChart from "../../Molecules/RevenueCostChart";
import InfoBoxView from "../../Atoms/InfoBoxView";
import DashSection from "../../Templates/DashSectionTemplate";

const FinanceSection = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    revenue: [30000, 40000, 35000, 50000, 45000, 60000, 65000],
    cost: [20000, 25000, 30000, 35000, 40000, 45000, 50000],
  };

  // Calculando o lucro para cada mês
  const profit = data.revenue.map((rev, index) => rev - data.cost[index]);

  // Calculando o lucro acumulado e o lucro do mês atual (último mês)
  const accumulatedProfit = profit.reduce((acc, curr) => acc + curr, 0);
  const currentMonthProfit = profit[profit.length - 1];

  const infoBoxes = (
    <>
      <InfoBoxView
        title="Acumulado"
        color="#0d296e"
        info={`R$${accumulatedProfit.toLocaleString()}`}
        type="money"
      />
      <InfoBoxView
        title="Mês atual"
        color="#0d296e"
        info={`R$${currentMonthProfit.toLocaleString()}`}
        type="money"
      />
    </>
  );

  return (
    <DashSection title="Análise Financeira" title_infobox={infoBoxes}>
      <RevenueCostChart data={data} />
    </DashSection>
  );
};

export default FinanceSection;

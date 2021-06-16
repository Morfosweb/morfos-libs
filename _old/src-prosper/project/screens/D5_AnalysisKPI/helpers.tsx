import { useData } from '../../../config/useMorfos';

export const getMonthData = prodName => {
  // ---------- set Data
  const currMonth = useData('D5.currMonth');
  const selectedMonth = useData('D5.forms.iptsChanges.month');

  const currYear = useData('D5.currYear');
  const isTotal = prodName === 'Total';

  const kpi = currYear?.kpi;
  const clients = currYear?.clients;
  const activities = currYear?.activities;
  const opportunities = currYear?.opportunities;

  // const year_kpi = currYear?.year;
  const condMonth = selectedMonth ?? currMonth?.month;
  const month_kpi = condMonth;

  // ---------- set Utils
  // Filter Month
  const filterMonth = (arr, field) => {
    return arr.filter(item => {
      const seconds = item[field]?.seconds ?? 0;
      let timeDate = new Date(null);
      timeDate.setTime(seconds * 1000);
      const dateField = timeDate.getMonth();

      return Number(month_kpi) === dateField;
    }).length;
  };
  // Calc Percentual
  const calcPercent = (num1, num2) => {
    return `${!!num2 ? Math.round((num1 / num2) * 100) : '0'}%`;
  };
  // Mount Fraction
  const calcFraction = (num1, num2) =>
    `1/${!!num1.length ? Math.round(num2 / num1.length) : '0'}`;

  // #region :: Calc Missing Number
  const fechamentos = [];
  const month_meta =
    prodName === 'Total'
      ? kpi.total.valueMensal
      : kpi.products.find(item => item.productName === prodName).valueMensal;
  const calc1 = (month_meta / fechamentos.length) * 100;
  const round = Math.round(calc1).toFixed(2);
  const indicie_faltante =
    fechamentos.length === 0 ? 0 : fechamentos.length === 0 ? 0 : round - 100;
  const calcMissing = (num1, num2) =>
    !!num1 ? Math.round(Number(num1.length) * (Number(num2) / 100)) : '0';
  // #endregion ::

  // Calc Total
  const calcTotal = (num1, num2) =>
    Math.round(
      Number(num1.length) * (Number(num2) / 100) + Number(num1.length),
    );

  // ---------- set Return Data to Table
  // const monthCli = '0';
  const monthCli = filterMonth(clients, 'createdAt');

  // --- set Involved Clients
  const involvedCliFn = () => {
    let arr = [];
    // filter by month
    const filterActivities = activities.filter(item => {
      const dateActivity = item.dateActivity.toDate().getMonth();

      return Number(month_kpi) === dateActivity;
    });

    clients.map(client => {
      filterActivities.find(act => act.clientId === client.docId) &&
        arr.push(client);
    });

    return arr.length;
  };
  const involvedCli = involvedCliFn();
  const total_clients = '0';
  // const total_clients = filterMonth(clients, 'createdAt');
  const invCliPercent = calcPercent(involvedCli, total_clients);
  const invFraction = calcFraction(involvedCli, total_clients);
  const invMissing = calcMissing(involvedCli, indicie_faltante);
  const invTotal = calcTotal(involvedCli, indicie_faltante);

  // --- set Activities
  // const total_activities = '0';
  const total_activities = filterMonth(activities, 'dateActivity');
  const actvCliPercent = calcPercent(involvedCli, total_activities);
  const actvFraction = calcFraction(involvedCli, total_activities);
  const actvMissing = calcMissing(total_activities, indicie_faltante);
  const actvTotal = calcTotal(total_activities, indicie_faltante);

  // --- set Opportunities
  // set cond All Opportunities or Filter by ProdName
  const filtProdName1 = opportunities.filter(
    item => item.opportunity_products_category === prodName,
  );
  const condOppPar1 = isTotal ? opportunities : filtProdName1;
  // const total_opportunities = filterMonth(condOppPar1, 'dateOpportunity');
  const total_opportunities = '0';

  const oppPercent = calcPercent(total_opportunities, total_activities);
  const oppFraction = calcFraction(total_opportunities, total_activities);
  const oppMissing = calcMissing(total_opportunities, indicie_faltante);
  const oppTotal = calcTotal(total_opportunities, indicie_faltante);

  // --- set Closure
  const total_fechamentos = filterMonth(fechamentos, 'dateEndOpportunity');
  // const total_fechamentos = '0';
  const closePercent = calcPercent(total_fechamentos, total_opportunities);
  const closeFraction = calcFraction(total_fechamentos, total_opportunities);
  const closeMissing = calcMissing(total_fechamentos, indicie_faltante);
  const closeTotal = calcTotal(total_fechamentos, indicie_faltante);

  return {
    monthCli,
    involvedCli,
    invCliPercent,
    invFraction,
    invMissing,
    invTotal,

    total_activities,
    actvCliPercent,
    actvFraction,
    actvMissing,
    actvTotal,

    total_opportunities,
    oppPercent,
    oppFraction,
    oppMissing,
    oppTotal,

    total_fechamentos,
    closePercent,
    closeFraction,
    closeMissing,
    closeTotal,

    month_meta,
    month_meta_perc: `${
      Number(month_meta) === 0
        ? 0
        : Math.round(
            Number(
              (Number(fechamentos.length) / Number(month_meta)) * 100,
            ).toFixed(2),
          )
    }%`,
    num_miss: Number(month_meta) - Number(fechamentos.length),
    num_miss_perc: `${
      Number(month_meta) === 0
        ? 0
        : Math.round(
            Number(
              (Number(fechamentos.length) / Number(month_meta)) * 100,
            ).toFixed(2) - 100,
          )
    }%`,
    indicie_faltante: `${indicie_faltante}%`,
  };
};

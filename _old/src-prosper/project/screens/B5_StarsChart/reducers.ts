// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B5_InitData: () => {
      // ---------- set Data
      const condList = state?.B1?.clients?.itemsInfo;
      condList && action.asyncDispatch({ type: 'B5_InitChart' });

      return state;
    },

    B5_InitChart: () => {
      // ---------- set Data
      const scContent = {};
      let clients = state?.B1?.clients?.itemsInfo;
      let opportunities = state?.B1?.opportunities?.itemsInfo;

      // let clients = tempDb?.clients;
      // let opportunities = tempDb?.opportunities;

      // ---------- set Containers
      let chartData = [];
      let chartLabels = [];
      let cidades = [];

      // ---------- set Cities
      for (const key in clients) {
        const item1 = clients[key];
        !cidades.find(item2 => item2 === item1.cidade) &&
          cidades.push(item1.cidade);
      }

      // ---------- set Clients With Oportunities
      let arrCli = Object.values(clients);
      let clientsWithOpportunities =
        arrCli && arrCli.filter(item => item.opportunities > 0);

      // ---------- set Mount ChartData
      let arrOpports = Object.values(opportunities);
      clientsWithOpportunities &&
        opportunities &&
        cidades.map(async cidade => {
          let _total = [];
          clientsWithOpportunities
            .filter(client => client.cidade === cidade)
            .map(client =>
              arrOpports
                .filter(
                  opp => opp.opportunity_deal !== true || opp.status === '3',
                )
                .filter(opp => opp.clientId === client.docId)
                .map(opp => {
                  _total.push(Number(opp.amount_opportunity));
                }),
            );

          const dataNum =
            _total && _total.reduce((prev, next) => Number(prev + next), 0);

          return chartData.push({
            y: dataNum,
            x: cidade,
          });
        });

      return {
        ...state,
        B5: {
          ...state.B5,
          scContent,
          chartData,
        },
      };
    },
  };

  return {
    ...inits,
  };
};

// ---------- set Exports
export default reducers;

// ----------- import Packs
import { ReactElement } from 'react';

// ----------- import Internals
import { FlatList } from 'react-native';
import { useData } from '.';

type Props = {
  data: string;
  callBackFn: (itemId: string, noItem: boolean) => ReactElement;
  virtualized?: boolean;
};

/**
 * Map Ids and pass them to children components

        'Example to Copy':
        const listCBFn = (itemId: string, noItem: boolean) => {
          const noItemComp = <NoItemView />;
          const infoData = { itemsInfo: 'X0.itemsInfo', itemId };
          const itemComp = <ItemComp key={itemId} infoData={infoData} />;
          return noItem ? noItemComp : itemComp;
        };
        return <UseList data={'X0.itemsList'} callBackFn={listCBFn} />
 */

// ----------- set Default Component
const NoName = ({ data, callBackFn, virtualized = true }: Props): any => {
  const dataToMap = useData(data);
  const condArr = Array.isArray(dataToMap) && dataToMap;
  const LEIA =
    'Envie um array de strings de ids pro UseList! Você pode usar o INIT DATA pra preparar esse array!';
  if (!condArr) {
    throw new Error('Não é ARRAY!' + LEIA);
  }
  const isEmpty = condArr.length === 0;
  const condItemStr = !isEmpty && typeof condArr[0] !== 'string';

  if (condItemStr) {
    throw new Error('Não é um ARRAY com STRINGS!' + LEIA);
  }

  if (isEmpty) {
    return callBackFn('', true);
  }

  const noVirtualizedList = () => condArr.map(item => callBackFn(item, false));
  const virtualizedList = () => (
    <FlatList
      keyExtractor={item => item}
      data={dataToMap}
      renderItem={({ item }) => callBackFn(item, false)}
    />
  );

  const condReturn = virtualized ? virtualizedList() : noVirtualizedList();

  return condReturn;
};

export default NoName;

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

<UseList data={'D1.productList'}>
  {(itemId, noItem) =>
    noItem ? <NoItemView /> : <ProdItem itemId={itemId} />
  }
</UseList>

*/

// ---------------
// #endregion
// ***************************************

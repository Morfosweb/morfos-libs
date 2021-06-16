// ----------- import Packs
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useData, UseIcoMoon, useRouter } from '../../../config/useMorfos';
import useStl from '../../../config/stylesOld';

export default props => {
  // ----------- set Props
  const { toggleMenu } = props;

  // ----------- set Pemission Conditions
  const userPermissions = useData('baseDomains.selectedDomain.userPermissions');
  const { cond1, cond3, cond4 } = userPermissions;

  // ----------- set Items and Pemissions
  const itensArr = [
    { icon: 'user', label: 'Meu Perfil', goTo: 'profile' },
    cond4 && { icon: 'calendar', label: 'Relatórios', goTo: 'reports' },
    cond3 && { icon: 'alert', label: 'Totais', goTo: 'totals' },
    // cond3 && { icon: 'book-open', label: 'Registro de Publicador', goTo: 'registers' },
    cond1 && { icon: 'edit', label: 'Publicadores', goTo: 'publishers' },
    cond1 && { icon: 'link-2', label: 'Permissões', goTo: 'permissions' },
    // { icon: 'power', label: 'Sair', goto: '' },
  ];
  const filteredItems = itensArr.filter(item => item !== false);

  // ----------- set Return
  return (
    <View style={stlBG0}>
      <TouchableOpacity style={stlBG1} onPress={toggleMenu} />

      <View style={stlBODY1}>
        <TouchableOpacity style={stlBODY1a} onPress={toggleMenu}>
          <UseIcoMoon name="left" size={22} color={'#fff'} />
          <Text style={stlBODY2}>Voltar</Text>
        </TouchableOpacity>

        {/* {itemsList} */}
        {filteredItems.map((item, idx) => (
          <ItemMenu key={idx} info={{ ...item, toggleMenu }} />
        ))}
      </View>
    </View>
  );
};

const ItemMenu = ({ info }) => {
  // ----------- set Hooks
  const { callRouter } = useRouter();

  const condColor = false ? '#73ef54' : '#fff';

  const clickMenu = () => {
    callRouter(info.goTo);
    info.toggleMenu();
  };

  return (
    <TouchableOpacity onPress={clickMenu} style={stlBODY2b}>
      <UseIcoMoon name={info.icon} size={22} color={condColor} />
      <Text style={[stlBODY2, { color: condColor }]}>{info.label}</Text>
    </TouchableOpacity>
  );
};

const DomainBar = ({ info }) => (
  <View style={stlDomainView}>
    <Text style={stlDomTxtType}>{info.type}</Text>
    <Text style={stlDomTxtLabel}>{info.label}</Text>
  </View>
);

/* */

/* / 

const itemFn = (item, idx) => {
  const logout = item.goTo === 'logout';
  const goTo = () => {
    if (logout) {
      setSignOut();
    } else {
      callRouter(item.goTo);
      props.toggleMenu();
    }
  };

  const condActiveMenu = item.goTo === mainRoute;
  const condColor = condActiveMenu ? '#73ef54' : '#fff';
  const infoReturn = {
    icon: item.icon,
    label: item.label,
    condActiveMenu,
    condColor,
    goTo,
  };
  return <ItemMenu key={idx} info={infoReturn} />;
};





const menuItems = () => {
  // ----------- set Hooks + Conds + Vars
  const { useDomainInfo } = useSelectors();
  const { domainPermission, domainType, domainName } = useDomainInfo();

  const myPermission = domainPermission;

  const selectRoute = info => {
    const groupRoute = routes[info].groupRoute;
    const menuPermission = groupRoute.replace('priv', '');
    const condReturn = myPermission <= menuPermission;
    return condReturn && routes[info].menuItemProps;
  };

  const selectDomainItem = info => {
    return (
      selectRoute(info) && {
        type: 'domainItem',
        ...selectRoute(info),
      }
    );
  };

  // ----------- set Menu
  const arrDomainItems = [
    {
      type: 'domainBar',
      domain: true,
      domainType: domainType,
      name: domainName,
    },
    selectDomainItem('people'),
    selectDomainItem('permissions'),
    selectDomainItem('admReport'),
    selectDomainItem('groupReport'),
  ];

  const condDomainMenu = domainPermission ? arrDomainItems : [];

  const arrMenu = [
    selectRoute('profile'),
    ...condDomainMenu,
    {
      icon: 'power',
      label: 'Sair',
      goTo: 'logout',
    },
  ];

  const filterItems = arr => arr.filter(item => item && item);
  const filteredMenu = filterItems(arrMenu);
  return filteredMenu;
};

const itemsList = menuItems().map((item, idx) => {
  const typeItems = {
    domainBar: (
      <DomainBar
        key={idx}
        info={{
          type: item.domainType === 'congregation' ? 'Congregação' : 'Grupo',
          label: item.name,
        }}
      />
    ),
    domainItem: <DomainItem key={idx}>{itemFn(item, idx)}</DomainItem>,
  };
  const selectType = typeItems[item.type];
  const condReturn = selectType ?? itemFn(item, idx);

  return condReturn;
});


 const DomainItem = ({ children }) => (
  <View
    style={{ borderLeftWidth: 1, borderLeftColor: '#444', paddingLeft: 15 }}
  >
    {children}
  </View>
);

/* */

// ***************************************
// #region :: STYLEs
// ---------------

const stlDomTxtLabel = { color: '#666', fontSize: 15, marginBottom: 15 };
const stlDomTxtType = { color: '#666', fontSize: 12, marginTop: 5 };

const stlDomainView = {
  borderLeftWidth: 4,
  borderLeftColor: '#555',
  paddingLeft: 5,
  marginTop: 15,
};

const stlBG0 = [
  {
    // position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
  },
];

const stlBG1: any = [
  {
    backgroundColor: 'rgba(00,00,00,.3)',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
];

const stlBODY1 = [
  useStl.bgSecondary,
  { width: 280, height: '100%', padding: 20 },
];
const stlBODY1a: any = [{ flexDirection: 'row', marginBottom: 25 }];
const stlBODY2 = [useStl.txtTitleCard, { color: '#fff', marginLeft: 10 }];
const stlBODY2b: any = [
  useStl.txtBase,
  { margin: 15, color: '#fff', flexDirection: 'row' },
];

// ---------------
// #endregion
// ***************************************

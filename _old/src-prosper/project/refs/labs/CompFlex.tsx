// ---------- import Packs
import React from 'react';

// let UseMorfos;
const project = () => (
  <UseMorfos info={projectInfo}>
    {COMP => (
      <>
        <COMP.A1_Signin>
          <COMP.A1_Logo />
          <COMP.A1_Btn1 />
        </COMP.A1_Signin>
        <COMP.Publics>
          <COMP.A1_Signin />
          <COMP.A2_Terms />
        </COMP.Publics>

        <COMP.Start>
          <COMP.A3_OnBoarding />
        </COMP.Start>
        {/*  */}
        {/*  /}

        <COMP.Profiles>
          <COMP.B1_User />
          <COMP.B2_Product />
          <COMP.B2_Category />
        </COMP.Profiles>

        <COMP.Lists>
          <COMP.C1_Products />
          <COMP.C2_Categories />
        </COMP.Lists>

        {/*  */}
      </>
    )}
  </UseMorfos>
);

const projectInfo = {
  // Publics(){},

  groups: {
    Publics: {
      navUp: true,
      // callFunc: () => console.log('----- >>>, teste Public'),
    },
    Start: '',
    Profiles: '',
    Lists: '',
  },

  screens: {
    // Publics: "",
    A1_Signin: {
      path: '/signin',
      children: {
        A1_Logo: {
          children: {
            A1_Teste: '',
          },
        },
        A1_Btn1: '',
      },
    },
    A2_Terms: '',
    A3_OnBoarding: '',
  },

  prjData: {
    name: '',
    firebaseConfig: '',
    styles: {
      primaryColor: '',
      secondaryColor: '',
      terciaryColor: '',
    },
  },
};

// console.log('key',key);
function UseMorfos(props) {
  const { info, children } = props;
  const { groups, screens } = info;

  const COMPS = {
    ...loopGroups(groups),
    ...loopScreens(screens),
  };

  const condReturn = Router(children(COMPS));

  return condReturn;
}

// Colocar nos utils
const loopObjs = (objToLoop, callbackfn) => {
  let newObj = {};

  for (const key in objToLoop) {
    const item = objToLoop[key];
    const newItem = callbackfn(item, key);
    newObj = { ...newObj, ...newItem };
  }

  return newObj;
};

const loopGroups = groups => {
  const CompFn = ({ children, info }) => {
    const { navUp } = info.itemData;

    const CompNavUp = () => <div>NavUp</div>;
    const condNavUp = navUp && <CompNavUp />;

    return (
      <div>
        {condNavUp}

        <div>{`Oi ${info.key}, beleza?`}</div>
        <div style={{ marginLeft: 10 }}>{children}</div>
      </div>
    );
  };
  // ---------- set loopComps
  const loopComps = objToLoop => {
    return loopObjs(objToLoop, (itemData, key) => {
      const { callFunc } = itemData;

      return {
        [key]: props => {
          callFunc && callFunc();
          const infoReturn = { itemData, key };

          return <CompFn {...props} info={infoReturn} />;
        },
      };
    });
  };

  // ---------- set Return
  return loopComps(groups);
};

const loopScreens = screens => {
  const CompFn = ({ children, info }) => {
    // const MORECOMPS = loopScreens(info.itemData.children);

    return (
      <div>
        <div>{`Oi filho ${info.key}, beleza 2?`}</div>
        <div style={{ marginLeft: 10 }}>{children}</div>
      </div>
    );
  };

  let newObj = {};
  const loopComps = objToLoop => {
    return loopObjs(objToLoop, (itemData, key) => {
      const { callFunc, children } = itemData;

      const newItem = {
        [key]: props => {
          callFunc && callFunc();
          const infoReturn = { itemData, key };

          return <CompFn {...props} info={infoReturn} />;
        },
      };

      newObj = { ...newObj, ...newItem };

      if (children) {
        loopComps(children);
      }
      return newObj;
    });
  };

  return loopComps(screens);
};

const Router = childrenComps => {
  const childrenProps = childrenComps.props.children;
  const first = React.Children.map(
    childrenProps,
    (child1, idx1) => idx1 === 0 && child1,
  );
  return first;
};

export default project;

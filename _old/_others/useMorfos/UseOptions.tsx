// import Packages

import { useState } from 'react';
import * as RN from 'react-native';
// import Internals
import { UseIcoMoon } from '.';

export default ({ label, mapValues, color, key, style }) => {
  const [sttSelected, setSelected] = useState(false);

  const inputChange = info => {
    setSelected(info);
    mapValues(info);
  };

  return (
    <RN.TouchableOpacity
      key={key}
      style={style.stl01}
      onPress={() => inputChange(!sttSelected)}
    >
      {sttSelected ? (
        <UseIcoMoon name="radio-act" size={18} color={color} />
      ) : (
        <UseIcoMoon name="radio" size={18} color="#666" />
      )}

      <RN.Text style={style.stl02}>{label}</RN.Text>
    </RN.TouchableOpacity>
  );
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*
    // import Internals
    import { UseOptions } from '../useMorfos';

    ------

    <UseOptions
    label={item.name}
    style={stlCheck2}
    // mapValues={item.setOnChange}
    color={item.color}
    />
*/

// ---------------
// #endregion
// ***************************************

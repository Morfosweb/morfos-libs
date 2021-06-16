// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// ----------- import Internals
import { UseIcoMoon } from '../../../config/useMorfos';
import useStl from '../../../config/stylesOld';

// ----------- set Default
export default ({ info }) => {
  // ----------- set Props Params
  const { userData, btnSignOut, domainsArr, condDomain } = info;

  const domainsNames =
    condDomain &&
    domainsArr.map((item, idx) => (
      <Text style={stlBODY2d} key={idx}>
        Congregação {item.domainName}
      </Text>
    ));

  // ----------- set Return
  return (
    <View style={stlBODY1f}>
      <View style={stlBODY1a}>
        <View style={stlBODY1b}>
          <Image source={userData.image} style={stlBODY1c} />
          <Text style={stlBODY2}>{userData.userName}</Text>
          <Text style={stlBODY2b}>{userData.userEmail}</Text>
        </View>

        <View style={stlBODY1d}>
          <TouchableOpacity style={stlBODY3} onPress={btnSignOut}>
            <Text style={stlBODY2c}>SAIR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={stlBODY1e}>
        <UseIcoMoon name="worker" size={70} color="#800070" />

        {condDomain && (
          <View style={{ width: 250, alignItems: 'center' }}>
            <Text style={{ marginTop: 20 }}>
              {'Seu e-mail tem acesso ao Domínio:'}
            </Text>
            {domainsNames}
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
              {`Acesse suas opções no menu acima.`}
            </Text>
          </View>
        )}

        {!condDomain && (
          <Text
            style={[stlBODY2d, { width: 250, textAlign: 'center', margin: 15 }]}
          >
            {
              'Seu e-mail ainda não foi registrado em nenhum domínio de congregação ou grupo. Peça para um administrador incluir o seu e-mail acima em um domínio para você ter acesso a mais opções.'
            }
          </Text>
        )}
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1a = [useStl.card, useStl.cardProfile];
const stlBODY1b = [useStl.flexCenter];
const stlBODY1c = [useStl.profileImg];
const stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
const stlBODY1e = [useStl.card, useStl.flexCenter, { paddingBottom: 0 }];
const stlBODY1f = [useStl.pad20];
// const stlBODY1g = [useStl.thumbnail, useStl.mgB20];
const stlBODY2 = [useStl.txtTitleCard];
const stlBODY2b = [useStl.mgB20, useStl.txtBase, useStl.txtCenter];
const stlBODY2c = [useStl.txtPrimaryInverse];
const stlBODY2d = [stlBODY2b, { marginTop: 20 }];
const stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import { useStl, UseIcoMoon, useRouter } from '../../../config/useMorfos';

const Cp01 = 'logo';

export default () => {
  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Routes
  const btns = {
    home: () => callRouter('home'),
    search: () => callRouter('searchList'),
    star: () => dispatch({ type: 'comps_setFilterList', value: 'stars' }),
    concluded: () => callRouter('soldList'),
  };

  return (
    <View style={stlView01}>
      <TouchableOpacity onPress={btns.home}>
        <View style={stlView02}>
          <UseIcoMoon name="home" size={22} color={cond01} />
          <Text style={[stlTxt01, cond02]}>Início</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={btns.search}>
        <View style={stlView03}>
          <UseIcoMoon name="search" size={22} color={cond03} />
          <Text style={[stlTxt02, cond04]}>Procurar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={btns.star}>
        <View style={stlView04}>
          <UseIcoMoon name="star" size={22} color={cond05} />
          <Text style={[stlTxt03, cond06]}>Estrela</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={btns.concluded}>
        <View style={stlView05}>
          <UseIcoMoon name="thumbs-up1" size={22} color={cond07} />
          <Text style={[stlTxt04, cond08]}>Concluídos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// #region :: STYLEs *********

const stlView01 = [useStl.tabFooter];

// HOME
const stlView02 = [useStl.iconCenter];
const stlTxt01 = [useStl.tx12];

// SEARCH
const stlView03 = stlView02;
const stlTxt02 = stlTxt01;

// STARS
const stlView04 = stlView02;
const stlTxt03 = stlTxt01;

// SOLDS
const stlView05 = stlView02;
const stlTxt04 = stlTxt01;

const active = { color: '#337b9a' };

const cond01 = Cp01 && Cp01 === 'logo' ? '#007fb7' : '#222';
const cond02 =
  Cp01 && Cp01 === 'logo' ? { color: '#007fb7' } : { color: '#222' };

const cond03 = Cp01 && Cp01 === 'search' ? '#007fb7' : '#222';
const cond04 =
  Cp01 && Cp01 === 'search' ? { color: '#007fb7' } : { color: '#222' };

const cond05 = Cp01 && Cp01 === 'Estrela' ? '#007fb7' : '#222';
const cond06 =
  Cp01 && Cp01 === 'Estrela' ? { color: '#007fb7' } : { color: '#222' };

const cond07 = Cp01 && Cp01 === 'Negócios Fechados' ? '#007fb7' : '#222';
const cond08 =
  Cp01 && Cp01 === 'Negócios Fechados'
    ? { color: '#007fb7' }
    : { color: '#222' };

// #endregion

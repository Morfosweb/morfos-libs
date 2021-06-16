import { StyleSheet } from 'react-native';
import { condWidth, condHeight } from './condPacks/dimensions';

var width = condWidth;
var height = condHeight;

// ***************************************
// #region :: COLORs
// ---------------

export const primaryColor = '#50A106';
const secondaryColor = '#000';
const tertiaryColor = '#dc0349'; //alert color and msg error
const inverseColor = '#fff';
const lightGray = '#f6f6f6';
const lineGray = '#ebebeb';
const dotGray = '#ccc';
const mediumGray = '#999';
// const darkGray = '#333';
const black = '#000';

// Fill Colors ----
const bgPrimary = { backgroundColor: primaryColor };
const bgSecondary = { backgroundColor: secondaryColor };
const bgTertiary = { backgroundColor: tertiaryColor };
const bgSc = { backgroundColor: '#eee' };
// const bgRed = { backgroundColor: 'red' };

// Text Colors ----
const txtPrimaryInverse = { color: inverseColor };
const txtPrimary = { color: primaryColor };
const txtColorBase = { color: mediumGray };
const txtColorTitle = { color: black };
const txtColorSubTitle = { color: black };

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: REFs
// ---------------

const sizeTxtRef = 20;
const sizeBtnRef = 50;
const heightBarRef = 60;
const heightShortBar = { height: heightBarRef };
const heightLongBar = { height: heightBarRef * 2 };
const fullWidth = width;
const fullHeight = height;

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: UTILs
// ---------------

const posRelative = { position: 'relative' };
const pad10 = { padding: 10 };
const pad20 = { padding: 20 };
const padH20 = { paddingHorizontal: 20 };
const noMg = { margin: 0 };
const mgB20 = { marginBottom: 20 };
const mgL5 = { marginLeft: 5 };

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: TEXT + FONTS
// ---------------

const txtCenter = { textAlign: 'center' };
const txtSmall = { fontSize: sizeTxtRef - 8, ...txtColorBase };
const txtBase = { fontSize: sizeTxtRef - 6, ...txtColorBase };

const txtSubTitleCard = {
  fontSize: sizeTxtRef - 6,
  ...txtColorSubTitle,
};

const txtTitleCard = {
  fontSize: sizeTxtRef - 3,
  ...txtColorTitle,
};

const txtTitleProfile = {
  fontSize: sizeTxtRef - 4,
  fontWeight: 'bold',
  ...txtPrimaryInverse,
};

const txtTitleNav = {
  ...txtPrimaryInverse,
  fontSize: sizeTxtRef - 2,
};

const txtTitleScreen = {
  fontSize: sizeTxtRef + 2,
};

const msgError = {
  marginBottom: 20,
  fontSize: sizeTxtRef - 6,
  color: tertiaryColor,
  textAlign: 'center',
};

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: FLEXBOX
// ---------------

const flexWrap = { flexWrap: 'wrap' };
const flex1 = { flex: 1 };
const flex2 = { flex: 2 };
const flex3 = { flex: 3 };
const flex4 = { flex: 4 };
const flex5 = { flex: 5 };
const flex6 = { flex: 6 };

const flexRow = {
  flexDirection: 'row',
  alignItems: 'center',
};

const flexTopCenter = {
  alignItems: 'center',
};

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center',
};

const flexBetween = {
  alignItems: 'center',
  justifyContent: 'space-between',
};

const flexStart = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const flexEnd = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: STYLES + FX
// ---------------

const shadowBar = {
  shadowColor: '#000',
  shadowOffset: {
    width: -10,
    height: 0,
  },
  shadowOpacity: 0.1,
  shadowRadius: 20,

  elevation: 5,
};

const shadowLess = {
  // web shadow
  shadowColor: black,
  shadowOpacity: 0.1,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 1 },
  // android shadow
  elevation: 4,
};

const shadowMore = {
  // web shadow
  shadowColor: black,
  shadowOpacity: 0.4,
  shadowRadius: 14,
  shadowOffset: { width: 3, height: 6 },
  // android shadow
  elevation: 14,
};

const shadowRgtBar = {
  // web shadow
  shadowColor: black,
  shadowOpacity: 0.25,
  shadowRadius: 60,
  shadowOffset: { width: 0, height: 0 },
  // android shadow
  elevation: 14,
};

const radiusLess = {
  borderRadius: 10,
};

const radiusMore = {
  borderRadius: 20,
};

const radiusTotal = {
  borderRadius: 100,
};

const btn = {
  ...shadowLess,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
};

const topLine = {
  borderTopColor: lineGray,
  borderTopWidth: 1,
};

const bottomLine = {
  borderBottomColor: lineGray,
  borderBottomWidth: 1,
};

const dot = {
  width: 8,
  height: 8,
  ...radiusTotal,
  marginRight: 5,
};

const active = {
  ...txtPrimaryInverse,
  ...bgPrimary,
};

const noact = {
  color: 'white',
  backgroundColor: 'white',
};

const noactGr = {
  color: lineGray,
  backgroundColor: dotGray,
};

const sideMenu = {
  width: 260,
  height: '100%',
  backgroundColor: 'white',
  // position: 'fixed',
  zIndex: 2,
  top: 0,
};

const listWidth = {
  width: '100%',
};

// ---------------
//  #endregion
// ***************************************

const Styles = {
  // ***************************************
  // #region :: OBJs
  // ---------------

  dot,
  btn,
  mgL5,
  pad10,
  pad20,
  padH20,
  noMg,
  mgB20,
  active,
  noact,
  noactGr,
  posRelative,
  fullWidth,
  fullHeight,
  listWidth,

  txtBase,
  txtSmall,
  msgError,
  txtCenter,
  txtPrimary,
  txtTitleNav,
  txtTitleCard,
  txtTitleScreen,
  txtTitleProfile,
  txtPrimaryInverse,
  txtSubTitleCard,

  flex1,
  flex2,
  flex3,
  flex4,
  flex5,
  flex6,
  flexRow,
  flexWrap,
  flexStart,
  flexTopCenter,
  flexCenter,
  flexBetween,
  flexEnd,

  topLine,
  radiusMore,
  radiusLess,
  radiusTotal,
  bottomLine,
  shadowLess,
  shadowMore,

  bgSc,
  bgPrimary,
  bgSecondary,
  bgTertiary,
  shadowBar,
  shadowRgtBar,

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: MAIN
  // ---------------

  leftBox: {
    ...flexCenter,
    width: heightBarRef,
    height: heightBarRef,
  },

  centerBox: {
    ...flexCenter,
    flex: 1,
    height: heightBarRef,
  },

  rightBox: {
    ...flexCenter,
    width: heightBarRef,
    height: heightBarRef,
  },

  masterContent: {
    flexDirection: 'row',
    height: '100%',
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: NAVs / SIDEBARs
  // ---------------

  navbarView: {
    zIndex: 5,
    width: '100%',
    // ...bgPrimary,
    ...heightShortBar,
    ...flexRow,
    ...flexBetween,
    ...shadowBar,
  },

  shortBar: {
    ...shadowMore,
    ...bgPrimary,
    width: '100%',
    // ...heightShortBar
  },

  longBar: {
    // ...bgPrimary,
    ...heightLongBar,
    ...shadowBar,
  },

  searchBar: {
    backgroundColor: lightGray,
    height: 60,
    ...flexRow,
    ...flexBetween,
    // ...shadowMore
  },

  titlePageLeft: {
    width: '100%',
    ...txtTitleScreen,
    textAlign: 'left',
    marginLeft: 10,
  },

  brandBox: {
    flex: 3,
    ...flexCenter,
  },

  logoBar: {
    width: 160,
    height: 30,
  },

  leftBar: {
    width: sideMenu.width,
  },

  rightBar: {
    ...sideMenu,
    width: 300,
    right: 0,
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: CARDS
  // ---------------

  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusMore,
    ...shadowLess,
    ...pad20,
  },

  cardProfile: {
    paddingVertical: 0,
    marginTop: -heightBarRef * 1.5,
  },

  cardLongBar: {
    marginTop: -heightBarRef * 2,
  },

  cardMask: {
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    ...radiusLess,
    ...shadowLess,
  },

  cardMaskPf: {
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    ...radiusMore,
    ...shadowLess,
  },

  cardList: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusLess,
    ...shadowLess,
    padding: 10,
  },

  cardItemList: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusLess,
    ...shadowLess,
    padding: 10,
    ...listWidth,
  },

  dialogueBox: {
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    ...shadowMore,
  },

  colView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...flex1,
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: IMAGES
  // ---------------

  logo: {
    width: 280,
    height: 50,
    marginBottom: 10,
  },

  imgFull: {
    width: '100%',
    height: '100%',
  },

  profileImg: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: -40,
    // borderRadius: '100%',
    borderRadius: 100,
    borderWidth: 5,
    // borderColor: primaryColor,
    borderColor: 'rgba(00,00,00,.5)',
  },

  thumbnail: {
    width: 65,
    height: 45,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: lightGray,
    borderRadius: 8,
    ...shadowLess,
  },

  thumbnailCateg: {
    backgroundColor: lightGray,
    width: '100%',
    height: 65,
    ...radiusLess,
  },

  imgProfile: {
    width: '100%',
    height: 220,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: BTNs
  // ---------------

  btnPrimary: {
    ...bgPrimary,
    ...btn,
  },

  txtInverseColor: {
    color: inverseColor,
    ...txtBase,
  },

  bgInverseColor: {
    backgroundColor: inverseColor,
  },

  // BTN SECONDARY
  btnSecondary: {
    backgroundColor: secondaryColor,
    ...btn,
  },

  txtBtnSecondary: {
    ...txtBase,
    ...btn,
  },

  // BTN TERTIARY
  btnTertiary: {
    backgroundColor: tertiaryColor,
    ...btn,
  },

  txtBtnTertiary: {
    ...txtBase,
    ...btn,
  },

  // FAB BUTTON
  btnFab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: primaryColor,
    width: 45,
    height: 45,
    ...flexCenter,
    ...radiusTotal,
    ...shadowMore,
  },

  btnFabSmall: {
    backgroundColor: primaryColor,
    width: 30,
    height: 30,
    ...flexCenter,
    ...radiusTotal,
    ...shadowMore,
  },

  txtFab: { fontSize: 26, color: '#fff' },
  // txtFab: {fontSize: 26, color: '#fff', height: 3, lineHeight: 0}, //web

  // BTN SIZES
  btnXSmall: {
    width: sizeBtnRef / 4,
    height: sizeBtnRef / 9,
  },

  btnSmall: {
    paddingHorizontal: sizeBtnRef / 3,
    paddingVertical: sizeBtnRef / 7,
  },

  btnMedium: {
    paddingHorizontal: sizeBtnRef / 2,
    paddingVertical: sizeBtnRef / 6,
    // paddingHorizontal: sizeBtnRef / 12,
  },
  btnTxtMedium: {
    fontSize: sizeTxtRef - 2,
    // paddingHorizontal: sizeBtnRef / 12,
  },

  btnLarge: {
    paddingHorizontal: sizeBtnRef / 1.4,
    paddingVertical: sizeBtnRef / 4.4,
  },

  btnXLarge: {
    minWidth: sizeBtnRef / 1.2,
    height: sizeBtnRef / 4,
  },

  txtBtnSmall: { fontSize: sizeTxtRef - 9 },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: INPUTs
  // ---------------

  input: {
    borderWidth: 2,
    ...radiusLess,
    borderColor: lineGray,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  textArea: {
    textAlignVertical: 'top',
  },

  picker: {
    borderWidth: 2,
    margin: 0,
    padding: 0,
    ...radiusLess,
    borderColor: lineGray,
  },

  pickerLine: {
    borderBottomWidth: 2,
    margin: 0,
    padding: 0,
    borderColor: lineGray,
  },

  line: {
    backgroundColor: lineGray,
    marginLeft: 5,
    height: 1,
    flex: 1,
  },

  itemList: {
    ...flexRow,
    ...flexBetween,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: lineGray,
    borderBottomWidth: 1,
  },

  itemAccordion: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: lineGray,
    borderBottomWidth: 1,
  },

  badge: {
    borderWidth: 1,
    ...radiusLess,
    borderColor: '#ccc',
    backgroundColor: lightGray,
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: FOOTER
  // ---------------

  tabFooter: {
    ...flexRow,
    ...flexBetween,
    backgroundColor: lightGray,
    paddingHorizontal: 20,
    height: 60,
  },

  iconCenter: {
    ...flexCenter,
    flex: 1,
  },

  dotNotice: {
    ...bgPrimary,
    borderColor: lightGray,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 2,
    ...flexCenter,
    color: '#fff',
    fontSize: 11,
    ...txtCenter,
    height: 19,
    zIndex: 10,
    right: -5,
    width: 20,
    top: 5,
  },

  // ---------------
  //  #endregion
  // ***************************************
};

export default Styles;

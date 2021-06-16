import useStl from '../styles';
import useStl2 from '../styles2';

const fns = {
  pad: (arg1, arg2, arg3, arg4) => {
    if (arg2 === undefined && arg3 === undefined && arg4 === undefined) {
      return {
        paddingTop: arg1,
        paddingRight: arg1,
        paddingBottom: arg1,
        paddingLeft: arg1,
      };
    }

    if (arg3 === undefined && arg4 === undefined) {
      return {
        paddingTop: arg1,
        paddingRight: arg2,
        paddingBottom: arg1,
        paddingLeft: arg2,
      };
    }

    return {
      paddingTop: arg1,
      paddingRight: arg2,
      paddingBottom: arg3,
      paddingLeft: arg4,
    };
  },

  marg: (arg1, arg2, arg3, arg4) => {
    if (arg2 === undefined && arg3 === undefined && arg4 === undefined) {
      return {
        marginTop: arg1,
        marginRight: arg1,
        marginBottom: arg1,
        marginLeft: arg1,
      };
    }

    if (arg3 === undefined && arg4 === undefined) {
      return {
        marginTop: arg1,
        marginRight: arg2,
        marginBottom: arg1,
        marginLeft: arg2,
      };
    }

    return {
      marginTop: arg1,
      marginRight: arg2,
      marginBottom: arg3,
      marginLeft: arg4,
    };
  },

  border: (arg1, arg2, arg3, arg4, arg5) => {
    const condColor = info => info ?? '#000';

    const condA1 =
      arg3 === undefined && arg4 === undefined && arg5 === undefined;
    const condA2 = typeof arg2 === 'string' || arg2 === undefined;
    const condA3 = condA1 && condA2;

    const condB = arg4 === undefined && arg5 === undefined;

    if (condA3) {
      return {
        borderTopWidth: arg1,
        borderRightWidth: arg1,
        borderBottomWidth: arg1,
        borderLeftWidth: arg1,

        borderTopColor: condColor(arg2),
        borderRightColor: condColor(arg2),
        borderBottomColor: condColor(arg2),
        borderLeftColor: condColor(arg2),
      };
    }

    if (condB) {
      return {
        borderTopWidth: arg1,
        borderRightWidth: arg2,
        borderBottomWidth: arg1,
        borderLeftWidth: arg2,

        borderTopColor: condColor(arg3),
        borderRightColor: condColor(arg3),
        borderBottomColor: condColor(arg3),
        borderLeftColor: condColor(arg3),
      };
    }

    return {
      borderTopWidth: arg1,
      borderRightWidth: arg2,
      borderBottomWidth: arg3,
      borderLeftWidth: arg4,

      borderTopColor: condColor(arg5),
      borderRightColor: condColor(arg5),
      borderBottomColor: condColor(arg5),
      borderLeftColor: condColor(arg5),
    };
  },
};

const useStlExport = {
  ...useStl2,
  ...useStl,
  ...fns,
};

export default useStlExport;

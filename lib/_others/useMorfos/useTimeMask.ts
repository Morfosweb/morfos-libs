export default function useTimeStamp() {
  const timeMask = (info, format) => {
    const refDate = info.seconds ? new Date(info.seconds * 1000) : info;
    const dateOpts = {
      dd: ('0' + refDate.getDate()).slice(-2),
      MM: ('0' + (refDate.getMonth() + 1)).slice(-2),
      yyyy: refDate.getFullYear(),
      hh: ('0' + refDate.getHours()).slice(-2),
      mm: ('0' + refDate.getMinutes()).slice(-2),
    };
    const d = ('0' + refDate.getDate()).slice(-2);
    const M = ('0' + (refDate.getMonth() + 1)).slice(-2);
    const aaaa = refDate.getFullYear();
    let dateFormat: any = [];
    let dateLayout1;
    if (format) {
      let arrFormat = format.split(format.includes(':') ? ':' : '-');
      arrFormat.map(_format => {
        dateFormat.push(dateOpts[_format]);
        return '';
      });
      dateLayout1 = dateFormat.join(format.includes(':') ? ':' : '/');
      return dateLayout1;
    } else {
      dateLayout1 = `${d}/${M}/${aaaa}`;
      return dateLayout1;
    }
  };

  const weekMask = _date => {
    const refDate = _date.seconds ? new Date(_date.seconds * 1000) : _date;
    return refDate.getDay();
  };

  return { timeMask, weekMask };
}

<script type="text/javascript" src="https://www.codewars.com/kata/rectangle-into-squares/train/javascript">Link to Algorithm</script>

function sqInRect(lng, wdth) {
  let result = [];

  if (lng === wdth) {
    return null;
  } else if (lng > wdth) {
    return checkArea(lng, wdth);
  } else if (lng < wdth) {
    return checkArea(wdth, lng);
  }

  function checkArea(l, w) {
    result.push(w);

    if ((l - w) % w === 0 && l === w) {
      return;
    } else {
      l -= w;
      if (l < w) {
      checkArea(w, l);
      } else {
      checkArea(l, w);
      }
    }

    return result;
  }
}

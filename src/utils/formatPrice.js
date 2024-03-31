export function formatPrice(x) {
  if (x !== "") {
    try {
      const to_int = parseFloat(x);
      return to_int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } catch (error) {
      return "";
    }
  }
  return "";
}

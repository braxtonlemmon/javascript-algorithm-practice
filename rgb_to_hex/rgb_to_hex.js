// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  const toHex = n => {
    let val = n;
    if (n > 255) {
      val = 255;
    } else if (n < 0) {
      val = 0;
    }
    const hex = (val).toString(16);
    return hex.length === 1 ? `0${hex}`: hex;
  }
 
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

module.exports = rgb;
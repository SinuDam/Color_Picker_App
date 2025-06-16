const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const rgbCode = document.getElementById('rgbCode');

colorPicker.addEventListener('input', () => {
  const hex = colorPicker.value;
  const rgb = hexToRgb(hex);

  colorBox.style.backgroundColor = hex;
  hexCode.textContent = hex;
  rgbCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function copyCode(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  });
}

export default function threeDigitTag(tag) {
  if (tag < 10) {
    return `#00${tag}`;
  } else if (tag < 100) {
    return `#0${tag}`;
  } else {
    return `#${tag}`;
  }
}

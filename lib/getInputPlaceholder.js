export default function getInputPlaceholder(word) {
  word = word.replace("-", " ");
  return word[0].toUpperCase() + word.substring(1);
}

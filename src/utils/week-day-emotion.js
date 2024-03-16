export default function weekDayEmotion(name) {
  if (["Friday", "Saturday"].includes(name)) return "!";
  else if (name === "Monday") return ". :/";
  else return ".";
}

const weekDayEmotion = (name) => {
  if (["Friday", "Saturday"].includes(name)) return "!";
  else if (name === "Monday") return ". :/";
  else return ".";
};

export default weekDayEmotion;

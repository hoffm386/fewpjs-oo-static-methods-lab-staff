class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  // "removes all non-alphanumeric characters except for dashes, single quotes and spaces"
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, "");
  }

  static titleize(string) {
    const words = string.split(" ");
    const title_words = words.map( word => {
      if(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });

    return this.capitalize(title_words.join(" "));
  }
}

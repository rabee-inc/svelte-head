export let options = {
  title(title) {
    return title;
  },
  description(description) {
    return description;
  },
  keywords(keywords) {
    return keywords;
  },
  ogp(ogp) {
    return ogp;
  },
  twitter(twitter) {
    return twitter;
  },
};

export let setOptions = function(opts) {
  options = {...options, ...opts};
  return options;
};

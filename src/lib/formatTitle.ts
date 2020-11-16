const title = (title: string) => {
  let _title = title;
  _title = title.replace(title.charAt(0), title.charAt(0).toUpperCase());
  _title = _title.replace('_', ' ');

  return _title;
};

export { title };

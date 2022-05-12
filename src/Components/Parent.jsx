function Parent(props) {
  //props.name
  const welcome = (authorName) => {
    return <h1>Bonjour , {authorName}</h1>;
  };

  const writeNameManga = (nameManga) => {
    return <p> le non du manga est : {nameManga}</p>;
  };

  const WriteTypeManga = (TypeManga) => {
    return <p> le type de manga est : {TypeManga}</p>;
  };

  return (
    <div>
      {welcome(props.name)}
      {writeNameManga(props.nameManga)}
      {WriteTypeManga(props.TypeManga)}
    </div>
  );
}

export default Parent;

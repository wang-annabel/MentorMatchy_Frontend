//heading: string, body: string
interface Props {
  header: string;
  body: string;
}

function HeaderBody(props: Props) {
  return (
    <>
      <h1>{props.header}</h1>
      <p>{props.body}</p>
    </>
  );
}

export default HeaderBody;

//heading: string, body: string
interface Props {
  header: string;
  body: string;
}

function HeaderBody(props: Props) {
  return (
    <>
      <h1 className="text-center">{props.header}</h1>
      <p className="text-center">{props.body}</p>
    </>
  );
}

export default HeaderBody;

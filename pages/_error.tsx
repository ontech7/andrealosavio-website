type ErrorProps = { statusCode: string }

export default function Error(props: ErrorProps) {
  return <div>500</div>
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
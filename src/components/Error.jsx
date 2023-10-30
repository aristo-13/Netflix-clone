import { useRouteError } from "react-router-dom"

function Error() {
  const Error = useRouteError()

  return (
    <div>
      Error dey snr
    </div>
  )
}

export default Error

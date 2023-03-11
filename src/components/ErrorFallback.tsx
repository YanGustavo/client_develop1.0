

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Algo errado não esta certo: </p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Tentar Novamente</button>
    </div>
  )
}
export default ErrorFallback;
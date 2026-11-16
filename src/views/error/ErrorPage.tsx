import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main className="error-page">
      <h1 className="error-page__title">
        {isNotFound ? "Seite nicht gefunden" : "Etwas ist schiefgelaufen"}
      </h1>
      <p className="error-page__text">
        {isNotFound
          ? "Diese Adresse gibt es nicht."
          : "Bitte versuche es noch einmal."}
      </p>
      <Link className="error-page__link" to="/overview">
        Zur Übersicht
      </Link>
    </main>
  );
}

export default ErrorPage;

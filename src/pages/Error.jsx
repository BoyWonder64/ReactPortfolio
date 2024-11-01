import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main >
        <h1>An error occurred!</h1>
        <h2>Could not find this page!</h2>
      </main>
    </>
  );
}

export default ErrorPage;
